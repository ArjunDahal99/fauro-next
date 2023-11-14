"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ImageTable = {
    id: number
    prompt: string
    color: string[]
    like: number
    created_time: string
}

export const columns: ColumnDef<ImageTable>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "prompt",
        header: "Prompt",

    },
    {
        accessorKey: "like",
        header: ({ column }) =>
        {
            return (
                <Button
                    variant="ghost"
                    className=" ml-[-25px]"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Like
                    <ArrowUpDown className=" h-4 w-4" />
                </Button>
            )
        },

    },
    {
        accessorKey: "color",
        header: "Color",
        cell: ({ row }) => (
            <div className=" flex items-center gap-x-2">
                {row.original.color.map((c) => (
                    <div
                        className=" h-6 w-6 rounded-full border"
                        style={{ backgroundColor: c }}
                    />
                ))}
            </div>
        )

    },
    {
        accessorKey: "created_time",
        header: "Date",
    },
]
