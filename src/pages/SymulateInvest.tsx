// import { useState } from "react";
// // import contextAuthValue from "src/context/AuthContext";
// import { useModalContext } from "src/context/ModalContext";
// import { useQuery } from "@tanstack/react-query";
// import { Grid, GridItem, Box, Image, Heading, Text } from "@chakra-ui/react";
// import { coinsData } from "src/api/crypto";
// import { twelveStockList } from "src/api/stock";
// // import { SelectAsset } from "src/components/Simulator/SelectAsset";
// import { FaLessThanEqual } from "react-icons/fa";

// // SiBitcoinsv lub SiBitcoin

// const SymulateInvest = () => {
//     const { isOpen, onOpen, onClose } = useModalContext();
//     const [hoverCrypto, setHoverCrypto] = useState(false);
//     const [hoverStocks, setHoverStocks] = useState(false);

//     const cryptoHover = {
//         cryptoMouseEnter: () => {
//             setHoverCrypto(true);
//         },
//         cryptoMouseLeave: () => {
//             setHoverCrypto(false);
//         },
//     };

//     const stocksHover = {
//         stocksMouseEnter: () => {
//             setHoverStocks(true);
//         },
//         stocksMouseLeave: () => {
//             setHoverStocks(false);
//         },
//     };

//     // const auth = useContext();
//     const {
//         data: coins,
//         error: coinsError,
//         isLoading: coinsLoading,
//         refetch: coinsRefetch,
//     } = useQuery({
//         queryKey: ["coins", { limit: 750 }],
//         queryFn: () => coinsData(750),
//         staleTime: 1000,
//         enabled: false,
//     });

//     const coinsDetails = coins?.data?.coins;

//     // const {
//     //     data: stocks,
//     //     error: stocksError,
//     //     isLoading: stocksLoading,
//     // } = useQuery({
//     //     queryKey: ["stocks"],
//     //     queryFn: () => twelveStockList(),
//     //     staleTime: 1000,
//     // });

//     // if (coinsLoading && stocksLoading) {
//     //     return <div>Loading...</div>;
//     // } else {
//     //     console.log(coins?.data?.coins);
//     //     console.log(stocks?.data);
//     // }

//     return (
//         <>
//             <Grid
//                 templateColumns={{ base: "1fr", md: "1fr 1fr" }}
//                 minH="85vh"
//                 p={{ base: "4rem 6rem", md: "6rem 8rem", lg: "10rem 12rem" }}
//                 placeItems="center"
//             >
//                 <GridItem colSpan={2}>
//                     <Heading fontSize={"clamp(3.5rem, 4vw, 5rem)"} color="addition.800" filter="contrast(120%)" mb="4rem" alignSelf="start">
//                         Choose asset to simulate your first investment
//                     </Heading>
//                 </GridItem>

//                 <GridItem colSpan={2} alignSelf="start" w="100%">
//                     <Box display="flex" justifyContent="space-evenly">
//                         <Box
//                             as="picture"
//                             onMouseEnter={cryptoHover.cryptoMouseEnter}
//                             onMouseLeave={cryptoHover.cryptoMouseLeave}
//                             onClick={() => coinsRefetch()}
//                         >
//                             <Image
//                                 src="src/assets/miscellaneous/Crypto.svg"
//                                 sx={{
//                                     cursor: hoverCrypto ? "pointer" : "",
//                                     filter: hoverCrypto ? "contrast(120%)" : "",
//                                     transform: hoverCrypto ? "rotate3d(1, 2, 3, 10deg) scale(1.2)" : "",
//                                     transition: "all 0.5s",
//                                 }}
//                                 transition="all 0.5s"
//                                 maxW="100%"
//                                 w={{ base: "12.5rem", md: "15rem", xl: "20rem", "2xl": "25rem" }}
//                                 alt="crypto-icon"
//                                 onClick={onOpen}
//                             />
//                             <Text
//                                 w="100%"
//                                 textAlign="center"
//                                 mt="4rem"
//                                 fontWeight="700"
//                                 fontSize="clamp(1.4rem, 3.5vw,3.5rem)"
//                                 sx={{ color: hoverCrypto ? "addition.600" : "", cursor: hoverCrypto ? "pointer" : "" }}
//                                 onClick={onOpen}
//                             >
//                                 Crypto
//                             </Text>
//                         </Box>
//                         <Box as="picture" onMouseEnter={stocksHover.stocksMouseEnter} onMouseLeave={stocksHover.stocksMouseLeave}>
//                             <Image
//                                 src="src/assets/miscellaneous/Stocks.svg"
//                                 sx={{
//                                     cursor: hoverStocks ? "pointer" : "",
//                                     filter: hoverStocks ? "contrast(120%)" : "",
//                                     transform: hoverStocks ? "rotate3d(1, 2, 3, 10deg) scale(1.2)" : "",
//                                     transition: "all 0.5s",
//                                 }}
//                                 transition="all 0.5s"
//                                 maxW="100%"
//                                 w={{ base: "12.5rem", md: "15rem", xl: "20rem", "2xl": "25rem" }}
//                                 alt="stocks-icon"
//                                 onClick={onOpen}
//                             />
//                             <Text
//                                 w="100%"
//                                 textAlign="center"
//                                 mt="4rem"
//                                 fontWeight="700"
//                                 fontSize="clamp(1.4rem, 3.5vw,3.5rem)"
//                                 sx={{ color: hoverStocks ? "addition.600" : "", cursor: hoverStocks ? "pointer" : "" }}
//                                 onClick={onOpen}
//                             >
//                                 Stocks
//                             </Text>
//                         </Box>

//                         <SelectAsset coinsDetails={coinsDetails} />
//                     </Box>
//                 </GridItem>
//             </Grid>
//         </>
//     );
// };
// export default SymulateInvest;
