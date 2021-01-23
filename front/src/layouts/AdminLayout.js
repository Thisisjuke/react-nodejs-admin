import Navbar from '../components/Navbar/index';

export default function AdminLayout({ children }) {
    return (
        <div className={'flex text-white'}>
            <Navbar className={'flex-none w-1/5'} />
            <div className={'flex-grow'}>{children}</div>
        </div>
    );
}
