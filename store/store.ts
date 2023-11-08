import axios from 'axios'
import { create } from 'zustand'

interface ToggleStateType
{
    showToggle: boolean
    switchToggle: () => void
}




interface InputType
{
    inputDiamention: string
    switchInputDiamention: (s: string) => void
    inputOutputNo: string
    switchOutputNo: (s: string) => void
    engineModel: any
    switchEngine: (s: any) => void
}



interface UserType
{
    id: string;
    username: string;
    email: string;
    about?: string
    pp: string;
    token: number;
    getUser: (s: string) => void
}
// interface ImageType {
//     data?: {
//         id: number,
//         height: number,
//         width: number,
//         prompt: string,
//         userId: string,
//         LikeCount: number,
//         url: string,

//     }

//     getImage: (s: string) => void
// }







export const useToggle = create<ToggleStateType>()((set) => ({
    showToggle: false,
    switchToggle: () => set((state) => ({ showToggle: !state.showToggle })),
}))
export const usePulbishToggle = create<ToggleStateType>()((set) => ({
    showToggle: true,
    switchToggle: () => set((state) => ({ showToggle: !state.showToggle })),
}))



export const useUserStore = create<UserType>()((set) => ({
    id: '',
    username: '',
    email: '',
    pp: '',
    token: 0,

    getUser: (data) =>
    {
        try
        {
            axios.post('/api/get-user-info', { email: data }).then(res =>
            {
                console.log(res.data)
                set(state => ({
                    id: res.data.user.id,
                    username: res.data.user.username,
                    email: res.data.user.email,
                    pp: res.data.user.pp,
                    token: res.data.user.token,
                }))
            }

            )
        } catch (error)
        {
            console.log(error)
        }

    }
}))


export const usegalleyStore = create((set) => ({

    data: null,
    getImageData: async (userId: any) =>
    {
        console.log(userId)
        if (userId)
        {
            await axios.post('/api/get-user-generated-img', { userId })
                .then(res => set((state: any) => ({
                    data: res.data
                })))
        }

    }
}))








export const useInput = create<InputType>()((set) => ({
    inputDiamention: '512x512',
    switchInputDiamention: (s) => set((state) => ({ inputDiamention: s })),
    inputOutputNo: "1",
    switchOutputNo: (s) => set((state) => ({ inputOutputNo: s })),
    engineModel: "stability-ai/sdxl:1bfb924045802467cf8869d96b231a12e6aa994abfe37e337c63a4e49a8c6c41",
    switchEngine: (s) => set((state) => ({ engineModel: s })),
}))


