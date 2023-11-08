"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { LoadingFox } from "../common/Loading";
import GalleryCardContainer, { ImageType } from "./GalleryCardContainer";
import { Award } from "lucide-react";
import { usegalleyStore } from "@/store/store";

interface GalleryCardContainerProps {
  data: ImageType;
}
const UserGallery = () => {
  const { data: session } = useSession();
  const getAllImageData = usegalleyStore((state: any) => state.getImageData);
  const galleryDataFromStore = usegalleyStore((state: any) => state.data);

  useEffect(() => {
    getAllImageData(session?.user.id);
  }, [session?.user]);

  return (
    <>
      <section className="  grid grid-cols-gallery auto-rows-[10px] w-[60%] ">
        {galleryDataFromStore ? (
          galleryDataFromStore.map((photo: any) => (
            <GalleryCardContainer data={photo} key={session?.user?.id} />
          ))
        ) : (
          <LoadingFox />
        )}
      </section>
    </>
  );
};

export default UserGallery;
