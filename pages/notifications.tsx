import Header from "@/components/Header";
import {NextPageContext} from "next";
import {getSession} from "next-auth/react";
import NotificationsFeed from "@/components/NotificationsFeed";

export async function getServerSideProps(ctx: NextPageContext) {
    const session = await getSession(ctx);

    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            session
        }
    }
}

const Notifications = () => {
    return (
        <>
            <div>
                <Header label={"Notifications"} showBackArrow />
                <NotificationsFeed />
            </div>
        </>
    );
}

export default Notifications;