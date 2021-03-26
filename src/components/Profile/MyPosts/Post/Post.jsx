import s from './Post.module.css';

const Post = (props) => {
    return <div className={s.item}>
        <img src='https://nizhny-novgorod.ananasposter.ru/image/catalog/poster/film/82/13153.jpg' />
        {props.message}
        <div>
            <span>likes {props.likesCount}</span>
        </div>
    </div>
}

export default Post;