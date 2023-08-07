import { useState, useEffect, useCallback } from "react";
import { useReactTable, getCoreRowModel, getSortedRowModel, getPaginationRowModel, getFilteredRowModel } from "@tanstack/react-table";
import { Table, HStack, Box } from "@chakra-ui/react";
import { TablePagination } from "src/components/Pagination/TablePagination";
import { RowSelector } from "src/components/Tables/RowSelector";
import { CoinColumns } from "src/components/Tables/ColumnsDef/CoinColumns";
import { TableSpinner } from "src/components/Tables/LoadingData/TableSpinner";
import { TableHead } from "src/components/Tables/TableElements/TableHead";
import { TableBody } from "src/components/Tables/TableElements/TableBody";
import { filterFns } from "src/components/Tables/Filter/Filter";
import { useQuery } from "@tanstack/react-query";
import { coinsData } from "src/api/crypto";
// TODO: Understand the concept of implementation filter in below example

const { contains } = filterFns;

export const Coins = ({ globalFilter, setGlobalFilter }: { globalFilter: string; setGlobalFilter: React.Dispatch<React.SetStateAction<string>> }) => {
    const [_, setColumnVisibility] = useState({});
    const [test, setTest] = useState<number>(0);
    const [visible, setVisible] = useState<any>({ rank: true, change: true, marketCap: true, "24hVolume": true, price: true });

    const handleWindowResize = useCallback(() => {
        setTest(window.innerWidth);
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, [handleWindowResize]);

    useEffect(() => {
        if (window.innerWidth <= 1150) {
            setVisible({
                rank: false,
                change: false,
                marketCap: false,
                "24hVolume": false,
            });
        } else {
            setVisible({
                rank: true,
                change: true,
                marketCap: true,
                "24hVolume": true,
            });
        }
    }, [test]);

    const {
        data: coinsTable,
        isLoading: coinsTableLoading,
        error: coinsTableError,
    } = useQuery({
        queryKey: ["coins", { limit: 750 }],
        queryFn: () => coinsData(750),
    });

    const coinsDataResponse = coinsTable?.data?.coins;

    const coinTable = useReactTable({
        columns: CoinColumns,
        data: coinsDataResponse!,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            globalFilter,
            columnVisibility: visible,
        },

        onColumnVisibilityChange: setColumnVisibility,
        onGlobalFilterChange: setGlobalFilter,
        globalFilterFn: contains,
    });

    if (coinsTableError) {
        return <div>{`Error:${coinsTableError}`}</div>;
    }

    const columnQuantity: number = coinTable.options.columns.length;
    return (
        <>
            <Box>
                <Table bg="rgba(0,0,0,0.16)" backdropFilter="blur(1rem)" boxShadow="2px 14px 19px -10px rgba(0, 0, 0, 0.5)">
                    <TableHead table={coinTable} />

                    {!coinsTableLoading ? <TableBody table={coinTable} /> : <TableSpinner columnQuantity={columnQuantity} />}
                </Table>
            </Box>
            {coinsDataResponse && (
                <HStack display="flex" alignItems="center" justifyContent="space-between" mt="3rem" w="100%" p={{ base: "0 1rem", md: "0 0" }}>
                    <RowSelector table={coinTable} />
                    <TablePagination table={coinTable} data={coinsDataResponse} />
                </HStack>
            )}
        </>
    );
};
