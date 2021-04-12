const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: false
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
            return {...statePart, users: action.users}
        case SET_CURRENT_PAGE:
            return {...statePart, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...statePart, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return {...statePart, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {...statePart, followingInProgress: action.isInProgress}
        default:
            return statePart;
    }
}

export const follow = (userId) => ( {type: FOLLOW, userId} )
export const unfollow = (userId) => ( {type: UNFOLLOW, userId} )
export const setUsers = (users) => ( {type: SET_USERS, users} )
export const setCurrentPage = (currentPage) => ( {type: SET_CURRENT_PAGE, currentPage} )
export const setTotalUsersCount = (totalUsersCount) => ( {type: SET_TOTAL_USERS_COUNT, count: totalUsersCount} )
export const toggleIsFetching = (isFetching) => ( {type: TOGGLE_IS_FETCHING, isFetching} )
export const toggleFollowingProgress = (isInProgress) => ( {type: TOGGLE_IS_FOLLOWING_PROGRESS, isInProgress} )

export default usersReducer;