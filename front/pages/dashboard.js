import Head from 'next/head'
import { Links } from "components/Links";
import { useSession, getSession } from 'next-auth/client'
import {UserList} from "components/UsersList";
import {fetchData} from "services/api";

export default function Page({users}) {
    const [ session, loading ] = useSession()

    if (typeof window !== 'undefined' && loading) return null

    if (!session) return <p>Access Denied</p>

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div>
                    <h1>DashBoard (protected)</h1>
                    <Links />
                </div>
                <div>
                    <UserList users={users} />
                </div>
            </main>
        </div>
    )
}

export async function getServerSideProps(context) {
    const res = await fetchData('api/users')
    const users = await res.json()

    const session = await getSession(context)

    if (!users) {
        return {
            notFound: true,
        }
    }

    return {
        props: { session, users }
    }
}
