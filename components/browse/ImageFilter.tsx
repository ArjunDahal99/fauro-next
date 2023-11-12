"use client"

import getFilteredImages from "@/actions/get-image-by-filter"
import { Button } from "../ui/button"
import { useSearchParams } from "next/navigation";
import { useRouter, redirect } from "next/navigation";
import queryString from "query-string";



interface FilterProps
{
    name: string;
    valueKey: string;
}



const ImageFilter: React.FC<FilterProps> = ({ valueKey, name }) =>
{
    const searchParams = useSearchParams();
    const router = useRouter();
    const filterbyLike = async () =>
    {
        const current = queryString.parse(searchParams.toString());
        console.log(current);
        const query = {
            ...current,
            [valueKey]: true
        };
        console.log(query)


        if (current[valueKey] === 'true')
        {
            query[valueKey] = null
        }
        const url = queryString.stringifyUrl(
            {
                url: window.location.href,
                query,
            },
            { skipNull: true }
        )
        console.log(url)
        router.replace(url)
    }
    return (
        <>
            <Button onClick={filterbyLike}>{name}</Button>
        </>
    )
}

export default ImageFilter