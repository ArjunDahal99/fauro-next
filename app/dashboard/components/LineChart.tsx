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

    function mapNumberToDay(label)
    {
        switch (label)
        {
            case 0:
                return "Saturday";
            case 1:
                return "Sunday";
            case 2:
                return "Monday";
            case 3:
                return "Tuesday";
            case 4:
                return "Wednesday";
            case 5:
                return "Thursday";
            case 6:
                return "Friday";
            default:
                return "Invalid number";
        }
    }
    const CustomTooltip = ({ active, payload, label }) =>
    {

        if (active && payload && payload.length)
        {
            return (
                <div className="custom-tooltip">
                    <p className='text-[16px]'>{payload[0].value}</p>
                    <p className="intro text-sm">{mapNumberToDay(label)}</p>
                </div>
            );
        }

        return null;
    };
    return (
        <div>

            <LineChart
                width={380}
                height={190}
                data={LineChartdata.data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
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