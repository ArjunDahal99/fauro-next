import { DashBoardCardProps } from '@/types'
import React from 'react'
import TokenPieChart from './PieChart'
import CardContainer from './CardContainer'
import { BananaIcon, HeartIcon, ZapIcon } from 'lucide-react'
import APILineChart from './LineChart'
import LikeBarChart from './BarChart'
import TodayAPICall from './TodayAPICall'





const DashboardCardInfo = ({ data }: { data: any }) =>
{

    const totalLike = data.reduce((sum: number, image: any) => sum + image.Like.length, 0)
    let token;
    if (!data[0]?.createdBy.token)
    {
        token = 100
    } else
    {
        token = data[0]?.createdBy.token
    }
    // for the API call data
    const totalApiCall = data.length
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const LineChartdata = daysOfWeek.map(day =>
    {
        const apiCall = data.reduce((count: any, image: any) =>
        {
            const imageDay = image.created_At.toLocaleDateString('en-US', { weekday: 'long' });
            return count + (day === imageDay ? 1 : 0);
        }, 0);

        return { name: day, apiCall };
    });

    //FOR API CALL FOR ONE DAY
    const currentDate = new Date();

    // Initialize an array with hours of the day (0-23)
    const hoursOfDay = Array.from({ length: 24 }, (_, index) => index);

    const TodayAPICallData = hoursOfDay.map(hour =>
    {
        const apiCall = data.reduce((count: any, image: any) =>
        {
            const imageHour = image.created_At.getHours();
            return count + (hour === imageHour ? 1 : null);
        }, null);

        return { hour, apiCall: apiCall > 0 ? apiCall : null };
    });



    return (
        <>
            <div className=" flex justify-evenly flex-wrap gap-4">
                <TokenPieChart data={token} />
                <CardContainer children={<APILineChart data={LineChartdata} />} title='Api Request' icon={<BananaIcon />} value={totalApiCall} />
                <CardContainer children={<LikeBarChart />} title='Likes' icon={<HeartIcon />} value={totalLike} />
            </div>
            <div className="  h-screen w-full flex justify-center flex-col items-center  ">
                <h1 className=' text-2xl font-bold'>Todays Api Call</h1>
                <TodayAPICall data={TodayAPICallData} />
            </div>


        </>
    )
}

export default DashboardCardInfo