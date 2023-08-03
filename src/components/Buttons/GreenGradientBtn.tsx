import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

type GreenGradientBtnProps = {
    children: ReactNode;
    type: "button" | "submit" | "reset" | undefined;
    disable: boolean;
    onClick: () => void;
};

export const GreenGradientBtn = ({ children, type, disable, onClick }: Partial<GreenGradientBtnProps>) => {
    return (
        <Button
            size="lg"
            p={{ base: "2rem 1.5rem", lg: "2.5rem 3.5rem", xl: "3rem 4.5rem" }}
            fontSize={{ base: "1.6rem", md: "1.8rem", xl: "2.2rem" }}
            bgGradient={"linear-gradient(to right,addition.200,addition.225)"}
            color={"background.800"}
            borderWidth={"0.2rem"}
            borderColor="addition.200"
            _hover={{ bg: "transparent", color: "addition.225" }}
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
