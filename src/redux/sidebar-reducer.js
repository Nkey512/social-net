let initialState = {
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
};

const sidebarReducer = (statePart = initialState, action) => {
    return statePart;
};

export default sidebarReducer;
