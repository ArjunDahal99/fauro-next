"use client"
import { TokenIcon } from "@/public/icons";
import { GaugeCircleIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";


// AliceBlue	(240, 248, 255)	#F0F8FF
// Coral	(255, 127, 80)	#FF7F50
// FireBrick	(178, 34, 34)	#B22222
// HotPink	(255, 105, 180)	#FF69B4
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
            <div className=" rounded-md  shadow-2xl dark:shadow-sm  dark:shadow-slate-300 w-[400px] h-[245px]  ">
                <div className=" flex  items-center space-x-2 px-8 pt-3">
                    <h1 className=" text-2xl">Token Left</h1>
                    <GaugeCircleIcon size={30} />

                </div>
                <div className="  rounded-md   flex flex-col justify-center items-center ml-3 relative   ">


                    <PieChart width={200} height={200} barGap={20}>
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


                    <h1 className=" absolute top-[42%] left-[45%] text-3xl origin-center">{data}</h1>
                </div>

            </div>

        </>

    );
}
