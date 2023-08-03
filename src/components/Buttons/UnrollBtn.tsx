import { ReactNode } from "react";
import { Button } from "@chakra-ui/react";

export const UnrollBtn = ({ children, onClick }: { children: ReactNode; onClick: () => void }) => {
    return (
        <Button
            border="none"
            _hover={{ backgroundColor: "addition.600", color: "background.800" }}
            _active={{ backgroundColor: "addition.600", color: "background.800" }}
            color="addition.600"
            variant="outline"
            size="lg"
            p={{ base: "2rem 1.5rem", lg: "2.5rem 3.5rem", xl: "3rem 4.5rem" }}
            fontSize={{ base: "1.6rem", md: "1.8rem", xl: "2.2rem" }}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};
