import { SET_SIGNED_IN, SET_SIGNED_OUT, UserActionTypes, UserState } from '../actions/types'

const initialState: UserState = {
    signedIn: false
}

const userReducer = (state = initialState, action: UserActionTypes) => {
    switch(action.type) {
        case SET_SIGNED_IN:
            return {
                signedIn: true
            };
        case SET_SIGNED_OUT:
            return {
                signedIn: false
            };
        default:
            return state;
    }
}

export default userReducer;