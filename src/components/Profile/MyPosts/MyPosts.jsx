import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
    maxLengthCreator,
    required,
} from "./../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
    let postsElements = props.posts.map((p) => (
        <Post key={p.id} message={p.message} likesCount={p.likesCount} />
    ));

    let onAddPost = (formData) => {
        console.log(formData);
        props.addPost(formData.newPostText);
    };

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <PostReduxForm onSubmit={onAddPost} />
            <div className={s.posts}>{postsElements}</div>
        </div>
    );
};

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name="newPostText"
                    placeholder="Write new post"
                    validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};

const PostReduxForm = reduxForm({
    form: "newPost",
})(PostForm);

export default MyPosts;
