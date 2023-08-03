// import { InputGroup, Input, FormLabel, Container, Box, Text, FormControl } from "@chakra-ui/react";
// import { GreenGradientBtn } from "src/components/Buttons/GreenGradientBtn";
// import { useForm, Controller } from "react-hook-form";
// import { useMultiStepFormContext } from "src/context/MultiStepFormContext";
// import { RedGradientBtn } from "src/components/Buttons/RedGradientBtn";
// import { useEffect, useState } from "react";

// export const Purchase = () => {
//     const [dynamicValue, setDynamicValue] = useState<any>("");
//     const { assetState, setAssetState } = useMultiStepFormContext();
//     const { register, handleSubmit, watch, control, setValue } = useForm({
//         defaultValues: {
//             type: assetState.type,
//             asset: assetState.asset,
//             amount: "",
//             price: "",
//         },
//     });
//     const watchAmount = watch("amount");
//     let priceTimesAmount = Number(watchAmount) * Number(assetState?.asset?.price);

//     const submit = (data) => {
//         alert(JSON.stringify(data, null, 2));
//     };
//     console.log(dynamicValue);
//     const { ref, ...rest } = register("price");
//     return (
//         <>
//             <Box display="flex" flexDir="column" gap="1rem" mb="4rem">
//                 <Text>{`1 ${assetState?.asset?.name} = ${Number(assetState?.asset?.price).toFixed(2)} USD`}</Text>
//                 <Text>Available balance: 10000 USD</Text>
//             </Box>
//             <Container as="form" onSubmit={handleSubmit(submit)} display="flex" flexDir="column" gap="3rem">
//                 {/* <FormControl variant="floating"> */}
//                 {/* <FormLabel htmlFor="amount" color="#000" backgroundColor="transparent">
//                         Amount of an asset
//                     </FormLabel> */}
//                 <Input
//                     placeholder="Quantity of an asset you want to purchase"
//                     {...register("amount")}
//                     p="2rem 1rem 2rem 2rem"
//                     fontSize="2rem"
//                     color="addition.185"
//                     borderColor="addition.700"
//                     borderWidth="0.3rem"
//                     borderRadius="0.375rem"
//                     _focusVisible={{ borderColor: "addition.800" }}
//                     _hover={{ borderColor: "addition.800" }}
//                 ></Input>
//                 {/* </FormControl> */}
//                 {/* <FormLabel htmlFor="price">Asset Price</FormLabel> */}
//                 {/* <FormControl variant="floating"> */}
//                 <Input
//                     p="2rem 1rem 2rem 2rem"
//                     fontSize="2rem"
//                     borderColor="addition.700"
//                     borderWidth="0.3rem"
//                     borderRadius="0.375rem"
//                     _focusVisible={{ borderColor: "addition.800" }}
//                     _hover={{ borderColor: "addition.800" }}
//                     ref={register("price")}
//                     value={priceTimesAmount.toFixed(2)}
//                 ></Input>

//                 {/* </FormControl> */}
//                 {assetState?.type === "buy" ? (
//                     <GreenGradientBtn type="submit">Buy</GreenGradientBtn>
//                 ) : (
//                     <RedGradientBtn type="submit">Sell</RedGradientBtn>
//                 )}
//             </Container>
//             <pre>{JSON.stringify(watch(), null, 2)}</pre>
//         </>
//     );
// };
