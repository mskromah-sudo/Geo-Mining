import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';
import { FileText, Image, Inbox, Calendar, TrendingUp } from 'lucide-react';

interface Stats {
    totalPages: number;
    publishedPages: number;
    draftPages: number;
    totalMedia: number;
    totalSubmissions: number;
    recentSubmissions: number;
}

const AdminDashboard: React.FC = () => {
    const [stats, setStats] = useState<Stats>({
        totalPages: 0,
        publishedPages: 0,
        draftPages: 0,
        totalMedia: 0,
        totalSubmissions: 0,
        recentSubmissions: 0,
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadStats();
    }, []);

    const loadStats = async () => {
        try {
            // Get pages stats
            const { data: pages } = await supabase.from('pages').select('status');
            const totalPages = pages?.length || 0;
            const publishedPages = pages?.filter((p) => p.status === 'published').length || 0;
            const draftPages = pages?.filter((p) => p.status === 'draft').length || 0;

            // Get media stats
            const { count: mediaCount } = await supabase
                .from('media')
                .select('*', { count: 'exact', head: true });

            // Get form submissions stats
            const { count: submissionsCount } = await supabase
                .from('form_submissions')
                .select('*', { count: 'exact', head: true });

            // Get recent submissions (last 7 days)
            const sevenDaysAgo = new Date();
            sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
            const { count: recentCount } = await supabase
                .from('form_submissions')
                .select('*', { count: 'exact', head: true })
                .gte('created_at', sevenDaysAgo.toISOString());

            setStats({
                totalPages,
                publishedPages,
                draftPages,
                totalMedia: mediaCount || 0,
                totalSubmissions: submissionsCount || 0,
                recentSubmissions: recentCount || 0,
            });
        } catch (error) {
            console.error('Error loading stats:', error);
        } finally {
            setLoading(false);
        }
    };

    const statCards = [
        {
            title: 'Total Pages',
            value: stats.totalPages,
            icon: FileText,
            color: 'blue',
            link: '/admin/pages',
            subtitle: `${stats.publishedPages} published, ${stats.draftPages} drafts`,
        },
        {
            title: 'Media Files',
            value: stats.totalMedia,
            icon: Image,
            color: 'purple',
            link: '/admin/media',
            subtitle: 'Images, documents, videos',
        },
        {
            title: 'Form Submissions',
            value: stats.totalSubmissions,
            icon: Inbox,
            color: 'green',
            link: '/admin/forms',
            subtitle: `${stats.recentSubmissions} in last 7 days`,
        },
    ];

    const quickActions = [
        { label: 'Create New Page', link: '/admin/pages/new', icon: FileText },
        { label: 'Upload Media', link: '/admin/media', icon: Image },
        { label: 'Customize Design', link: '/admin/design', icon: TrendingUp },
        { label: 'Edit Navigation', link: '/admin/navigation', icon: Calendar },
    ];

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600 mt-2">Welcome to your admin panel</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {statCards.map((card) => {
                    const Icon = card.icon;
                    const colorClasses = {
                        blue: 'bg-blue-100 text-blue-600',
                        purple: 'bg-purple-100 text-purple-600',
                        green: 'bg-green-100 text-green-600',
                    }[card.color];

                    return (
                        <Link
                            key={card.title}
                            to={card.link}
                            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition group"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-gray-600 mb-1">{card.title}</p>
                                    <p className="text-3xl font-bold text-gray-900 mb-2">{card.value}</p>
                                    <p className="text-sm text-gray-500">{card.subtitle}</p>
                                </div>
                                <div className={`w-12 h-12 rounded-lg ${colorClasses} flex items-center justify-center group-hover:scale-110 transition`}>
                                    <Icon className="w-6 h-6" />
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {quickActions.map((action) => {
                        const Icon = action.icon;
                        return (
                            <Link
                                key={action.label}
                                to={action.link}
                                className="flex flex-col items-center p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition group"
                            >
                                <Icon className="w-8 h-8 text-gray-600 group-hover:text-blue-600 mb-2" />
                                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700 text-center">
                                    {action.label}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Setup Instructions */}
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Getting Started</h3>
                <ol className="list-decimal list-inside space-y-2 text-blue-800">
                    <li>Set up your Supabase project and run the schema.sql file</li>
                    <li>Configure environment variables in .env.local</li>
                    <li>Start customizing your site design from the Design section</li>
                    <li>Create and publish your first page</li>
                    <li>Upload media files to the library</li>
                </ol>
            </div>
        </div>
    );
};

export default AdminDashboard;
