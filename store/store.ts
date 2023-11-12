import axios from 'axios'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
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
    id: string | null;
    username: string;
    email: string;
    about?: string
    pp: string;
    token: number;
    getUser: (s: string) => void
}




export const useToggle = create<ToggleStateType>()((set) => ({
    showToggle: false,
    switchToggle: () => set((state) => ({ showToggle: !state.showToggle })),
}))
export const usePulbishToggle = create<ToggleStateType>()((set) => ({
    showToggle: true,
    switchToggle: () => set((state) => ({ showToggle: !state.showToggle })),
}))



export const useUserStore = create<UserType>()(
    persist(
        (set) => ({
            id: null,
            username: '',
            email: '',
            pp: '',
            token: 0,
            getUser: async (data) =>
            {
                try
                {
                    if (data)
                    {
                        await axios.post('/api/get-user-info', { id: data }).then(res =>
                        {
                            set(state => ({
                                id: res.data.user.id,
                                username: res.data.user.username,
                                email: res.data.user.email,
                                pp: res.data.user.pp,
                                token: res.data.user.token,
                            }))
                        }
                        )
                    }
                } catch (error)
                {
                    console.log(error)
                }
            }
        }),
        {
            name: 'name',
            storage: createJSONStorage(() => localStorage),
        }
    )
)


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
    inputDiamention: '768x768',
    switchInputDiamention: (s) => set((state) => ({ inputDiamention: s })),
    inputOutputNo: "1",
    switchOutputNo: (s) => set((state) => ({ inputOutputNo: s })),
    engineModel: "luosiallen/latent-consistency-model:553803fd018b3cf875a8bc774c99da9b33f36647badfd88a6eec90d61c5f62fc",
    switchEngine: (s) => set((state) => ({ engineModel: s })),
}))


