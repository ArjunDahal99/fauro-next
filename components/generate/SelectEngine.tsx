import React, { useState } from "react";
import
  {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { DreamShaperImg, StabilityImg } from "@/public/images";
import Image, { StaticImageData } from "next/image";
import
  {
    ArrowBigDownDash,
    ArrowDown,
    ArrowDown01Icon,
    ArrowDownAZ,
    ArrowDownCircleIcon,
    ChevronDown,
  } from "lucide-react";
import { useInput } from "@/store/store";

type Engine = {
  [key: string]: {
    name: string;
    image: StaticImageData;
    api: string;
  };
};

const EngineObject: Engine = {
  engine1: {
    name: "Stability v12",
    image: StabilityImg,
    api: "luosiallen/latent-consistency-model:553803fd018b3cf875a8bc774c99da9b33f36647badfd88a6eec90d61c5f62fc",
  },
  engine2: {
    name: "DreamShaper Ai",
    image: DreamShaperImg,
    api: "cjwbw/dreamshaper:ed6d8bee9a278b0d7125872bddfb9dd3fc4c401426ad634d8246a660e387475b",
  },
};

export function SelectEngine()
{
  const [selectedModel, setSelectedModel] = useState<string>("engine1");
  const switchEngine = useInput((state) => state.switchEngine);

  const handleMenuItemClick = (model: string) =>
  {
    setSelectedModel(model);
    switchEngine(EngineObject[model].api);
  };

  return (
    <div className="border-2 rounded-full border-violet-600 w-[250px]">
      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer " asChild>
          <div className="flex items-center p-2 space-x-3 rounded-full justify-evenly">
            <Image
              src={EngineObject[selectedModel]?.image}
              alt="engine"
              className="w-6 rounded-md"
            />
            <h1>{EngineObject[selectedModel]?.name}</h1>
            <ChevronDown />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Select Model</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => handleMenuItemClick("engine1")}>
            Stability v12
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => handleMenuItemClick("engine2")}>
            Dream Shaper v7
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
