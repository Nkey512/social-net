import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "47af2b70-ebd7-4cd1-84e3-1eb690b843d7",
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => {
                return response.data;
            });
    },

    unfollowRequest(userId) {
        return instance.delete(`follow/${userId}`).then((response) => {
            return response.data;
        });
    },

    followRequest(userId) {
        return instance.post(`follow/${userId}`).then((response) => {
            return response.data;
        });
    },
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then((response) => {
            return response.data;
        });
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then((response) => {
            return response.data;
        });
    },

    updateStatus(status) {
        return instance
            .put(`profile/status/`, { status: status })
            .then((response) => {
                return response.data;
            });
    },
};

export const authAPI = {
    checkAuth() {
        return instance.get("auth/me").then((response) => {
            return response.data;
        });
    },

    login(email, password, rememberMe = false) {
        return instance
            .post("auth/login", {
                email,
                password,
                rememberMe,
            })
            .then((response) => {
                return response.data;
            });
    },

    logout() {
        return instance.delete("auth/login").then((response) => {
            return response.data;
        });
    },
};
