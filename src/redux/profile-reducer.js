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
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: statePart.newPostText,
                likesCount: 0,
            };
            let statePartCopy = {...statePart};
            statePartCopy.posts = [...statePart.posts];
            statePartCopy.posts.push(newPost);
            statePartCopy.newPostText = '';
            return statePartCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let statePartCopy = {...statePart};
            statePartCopy.newPostText = action.newText;
            return statePartCopy;
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

export default profileReducer;