"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { useInView } from 'react-intersection-observer';
interface ModalProps
{
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}



const Modal: React.FC<ModalProps> = ({ open, onClose, children }) =>
{
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });
    useEffect(() =>
    {
        const dialogBox = document.getElementById("dialogScroll")
        dialogBox?.scrollIntoView({ block: "start" })

    }, [inView])


    return (
        <Transition show={open} appear as={Fragment}>
            <Dialog onClose={onClose} as="div" className={" relative z-20"}>
                <div className=" fixed inset-0 bg-black h-screen w-full bg-opacity-70" />
                <div className=" fixed inset-0 overflow-y-auto  ">
                    <div ref={ref} id="dialogScroll" className=" flex min-h-full justify-center  p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter=" ease-out duation-300"
                            enterFrom=" opacity-0 scale-95"
                            enterTo=" opacity-100 scale-100"
                            leave=" ease-in duration-200"
                            leaveFrom=" opacity-100 scale-100"
                            leaveTo=" opacity-0 scale-95"
                        >
                            <Dialog.Panel

                                className={
                                    " w-full  max-w-[650px] h-fit rounded-lg text-left   align-middle"
                                }
                            >
                                <div

                                    className=" relative flex w-full items-center  bg-background"
                                >
                                    <div className=" absolute right-2 w-fit cursor-pointer top-4">
                                        <X onClick={onClose} size={25} />
                                    </div>
                                    {children}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default Modal;
