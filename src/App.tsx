import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme/theme.ts";
import "@fontsource/saira/200.css";
import "@fontsource/saira/700.css";
import { Navigation } from "./components/Nav/Nav.tsx";
import { Footer } from "./components/Footer/Footer.tsx";
import { About, Browse, ForgotPassword, ChangePassword } from "./pages/index";
import { CoinDetails } from "src/components/AssetDetails/Coin/CoinDetails.tsx";
import { StockDetails } from "src/components/AssetDetails/Stock/StockDetail.tsx";
import { GridLayout } from "src/layouts/Grid.tsx";
import { GridItem } from "@chakra-ui/react";
import { SignIn } from "src/components/Login/SignIn.tsx";
import { SignUp } from "src/components/Login/SignUp.tsx";
import { AuthProvider } from "src/context/AuthContext.tsx";
import { ProtectedRoute } from "src/utils/ProtectedRoute.tsx";
import { Construction } from "src/components/UnderConstruction/Construction.tsx";

// TODO: Lazy loading

export function App() {
    return (
        <>
            <BrowserRouter>
                <ChakraProvider theme={theme}>
                    <AuthProvider>
                        <GridLayout>
                            <GridItem colSpan={2} position="sticky" top="0" zIndex={1000} alignSelf={"start"}>
                                <Navigation />
                            </GridItem>

                            <Routes>
                                <Route
                                    path="/"
                                    element={
                                        <GridItem colSpan={{ base: 1, md: 1, lg: 2 }} alignSelf="start">
                                            <About />
                                        </GridItem>
                                    }
                                />
                                <Route path="/browse">
                                    <Route
                                        index
                                        element={
                                            <GridItem colSpan={2}>
                                                <Browse />
                                            </GridItem>
                                        }
                                    />
                                    <Route path="crypto">
                                        <Route path=":id/:uuid" element={<CoinDetails />} />
                                    </Route>
                                    <Route path="stock">
                                        <Route path=":id" element={<StockDetails />} />
                                    </Route>
                                </Route>

                                <Route
                                    path="/profile"
                                    element={
                                        <ProtectedRoute>
                                            {/* <Profile /> */}
                                            <Construction />
                                        </ProtectedRoute>
                                    }
                                />
                                <Route
                                    path="/simulate_investment"
                                    element={
                                        <ProtectedRoute>
                                            {/* <SymulateInvest /> */}
                                            <Construction />
                                        </ProtectedRoute>
                                    }
                                />
                                {/* <Route path="/profile" element={<Construction />} />
                                    <Route path="/symulate_investment" element={<Construction />} /> */}

                                <Route
                                    path="/login"
                                    element={
                                        <GridItem colSpan={{ base: 1, lg: 2 }}>
                                            <SignIn />
                                        </GridItem>
                                    }
                                />
                                <Route
                                    path="/registration"
                                    element={
                                        <GridItem colSpan={{ base: 1, lg: 2 }}>
                                            <SignUp />
                                        </GridItem>
                                    }
                                />
                                <Route
                                    path="/forgottenpassword"
                                    element={
                                        <GridItem colSpan={{ base: 1, lg: 2 }}>
                                            <ForgotPassword />
                                        </GridItem>
                                    }
                                />
                                <Route
                                    path="/change-password"
                                    element={
                                        <GridItem colSpan={{ base: 1, lg: 2 }}>
                                            <ChangePassword />
                                        </GridItem>
                                    }
                                />
                            </Routes>

                            <GridItem colSpan={2} alignSelf="end">
                                <Footer />
                            </GridItem>
                        </GridLayout>
                    </AuthProvider>
                </ChakraProvider>
            </BrowserRouter>
        </>
    );
}
