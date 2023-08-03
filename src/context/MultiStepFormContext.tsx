import { createContext, useState, useContext } from "react";

type MultiStepFormTypes = {
    type: string;
    asset: string;
    amount: string | number;
    price: Readonly<string>;
};
type MultiStepFormProps = {
    assetState: Partial<MultiStepFormTypes>;
    setAssetState: React.Dispatch<React.SetStateAction<MultiStepFormTypes>>;
};
const MultiStepFormContext = createContext<MultiStepFormProps | null>(null);

//TODO: type useState

export function MultiStepForm({ children }: { children: React.ReactNode }) {
    const [assetState, setAssetState] = useState<any>({});
    return <MultiStepFormContext.Provider value={{ assetState, setAssetState }}>{children}</MultiStepFormContext.Provider>;
}

export const useMultiStepFormContext = () => {
    const ctx = useContext(MultiStepFormContext);

    if (!ctx) {
        throw new Error("No in provider");
    }
    return ctx;
};
