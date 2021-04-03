const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [],
}

const usersReducer = (statePart = initialState, action) => {
    
    switch(action.type) {
        case FOLLOW:
            return {
                ...statePart,
                users: statePart.users.map(
                    u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u;
                    }
                )
            }
        case UNFOLLOW:
            return {
                ...statePart,
                users: statePart.users.map(
                    u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u;
                    }
                )
            }
        case SET_USERS:
            return {...statePart, users: [...statePart.users, ...action.users]}
        default:
            return statePart;
    }
}

export const followAC = (userId) => ( {type: FOLLOW, userId: userId} )
export const unfollowAC = (userId) => ( {type: UNFOLLOW, userId: userId} )
export const setUsersAC = (users) => ( {type: SET_USERS, users: users} )

export default usersReducer;