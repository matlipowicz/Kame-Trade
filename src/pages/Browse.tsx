import { BrowseTable } from "src/components/Tables/BrowseTable";
import { TabsProvider } from "src/context/TableTab";
const Browse = () => {
    return (
        <>
            <TabsProvider>
                <BrowseTable />
            </TabsProvider>
        </>
    );
};
export default Browse;
