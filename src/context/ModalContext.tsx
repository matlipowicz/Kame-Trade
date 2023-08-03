import { createContext, useContext } from "react";
import { useDisclosure } from "@chakra-ui/react";

type ModalContextProps = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};
export const ModalContext = createContext<ModalContextProps | null>(null);
export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return <ModalContext.Provider value={{ isOpen, onOpen, onClose }}>{children}</ModalContext.Provider>;
};

export const useModalContext = () => {
    const ctx = useContext(ModalContext);

    if (!ctx) {
        throw new Error("No in provider");
    }
    return ctx;
};
