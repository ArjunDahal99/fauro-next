"use client";
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
import { Button } from "@/components/ui/button";
import { usegalleyStore } from "@/store/store";
import axios from "axios";
import { MinusCircleIcon, MoreHorizontal, TrashIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function AlertDialogDemo({ data }: any) {
  const { data: session } = useSession();
  const getAllImageData = usegalleyStore((state: any) => state.getImageData);
  const router = useRouter();
  const deleteImage = async (data: any) => {
    await axios.delete("/api/delete-image", { data });
    getAllImageData(session?.user.id);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <MinusCircleIcon className="rounded-full bg-background text-violet-600" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-400 hover:bg-red-500"
            onClick={() => deleteImage(data)}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
