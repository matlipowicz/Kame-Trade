import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, Text, chakra, Icon } from "@chakra-ui/react";
import { MdOutlineQueryStats } from "react-icons/md";
import { AiOutlineLock, AiOutlineUnlock } from "react-icons/ai";
import { BsCalendar3Week } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa";
import millify from "millify";
import { EnterpriseValue, QuoteTypes } from "src/api/types";

export const StockStatisicAccordion = ({ stats, marketCap }: { stats: QuoteTypes | undefined; marketCap: EnterpriseValue | undefined }) => {
    return (
        <>
            {stats && marketCap !== undefined ? (
                <>
                    <Accordion allowToggle w="100%" display="flex" flexDir="column">
                        <AccordionItem>
                            <AccordionButton>
                                <Box flex={1} textAlign="center">
                                    <Icon as={AiOutlineLock} />
                                    <Text color="addition.175" fontSize="1.4rem" fontWeight="700">
                                        Previous Close
                                    </Text>
                                </Box>
                            </AccordionButton>
                            <AccordionPanel>
                                <Box flex={1} textAlign="center">
                                    <chakra.span>$ {Number(stats.previous_close).toFixed(2)}</chakra.span>
                                </Box>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionButton>
                                <Box flex={1} textAlign="center">
                                    <Icon as={AiOutlineUnlock} />
                                    <Text color="addition.175" fontSize="1.4rem" fontWeight="700">
                                        Open
                                    </Text>
                                </Box>
                            </AccordionButton>
                            <AccordionPanel>
                                <Box flex={1} textAlign="center">
                                    <chakra.span>$ {Number(stats.open).toFixed(2)}</chakra.span>
                                </Box>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionButton>
                                <Box flex={1} textAlign="center">
                                    <Icon as={BsCalendar3Week} />
                                    <Text color="addition.175" fontSize="1.4rem" fontWeight="700">
                                        Fifty two week
                                    </Text>
                                </Box>
                            </AccordionButton>
                            <AccordionPanel>
                                <Box flex={1} textAlign="center">
                                    <chakra.span>$ {stats.fifty_two_week.range}</chakra.span>
                                </Box>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionButton>
                                <Box flex={1} textAlign="center">
                                    <Icon as={FaRegHandshake} />
                                    <Text color="addition.175" fontSize="1.4rem" fontWeight="700">
                                        Volume
                                    </Text>
                                </Box>
                            </AccordionButton>
                            <AccordionPanel>
                                <Box flex={1} textAlign="center">
                                    <chakra.span>$ {millify(Number(stats.average_volume))}</chakra.span>
                                </Box>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionButton>
                                <Box flex={1} textAlign="center">
                                    <Icon as={MdOutlineQueryStats} />
                                    <Text color="addition.175" fontSize="1.4rem" fontWeight="700">
                                        Market Cap
                                    </Text>
                                </Box>
                            </AccordionButton>
                            <AccordionPanel>
                                <Box flex={1} textAlign="center">
                                    <chakra.span>
                                        $ {marketCap.fmt} <chakra.span>on {stats.datetime}</chakra.span>
                                    </chakra.span>
                                </Box>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </>
            ) : null}
        </>
    );
};
