import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_INITIALIZED = "SET_INITIALIZED";

let initialState = {
    initialized: false,
};

const appReducer = (statePart = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...statePart,
                initialized: action.initialized,
            };
        default:
            return statePart;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {
        userId,
        email,
        login,
        isAuth,
    },
});

// thunkCreators
export const getAuthUserData = () => (dispatch) => {
    authAPI.checkAuth().then((data) => {
        if (data.resultCode === 0) {
            let { id, email, login } = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
};

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then((data) => {
        if (data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            let message =
                data.messages.length > 0 ? data.messages[0] : "Some error";
            dispatch(stopSubmit("login", { _error: message }));
        }
    });
};

export const logout = () => (dispatch) => {
    authAPI.logout().then((data) => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
};

export default authReducer;
