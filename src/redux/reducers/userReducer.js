import { SET_SIGNED_IN, SET_SIGNED_OUT } from '../actions/types'

const initialState = {
    signedIn: false
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SIGNED_IN:
            return {
                ...state,
                signedIn: true
            };
        case SET_SIGNED_OUT:
            return {
                ...state,
                signedIn: false
            };
        default:
            return state;
    }
}

export default userReducer;