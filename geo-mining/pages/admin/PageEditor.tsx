import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase, Page } from '../../lib/supabaseClient';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Save, ArrowLeft, Eye } from 'lucide-react';

const PageEditor: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const isNew = id === 'new';

    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [content, setContent] = useState('');
    const [metaTitle, setMetaTitle] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    const [status, setStatus] = useState<'draft' | 'published'>('draft');
    const [loading, setLoading] = useState(!isNew);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (!isNew && id) {
            loadPage();
        }
    }, [id, isNew]);

    const loadPage = async () => {
        try {
            const { data, error } = await supabase
                .from('pages')
                .select('*')
                .eq('id', id)
                .single();

            if (error) throw error;

            if (data) {
                setTitle(data.title);
                setSlug(data.slug);
                setContent(data.content?.html || '');
                setMetaTitle(data.meta_title || '');
                setMetaDescription(data.meta_description || '');
                setStatus(data.status);
            }
        } catch (error) {
            console.error('Error loading page:', error);
            alert('Failed to load page');
            navigate('/admin/pages');
        } finally {
            setLoading(false);
        }
    };

    const generateSlug = (text: string) => {
        return text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
    };

    const handleTitleChange = (newTitle: string) => {
        setTitle(newTitle);
        if (isNew && !slug) {
            setSlug(generateSlug(newTitle));
        }
    };

    const handleSave = async () => {
        if (!title.trim()) {
            alert('Please enter a title');
            return;
        }

        if (!slug.trim()) {
            alert('Please enter a URL slug');
            return;
        }

        setSaving(true);

        try {
            const pageData = {
                title,
                slug,
                content: { html: content },
                meta_title: metaTitle || null,
                meta_description: metaDescription || null,
                status,
                updated_at: new Date().toISOString(),
                ...(status === 'published' && !id ? { published_at: new Date().toISOString() } : {}),
            };

            if (isNew) {
                const { data, error } = await supabase
                    .from('pages')
                    .insert([pageData])
                    .select()
                    .single();

                if (error) throw error;
                navigate(`/admin/pages/edit/${data.id}`);
            } else {
                const { error } = await supabase
                    .from('pages')
                    .update(pageData)
                    .eq('id', id);

                if (error) throw error;
            }

            alert('Page saved successfully!');
        } catch (error: any) {
            console.error('Error saving page:', error);
            alert(error.message || 'Failed to save page');
        } finally {
            setSaving(false);
        }
    };

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ['link', 'image'],
            ['clean'],
        ],
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                    <button
                        onClick={() => navigate('/admin/pages')}
                        className="p-2 hover:bg-gray-100 rounded-lg transition"
                    >
                        <ArrowLeft className="w-6 h-6 text-gray-600" />
                    </button>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">
                            {isNew ? 'Create Page' : 'Edit Page'}
                        </h1>
                        <p className="text-gray-600 mt-1">
                            {isNew ? 'Create a new page for your website' : 'Update page content and settings'}
                        </p>
                    </div>
                </div>

                <div className="flex items-center space-x-3">
                    {status === 'published' && !isNew && (
                        <a
                            href={`/${slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                        >
                            <Eye className="w-5 h-5" />
                            <span>Preview</span>
                        </a>
                    )}
                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                    >
                        <Save className="w-5 h-5" />
                        <span>{saving ? 'Saving...' : 'Save'}</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Title */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Page Title *
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => handleTitleChange(e.target.value)}
                            placeholder="Enter page title"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                        />
                    </div>

                    {/* Content Editor */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Content
                        </label>
                        <div className="prose max-w-none">
                            <ReactQuill
                                theme="snow"
                                value={content}
                                onChange={setContent}
                                modules={modules}
                                className="bg-white"
                                style={{ minHeight: '400px' }}
                            />
                        </div>
                    </div>

                    {/* SEO Settings */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">SEO Settings</h3>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Meta Title
                                </label>
                                <input
                                    type="text"
                                    value={metaTitle}
                                    onChange={(e) => setMetaTitle(e.target.value)}
                                    placeholder="Leave empty to use page title"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Meta Description
                                </label>
                                <textarea
                                    value={metaDescription}
                                    onChange={(e) => setMetaDescription(e.target.value)}
                                    placeholder="Brief description for search engines"
                                    rows={3}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <p className="text-sm text-gray-500 mt-1">
                                    {metaDescription.length}/160 characters recommended
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* URL Slug */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            URL Slug *
                        </label>
                        <input
                            type="text"
                            value={slug}
                            onChange={(e) => setSlug(generateSlug(e.target.value))}
                            placeholder="page-url-slug"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                        />
                        <p className="text-sm text-gray-500 mt-2">
                            URL: <code className="bg-gray-100 px-2 py-1 rounded">/{slug || 'page-url'}</code>
                        </p>
                    </div>

                    {/* Status */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Status
                        </label>
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value as 'draft' | 'published')}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="draft">Draft</option>
                            <option value="published">Published</option>
                        </select>
                        <p className="text-sm text-gray-500 mt-2">
                            {status === 'draft'
                                ? 'Only visible to admins'
                                : 'Publicly visible on your website'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageEditor;
