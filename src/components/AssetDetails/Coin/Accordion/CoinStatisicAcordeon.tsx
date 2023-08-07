import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, Text, chakra, Icon, Heading, Link } from "@chakra-ui/react";
import { AiOutlineTrophy, AiOutlineDollar } from "react-icons/ai";
import { MdOutlineQueryStats } from "react-icons/md";
import {
    FaRegHandshake,
    FaTelegramPlane,
    FaReddit,
    FaGithub,
    FaBitcoin,
    FaRegFilePdf,
    FaYoutube,
    FaTwitter,
    FaDiscord,
    FaMedium,
    FaInstagram,
    FaFacebook,
} from "react-icons/fa";
import { BiBarChartAlt2 } from "react-icons/bi";
import { IoLinkSharp, IoCubeOutline } from "react-icons/io5";
import millify from "millify";
import { Coin } from "src/api/types";

export const CoinStatisicAccordion = ({
    details,
    currentPrice,
    date,
}: {
    details: Coin | undefined;
    currentPrice: string | undefined;
    date: string | undefined;
}) => {
    return (
        <>
            {details !== undefined ? (
                <>
                    <Heading size="2xl" color="addition.800" mb="2rem">
                        Key statistics
                    </Heading>
                    <Accordion allowToggle w="100%" display="flex" flexDir="column">
                        <AccordionItem>
                            <AccordionButton>
                                <Box flex={1} textAlign="center">
                                    <Icon as={AiOutlineDollar} />
                                    <Text color="addition.175" fontSize="1.4rem" fontWeight="700">
                                        Price to USD
                                    </Text>
                                </Box>
                            </AccordionButton>
                            <AccordionPanel>
                                <Box flex={1} textAlign="center">
                                    <chakra.span>$ {Number(currentPrice).toFixed(2)}</chakra.span>
                                </Box>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionButton>
                                <Box flex={1} textAlign="center">
                                    <Icon as={BiBarChartAlt2} />
                                    <Text color="addition.175" fontSize="1.4rem" fontWeight="700">
                                        Rank
                                    </Text>
                                </Box>
                            </AccordionButton>
                            <AccordionPanel>
                                <Box flex={1} textAlign="center">
                                    <chakra.span> {details?.rank}</chakra.span>
                                </Box>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionButton>
                                <Box flex={1} textAlign="center">
                                    <Icon as={FaRegHandshake} />
                                    <Text color="addition.175" fontSize="1.4rem" fontWeight="700">
                                        24h Volume
                                    </Text>
                                </Box>
                            </AccordionButton>
                            <AccordionPanel>
                                <Box flex={1} textAlign="center">
                                    <chakra.span>$ {millify(Number(details?.["24hVolume"]), { precision: 3 })}</chakra.span>
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
                                    <chakra.span>$ {millify(Number(details?.marketCap), { precision: 3 })}</chakra.span>
                                </Box>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionButton>
                                <Box flex={1} textAlign="center">
                                    <Icon as={MdOutlineQueryStats} />
                                    <Text color="addition.175" fontSize="1.4rem" fontWeight="700">
                                        Dilluted Market Cap
                                    </Text>
                                </Box>
                            </AccordionButton>
                            <AccordionPanel>
                                <Box flex={1} textAlign="center">
                                    <chakra.span>$ {millify(Number(details?.fullyDilutedMarketCap), { precision: 3 })}</chakra.span>
                                </Box>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionButton>
                                <Box flex={1} textAlign="center">
                                    <Icon as={AiOutlineTrophy} />
                                    <Text color="addition.175" fontSize="1.4rem" fontWeight="700">
                                        Overall Highest Price
                                    </Text>
                                </Box>
                            </AccordionButton>
                            <AccordionPanel>
                                <Box flex={1} textAlign="center">
                                    <chakra.span>
                                        $ {millify(Number(details?.allTimeHigh.price), { precision: 3 })} <chakra.span>on {date}</chakra.span>
                                    </chakra.span>
                                </Box>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                    <Heading size="2xl" color="addition.800" mb="2rem" mt="4rem">
                        Links
                    </Heading>

                    <Accordion allowToggle w="100%" display="flex" flexDir="column">
                        {details?.links.map((link: any) => (
                            <AccordionItem>
                                <AccordionButton key={link.url}>
                                    <Box flex={1} textAlign="center">
                                        {link.type === "website" ? (
                                            <Icon as={IoLinkSharp} h="2rem" w="2rem" />
                                        ) : link.type === "bitcointalk" ? (
                                            <Icon as={FaBitcoin} h="2rem" w="2rem" />
                                        ) : link.type === "explorer" ? (
                                            <Icon as={IoCubeOutline} h="2rem" w="2rem" />
                                        ) : link.type === "github" ? (
                                            <Icon as={FaGithub} h="2rem" w="2rem" />
                                        ) : link.type === "reddit" ? (
                                            <Icon as={FaReddit} h="2rem" w="2rem" />
                                        ) : link.type === "telegram" ? (
                                            <Icon as={FaTelegramPlane} h="2rem" w="2rem" />
                                        ) : link.type === "whitepaper" ? (
                                            <Icon as={FaRegFilePdf} h="2rem" w="2rem" />
                                        ) : link.type === "youtube" ? (
                                            <Icon as={FaYoutube} h="2rem" w="2rem" />
                                        ) : link.type === "twitter" ? (
                                            <Icon as={FaTwitter} h="2rem" w="2rem" />
                                        ) : link.type === "discord" ? (
                                            <Icon as={FaDiscord} h="2rem" w="2rem" />
                                        ) : link.type === "medium" ? (
                                            <Icon as={FaMedium} h="2rem" w="2rem" />
                                        ) : link.type === "instagram" ? (
                                            <Icon as={FaInstagram} h="2rem" w="2rem" />
                                        ) : link.type === "facebook" ? (
                                            <Icon as={FaFacebook} h="2rem" w="2rem" />
                                        ) : (
                                            ""
                                        )}
                                        <Text color="addition.175" fontSize="1.4rem" fontWeight="700">
                                            {link.type}
                                        </Text>
                                    </Box>
                                </AccordionButton>
                                <AccordionPanel>
                                    <Box flex={1} textAlign="center">
                                        <Link href={link.url}>{link.name}</Link>
                                    </Box>
                                </AccordionPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </>
            ) : null}
        </>
    );
};
