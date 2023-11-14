
//@ts-nocheck
"use client"
import React, { useEffect, useState } from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const ContainerForAreaChart = ({ data }: any) =>
{
    console.log(data)
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() =>
    {
        setIsMounted(true)
    }, [])

    if (!isMounted)
    {
        return null
    }

    function convertTo12HourFormat(hour)
    {
        if (hour >= 0 && hour <= 23)
        {
            if (hour === 0)
            {
                return "12 AM";
            } else if (hour < 12)
            {
                return hour + " AM";
            } else if (hour === 12)
            {
                return "12 PM";
            } else
            {
                return (hour - 12) + " PM";
            }
        } else
        {
            return "Invalid hour";
        }
    }

    const CustomTooltip = ({ active, payload, label }) =>
    {
        if (active && payload && payload.length)
        {

            return (
                <div className="custom-tooltip">
                    <p className="label text-sm">{payload[0].payload.apiCall > 1 ? `${payload[0].payload.apiCall} Calls` : `${payload[0].payload.apiCall}Call`} </p>
                    <p className=' text-sm'>{convertTo12HourFormat(payload[0].payload.hour)}</p>
                </div>
            );
        }

        return null;
    };




    return (
        <ResponsiveContainer width="90%" height="100%">
            <AreaChart
                width={300}
                height={350}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
                <Area type="monotone" dataKey="apiCall" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default ContainerForAreaChart

