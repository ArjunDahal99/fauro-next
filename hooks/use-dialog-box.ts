
import { create } from "zustand";

import { ImagePropsType } from "@/types";

interface PreviewModalStore
{
    isOpen: boolean,
    data?: ImagePropsType,
    onOpen: (data: ImagePropsType) => void,
    onClose: () => void
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (data: ImagePropsType) => set({ data: data, isOpen: true }),
    onClose: () => set({ isOpen: false },)
}))

export default usePreviewModal;