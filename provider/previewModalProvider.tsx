"use client";


import PreviewDialogBox from "@/components/browse/AlertDialogBox";
import { useEffect, useState } from "react";

const ModalProvider = () =>
{
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() =>
    {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;
    return <PreviewDialogBox />;
};

export default ModalProvider;
