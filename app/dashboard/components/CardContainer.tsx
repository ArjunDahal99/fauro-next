import { ZapIcon } from 'lucide-react'
import React from 'react'


interface CardContainerProps
{
    children?: React.ReactNode,
    title: string,
    icon: React.ReactNode,
    value: any
}



const CardContainer: React.FC<CardContainerProps> = ({ children, title, icon, value }) =>
{
    return (
        <div className='  shadow-2xl dark:shadow-sm  dark:shadow-slate-300 w-[400px] h-[245px] rounded-md'>
            <div className=" flex space-x-2 items-center px-8 pt-4 ">
                <h1 className='  text-2xl opacity-75 '>{title}</h1>
                {icon}
                <h1 className=' text-3xl font-bold '>{value}</h1>
            </div>
            <div className="flex justify-center ml-2 items-center text-4xl w-full h-[calc(100%-5rem)]  ">
                {children}
            </div>

        </div>
    )
}

export default CardContainer