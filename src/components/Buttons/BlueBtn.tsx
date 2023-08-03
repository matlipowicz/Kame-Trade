import { ReactNode } from "react";
import { Button } from "@chakra-ui/react";

export const BlueBtn = ({ children, onClick }: { children: ReactNode; onClick: () => void }) => {
    return (
        <Button
            borderColor="addition.600"
            borderWidth={"0.2rem"}
            _hover={{ backgroundColor: "addition.600", color: "text.900" }}
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
