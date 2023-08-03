import { SimpleGrid, Box, Image, Text, Button, Heading, GridItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import graph from "src/assets/miscellaneous/About-graphics.svg";
import { RedGradientBtn } from "src/components/Buttons/RedGradientBtn";

const About = () => {
    return (
        <SimpleGrid columns={2} spacing={5} minChildWidth={"35rem"} p={{ base: "5rem 2.5rem", lg: "10rem 5rem" }} gap={{ base: "5rem" }}>
            <GridItem p={{ base: "2.5rem", lg: "4rem" }} display="flex" justifyContent="center" minW="100%" w="40rem">
                <Image src={graph} alt="App graphic" w="60rem" />
            </GridItem>
            <Box
                display="flex"
                flexDirection="column"
                // justifyContent="center"
                alignItems={{ base: "stretch", md: "center" }}
                gap={12}
                p={{ base: "2.5rem", lg: "4rem" }}
            >
                <Heading fontSize="clamp(3rem, 4.5vw, 4.8rem)" color="addition.800">
                    Learn how to invest with KameTrade
                </Heading>
                <Text fontSize="clamp(2rem, 2vw, 2.6rem)">
                    Deploy your digital capital toward project and assets that are expected to generate a positive financial return over time, and
                    make diversification of your money easier
                </Text>
                <Box>
                    <Link to="/browse">
                        <RedGradientBtn>Search for assets</RedGradientBtn>
                    </Link>
                </Box>
            </Box>
        </SimpleGrid>
    );
};
export default About;
