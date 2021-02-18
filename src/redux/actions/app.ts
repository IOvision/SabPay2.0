import { AppActionTypes, REMOVE_HEADER_TITLE, SET_DRAWER_STATE, SET_HEADER_TITLE } from "./types";

export const setDrawerState = (a : boolean): AppActionTypes => {
    return {
        type: SET_DRAWER_STATE,
        data: a
    }
}

export const setHeaderTitle = (a: string): AppActionTypes => {
    return {
        type: SET_HEADER_TITLE,
        data: a
    }
}

export const removeHeaderTitle = (): AppActionTypes => {
    return {
        type: REMOVE_HEADER_TITLE
    }
}