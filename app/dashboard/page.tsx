

import prisma from "@/db/database.config"
import { useUserStore } from "@/store/store"
import { getServerSession } from "next-auth"
import { handler } from "../api/auth/[...nextauth]/route"
import DashboardCardInfo from "./components/DashboardCardInfo"
import { DashBoardCardProps } from "@/types"
import { Separator } from "@/components/ui/separator"
import { BarChart2Icon, ClipboardSignature, LayoutDashboardIcon } from "lucide-react"
import NextAuth from "next-auth/next"
export const dynamic = "force-dynamic";
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

    return (
        <div>
            <div className=" mb-20 flex justify-start md:pl-[150px] max-md:justify-center gap-x-4 items-center ">
                <h1 className=" text-3xl   md:text-4xl lg:text-5xl"> DashBoard</h1>
                <BarChart2Icon className=" w-6 h-6 md:w-16 md:h-16" />
            </div>
            <DashboardCardInfo data={allUserData} />
        </div>
    )




}








export default DashBoardPage