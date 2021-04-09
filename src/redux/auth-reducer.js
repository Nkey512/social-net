const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false
}

const authReducer = (statePart = initialState, action) => {
    
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...statePart,
                ...action.data
            }
        default:
            return statePart;
    }
}

export const setUserData = (userId, email, login) => (
    {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login
        }
    }
)

export default authReducer;