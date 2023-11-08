import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { CloseIcon } from "@/public/icons";
import { Close } from "@radix-ui/react-popover";

import { TrashIcon } from "lucide-react";
import Image from "next/image";

export function AlertPicture({ src, alt, width, height, sizes }: any) {
  const widthHeightRatio = height / width;
  const galleryHeight = Math.ceil(350 * widthHeightRatio);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Image
          src={src}
          alt={alt}
          width={350}
          height={galleryHeight}
          sizes="250px"
          className=""
        />
      </AlertDialogTrigger>
      <AlertDialogContent className="flex ">
        <Image
          src={src}
          alt={alt}
          width={350}
          height={galleryHeight}
          sizes="250px"
          className=""
        />
        <div className="">
          <h1 className=" text-[14px]">Prompt:{alt}</h1>
          <h1 className="text-sm ">Size :{height + " x" + width} pixel</h1>
          <AlertDialogCancel className="absolute top-0 right-1 bg-none ">
            X
          </AlertDialogCancel>
          <AlertDialogAction className="mt-3 text-sm border-2 bg-background border-stone-700">
            Copy Prompt
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
