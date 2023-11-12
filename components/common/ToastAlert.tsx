

import { useToast } from "@/components/ui/use-toast"
const { toast } = useToast()

export const ToastAlert = ({ text }: { text: string }) =>
{
    return (
        toast({
            description: text,
        })
    )
}

