import { NavLink } from 'react-router-dom';

export default function NavItem({ url, className, children }) {
    return (
        <div className={`${className ? className : ''} h-16 w-16`}>
            <NavLink to={url} exact={true} activeClassName={'selected'}>
                <div className={'flex items-center justify-center h-full'}>{children}</div>
            </NavLink>
        </div>
    );
}
