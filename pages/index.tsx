import Image from 'next/image'
import {Inter} from 'next/font/google'
import Header from "@/components/Header";
import {useRouter} from "next/router";
import {useCallback} from "react";

export default function Home() {
    return (
        <Header label={"Home"} />
    );
}
