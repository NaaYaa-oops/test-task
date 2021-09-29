import {LOGIN} from './types'


const initialState = {
    users: [],
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {...state, users: [...state.users, action.payload]}
        default:
            return state
    }
}