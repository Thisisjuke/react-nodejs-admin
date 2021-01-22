import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/client'

export default function Header () {
    const [session] = useSession()

    return (
        <div>
            <div className={""}>
                {session? (
                    <>
                        <img src={session.user.image} className="user"/>
                        <Link href='/api/auth/signout'>
                            <a className='title'>Logout</a>
                        </Link>
                    </>
                ) : (
                    <Link href='/api/auth/signin'>
                        <a className='title'>Login</a>
                    </Link>
                )}
            </div>
        </div>
    )
}