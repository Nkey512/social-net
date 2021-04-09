import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <img src='https://cdn.pixabay.com/photo/2021/02/08/16/03/dinosaur-5995333__340.png' />
        <div className={s.loginBlock}>
            <NavLink to={'/login'}>
                Login
            </NavLink>
        </div>
    </header>
}

export default Header;