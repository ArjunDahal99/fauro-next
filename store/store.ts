import { create } from 'zustand'

interface ToggleStateType {
    showToggle: boolean
    switchToggle: () => void
}
interface InputType {
    inputDiamention: string
    switchInputDiamention: (s: string) => void
    inputOutputNo: string
    switchOutputNo: (s: string) => void
    engineModel: any
    switchEngine: (s: any) => void
}

export const useToggle = create<ToggleStateType>()((set) => ({
    showToggle: false,
    switchToggle: () => set((state) => ({ showToggle: !state.showToggle })),
}))
export const useInput = create<InputType>()((set) => ({
    inputDiamention: '512x512',
    switchInputDiamention: (s) => set((state) => ({ inputDiamention: s })),
    inputOutputNo: "1",
    switchOutputNo: (s) => set((state) => ({ inputOutputNo: s })),
    engineModel: "stability-ai/sdxl:1bfb924045802467cf8869d96b231a12e6aa994abfe37e337c63a4e49a8c6c41",
    switchEngine: (s) => set((state) => ({ engineModel: s })),
}))

