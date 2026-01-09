import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthUser, getCurrentUser, onAuthStateChange } from '../lib/auth';

interface AuthContextType {
    user: AuthUser | null;
    loading: boolean;
    isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    isAdmin: false,
});

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check current session
        getCurrentUser()
            .then((currentUser) => {
                setUser(currentUser);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error getting current user:', error);
                setLoading(false);
            });

        // Listen for auth changes
        const { data: authListener } = onAuthStateChange((authUser) => {
            setUser(authUser);
        });

        return () => {
            authListener?.subscription?.unsubscribe();
        };
    }, []);

    const isAdmin = user?.role === 'admin';

    return (
        <AuthContext.Provider value={{ user, loading, isAdmin }}>
            {children}
        </AuthContext.Provider>
    );
};
