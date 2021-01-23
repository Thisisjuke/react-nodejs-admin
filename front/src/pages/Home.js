import React, { useState, useEffect } from 'react';

import GithubCard from '../components/Cards/GithubCard';
import DataCard from '../components/Cards/DataCard';
import ReminderCard from '../components/Cards/ReminderCard';
import TrelloCard from '../components/Cards/TrelloCard';
import { fetchData } from '../lib/api';

export default function Home() {
    const [countUsers, setCountUsers] = useState(null);
    const [countMessages, setCountMessages] = useState(null);
    const [countCities, setCountCities] = useState(null);
    const [countCountries, setCountCountries] = useState(null);
    const [countMedia, setCountMedia] = useState(null);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        setCountUsers(await fetchData('api/count/users'));
        setCountMessages(await fetchData('api/count/messages'));
        setCountCities(await fetchData('api/count/cities'));
        setCountCountries(await fetchData('api/count/countries'));
        setCountMedia(await fetchData('api/count/Media'));
    };

    return (
        <main className="flex-1 h-screen max-h-screen p-5 overflow-hidden overflow-y-scroll">
            <div className="flex flex-col items-start justify-between pb-6 space-y-4 border-b border-gray-600 lg:items-center lg:space-y-0 lg:flex-row">
                <h1 className="text-2xl font-semibold whitespace-nowrap">Dashboard</h1>
                <GithubCard url={'https://github.com/Thisisjuke/yubo-test'} />
            </div>

            <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-4">
                <DataCard title={'Total Users'} value={countUsers} />
                <DataCard title={'Total Messages'} value={countMessages} />
                <DataCard title={'Total Media'} value={'244555'} />
                <DataCard
                    title={'Total Cities'}
                    value={countCities}
                    stat={countCountries}
                    subtitle={'differents countries'}
                />
            </div>

            <div className="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-2 xl:grid-cols-4 pt-6">
                <ReminderCard
                    title={'Reminder'}
                    content={
                        "Some actions are waiting. Please check your tasks on your Trello. However, don't forget to check APIs availability !"
                    }
                />
                <TrelloCard />
            </div>
        </main>
    );
}
