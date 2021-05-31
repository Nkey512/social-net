import { NavLink } from "react-router-dom";
import Friend from "./Friend/Friend";
import s from "./Navbar.module.css";

const Navbar = (props) => {
    let friendsElements = props.sidebar.friends.map((f) => (
        <Friend key={f.id} friend={f} />
    ));

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>
                    Profile
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>
                    Messages
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" activeClassName={s.activeLink}>
                    Users
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLink}>
                    News
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.activeLink}>
                    Music
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.activeLink}>
                    Settings
                </NavLink>
            </div>
            <h1>Friends</h1>
            <div className={s.friendsBar}>{friendsElements}</div>
        </nav>
    );
};

export default Navbar;
