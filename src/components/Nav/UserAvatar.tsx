import { Avatar as UserAvatar, Box } from "@chakra-ui/react";
import { AuthContext } from "src/context/AuthContext";
import { useContext } from "react";

// TODO: type it
export const Avatar = () => {
    const auth = useContext(AuthContext);

    return (
        <>
            {auth?.session !== null ? (
                <Box>
                    <UserAvatar name={auth?.user?.user_metadata?.full_name as string} size="xl" />
                </Box>
            ) : null}
        </>
    );
};
