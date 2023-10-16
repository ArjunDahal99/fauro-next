"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { LoadingFox } from "../common/Loading";
import GalleryCardContainer, { ImageType } from "./GalleryCardContainer";

interface GalleryCardContainerProps {
  data: ImageType;
}
const UserGallery = () => {
  const { data: session } = useSession();
  const [allImageData, setAllImageData] = useState([]);

  useEffect(() => {
    const getAllUserImage = async () => {
      const { data } = await axios.post("/api/get-user-generated-img", {
        email: session?.user.id,
      });
      setAllImageData(data);
    };
    getAllUserImage();
  }, []);

  if (!allImageData) return <LoadingFox />;

  return (
    <>
      <section className="  grid grid-cols-gallery auto-rows-[10px] w-[60%] ">
        {allImageData &&
          allImageData.map((photo) => (
            <GalleryCardContainer data={photo} key={session?.user?.id} />
          ))}
      </section>
    </>
  );
};

export default UserGallery;
