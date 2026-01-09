import React, { useEffect, useState } from 'react';
import { supabase, Category, Tag } from '../../lib/supabaseClient';
import { Plus, Trash2, Tag as TagIcon, Folder } from 'lucide-react';

const CategoryManager: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [tags, setTags] = useState<Tag[]>([]);
    const [loading, setLoading] = useState(true);

    const [newCategory, setNewCategory] = useState('');
    const [newTag, setNewTag] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [catRes, tagRes] = await Promise.all([
                supabase.from('categories').select('*').order('name'),
                supabase.from('tags').select('*').order('name'),
            ]);

            if (catRes.error) throw catRes.error;
            if (tagRes.error) throw tagRes.error;

            setCategories(catRes.data || []);
            setTags(tagRes.data || []);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddCategory = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newCategory.trim()) return;

        try {
            const slug = newCategory.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            const { data, error } = await supabase
                .from('categories')
                .insert([{ name: newCategory, slug }])
                .select()
                .single();

            if (error) throw error;
            setCategories([...categories, data]);
            setNewCategory('');
        } catch (error) {
            console.error('Error adding category:', error);
            alert('Failed to add category');
        }
    };

    const handleAddTag = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTag.trim()) return;

        try {
            const slug = newTag.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            const { data, error } = await supabase
                .from('tags')
                .insert([{ name: newTag, slug }])
                .select()
                .single();

            if (error) throw error;
            setTags([...tags, data]);
            setNewTag('');
        } catch (error) {
            console.error('Error adding tag:', error);
            alert('Failed to add tag');
        }
    };

    const handleDeleteCategory = async (id: string) => {
        if (!confirm('Delete this category?')) return;
        try {
            const { error } = await supabase.from('categories').delete().eq('id', id);
            if (error) throw error;
            setCategories(categories.filter(c => c.id !== id));
        } catch (error) {
            console.error('Error deleting category:', error);
        }
    };

    const handleDeleteTag = async (id: string) => {
        if (!confirm('Delete this tag?')) return;
        try {
            const { error } = await supabase.from('tags').delete().eq('id', id);
            if (error) throw error;
            setTags(tags.filter(t => t.id !== id));
        } catch (error) {
            console.error('Error deleting tag:', error);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Categories Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center space-x-2 mb-6">
                    <Folder className="w-5 h-5 text-blue-600" />
                    <h2 className="text-xl font-bold text-gray-900">Categories</h2>
                </div>

                <form onSubmit={handleAddCategory} className="flex gap-2 mb-6">
                    <input
                        type="text"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        placeholder="New Category Name"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        <Plus className="w-5 h-5" />
                    </button>
                </form>

                <div className="space-y-2">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg group hover:bg-blue-50 transition"
                        >
                            <span className="font-medium text-gray-700 group-hover:text-blue-700">
                                {category.name}
                            </span>
                            <button
                                onClick={() => handleDeleteCategory(category.id)}
                                className="text-gray-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                    {categories.length === 0 && (
                        <p className="text-gray-500 text-sm text-center py-4">No categories yet.</p>
                    )}
                </div>
            </div>

            {/* Tags Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center space-x-2 mb-6">
                    <TagIcon className="w-5 h-5 text-green-600" />
                    <h2 className="text-xl font-bold text-gray-900">Tags</h2>
                </div>

                <form onSubmit={handleAddTag} className="flex gap-2 mb-6">
                    <input
                        type="text"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        placeholder="New Tag Name"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                    <button
                        type="submit"
                        className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition"
                    >
                        <Plus className="w-5 h-5" />
                    </button>
                </form>

                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <div
                            key={tag.id}
                            className="flex items-center space-x-1 px-3 py-1 bg-green-50 text-green-700 rounded-full border border-green-100 group hover:border-green-300 transition"
                        >
                            <span className="text-sm font-medium">#{tag.name}</span>
                            <button
                                onClick={() => handleDeleteTag(tag.id)}
                                className="w-4 h-4 text-green-400 hover:text-red-500 ml-1"
                            >
                                ×
                            </button>
                        </div>
                    ))}
                    {tags.length === 0 && (
                        <p className="text-gray-500 text-sm text-center py-4 w-full">No tags yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CategoryManager;
