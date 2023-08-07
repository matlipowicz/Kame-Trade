import { Table } from "@tanstack/react-table";
import { Box, UnorderedList, Hide, Text } from "@chakra-ui/react";
import { PaginationButton } from "src/components/Pagination/PaginationButton";
import { PaginationPage } from "src/components/Pagination/PaginationPage";
import { usePagination } from "src/components/Pagination/PaginationHook";
import { Coins, Datum } from "src/api/types";

export type TableProps = {
    table: Table<any>;
};

export const TablePagination = ({ table, data }: { table: Table<any>; data: Coins[] | Datum[] }) => {
    const state = table.getState().pagination;
    //* Page size + page index
    const pagesRange = usePagination({ currPage: state.pageIndex, totalCount: data.length, siblingCount: 1, pageSize: state.pageSize });
    // Pages Range
    // Last page fn
    const goLastPage = () => table.setPageIndex(table.getPageCount() - 1);
    console.log(state);
    return (
        <Box>
            <Box>
                <Box display="flex" gap="1rem" alignItems="center">
                    <Hide breakpoint="(max-width: 1100px)">
                        <PaginationButton
                            onClick={() => {
                                if (table.getCanPreviousPage()) table.setPageIndex(0);
                            }}
                            disabled={!table.getCanPreviousPage()}
                            pageIndex={state.pageIndex}
                        >
                            First
                        </PaginationButton>
                    </Hide>
                    <PaginationButton
                        onClick={() => {
                            if (table.getCanPreviousPage()) table.previousPage();
                        }}
                        disabled={!table.getCanPreviousPage()}
                        pageIndex={state.pageIndex}
                    >
                        Prev
                    </PaginationButton>
                    {/* !There is no unique key to add in mapped pagesRange */}
                    <Box>
                        <Hide breakpoint="(max-width: 850px)">
                            <UnorderedList display="flex" gap="2rem" listStyleType="none">
                                {pagesRange?.map((pageNumber: number | string, index) => {
                                    return <PaginationPage pageNumber={pageNumber} pageIndex={state.pageIndex + 1} table={table} key={index} />;
                                })}
                            </UnorderedList>
                        </Hide>
                        <Hide breakpoint="(min-width: 850px)">
                            <Text>{state.pageIndex + 1}</Text>
                        </Hide>
                    </Box>

                    <PaginationButton
                        onClick={() => {
                            if (table.getCanNextPage()) table.nextPage();
                        }}
                        disabled={!table.getCanNextPage()}
                        pageIndex={state.pageIndex}
                    >
                        Next
                    </PaginationButton>

                    <Hide breakpoint="(max-width: 1100px)">
                        <PaginationButton
                            onClick={() => {
                                if (table.getCanNextPage()) goLastPage();
                            }}
                            disabled={!table.getCanNextPage()}
                            pageIndex={state.pageIndex}
                        >
                            Last
                        </PaginationButton>
                    </Hide>
                </Box>
            </Box>
        </Box>
    );
};
