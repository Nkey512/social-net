import { profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 15 },
        { id: 2, message: "It's my first post", likesCount: 23 },
    ],
    profile: null,
    status: "",
};

const profileReducer = (statePart = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...statePart,
                posts: [...statePart.posts, newPost],
                newPostText: "",
            };
        case SET_USER_PROFILE:
            return {
                ...statePart,
                profile: action.profile,
            };
        case SET_STATUS:
            return {
                ...statePart,
                status: action.status,
            };
        default:
            return statePart;
    }
};

export const addPostActionCreator = (newPostText) => ({
    type: ADD_POST,
    newPostText,
});

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
});
export const setStatus = (status) => ({ type: SET_STATUS, status });

// thunkCreators
export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then((data) => {
        dispatch(setUserProfile(data));
    });
};

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then((data) => {
        dispatch(setStatus(data));
    });
};

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then((data) => {
        if (data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
};

export default profileReducer;
