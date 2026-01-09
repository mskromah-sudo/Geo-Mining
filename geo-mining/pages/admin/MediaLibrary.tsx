import React, { useEffect, useState } from 'react';
import { supabase, Media } from '../../lib/supabaseClient';
import { Upload, Trash2, File, Image, Film, Copy } from 'lucide-react';

const MediaLibrary: React.FC = () => {
    const [media, setMedia] = useState<Media[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        loadMedia();
    }, []);

    const loadMedia = async () => {
        try {
            const { data, error } = await supabase
                .from('media')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setMedia(data || []);
        } catch (error) {
            console.error('Error loading media:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        setUploading(true);
        try {
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
            const filePath = `${fileName}`;

            // Upload to storage bucket
            const { error: uploadError } = await supabase.storage
                .from('media')
                .upload(filePath, file);

            if (uploadError) throw uploadError;

            // Get public URL using the correct method
            const { data: { publicUrl } } = supabase.storage
                .from('media')
                .getPublicUrl(filePath);

            // Save to database
            const { data: mediaData, error: dbError } = await supabase
                .from('media')
                .insert([
                    {
                        filename: file.name,
                        url: publicUrl,
                        type: file.type.startsWith('image/') ? 'image' : 'document',
                        size: file.size,
                    },
                ])
                .select()
                .single();

            if (dbError) throw dbError;

            setMedia([mediaData, ...media]);
            alert('File uploaded successfully!');
        } catch (error: any) {
            console.error('Error uploading file:', error);
            alert('Failed to upload file. Make sure you have created a storage bucket named "media" in Supabase.');
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (id: string, fileName: string) => {
        if (!confirm('Are you sure you want to delete this file?')) return;

        try {
            const { error } = await supabase.from('media').delete().eq('id', id);
            if (error) throw error;
            setMedia(media.filter((m) => m.id !== id));
        } catch (error) {
            console.error('Error deleting file:', error);
            alert('Failed to delete file');
        }
    };

    const copyToClipboard = (url: string) => {
        navigator.clipboard.writeText(url);
        alert('URL copied to clipboard!');
    };

    const formatSize = (bytes: number) => {
        if (bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Media Library</h1>
                    <p className="text-gray-600 mt-1">Manage your images and documents</p>
                </div>
                <div className="relative">
                    <input
                        type="file"
                        onChange={handleFileUpload}
                        disabled={uploading}
                        className="hidden"
                        id="file-upload"
                    />
                    <label
                        htmlFor="file-upload"
                        className={`flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition cursor-pointer ${uploading ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        <Upload className="w-5 h-5" />
                        <span>{uploading ? 'Uploading...' : 'Upload File'}</span>
                    </label>
                </div>
            </div>

            {media.length === 0 ? (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
                    <Image className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No media files yet</h3>
                    <p className="text-gray-600 mb-6">Upload images or documents to get started</p>
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {media.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition"
                        >
                            <div className="aspect-square bg-gray-100 relative items-center justify-center flex">
                                {item.type === 'image' ? (
                                    <img
                                        src={item.url}
                                        alt={item.alt_text || item.filename}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <File className="w-12 h-12 text-gray-400" />
                                )}

                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition flex items-center justify-center opacity-0 group-hover:opacity-100 space-x-2">
                                    <button
                                        onClick={() => copyToClipboard(item.url)}
                                        className="p-2 bg-white rounded-full text-gray-700 hover:text-blue-600 transition"
                                        title="Copy URL"
                                    >
                                        <Copy className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item.id, item.filename)}
                                        className="p-2 bg-white rounded-full text-gray-700 hover:text-red-600 transition"
                                        title="Delete"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                            <div className="p-3">
                                <p className="text-sm font-medium text-gray-900 truncate" title={item.filename}>
                                    {item.filename}
                                </p>
                                <p className="text-xs text-gray-500 mt-1">{formatSize(item.size)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MediaLibrary;
