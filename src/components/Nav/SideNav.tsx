import { useRef, useContext } from "react";
import { Box, Flex, Drawer, DrawerBody, DrawerFooter, DrawerOverlay, DrawerContent, Hide } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { ButtonContainer } from "src/components/Nav/Buttons";
import { NavBar } from "src/components/Nav/NavElements";
import { AuthContext } from "src/context/AuthContext";
import { AvatarOptions } from "src/components/Login/AvatarOptions";

// TODO: React icons for mobile navbar

export const SideNav = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const btnRef = useRef<any>();
    const auth = useContext(AuthContext);
    console.log(auth);
    return (
        <>
            <Hide above="xl">
                <Drawer isOpen={isOpen} onClose={onClose} onEsc={onClose} placement="right" finalFocusRef={btnRef} size={{ base: "md", lg: "lg" }}>
                    <DrawerOverlay h="100%" />
                    <DrawerContent backgroundColor={"background.600"} p={{ base: "2rem", md: "3rem" }} minH="100%">
                        <Box onClick={onClose}>
                            <CloseIcon _hover={{ cursor: "pointer" }} w="2.5rem" h="2.5rem" />
                        </Box>
                        <DrawerBody display={"flex"} flexDirection={"column"} justifyContent={"center"}>
                            <Flex gap={"2rem"} flexDir="column">
                                <NavBar />
                            </Flex>
                        </DrawerBody>
                        <DrawerFooter borderTop="0.2rem solid #3B3B63">
                            {auth?.user !== undefined || null ? <AvatarOptions /> : <ButtonContainer />}
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </Hide>
        </>
    );
};
