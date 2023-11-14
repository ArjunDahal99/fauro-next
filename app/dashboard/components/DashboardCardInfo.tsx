
import TokenPieChart from './PieChart'
import CardContainer from './CardContainer'
import { ActivityIcon, BananaIcon, GaugeCircleIcon, HeartIcon, PaletteIcon, ZapIcon } from 'lucide-react'
import APILineChart from './LineChart'
import LikeBarChart from './BarChart'
import TodayAPICall from './TodayAPICall'
import TodayAPICallAreaChart from './AreaChart'
import ContainerForAreaChart from './AreaChart'
import ColorRadialBarChart from './ColorRadialBarChart'





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
    const currentDate = new Date();
    const lastSevenDays = new Array(7).fill(0).map((_, index) =>
    {
        const day = new Date(currentDate);
        day.setDate(currentDate.getDate() - index);
        return day;
    });

    // Reverse the lastSevenDays array
    lastSevenDays.reverse();

    const LineChartdata = lastSevenDays.map(day =>
    {
        const formattedDay = day.toLocaleDateString('en-US', { weekday: 'long' });
        const apiCall = data.reduce((count: any, image: any) =>
        {
            const imageDay = new Date(image.created_At).toLocaleDateString('en-US', { weekday: 'long' });
            return count + (formattedDay === imageDay ? 1 : 0);
        }, 0);

        return { name: formattedDay, apiCall };
    });

    console.log(LineChartdata)

    //FOR API CALL FOR ONE DAY


    const hoursOfDay = Array.from({ length: 24 }, (_, index) => index);
    const currentDay = currentDate.getDate();
    const TodayAPICallData = hoursOfDay.map(hour =>
    {
        const imageHour = new Date(currentDate);
        imageHour.setHours(hour);
        const filteredData = data.filter((image: any) =>
        {
            return (
                image.created_At.getHours() === imageHour.getHours() &&
                image.created_At.getDate() === currentDay
            );
        });
        const apiCall = filteredData.length;
        return { hour, apiCall: apiCall > 0 ? apiCall : null };
    });

    const todayapicalllength = (TodayAPICallData.filter((e) => e.apiCall !== null).length === 0) ? 0 : TodayAPICallData.filter((e) => e.apiCall !== null).length


    return (
        <>
            <div className=" flex justify-evenly flex-wrap">

                <CardContainer children={<APILineChart data={LineChartdata} />} title='Api Request' icon={<BananaIcon />} value={totalApiCall} />
                <CardContainer children={<LikeBarChart />} title='Likes' icon={<HeartIcon />} value={totalLike} />
                <CardContainer children={<ContainerForAreaChart data={TodayAPICallData} />} title='Today API Usages' icon={<ActivityIcon />} value={todayapicalllength} />
                <CardContainer children={<TokenPieChart data={token} />} title='Token Left' icon={<GaugeCircleIcon />} />
            </div>
            <div className=" w-full h-full flex md:mt-20 mt-5  items-center flex-col justify-center">
                <div className=' text-2xl flex items-center justify-center space-x-2 '>
                    <h1 className=' font-bold'>
                        Color Graph
                    </h1>
                    <PaletteIcon />
                </div>
                <ColorRadialBarChart data={data} />
            </div>
            <div className="  h-fit mt-10 w-full flex justify-center flex-col items-center  ">
                <h1 className=' text-2xl font-bold'>24 hr Api Call</h1>
                <TodayAPICall data={TodayAPICallData} />
            </div>


        </>
    )
}

export default DashboardCardInfo