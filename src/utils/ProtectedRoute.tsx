import { Navigate } from "react-router-dom";
import { useAuthContext } from "src/context/AuthContext";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { session, isLoading } = useAuthContext();
    // console.log({ session, isLoading });
    if (isLoading) {
        <p>Loading...</p>;
    }
    return !isLoading && !session ? <Navigate to="/login" /> : <>{children}</>;
};
