import { AppState, AppActionTypes, SET_DRAWER_STATE, SET_HEADER_TITLE, REMOVE_HEADER_TITLE } from "../actions/types";

const initialState: AppState = {
    isDrawerOpen: false,
    headerTitle: undefined
}

const appReducer = (state = initialState, action: AppActionTypes) => {
    switch(action.type) {
        case SET_DRAWER_STATE:
            return {
                ...state,
                isDrawerOpen: action.data
            }
        case SET_HEADER_TITLE:
            return {
                ...state,
                headerTitle: action.data
            }
        case REMOVE_HEADER_TITLE:
            return {
                ...state,
                headerTitle: undefined
            }
        default:
            return state;
    }
}

export default appReducer;