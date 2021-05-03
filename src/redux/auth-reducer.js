import { checkAuth } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (statePart = initialState, action) => {
    
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...statePart,
                ...action.data,
                isAuth: true
            }
        default:
            return statePart;
    }
}

export const setAuthUserData = (userId, email, login) => (
    {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login
        }
    }
)

export const checkForAuth = () => (dispatch) => {
    checkAuth().then(data => {
        if (data.resultCode === 0) {
            let { id, email, login } = data.data;
            dispatch(setAuthUserData(id, email, login));
        }
    });
}

export default authReducer;