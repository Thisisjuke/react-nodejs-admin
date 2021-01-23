import { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import {fetchData} from "../lib/api";
import GithubCard from "../components/Cards/GithubCard";
import ProfileCard from "../components/Cards/ProfileCard";
import MessagesCard from "../components/Cards/MessagesCard";
import MediaCard from "../components/Cards/MediaCard";

export default function UserProfile() {
    const { id } = useParams()

    const [profile, setProfile] = useState({});

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        setProfile(await fetchData(`api/users/${id}`));
    };

    return (
        <main className="flex-1 h-screen max-h-screen p-5 overflow-hidden overflow-y-scroll">
            <div className="flex flex-col items-start justify-between pb-6 space-y-4 border-b border-gray-600 lg:items-center lg:space-y-0 lg:flex-row">
                <h1 className="text-2xl font-semibold whitespace-nowrap">Profile : {profile?.user?.username}</h1>
                <GithubCard url={'https://github.com/Thisisjuke/yubo-test'} />
            </div>
            <div className={"flex mt-6 space-x-8"}>
                <div className={"w-1/5 flex-col"}>
                    <ProfileCard user={profile.user}/>
                    <MediaCard media={profile.media}/>
                </div>
                <div className={"flex-grow"}>
                    <MessagesCard username={profile?.user?.username} sent={profile.messagesSent} received={profile.messagesReceived}/>
                </div>
            </div>
        </main>
);
}
