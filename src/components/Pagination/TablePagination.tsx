import { Table } from "@tanstack/react-table";
import { Box, UnorderedList } from "@chakra-ui/react";
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

    return (
        <Box>
            <Box>
                <Box display="flex" gap="1rem" alignItems="center">
                    <PaginationButton
                        onClick={() => {
                            if (table.getCanPreviousPage()) table.setPageIndex(0);
                        }}
                        disabled={!table.getCanPreviousPage()}
                        pageIndex={state.pageIndex}
                    >
                        First
                    </PaginationButton>

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
                        <UnorderedList display="flex" gap="2rem" listStyleType="none">
                            {pagesRange?.map((pageNumber: number | string, index) => {
                                return <PaginationPage pageNumber={pageNumber} pageIndex={state.pageIndex + 1} table={table} key={index} />;
                            })}
                        </UnorderedList>
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

                    <PaginationButton
                        onClick={() => {
                            if (table.getCanNextPage()) goLastPage();
                        }}
                        disabled={!table.getCanNextPage()}
                        pageIndex={state.pageIndex}
                    >
                        Last
                    </PaginationButton>
                </Box>
            </Box>
        </Box>
    );
};
