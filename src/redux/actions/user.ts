import User from '../../models/User';
import { SET_SIGNED_IN, SET_SIGNED_OUT, UserActionTypes } from './types'

export const signIn = (user: User): UserActionTypes => (
    {
        type: SET_SIGNED_IN,
        user: user
    }
);

export const signOut = (): UserActionTypes => (
    {
        type: SET_SIGNED_OUT
    }
);