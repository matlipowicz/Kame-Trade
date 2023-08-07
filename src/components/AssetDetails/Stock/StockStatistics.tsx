import { Box, Icon, chakra, Table, Tbody, Tr, Th, Td, Heading, Hide, Show } from "@chakra-ui/react";
import { MdOutlineQueryStats } from "react-icons/md";
import { AiOutlineLock, AiOutlineUnlock } from "react-icons/ai";
import { BsCalendar3Week } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa";
import millify from "millify";
import { StockStatisicAccordion } from "./Accordion/StockStatisicAcordeon";
import { EnterpriseValue, QuoteTypes } from "src/api/types";

export const StockStatistics = ({ stats, marketCap }: { stats: QuoteTypes | undefined; marketCap: EnterpriseValue | undefined }) => {
    // console.log(stats);

    // useEffect(() => {
    //     if (details !== undefined) {
    //         const allTimeHighTimestamp: string | undefined = new Date(details?.allTimeHigh?.timestamp * 1000).toLocaleDateString();
    //         setDate(allTimeHighTimestamp);
    //     }
    // }, [details]);
    // console.log(marketCap);
    return (
        <Box maxW="130rem" alignSelf="center" w="100%">
            <Box flex={1}>
                <Heading size="2xl" color="addition.800" mb="2rem">
                    Key statistics
                </Heading>
                {stats && marketCap && (
                    <>
                        <Hide breakpoint="(max-width: 420px)">
                            <Table w="100%">
                                <Tbody>
                                    <Tr>
                                        <Td>{<Icon as={AiOutlineLock} />}</Td>
                                        <Th color="addition.175" fontSize={{ base: "1rem", md: "1.2rem", lg: "1.4rem" }} lineHeight="2rem">
                                            Previous Close
                                        </Th>
                                        <Td>
                                            <chakra.span>$ {Number(stats.previous_close).toFixed(2)}</chakra.span>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>{<Icon as={AiOutlineUnlock} />}</Td>
                                        <Th color="addition.175" fontSize={{ base: "1rem", md: "1.2rem", lg: "1.4rem" }} lineHeight="2rem">
                                            Open
                                        </Th>
                                        <Td>
                                            <chakra.span>$ {Number(stats.open).toFixed(2)}</chakra.span>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>{<Icon as={BsCalendar3Week} />}</Td>
                                        <Th color="addition.175" fontSize={{ base: "1rem", md: "1.2rem", lg: "1.4rem" }} lineHeight="2rem">
                                            Fifty two week
                                        </Th>
                                        <Td>
                                            <chakra.span>$ {stats.fifty_two_week.range}</chakra.span>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>{<Icon as={FaRegHandshake} />}</Td>
                                        <Th color="addition.175" fontSize={{ base: "1rem", md: "1.2rem", lg: "1.4rem" }} lineHeight="2rem">
                                            Volume
                                        </Th>
                                        <Td>
                                            <chakra.span>$ {millify(Number(stats.volume))}</chakra.span>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>{<Icon as={FaRegHandshake} />}</Td>
                                        <Th color="addition.175" fontSize={{ base: "1rem", md: "1.2rem", lg: "1.4rem" }} lineHeight="2rem">
                                            Avg.volume
                                        </Th>
                                        <Td>
                                            <chakra.span>$ {millify(Number(stats.average_volume))}</chakra.span>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>{<Icon as={MdOutlineQueryStats} />}</Td>
                                        <Th color="addition.175" fontSize={{ base: "1rem", md: "1.2rem", lg: "1.4rem" }} lineHeight="2rem">
                                            Marekt Cap
                                        </Th>
                                        <Td>
                                            <chakra.span>
                                                $ {marketCap.fmt} <chakra.span>on {stats.datetime}</chakra.span>
                                            </chakra.span>
                                        </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </Hide>
                        <Show breakpoint="(max-width: 420px)">
                            <StockStatisicAccordion stats={stats} marketCap={marketCap} />
                        </Show>
                    </>
                )}
            </Box>
        </Box>
    );
};
