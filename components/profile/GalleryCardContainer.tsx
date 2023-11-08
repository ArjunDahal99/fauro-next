import React from "react";

import { AlertDialogDemo } from "./AlertDelete";
import { AlertPicture } from "./AlertPicture";

export interface ImageType {
  id: number;
  height: number;
  width: number;
  prompt: string;
  userId: string;
  LikeCount: number;
  url: string;
}
const GalleryCardContainer = ({ data }: { data: ImageType }) => {
  console.log(data);
  const widthHeightRatio = data.height / data.width;
  const galleryHeight = Math.ceil(350 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 10) + 1;

  return (
    <div
      style={{ gridRow: `span ${photoSpans}` }}
      className="w-[350px] group justify-self-center relative "
    >
      <div
        key={data?.id}
        className="relative overflow-hidden group rounded-xl "
      >
        <div className="absolute hidden cursor-pointer right-1 top-1 group-hover:block">
          <AlertDialogDemo data={data.id} />
        </div>
        <AlertPicture
          src={data.url}
          alt={data.prompt}
          width={350}
          height={galleryHeight}
          sizes="250px"
        />
      </div>
    </div>
  );
};

export default GalleryCardContainer;
