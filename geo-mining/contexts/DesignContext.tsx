import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

interface DesignSettings {
    [key: string]: string;
}

interface DesignContextType {
    settings: DesignSettings;
    loading: boolean;
}

const DesignContext = createContext<DesignContextType>({
    settings: {},
    loading: true,
});

export const useDesign = () => useContext(DesignContext);

export const DesignProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [settings, setSettings] = useState<DesignSettings>({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        try {
            const { data, error } = await supabase.from('design_settings').select('*');
            if (error) throw error;

            const settingsMap = (data || []).reduce((acc: any, curr: any) => {
                acc[curr.key] = curr.value as string;
                return acc;
            }, {} as DesignSettings);

            setSettings(settingsMap);

            // Apply CSS variables
            const root = document.documentElement;
            Object.entries(settingsMap).forEach(([key, value]) => {
                // Only apply style settings as CSS vars
                if (key.includes('color') || key.includes('font')) {
                    const cssVar = `--${key.replace(/_/g, '-')}`;
                    root.style.setProperty(cssVar, value as string);
                }
            });
        } catch (error) {
            console.error('Error loading design settings:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <DesignContext.Provider value={{ settings, loading }}>
            {children}
        </DesignContext.Provider>
    );
};
