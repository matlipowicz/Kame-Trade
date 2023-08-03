import { Flex, Center, Box, Text, HStack, Image } from "@chakra-ui/react";
import { IconContext } from "react-icons";
import { IoLogoFacebook, IoLogoLinkedin, IoIosMail, IoLogoGithub } from "react-icons/io";
import { Link } from "@chakra-ui/react";
import logo from "src/assets/logo/Dark-version.svg";

const ICONS = [
    { icon: <IoLogoGithub />, href: "https://github.com/matlipowicz" },
    { icon: <IoLogoFacebook />, href: "https://www.facebook.com/mateusz.lipowicz" },
    { icon: <IoLogoLinkedin />, href: "https://www.linkedin.com/in/mateusz-lipowicz-87737220a/?locale=en_US" },
    { icon: <IoIosMail />, href: "mailto:matlipowicz@gmail.com" },
];

export const Footer = () => {
    return (
        <>
            <Flex
                as="footer"
                alignItems="center"
                justifyContent="space-between"
                flexDir={{ base: "column-reverse", md: "row" }}
                p={{ base: "2.5rem", md: "5rem", xl: "8rem" }}
                gap={{ base: "4rem", md: "7.5rem", xl: "10rem" }}
                bg="rgba(19, 19, 32,0.6)"
                w="100%"
            >
                <Flex justify="center" align="center" flexDirection="column" gap={6}>
                    <Box textAlign="center">
                        <Text fontSize="clamp(1.4rem,1.8vw,2.2rem)">
                            Created by:{" "}
                            <Text as="b" color="addition.800" fontSize="clamp(1.4rem,1.8vw,2.2rem)">
                                Mateusz Lipowicz
                            </Text>{" "}
                        </Text>
                        <Text fontSize={{ base: "1.2rem", lg: "1.4rem" }} color="gray.600">
                            &copy; 2023 Copyright All Rights Reserved
                        </Text>
                    </Box>
                </Flex>
                <Box justifyContent="center" order={{ base: 1 }}>
                    <Image src={logo} alt="footer-logo" w="17.5rem" h="5rem" />
                </Box>
                <Flex gap="3rem" order={{ md: 3 }}>
                    {/* <Text as="b">Want to contact? Catch me on my socials</Text> */}
                    {ICONS.map(({ icon, href }) => (
                        <Box w="4rem" h="4rem" _hover={{ cursor: "pointer", color: "addition.600", borderRadius: "1rem" }} key={href}>
                            <IconContext.Provider value={{ size: "3rem" }}>
                                {
                                    <Link href={href} target="_blank">
                                        {icon}
                                    </Link>
                                }
                            </IconContext.Provider>
                        </Box>
                    ))}
                </Flex>
            </Flex>
        </>
    );
};
