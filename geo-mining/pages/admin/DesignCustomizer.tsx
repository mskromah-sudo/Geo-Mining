import React, { useEffect, useState } from 'react';
import { supabase, DesignSetting } from '../../lib/supabaseClient';
import { Palette, Type, Layout, Save, RefreshCw } from 'lucide-react';

const DesignCustomizer: React.FC = () => {
    const [settings, setSettings] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [activeTab, setActiveTab] = useState<'colors' | 'typography' | 'branding'>('colors');

    useEffect(() => {
        loadSettings();
    }, []);

    const loadSettings = async () => {
        try {
            const { data, error } = await supabase.from('design_settings').select('*');
            if (error) throw error;

            const settingsMap = (data || []).reduce((acc, curr) => {
                acc[curr.key] = curr.value;
                return acc;
            }, {} as Record<string, string>);

            setSettings(settingsMap);
        } catch (error) {
            console.error('Error loading design settings:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSettingChange = (key: string, value: string) => {
        setSettings((prev) => ({ ...prev, [key]: value }));
        // Update CSS variable live
        document.documentElement.style.setProperty(`--${key.replace('_', '-')}`, value);
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            const updates = Object.entries(settings).map(([key, value]) => ({
                key,
                value,
                category: getCategoryForKey(key),
                updated_at: new Date().toISOString(),
            }));

            const { error } = await supabase.from('design_settings').upsert(updates, { onConflict: 'key' });
            if (error) throw error;

            alert('Design settings saved!');
        } catch (error) {
            console.error('Error saving settings:', error);
            alert('Failed to save settings');
        } finally {
            setSaving(false);
        }
    };

    const getCategoryForKey = (key: string) => {
        if (key.includes('color')) return 'color';
        if (key.includes('font')) return 'typography';
        return 'branding';
    };

    const resetToDefaults = () => {
        if (confirm('Reset all design settings to default?')) {
            handleSettingChange('primary_color', '#2563eb');
            handleSettingChange('secondary_color', '#7c3aed');
            handleSettingChange('accent_color', '#059669');
            handleSettingChange('font_family', 'Inter');
        }
    };

    const ColorInput = ({ label, code }: { label: string; code: string }) => (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
            <div className="flex items-center space-x-3">
                <input
                    type="color"
                    value={settings[code] || '#000000'}
                    onChange={(e) => handleSettingChange(code, e.target.value)}
                    className="h-10 w-20 p-1 border border-gray-300 rounded cursor-pointer"
                />
                <input
                    type="text"
                    value={settings[code] || ''}
                    onChange={(e) => handleSettingChange(code, e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm font-mono"
                />
            </div>
        </div>
    );

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Design Customizer</h1>
                    <p className="text-gray-600 mt-1">Customize your website's look and feel without code</p>
                </div>
                <div className="flex items-center space-x-3">
                    <button
                        onClick={resetToDefaults}
                        className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition"
                    >
                        <RefreshCw className="w-4 h-4" />
                        <span>Reset Defaults</span>
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                    >
                        <Save className="w-5 h-5" />
                        <span>{saving ? 'Saving...' : 'Save Changes'}</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Tabs */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                        <button
                            onClick={() => setActiveTab('colors')}
                            className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition ${activeTab === 'colors' ? 'bg-blue-50 text-blue-600 font-medium border-l-4 border-blue-600' : 'text-gray-600 hover:bg-gray-50'
                                }`}
                        >
                            <Palette className="w-5 h-5" />
                            <span>Colors</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('typography')}
                            className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition ${activeTab === 'typography' ? 'bg-blue-50 text-blue-600 font-medium border-l-4 border-blue-600' : 'text-gray-600 hover:bg-gray-50'
                                }`}
                        >
                            <Type className="w-5 h-5" />
                            <span>Typography</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('branding')}
                            className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition ${activeTab === 'branding' ? 'bg-blue-50 text-blue-600 font-medium border-l-4 border-blue-600' : 'text-gray-600 hover:bg-gray-50'
                                }`}
                        >
                            <Layout className="w-5 h-5" />
                            <span>Branding</span>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-3">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        {activeTab === 'colors' && (
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-6">Site Colors</h3>
                                <ColorInput label="Primary Color" code="primary_color" />
                                <ColorInput label="Secondary Color" code="secondary_color" />
                                <ColorInput label="Accent Color" code="accent_color" />
                            </div>
                        )}

                        {activeTab === 'typography' && (
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-6">Typography</h3>
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Heading Font</label>
                                    <select
                                        value={settings['heading_font'] || 'Inter'}
                                        onChange={(e) => handleSettingChange('heading_font', e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                    >
                                        <option value="Inter">Inter (Default)</option>
                                        <option value="Roboto">Roboto</option>
                                        <option value="Poppins">Poppins</option>
                                        <option value="Montserrat">Montserrat</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Body Font</label>
                                    <select
                                        value={settings['font_family'] || 'Inter'}
                                        onChange={(e) => handleSettingChange('font_family', e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                    >
                                        <option value="Inter">Inter (Default)</option>
                                        <option value="Roboto">Roboto</option>
                                        <option value="Open Sans">Open Sans</option>
                                        <option value="Lato">Lato</option>
                                    </select>
                                </div>
                            </div>
                        )}

                        {activeTab === 'branding' && (
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-6">Branding & Socials</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Site Title</label>
                                        <input
                                            type="text"
                                            value={settings['site_title'] || ''}
                                            onChange={(e) => handleSettingChange('site_title', e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Logo URL</label>
                                        <input
                                            type="text"
                                            value={settings['logo_url'] || ''}
                                            onChange={(e) => handleSettingChange('logo_url', e.target.value)}
                                            placeholder="https://..."
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                        />
                                    </div>
                                    <div className="pt-4 border-t border-gray-100">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Facebook URL</label>
                                        <input
                                            type="text"
                                            value={settings['facebook_url'] || ''}
                                            onChange={(e) => handleSettingChange('facebook_url', e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn URL</label>
                                        <input
                                            type="text"
                                            value={settings['linkedin_url'] || ''}
                                            onChange={(e) => handleSettingChange('linkedin_url', e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignCustomizer;
