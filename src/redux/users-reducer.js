const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 1, followed: false, fullName: 'Nikita', status: 'Coding...', location: {country: 'Russia', city: 'SPb'}},
        {id: 2, followed: true, fullName: 'Dimon', status: 'Making sueta!', location: {country: 'Russia', city: 'Tver'}},
        {id: 3, followed: false, fullName: 'Mikola', status: 'Eating SALO!', location: {country: 'Ukraine', city: 'Kiev'}},
        {id: 4, followed: true, fullName: 'Kiska', status: 'Meow', location: {country: 'Russia', city: 'Moscow'}},
    ],
}

const usersReducer = (statePart = initialState, action) => {
    
    switch(action.type) {
        case FOLLOW:
            return {
                ...statePart,
                users: statePart.users.map(
                    callbackfn = u => {
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
                    callbackfn = u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u;
                    }
                )
            }
        case SET_USERS:
            return {...statePart, users: [...statePart.user, ...action.users]}
        default:
            return statePart;
    }
}

export const followAC = (userId) => ( {type: FOLLOW, userId: userId} )
export const unfollowAC = (userId) => ( {type: UNFOLLOW, userId: userId} )
export const setUsersAC = (users) => ( {type: SET_USERS, users: users} )

export default usersReducer;