import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AlertOctagon, HelpCircle } from "lucide-react";

export function WarninigIcon({ text }: any) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <AlertOctagon className="w-5 h-5 text-red-500 " />
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-red-500 ">{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
