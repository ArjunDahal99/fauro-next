//@ts-nocheck
"use client"

import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { } from '@/app/dashboard/page'
const APILineChart = (LineChartdata: any) =>
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
    const tooltipData = LineChartdata.data.map((d) => d.name)
    const CustomTooltip = ({ active, payload, label }) =>
    {

        if (active && payload && payload.length)
        {
            return (
                <div className="custom-tooltip">
                    <p className='text-[16px]'>{payload[0].value} call</p>
                    <p className="intro text-sm">{tooltipData[label]}</p>
                </div>
            );
        }

        return null;
    };
    return (
        <div className=''>

            <LineChart
                width={380}
                height={180}
                data={LineChartdata.data}
                margin={{
                    top: 14,
                    right: 10,
                    left: 4,
                    bottom: 4
                }}
            >
                <Tooltip content={<CustomTooltip />} contentStyle={{ backgroundColor: "transparent" }} viewBox={{ x: 0, y: 0, width: 10, height: 10 }} />
                <Line
                    connectNulls
                    type="monotone"
                    dataKey="apiCall"
                    stroke="#8884d8"
                    fill="#8884d8"
                />
            </LineChart>

        </div>
    );

}

export default APILineChart