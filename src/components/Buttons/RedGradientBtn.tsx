import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

type RedGradientBtnProps = {
    children: ReactNode;
    type: "button" | "submit" | "reset" | undefined;
    disable: boolean;
    onClick: () => void;
};

export const RedGradientBtn = ({ children, type, disable, onClick }: Partial<RedGradientBtnProps>) => {
    return (
        <Button
            size="lg"
            p={{ base: "2rem 1.5rem", lg: "2.5rem 3.5rem", xl: "3rem 4.5rem" }}
            bgGradient={"linear-gradient(to right,addition.400,addition.500)"}
            fontSize={{ base: "1.6rem", md: "1.8rem", xl: "2.2rem" }}
            color={"background.800"}
            borderWidth={"0.2rem"}
            borderColor="addition.400"
            _hover={{ bg: "transparent", color: "addition.500" }}
            variant="unstyled"
            display="flex"
            transition={"0.2s all"}
            type={type}
            w="100%"
            isDisabled={disable}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};
