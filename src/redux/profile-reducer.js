import { API } from "../api/api"

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 23},
    ],
    newPostText: 'SAMURAI',
    profile: null
}

const profileReducer = (statePart = initialState, action) => {
    
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: statePart.newPostText,
                likesCount: 0,
            };
            return {
                ...statePart,
                posts: [...statePart.posts, newPost],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...statePart,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...statePart,
                profile: action.profile
            }
        default:
            return statePart;
    }
}

export const addPostActionCreator = () => ( {type: ADD_POST} )
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
export const setUserProfile = (profile) => ( {type: SET_USER_PROFILE, profile} )

export const getUserProfile = (userId) => (dispatch) => {
    API.getProfile(userId).then(data => {
        dispatch(setUserProfile(data));
    });
}

export default profileReducer;