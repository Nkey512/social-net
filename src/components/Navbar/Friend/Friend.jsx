import s from "./../Navbar.module.css";

const Friend = (props) => {
    return (
        <div className={s.friend}>
            <div>
                <img src={props.friend.avatar} />
            </div>
            <div>{props.friend.name}</div>
        </div>
    );
};

export default Friend;
