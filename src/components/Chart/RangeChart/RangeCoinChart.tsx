import { useEffect, useRef, useState } from "react";
import { ColorType, createChart, ISeriesApi, Time } from "lightweight-charts";
import { Box } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { historyCoinData } from "src/api/crypto";

const chartOptions = {
    layout: { textColor: "white", fontFamily: `'Saira', sans-serif`, background: { type: ColorType.Solid, color: "rgb(26, 26, 42)" } },
    grid: {
        vertLines: {
            visible: false,
        },
        horzLines: {
            visible: false,
        },
    },
    crosshair: {
        vertLine: { labelBackgroundColor: "#F89F5B" },
        horzLine: { labelBackgroundColor: "#F89F5B" },
    },
    timeScale: {
        timeVisible: true,
    },
    innerWidth: "100px",
    innerHeight: "100px",
    autoSize: true,
};

export const RangeChart = ({ uuid, timePeriod }: { uuid: string; timePeriod: string }) => {
    const chartContainer = useRef<HTMLDivElement | null>(null);
    const [_, setRangeChart] = useState<ISeriesApi<"Area"> | null>(null);

    //! Coin history price call

    const {
        data: coinHistory,
        // isLoading: coinHistoryLoading,
        // error: coinHistoryError,
    } = useQuery({
        queryKey: ["coinHistory", { uuid: uuid, timePeriod: timePeriod }],
        queryFn: () => historyCoinData({ uuid: uuid as string, timePeriod: timePeriod }),
    });
    const priceHistory = coinHistory?.data?.history;

    //! Mapped price history + sort data in ascending order
    const mappedPriceHistory = priceHistory?.map((data) => {
        return {
            time: data.timestamp as Time,
            value: Number(data.price),
        };
    });

    const rangeChartData = mappedPriceHistory?.sort((a: any, b: any) => (a.time as number) - (b.time as number));

    useEffect(() => {
        if (rangeChartData) {
            // const handleResize = () => {
            //     chart.applyOptions({ width: chartContainer.current?.clientWidth });
            // };

            const chart = createChart(chartContainer.current as HTMLElement, chartOptions);

            const areaSeries = chart.addAreaSeries({
                lineColor: "#6857F2",
                topColor: "#493da9",
                bottomColor: "rgba(104, 87, 242, 0.28)",
            });
            setRangeChart(areaSeries);
            chart.timeScale().fitContent();
            areaSeries.setData(rangeChartData);

            // window.addEventListener("resize", handleResize);

            return () => {
                // window.removeEventListener("resize", handleResize);
                chart.remove();
            };
        }
    }, [coinHistory]);

    return (
        <>
            <Box
                ref={chartContainer}
                id="chart-container"
                w="80vw"
                h={{ base: "30vh", md: "40vh", xl: "60vh" }}
                boxShadow={"1px 21px 32px -33px rgba(0, 0, 0, 1)"}
            ></Box>
        </>
    );
};
