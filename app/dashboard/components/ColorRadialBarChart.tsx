//@ts-nocheck
"use client"

import React, { useEffect, useState } from 'react'
import { Legend, RadialBar, RadialBarChart, ResponsiveContainer, Tooltip } from 'recharts';

const ColorRadialBarChart = ({ data }: any) =>
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

    function extractImageColors(image: any)
    {
        return image.BackgroundColor.map((colorInfo: any) => ({
            color: colorInfo.color,
            colorCode: colorInfo.colorCode,
        }));
    }
    const colorData = data?.map(image => (
        extractImageColors(image)
    ));
    const flattenedArray = colorData.flat();
    const colorCounts = {};
    flattenedArray.forEach(({ color, colorCode }) =>
    {
        if (colorCounts[color])
        {
            colorCounts[color].count++;
        } else
        {
            colorCounts[color] = {
                colorCode: colorCode,
                count: 1,
            };
        }
    });
    const uniqueColors = Object.entries(colorCounts).map(([color, { colorCode, count }]) => ({
        color,
        colorCode,
        count,
    }));
    const finalData = uniqueColors.map((c) => ({
        name: c.color,
        fill: c.colorCode,
        No: c.count
    }))
    const style = {
        lineHeight: "20px",

    };

    return (



        <RadialBarChart
            width={400}
            height={450}
            cx='50%'
            cy="50%"
            innerRadius='1%'
            outerRadius='100%'
            barSize={20}
            data={finalData}
        >
            <RadialBar
                minAngle={15}
                background={{ fill: " rgba(128, 90, 128,0.2)" }}
                clockWise
                dataKey="No"
            />
            <Tooltip />
            <Legend wrapperStyle={style} wordSpacing={10} />
        </RadialBarChart>



    )
}

export default ColorRadialBarChart