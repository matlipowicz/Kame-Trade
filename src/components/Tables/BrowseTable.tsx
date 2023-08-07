import { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { AssetTabs } from "src/components/Tables/AssetTabs";
import { Coins } from "./TableAssets/Coins";
import { Stocks } from "./TableAssets/Stocks";
import { DebouncedInput } from "./Filter/DebouncedInput";
import { TableTabContext } from "src/context/TableTab";
import { useContext } from "react";

//TODO: Clear input after going to other page of table

// import { Filter } from "./TableAssets/Coins";

// TODO: errors + coinsData types + shrink size of code lines to smaller chunks
// TODO: Set type for coinsData
// TODO: Responsive table

export function BrowseTable() {
    const [cryptoGlobalFilter, setCryptoGlobalFilter] = useState("");
    const [stockGlobalFilter, setStockGlobalFilter] = useState("");
    let { assetTab } = useContext(TableTabContext);

    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDir="column"
                p={{ base: "4rem 0", md: "4.5rem 8rem", lg: "5rem 10rem", xl: "6rem 12rem" }}
                as="section"
                position="relative"
            >
                <Flex w="100%" justifyContent="space-between" alignItems="stretch" flexDir={{ base: "column", lg: "row" }}>
                    <Box h="100%">
                        <AssetTabs />
                    </Box>
                    <Box alignSelf={{ lg: "end" }}>
                        {assetTab === "coin-tab" ? (
                            <DebouncedInput
                                value={cryptoGlobalFilter ?? ""}
                                onChange={(value) => setCryptoGlobalFilter(String(value))}
                                placeholder="Enter token name"
                            />
                        ) : assetTab === "stock-tab" ? (
                            <DebouncedInput
                                value={stockGlobalFilter ?? ""}
                                onChange={(value) => setStockGlobalFilter(String(value))}
                                placeholder="Enter stock symbol"
                            />
                        ) : null}
                    </Box>
                </Flex>

                <Box w="100%">
                    {assetTab === "coin-tab" ? (
                        <Coins globalFilter={cryptoGlobalFilter} setGlobalFilter={setCryptoGlobalFilter} />
                    ) : assetTab === "stock-tab" ? (
                        <Stocks globalFilter={stockGlobalFilter} setGlobalFilter={setStockGlobalFilter} />
                    ) : null}
                </Box>
            </Box>
        </>
    );
}
