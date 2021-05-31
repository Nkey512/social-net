import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: "Igor",
                    avatar: "https://cdn.pixabay.com/photo/2016/08/16/15/30/knight-1598216__340.png",
                },
                {
                    id: 2,
                    name: "Murzik",
                    avatar: "https://cdn.pixabay.com/photo/2021/02/25/10/04/woman-6048694__340.png",
                },
                {
                    id: 3,
                    name: "Cobalt",
                    avatar: "https://cdn.pixabay.com/photo/2016/03/27/19/38/knight-1283910__340.jpg",
                },
                {
                    id: 4,
                    name: "Dasha",
                    avatar: "https://cdn.pixabay.com/photo/2021/02/19/08/54/woman-6029586__340.png",
                },
                {
                    id: 5,
                    name: "Sancho",
                    avatar: "https://cdn.pixabay.com/photo/2016/05/09/10/42/weimaraner-1381186__340.jpg",
                },
            ],
            messages: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How are you?" },
                { id: 3, message: "Yo" },
            ],
            newMessageBody: "VIKING",
        },
        profilePage: {
            posts: [
                { id: 1, message: "Hi, how are you?", likesCount: 15 },
                { id: 2, message: "It's my first post", likesCount: 23 },
            ],
            newPostText: "SAMURAI",
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: "Igor",
                    avatar: "https://cdn.pixabay.com/photo/2016/08/16/15/30/knight-1598216__340.png",
                },
                {
                    id: 2,
                    name: "Murzik",
                    avatar: "https://cdn.pixabay.com/photo/2021/02/25/10/04/woman-6048694__340.png",
                },
                {
                    id: 3,
                    name: "Cobalt",
                    avatar: "https://cdn.pixabay.com/photo/2016/03/27/19/38/knight-1283910__340.jpg",
                },
            ],
        },
    },
    _callSubscriber() {},

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(
            this._state.profilePage,
            action
        );
        this._state.dialogsPage = dialogsReducer(
            this._state.dialogsPage,
            action
        );
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    },
};

export default store;
window.store = store;
