import { Image, Box, GridItem } from "@chakra-ui/react";
import img from "src/assets/miscellaneous/Under-construction.png";

export const Construction = () => {
    return (
        <>
            <GridItem colSpan={2}>
                <Box as="picture" w="100%" display="flex" justifyContent="center">
                    <Image src={img} alt="Under-Construction-img" w="60%" />
                </Box>
            </GridItem>
        </>
    );
};
