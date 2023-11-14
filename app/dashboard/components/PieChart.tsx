"use client"
import { TokenIcon } from "@/public/icons";
import { GaugeCircleIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";



const COLORS = ["#8884d8", "#445D48"];
export default function TokenPieChart({ data }: any)
{
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() =>
    {
        setIsMounted(true)
    }, [])

    if (!isMounted)
    {
        return null
    }

    const chartData = [
        { name: "used", value: data },
        { name: "total", value: 100 - data },
    ];

    return (
        <>
            <div className=" relative">

                <PieChart width={180} height={200} barGap={20}>
                    <Pie
                        data={chartData}
                        innerRadius={70}
                        outerRadius={80}
                        dataKey="value"
                        stroke="none"
                    >
                        {chartData.map((entry: any, index: any) => (
                            <Cell key={`cell-${index}`} className=" cursor-pointer" fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>


                <h1 className=" absolute top-[80px] left-[70px]">{data}</h1>
            </div>

        </>

    );
}
