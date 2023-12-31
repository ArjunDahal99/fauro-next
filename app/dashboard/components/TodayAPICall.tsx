//@ts-nocheck
"use client"
import React, { useEffect, useState } from 'react'
import { CartesianGrid, Legend, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from 'recharts'

const TodayAPICall = ({ data }: any) =>
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
                    <p className="label text-md">{payload[0].payload.apiCall > 1 ? `${payload[0].payload.apiCall} Calls` : `${payload[0].payload.apiCall}Call`} </p>
                    <p className=' text-md'>{convertTo12HourFormat(payload[0].payload.hour)}</p>

                </div>
            );
        }

        return null;
    };


    return (
        <ResponsiveContainer minWidth={screen} height={400}>
            <ScatterChart
                width={1200}
                height={500}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 10,
                    left: 10,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" type="number" name="Time" unit={"hr"} />
                <YAxis dataKey="apiCall" type="number" name="No of api call" />
                <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
                <Legend />
                <Scatter name='Api Call' data={data} fill="#8884d8" />
            </ScatterChart>
        </ResponsiveContainer>

    )
}

export default TodayAPICall