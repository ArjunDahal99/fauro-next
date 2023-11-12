


import axios from "axios";
import { usePathname } from "next/navigation";
import queryString from "query-string";





const URL = `http://localhost:3000/api/browse`



interface Query
{
    color?: string
    tag?: string
    like?: boolean
    latest?: boolean
    userId?: string
}

const getFilteredImages = async (query: Query): Promise<any> =>
{

    try
    {
        console.log(query)
        const url = queryString.stringifyUrl({
            url: URL,
            query: {
                color: query.color,
                tag: query.tag,
                like: query.like,
                latest: query.latest,
                userId: query.userId,
            }
        })
        console.log(url)
        const { data } = await axios.get(url)
        return data
    } catch (error)
    {
        console.log(error);
    }
};

export default getFilteredImages