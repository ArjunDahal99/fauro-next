
import usePreviewModal from "@/hooks/use-dialog-box";
import Modal from "../ui/dialogbox";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ImageInfo from "./ImageInfo";



const PreviewDialogBox = () =>
{
    const previewModal = usePreviewModal();
    const image = usePreviewModal((state) => state.data);
    console.log(image)

    if (!image)
    {
        return null;
    }
    const widthHeightRatio = image.height / image.width;
    const galleryHeight = Math.ceil(350 * widthHeightRatio);

    return (
        <Modal open={previewModal.isOpen} onClose={previewModal.onClose}>

            <div id="style-4" className={cn('  h-fit justify-center flex-wrap sm:h-full md:flex  ')}>
                <Image
                    src={image.url}
                    alt={image.username}
                    height={image.height}
                    width={image.width}
                />
                <ImageInfo data={image} />
            </div>


        </Modal>
    );
};

export default PreviewDialogBox;
