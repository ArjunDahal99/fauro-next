
"use client"
import React, { useEffect, useState } from 'react'
import
{
    BarChart,
    Bar,
    ResponsiveContainer,
} from "recharts";

const LikeBarChart = () =>
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

    const data = [
        {
            name: "Page A",
            uv: 4000,
        },
        {
            name: "Page B",
            uv: 3000,
        },
        {
            name: "Page C",
            uv: 2000,

        },
        {
            name: "Page D",
            uv: 2780,
        },
        {
            name: "Page E",
            uv: 1890,
        },
        {
            name: "Page F",
            uv: 2390,
        },
        {
            name: "Page G",
            uv: 3490,
        }
    ];

    return (
        <div>

            <BarChart
                width={350}
                height={170}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <Bar dataKey="uv" fill="#8884d8" />
            </BarChart>

        </div >
    );

}

export default LikeBarChart











