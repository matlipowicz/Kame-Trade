// import { useState, useEffect } from "react";
// import { useModalContext } from "src/context/ModalContext";
// import { useMultiStepFormContext } from "src/context/MultiStepFormContext";
// import {
//     Button,
//     ButtonGroup,
//     Box,
//     Container,
//     FormLabel,
//     FormControl,
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalCloseButton,
//     ModalBody,
//     ModalFooter,
//     Heading,
//     useDisclosure,
//     Stack,
//     Stepper,
//     Step,
//     StepIndicator,
//     StepStatus,
//     Progress,
// } from "@chakra-ui/react";
// import { Select, AsyncSelect } from "chakra-react-select";
// import ReactDom from "react-dom";
// import { RedGradientBtn } from "src/components/Buttons/RedGradientBtn";
// import { GreenGradientBtn } from "src/components/Buttons/GreenGradientBtn";
// import { Coins } from "src/api/types";
// import { useForm, Controller, SubmitHandler } from "react-hook-form";
// import { Purchase } from "./Purchase";

// // TODO: think how to get timestamp from purchase date!
// // TODO: create your own useMultiStepFormHook
// // TODO: Change focus-visible styles for select input

// export const SelectAsset = ({ coinsDetails, coinsRefetch }: { coinsDetails: Coins[]; coinsRefetch: any }) => {
//     const { isOpen, onOpen, onClose } = useModalContext();
//     const { assetState, setAssetState } = useMultiStepFormContext();
//     const [selectedOption, setSelectedOption] = useState<string>();
//     const [stepper, setStepper] = useState<number>(0);

//     const { control, handleSubmit, register } = useForm({
//         defaultValues: {
//             asset: "",
//             price: "",
//             amount: "",
//         },
//     });

//     const submit = (data: any) => console.log(data);

//     // SELECT OPTIONS
//     if (!coinsDetails) return null;
//     const options = coinsDetails.map((coin: Coins) => {
//         return {
//             label: coin?.name,
//             value: coin?.name,
//         };
//     });

//     const filteredData = coinsDetails.filter((coin: Coins) => {
//         return coin?.name === selectedOption?.value;
//     });

//     const [asset] = filteredData;

//     const asssetValues = {
//         rank: asset?.rank,
//         name: asset?.name,
//         symbol: asset?.symbol,
//         price: asset?.price,
//         change: asset?.change,
//         volume: asset?.["24hVolume"],
//         marketCap: asset?.marketCap,
//         color: asset?.color,
//     };

//     const handleNextStep = (method: string) => {
//         setAssetState((prev: any) => {
//             return { ...prev, type: method, asset: asssetValues };
//         });
//         if (stepper <= 2) {
//             setStepper((step: number) => step + 1);
//         }
//     };

//     // SELECT STYLES
//     const customStyles = {
//         option: (provided: any, state: any) => ({
//             ...provided,
//             color: state.isFocused ? "#fff" : provided.color,
//             backgroundColor: state.isFocused ? "rgba(104, 87, 242,1)" : "rgba(32, 32, 53,.8)",
//         }),
//         menuList: (provided: any, state: any) => ({
//             ...provided,
//             backgroundColor: "rgba(32, 32, 53,.8)",
//             borderColor: "transparent",
//         }),
//         control: (provided: any, state: any) => {
//             return {
//                 ...provided,
//                 borderColor: "addition.700",
//                 borderWidth: "0.3rem",
//                 borderRadius: "0.375rem",
//                 padding: "0.5rem 1rem 0.5rem 2rem",
//                 color: "addition.185",
//             };
//         },
//     };

//     // console.log("Selected", selectedOption);
//     console.log("Context state", assetState);

//     return ReactDom.createPortal(
//         <>
//             <Modal isOpen={isOpen} onClose={onClose} isCentered>
//                 <ModalOverlay />
//                 <ModalContent p="5rem" maxW="70rem" minH="40rem" bg="background.800">
//                     <ModalHeader>
//                         <Heading size="2xl" color="text.200">
//                             Search for your Asset
//                         </Heading>
//                     </ModalHeader>
//                     <ModalCloseButton color="addition.185" size="4xl" p="1rem" _hover={{ bg: "background.500" }} />
//                     <ModalBody display="flex" flexDir="column">
//                         <Box as="form" onSubmit={handleSubmit(submit)} display="flex" flexDir="column" justifyContent="space-around" flex="1">
//                             {stepper === 0 ? (
//                                 <>
//                                     <Controller
//                                         control={control}
//                                         name="asset"
//                                         render={({ field: { onChange, value, name, ref } }) => (
//                                             <FormControl>
//                                                 <Select
//                                                     placeholder="Search Crypto/Stocks"
//                                                     size="2xl"
//                                                     useBasicStyles
//                                                     options={options}
//                                                     ref={ref}
//                                                     selectedOptionColorScheme="purple"
//                                                     chakraStyles={customStyles}
//                                                     onChange={(data: any) => {
//                                                         setSelectedOption(data);
//                                                         onChange(data);
//                                                     }}
//                                                     value={value}
//                                                 />
//                                             </FormControl>
//                                         )}
//                                     ></Controller>

//                                     <ButtonGroup w="100%" gap="2rem">
//                                         <GreenGradientBtn type="button" onClick={() => handleNextStep("buy")}>
//                                             Buy
//                                         </GreenGradientBtn>
//                                         <RedGradientBtn type="button" onClick={() => handleNextStep("sell")}>
//                                             Sell
//                                         </RedGradientBtn>
//                                     </ButtonGroup>
//                                 </>
//                             ) : null}
//                         </Box>
//                         {stepper === 1 ? <Purchase /> : null}
//                     </ModalBody>
//                 </ModalContent>
//             </Modal>
//         </>,
//         document.getElementById("portal") as HTMLElement
//     );
// };
