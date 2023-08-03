import { useNavigate } from "react-router-dom";
import { MdOutlineLockReset } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { Menu, MenuButton, MenuList, MenuGroup, MenuDivider, MenuItem, Box, Text, Flex, Center, Icon } from "@chakra-ui/react";
import { useAuthContext } from "src/context/AuthContext";
import { Avatar } from "src/components/Nav/UserAvatar";
import { DarkYellowBtn } from "src/components/Buttons/DarkYellowBtn";

export const AvatarOptions = () => {
    const { user, signOut } = useAuthContext();
    const navigate = useNavigate();
    return (
        <Menu>
            <MenuButton>
                <Avatar />
            </MenuButton>
            <MenuList w="30rem" bg="background.500" border="none" borderRadius="0.375rem" p="0 0" boxShadow="0px 14px 40px -30px rgba(0, 0, 0, 1)">
                <MenuGroup>
                    <Flex gap="2rem" flexDir="column">
                        <Center flexDir="column" pt="1rem" bg="rgba(0, 0, 0, 0.8)" borderRadius="0.375rem">
                            <Avatar />

                            {user ? (
                                <>
                                    <Text pt="2rem">{user?.["user_metadata"]?.["full_name"]}</Text>
                                    <Text fontSize="1.4rem" color="rgba(255,255,255,0.6)">
                                        {user?.["email"]}
                                    </Text>{" "}
                                </>
                            ) : null}
                        </Center>
                        <Box>
                            <MenuItem bg="none" _hover={{ bg: "rgba(255,255,255,0.1)" }} onClick={() => navigate("profile")}>
                                <Icon as={FaWallet} mr="1rem" />
                                <Text>Wallet</Text>
                            </MenuItem>
                            <MenuItem bg="none" _hover={{ bg: "rgba(255,255,255,0.1)" }}>
                                <Icon as={MdOutlineLockReset} mr="1rem" />
                                <Text onClick={() => navigate("/change-password")}>Change Passworrd</Text>
                            </MenuItem>
                            <MenuDivider borderColor="rgba(255,255,255,0.3)" />
                            <Box bg="none" display="flex" justifyContent="center" mb="0.4rem">
                                <DarkYellowBtn onClick={signOut}>Sign out</DarkYellowBtn>
                            </Box>
                        </Box>
                    </Flex>
                </MenuGroup>
            </MenuList>
        </Menu>
    );
};
