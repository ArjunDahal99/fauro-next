import { Image, Like, User } from "@prisma/client";


type BackgroundColorType = {
    color: string;
    colorCode: string;
    percentage: number;
};



export type ImagePropsType =
    {
        imageId: number,
        height: number
        width: number,
        prompt: string,
        url: string,
        created_At: string,
        username: string,
        likes: string[]
        pp: string,
        tags?: string[],
        backgroundColor: BackgroundColorType[]
    }

export type DashBoardCardProps = {
    totalApiCall: number
    token: number
    totalLike: number
}
