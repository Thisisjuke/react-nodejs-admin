import NavItem from './NavItem';
import LogoImage from '../../assets/pictures/logo.png';
import '../../assets/styles/navbar.css';
import InfoCard from '../Cards/InfoCard';

export default function Navbar({ className }) {
    return (
        <div
            className={`${className ? className : ''} flex`}
            style={{ backgroundColor: '#131416' }}>
            <nav className={`flex-col flex w-16 border-r border-gray-800 my-4 -py-8`}>
                <NavItem url={'/'} className={'p-4 mb-8'}>
                    <img alt="logo" src={LogoImage} />
                </NavItem>
                <NavItem url={'/'}>
                    <svg height={28} width={28} fill="none" viewBox="0 0 24 24" stroke="grey">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                    </svg>
                </NavItem>
                <NavItem url={'/users'}>
                    <svg height={28} width={28} viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                    </svg>
                </NavItem>
                <NavItem url={'/graphs'}>
                    <svg height={28} width={28} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </NavItem>
            </nav>
            <div className={'flex-grow h-screen'}>
                <div className={'m-4 text-sm color-gray-100'}>Last information :</div>
                <InfoCard
                    title={'Users Review'}
                    content={
                        'Planning: You should review last users today. Some new user has recently been signaled'
                    }
                />
                <InfoCard
                    title={'Graphs Review'}
                    content={
                        'Planning: You should review last chats today. Some new discussions has recently been signaled'
                    }
                />
            </div>
        </div>
    );
}
