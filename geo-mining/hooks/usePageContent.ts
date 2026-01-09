import { useEffect, useState } from 'react';
import { supabase, Page } from '../lib/supabaseClient';

export const usePageContent = (slug: string) => {
    const [page, setPage] = useState<Page | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchPage();
    }, [slug]);

    const fetchPage = async () => {
        try {
            const { data, error } = await supabase
                .from('pages')
                .select('*')
                .eq('slug', slug)
                .eq('status', 'published')
                .single();

            if (error) {
                if (error.code !== 'PGRST116') { // Ignore "no rows found" error for 404s
                    throw error;
                }
            }

            setPage(data);
        } catch (err: any) {
            console.error(`Error fetching page ${slug}:`, err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { page, loading, error };
};
