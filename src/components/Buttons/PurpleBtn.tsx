import { ReactNode } from "react";
import { Button } from "@chakra-ui/react";

export const PurpleBtn = ({ children, onClick }: { children: ReactNode; onClick: () => void }) => {
    return (
        <Button
            bg="addition.800"
            _hover={{ backgroundColor: "addition.700" }}
            borderColor="addition.800"
            borderWidth={"0.2rem"}
            size="lg"
            p={{ base: "2rem 1.5rem", lg: "2.5rem 3.5rem", xl: "3rem 4.5rem" }}
            fontSize={{ base: "1.6rem", md: "1.8rem", xl: "2.2rem" }}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};
