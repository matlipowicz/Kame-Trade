import { NavLink as RouterLink } from "react-router-dom";
import { HStack, Link as ChakraNavLink, Text } from "@chakra-ui/react";

const ROUTES = [
    {
        text: "About",
        href: "/",
    },
    {
        text: "Browse",
        href: "/browse",
    },
    {
        text: "Profile",
        href: "/profile",
    },
    {
        text: "Simulate Investment",
        href: "/simulate_investment",
    },
];

export const NavLinks = () => {};

export const NavBar = () => {
    return (
        <>
            <HStack
                as={"nav"}
                spacing={"2.5rem"}
                alignItems={{ base: "end", xl: "center" }}
                gap={{ base: "4rem", xl: "2rem" }}
                flexDirection={{ base: "column", xl: "row" }}
            >
                {ROUTES.map(({ href, text }) => {
                    return (
                        <ChakraNavLink
                            _hover={{ textDecoration: "none" }}
                            as={RouterLink}
                            key={href}
                            to={href}
                            _activeLink={{ color: "addition.600" }}
                        >
                            <Text>{text}</Text>
                        </ChakraNavLink>
                    );
                })}
                ;
            </HStack>
        </>
    );
};
