const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 23},
    ],
    newPostText: 'SAMURAI'
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
        default:
            return statePart;
    }
}

export const addPostActionCreator = () => ( {type: ADD_POST} )
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default profileReducer;