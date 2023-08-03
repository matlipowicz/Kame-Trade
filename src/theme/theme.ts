import { extendTheme } from "@chakra-ui/react";
import { fonts } from "./fonts";
import { colors } from "./colors";
const activeLabelStyles = {
    transform: "scale(0.85) translateY(-24px)",
};
export const theme = extendTheme({
    colors,
    fonts,

    styles: {
        global: () => ({
            html: {
                fontSize: "62.5%", // --> 1 rem = 10px
            },
            body: {
                backgroundImage: "url(src/assets/miscellaneous/Stock-chart.svg)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                bg: "background.800",

                color: "text.100",
            },
            th: {
                fontSize: "14px",
            },
        }),
    },
    // components: {
    //     Form: {
    //         variants: {
    //             floating: {
    //                 container: {
    //                     _focusWithin: {
    //                         label: {
    //                             ...activeLabelStyles,
    //                         },
    //                     },
    //                     "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label": {
    //                         ...activeLabelStyles,
    //                     },
    //                     label: {
    //                         top: 0,
    //                         left: 0,
    //                         zIndex: 2,
    //                         position: "absolute",
    //                         backgroundColor: "white",
    //                         pointerEvents: "none",
    //                         mx: 3,
    //                         px: 1,
    //                         my: 2,
    //                         transformOrigin: "left top",
    //                     },
    //                 },
    //             },
    //         },
    //     },
    // },
});
