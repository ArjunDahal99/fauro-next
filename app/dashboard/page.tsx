

import prisma from "@/db/database.config"
import { useUserStore } from "@/store/store"
import { getServerSession } from "next-auth"
import { handler } from "../api/auth/[...nextauth]/route"
import DashboardCardInfo from "./components/DashboardCardInfo"
import { BarChart2Icon } from "lucide-react"
import NextAuth from "next-auth/next"
import { DataTable } from "./table/data-table"
import { ImageTable, columns } from "./table/columns"
import ColorRadialBarChart from "./components/ColorRadialBarChart"



const DashBoardPage = async () =>
{
    const data = await getServerSession(NextAuth(handler))

    const allUserData = await prisma.image.findMany({
        where: {
            createdBy: {
                //@ts-ignore
                email: data?.user.email
            }
        },
        include: {
            BackgroundColor: true,
            Like: true,
            createdBy: true,
        }
    },)


    const filteredDataForTable: ImageTable[] = allUserData.map((d) => ({
        id: d.id,
        color: d.BackgroundColor.map((i) => i.colorCode),
        prompt: d.prompt,
        like: d.Like.length,
        created_time: new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(d.created_At))
    }))


    //data for colors


    return (
        <div>
            <div className=" mb-20 flex justify-start md:pl-[150px] max-md:justify-center gap-x-4 items-center ">
                <h1 className=" text-3xl   md:text-4xl lg:text-5xl"> DashBoard</h1>
                <BarChart2Icon className=" w-6 h-6 md:w-16 md:h-16" />
            </div>
            <DashboardCardInfo data={allUserData} />

            <div className=" md:px-6 px-2 justify-center">
                <DataTable columns={columns} data={filteredDataForTable} />
            </div>

        </div>
    )




}








export default DashBoardPage