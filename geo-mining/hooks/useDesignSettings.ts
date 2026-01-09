import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export const useDesignSettings = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        try {
            const { data, error } = await supabase.from('design_settings').select('*');
            if (error) throw error;

            if (data) {
                // Apply settings to CSS variables
                const root = document.documentElement;
                data.forEach((setting) => {
                    const cssVar = `--${setting.key.replace(/_/g, '-')}`;
                    root.style.setProperty(cssVar, setting.value);
                });
            }
        } catch (error) {
            console.error('Error loading design settings:', error);
        } finally {
            setLoaded(true);
        }
    };

    return { loaded };
};
