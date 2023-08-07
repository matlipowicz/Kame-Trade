import { Box, Select } from "@chakra-ui/react";
import { Table } from "@tanstack/react-table";
export const RowSelector = <T,>({ table }: { table: Table<T> }) => {
    const rowSelectionNumber: number[] = [10, 20, 30, 40, 50];

    return (
        <>
            <Box display="flex" gap={{ base: "0.5rem", lg: "1.5rem" }} flexDir={{ base: "column", lg: "row" }}>
                <Box>
                    <Select
                        value={table.getState().pagination.pageSize}
                        onChange={(e) => table.setPageSize(Number(e.target.value))}
                        textAlign="center"
                        fontSize="1.4rem"
                        color="addition.200"
                        borderColor="addition.200"
                        _hover={{ borderColor: "addition.250" }}
                        focusBorderColor="addition.250"
                    >
                        {rowSelectionNumber.map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                {pageSize + " " + "rows"}
                            </option>
                        ))}
                    </Select>
                </Box>
            </Box>
        </>
    );
};
