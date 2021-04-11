import * as axios from 'axios';

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return axios.get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
        { withCredentials: true }
    )
        .then(response => {
            return response.data;
        });
}

export const checkAuth = () => {
    return axios.get(
        `https://social-network.samuraijs.com/api/1.0/auth/me`,
        { withCredentials: true }
    )
        .then(response => {
            return response.data;
        });
}

export const unfollowRequest = (userId) => {
    return axios.delete(
        `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
        {
            withCredentials: true,
            headers: {
                'API-KEY': '47af2b70-ebd7-4cd1-84e3-1eb690b843d7'
            }
        }
    )
        .then(response => {
            return response.data;
        });
}

export const followRequest = (userId) => {
    return axios.post(
        `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
        {},
        {
            withCredentials: true,
            headers: {
                'API-KEY': '47af2b70-ebd7-4cd1-84e3-1eb690b843d7'
            }
        }
    )
        .then(response => {
            return response.data;
        });
}

export const getProfile = (userId) => {
    return axios.get(
        `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
    )
        .then(response => {
            return response.data;
        });
}