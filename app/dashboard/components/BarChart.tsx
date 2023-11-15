//@ts-nocheck
"use client"
import React, { useEffect, useState } from 'react'
import
{
    BarChart,
    Bar,
    ResponsiveContainer,
    Tooltip,
    XAxis,
} from "recharts";

const LikeBarChart = ({ data }: { data: any }) =>
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

    const tooltipData = data.map((d) => d.name)
    const CustomTooltip = ({ active, payload, label }) =>
    {
        if (active && payload && payload.length)
        {
            return (
                <div className="custom-tooltip">
                    <p className='text-[16px]'>{payload[0].value} Likes</p>
                    <p className="intro text-sm">{tooltipData[label]}</p>
                </div>
            );
        }

        return null;
    };
    return (
        <div className=" w-full h-full mt-20">
            <ResponsiveContainer width="99%" height="100%">
                <BarChart width={250} height={40} data={data}>
                    <Bar dataKey="apiCall" fill="#8884d8" />
                    <Tooltip content={<CustomTooltip />} contentStyle={{ backgroundColor: "transparent" }} viewBox={{ x: 0, y: 0, width: 10, height: 10 }} />
                    <XAxis style={{ fontSize: "12px" }} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );

}

export default LikeBarChart











