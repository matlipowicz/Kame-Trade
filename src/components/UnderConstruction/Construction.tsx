import { Image, Box, GridItem } from "@chakra-ui/react";

export const Construction = () => {
    return (
        <>
            <GridItem colSpan={2}>
                <Box as="picture" w="100%" display="flex" justifyContent="center">
                    <Image src="./assets/miscellaneous/Under-construction.png" alt="Under-Construction-img" w="60%" />
                </Box>
            </GridItem>
        </>
    );
};
