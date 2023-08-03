import { Button } from "@chakra-ui/react";

export const DarkYellowBtn = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => {
    return (
        <Button
            onClick={onClick}
            bg="addition.185"
            _hover={{ backgroundColor: "addition.175" }}
            _active={{ backgroundColor: "addition.175" }}
            borderColor="addition.185"
            borderWidth={"0.3rem"}
            size="lg"
            p={{ base: "2rem 1.5rem", lg: "2.5rem 3.5rem", xl: "3rem 4.5rem" }}
            fontSize={{ base: "1.6rem", md: "1.8rem", xl: "2.2rem" }}
            display="flex"
            justifyContent="start"
            textAlign="center"
        >
            {children}
        </Button>
    );
};
