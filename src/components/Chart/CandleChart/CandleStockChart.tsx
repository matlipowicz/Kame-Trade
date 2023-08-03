import { useEffect, useRef, useState } from "react";
import { ColorType, createChart, ISeriesApi, UTCTimestamp } from "lightweight-charts";
import { Box } from "@chakra-ui/react";
import { StockHistory } from "src/api/types";

type CandleChartProps = {
    id: string;
    timePeriod: string;
    candleChartData:
        | {
              time: UTCTimestamp;
              open: number;
              high: number;
              low: number;
              close: number;
          }[]
        | undefined;
    historyPriceLoading: boolean;
    historyPrice: StockHistory | undefined;
};

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

export const CandleStockChart = ({ candleChartData, historyPrice }: CandleChartProps) => {
    const candleChartContainer = useRef<HTMLDivElement | null>(null);
    const [_, setCandleChart] = useState<ISeriesApi<"Candlestick"> | null>(null);

    useEffect(() => {
        if (candleChartData) {
            const handleResize = () => {
                chart.applyOptions({ width: candleChartContainer.current?.clientWidth });
            };
            const chart = createChart(candleChartContainer.current as HTMLElement, chartOptions);

            const candlestickSeries = chart.addCandlestickSeries({
                upColor: "#26a69a",
                downColor: "#ef5350",
                borderVisible: false,
                wickUpColor: "#26a69a",
                wickDownColor: "#ef5350",
            });
            setCandleChart(candlestickSeries);
            chart.timeScale().fitContent();
            candlestickSeries.setData(candleChartData);
            window.addEventListener("resize", handleResize);

            return () => {
                window.removeEventListener("resize", handleResize);

                chart.remove();
            };
        }
    }, [historyPrice]);

    return (
        <>
            <Box ref={candleChartContainer} id="chart-container" w="60vw" h={{ base: "30vh", md: "40vh", xl: "60vh" }}></Box>
        </>
    );
};
