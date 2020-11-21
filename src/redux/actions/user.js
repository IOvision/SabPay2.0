import { SET_SIGNED_IN, SET_SIGNED_OUT } from './types'

export const signIn = () => (
    {
        type: SET_SIGNED_IN
    }
);

export const signOut = () => (
    {
        type: SET_SIGNED_OUT
    }
);