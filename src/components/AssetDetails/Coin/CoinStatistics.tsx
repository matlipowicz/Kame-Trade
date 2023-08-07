import { Box, Icon, chakra, Table, Tbody, Tr, Th, Td, Link, Heading, Show, Hide } from "@chakra-ui/react";
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
import { Coin } from "src/api/types";
import millify from "millify";
import { useState, useEffect } from "react";
import { CoinStatisicAccordion } from "./Accordion/CoinStatisicAcordeon";

// TODO: Simplify icon rendering in statistic table (map data for example)
// TODO: Gather all data in objects and map them instead of creating repetetive elements

export const AssetStatistics = ({ details, currentPrice }: { details: Coin | undefined; currentPrice: string | undefined }) => {
    const [date, setDate] = useState<string>("");

    useEffect(() => {
        if (details !== undefined) {
            const allTimeHighTimestamp: string | undefined = new Date(details?.allTimeHigh?.timestamp * 1000).toLocaleDateString();
            setDate(allTimeHighTimestamp);
        }
    }, [details]);

    return (
        <Box display="flex" justifyContent="space-around" gap="5rem" alignItems="start" flexDir={{ base: "column", lg: "row" }}>
            {date !== "" && details !== undefined && (
                <>
                    <Box flex={1} w="100%">
                        <Hide breakpoint="(max-width: 420px)">
                            <Heading size="2xl" color="addition.800" mb="2rem">
                                Key statistics
                            </Heading>
                            <Table>
                                <Tbody>
                                    <Tr>
                                        <Td>{<Icon as={AiOutlineDollar} />}</Td>
                                        <Th color="addition.175" fontSize={{ base: "1rem", md: "1.2rem", lg: "1.4rem" }} lineHeight="2rem">
                                            Price to USD
                                        </Th>
                                        <Td>
                                            <chakra.span lineHeight="2rem">$ {Number(currentPrice).toFixed(2)}</chakra.span>
                                        </Td>
                                    </Tr>

                                    <Tr>
                                        <Td>{<Icon as={BiBarChartAlt2} />}</Td>
                                        <Th color="addition.175" fontSize={{ base: "1rem", md: "1.2rem", lg: "1.4rem" }} lineHeight="2rem">
                                            Rank
                                        </Th>
                                        <Td>
                                            <chakra.span lineHeight="2rem"> {details?.rank}</chakra.span>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>{<Icon as={FaRegHandshake} />}</Td>
                                        <Th color="addition.175" fontSize={{ base: "1rem", md: "1.2rem", lg: "1.4rem" }} lineHeight="2rem">
                                            24h Volume
                                        </Th>
                                        <Td>
                                            <chakra.span lineHeight="2rem">$ {millify(Number(details?.["24hVolume"]), { precision: 3 })}</chakra.span>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>{<Icon as={MdOutlineQueryStats} />}</Td>
                                        <Th color="addition.175" fontSize={{ base: "1rem", md: "1.2rem", lg: "1.4rem" }} lineHeight="2rem">
                                            Market Cap
                                        </Th>
                                        <Td>
                                            <chakra.span lineHeight="2rem">$ {millify(Number(details?.marketCap), { precision: 3 })}</chakra.span>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>{<Icon as={MdOutlineQueryStats} />}</Td>
                                        <Th color="addition.175" fontSize={{ base: "1rem", md: "1.2rem", lg: "1.4rem" }} lineHeight="2rem">
                                            Dilluted Market Cap
                                        </Th>
                                        <Td>
                                            <chakra.span lineHeight="2rem">
                                                $ {millify(Number(details?.fullyDilutedMarketCap), { precision: 3 })}
                                            </chakra.span>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>{<Icon as={AiOutlineTrophy} />}</Td>
                                        <Th color="addition.175" fontSize={{ base: "1rem", md: "1.2rem", lg: "1.4rem" }} lineHeight="2rem">
                                            Overall Highest Price
                                        </Th>
                                        <Td>
                                            <chakra.span lineHeight="2rem">
                                                $ {millify(Number(details?.allTimeHigh.price), { precision: 3 })} <chakra.span>on {date}</chakra.span>
                                            </chakra.span>
                                        </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </Hide>
                        <Show breakpoint="(max-width: 420px)">
                            <CoinStatisicAccordion details={details} currentPrice={currentPrice} date={date} />
                        </Show>
                    </Box>
                    <Box flex={1} w="100%">
                        <Hide breakpoint="(max-width: 420px)">
                            <Heading size="2xl" color="addition.800">
                                Links
                            </Heading>
                            <Table w="100%">
                                <Tbody>
                                    {details?.links.map((link: any) => (
                                        <Tr key={link.url}>
                                            <Td>
                                                {link.type === "website" ? (
                                                    <Icon as={IoLinkSharp} />
                                                ) : link.type === "bitcointalk" ? (
                                                    <Icon as={FaBitcoin} />
                                                ) : link.type === "explorer" ? (
                                                    <Icon as={IoCubeOutline} />
                                                ) : link.type === "github" ? (
                                                    <Icon as={FaGithub} />
                                                ) : link.type === "reddit" ? (
                                                    <Icon as={FaReddit} />
                                                ) : link.type === "telegram" ? (
                                                    <Icon as={FaTelegramPlane} />
                                                ) : link.type === "whitepaper" ? (
                                                    <Icon as={FaRegFilePdf} />
                                                ) : link.type === "youtube" ? (
                                                    <Icon as={FaYoutube} />
                                                ) : link.type === "twitter" ? (
                                                    <Icon as={FaTwitter} />
                                                ) : link.type === "discord" ? (
                                                    <Icon as={FaDiscord} />
                                                ) : link.type === "medium" ? (
                                                    <Icon as={FaMedium} />
                                                ) : link.type === "instagram" ? (
                                                    <Icon as={FaInstagram} />
                                                ) : link.type === "facebook" ? (
                                                    <Icon as={FaFacebook} />
                                                ) : (
                                                    ""
                                                )}
                                            </Td>
                                            <Th color="addition.175" fontSize={{ base: "1rem", md: "1.2rem", lg: "1.4rem" }}>
                                                {link.type}
                                            </Th>
                                            <Td>
                                                <Link href={link.url}>{link.name}</Link>
                                            </Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </Hide>
                    </Box>
                </>
            )}
        </Box>
    );
};
