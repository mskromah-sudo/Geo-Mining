import React, { useEffect, useState } from 'react';
import { supabase, FormSubmission } from '../../lib/supabaseClient';
import { Inbox, Download, Trash2, Search } from 'lucide-react';

const FormManager: React.FC = () => {
    const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
    const [loading, setLoading] = useState(true);
    const [filterType, setFilterType] = useState('all');

    useEffect(() => {
        loadSubmissions();
    }, []);

    const loadSubmissions = async () => {
        try {
            const { data, error } = await supabase
                .from('form_submissions')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setSubmissions(data || []);
        } catch (error) {
            console.error('Error loading submissions:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Delete this submission?')) return;

        try {
            const { error } = await supabase.from('form_submissions').delete().eq('id', id);
            if (error) throw error;
            setSubmissions(submissions.filter((s) => s.id !== id));
        } catch (error) {
            console.error('Error deleting submission:', error);
            alert('Failed to delete submission');
        }
    };

    const exportCSV = () => {
        const headers = ['Type', 'Date', 'Source', 'Data'];
        const csvContent = [
            headers.join(','),
            ...submissions.map((s) =>
                [
                    s.form_type,
                    new Date(s.created_at).toLocaleDateString(),
                    s.page_source,
                    `"${JSON.stringify(s.data).replace(/"/g, '""')}"`,
                ].join(',')
            ),
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `form-submissions-${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
    };

    const filteredSubmissions = filterType === 'all'
        ? submissions
        : submissions.filter(s => s.form_type === filterType);

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
                    <h1 className="text-3xl font-bold text-gray-900">Form Submissions</h1>
                    <p className="text-gray-600 mt-1">View and manage contact form messages</p>
                </div>
                <button
                    onClick={exportCSV}
                    className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                    <Download className="w-5 h-5" />
                    <span>Export CSV</span>
                </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6 p-4">
                <div className="flex items-center space-x-4">
                    <label className="text-sm font-medium text-gray-700">Filter by Type:</label>
                    <select
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="all">All Forms</option>
                        <option value="contact">Contact Us</option>
                        <option value="career">Careers</option>
                        <option value="quote">Request Quote</option>
                    </select>
                </div>
            </div>

            {filteredSubmissions.length === 0 ? (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
                    <Inbox className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No submissions found</h3>
                    <p className="text-gray-600">Form submissions will appear here when visitors contact you.</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {filteredSubmissions.map((sub) => (
                        <div key={sub.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <div className="flex items-start justify-between">
                                <div>
                                    <div className="flex items-center space-x-3 mb-2">
                                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-bold uppercase rounded-full">
                                            {sub.form_type}
                                        </span>
                                        <span className="text-sm text-gray-500">
                                            via {sub.page_source}
                                        </span>
                                        <span className="text-sm text-gray-400">
                                            {new Date(sub.created_at).toLocaleString()}
                                        </span>
                                    </div>
                                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                        {Object.entries(sub.data).map(([key, value]) => (
                                            <div key={key} className="flex flex-col">
                                                <span className="text-sm font-medium text-gray-500 capitalize">{key.replace(/_/g, ' ')}</span>
                                                <span className="text-gray-900">{String(value)}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleDelete(sub.id)}
                                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FormManager;
