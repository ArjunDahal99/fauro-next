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

import { TrashIcon } from "lucide-react";
import Image from "next/image";

export function AlertPicture({ src, alt, width, height, sizes }: any) {
  console.log(height);
  const widthHeightRatio = height / width;
  const galleryHeight = Math.ceil(350 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 10) + 1;
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
      <AlertDialogContent className="flex flex-col items-center justify-center">
        <Image
          src={src}
          alt={alt}
          width={350}
          height={galleryHeight}
          sizes="250px"
          className=""
        />
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
