import { supabase } from './supabaseClient';
import { User, Session } from '@supabase/supabase-js';

export interface AuthUser extends User {
    role?: string;
}

// Sign in with email and password
export const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) throw error;
    return data;
};

// Sign out
export const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
};

// Get current session
export const getSession = async (): Promise<Session | null> => {
    const { data, error } = await supabase.auth.getSession();
    if (error) throw error;
    return data.session;
};

// Get current user
export const getCurrentUser = async (): Promise<AuthUser | null> => {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) throw error;

    if (user) {
        return {
            ...user,
            role: user.app_metadata?.role || user.user_metadata?.role || 'user',
        };
    }

    return null;
};

// Check if user is admin
export const isAdmin = async (): Promise<boolean> => {
    const user = await getCurrentUser();
    return user?.role === 'admin';
};

// Listen to auth state changes
export const onAuthStateChange = (callback: (user: AuthUser | null) => void) => {
    return supabase.auth.onAuthStateChange(async (event, session) => {
        if (session?.user) {
            const authUser: AuthUser = {
                ...session.user,
                role: session.user.app_metadata?.role || session.user.user_metadata?.role || 'user',
            };
            callback(authUser);
        } else {
            callback(null);
        }
    });
};
