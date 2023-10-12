/*
  Warnings:

  - You are about to drop the `_UserLikesImage` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `LikeCount` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_userId_fkey";

-- DropForeignKey
ALTER TABLE "_UserLikesImage" DROP CONSTRAINT "_UserLikesImage_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserLikesImage" DROP CONSTRAINT "_UserLikesImage_B_fkey";

-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "LikeCount" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_UserLikesImage";

-- CreateTable
CREATE TABLE "Like" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "imageId" INTEGER NOT NULL,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
