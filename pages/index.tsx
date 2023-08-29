import Image from 'next/image'
import {Inter} from 'next/font/google'
import Header from "@/components/Header";
import {useRouter} from "next/router";
import {useCallback} from "react";
import Form from "@/components/Form";
import PostFeed from "@/components/posts/PostFeed";

export default function Home() {
    return (
        <>
            <Header label={"Home"}/>
            <Form placeholder={"What's happening?"}/>
            <PostFeed />
        </>
    );
}
