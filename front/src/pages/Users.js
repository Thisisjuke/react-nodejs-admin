import UserTable from '../components/Table/UserTable';
import { useEffect, useState } from 'react';
import { fetchData } from '../lib/api';
import GithubCard from '../components/Cards/GithubCard';
import {Link} from "react-router-dom";

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        setUsers(await fetchData('api/users'));
    };

    const columns = [
        { Header: 'ID', accessor: 'id', width: 30 },
        { Header: 'Username', accessor: 'username' },
        { Header: 'Fullname', accessor: 'name' },
        { Header: 'Country', accessor: 'country' },
        { Header: 'City', accessor: 'city' },
        {
            header: 'Actions',
            id: "action",
            accessor: (props) => (
                <Link
                    to={`/profile/${props.id}`}
                    className={"bg-purple-600 py-1 px-2 my-1 mx-4 text-xs text-gray-100 rounded block"}
                >
                    Show profile
                </Link>
            ),
            disableFilters: true
        }
    ];

    return (
        <main className="flex-1 h-screen max-h-screen p-5 overflow-hidden overflow-y-scroll">
            <div className="flex flex-col items-start justify-between pb-6 space-y-4 border-b border-gray-600 lg:items-center lg:space-y-0 lg:flex-row">
                <h1 className="text-2xl font-semibold whitespace-nowrap">Users</h1>
                <GithubCard url={'https://github.com/Thisisjuke/yubo-test'} />
            </div>
            <div>{users.length > 0 && <UserTable data={users} columns={columns} />}</div>
        </main>
    );
}
