import { createContext, useState, useEffect, useContext } from "react";
import { supabase } from "src/config/supabase";
import { Session, User } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

type AuthContextProps = {
    session: null | Session;
    user: undefined | User;
    isLoading: boolean;
    signOut: () => void;
};

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [session, setSession] = useState<Session | null>(null);
    const [user, setUser] = useState<User>();
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const setAuth = async () => {
            const {
                data: { session },
                error,
            } = await supabase.auth.getSession();
            if (error) throw error;
            setSession(session);
            setUser(session?.user);
            setIsLoading(false);
        };

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_, session) => {
            setSession(session);
            setUser(session?.user);
            setIsLoading(false);
        });
        setAuth();

        return () => subscription.unsubscribe();
    }, []);

    const contextAuthValue: AuthContextProps = {
        session,
        user,
        signOut: () => {
            supabase.auth.signOut();
            navigate("/");
        },
        isLoading,
    };
    // console.log("Session", session);
    // console.log("User", user);

    return <AuthContext.Provider value={contextAuthValue}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
    const ctx = useContext(AuthContext);

    if (!ctx) {
        throw new Error("No in provider");
    }
    return ctx;
};
