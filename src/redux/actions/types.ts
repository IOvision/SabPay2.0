import CartItem from "../../models/CartItem"

//USER
export interface UserState {
    signedIn: boolean
}

export const SET_SIGNED_IN = "SET_SIGNED_IN"
export const SET_SIGNED_OUT = "SET_SIGNED_OUT"

interface SignInAction {
    type: typeof SET_SIGNED_IN
}

interface SignOutAction {
    type: typeof SET_SIGNED_OUT
}

export type UserActionTypes = SignInAction | SignOutAction

//CART
export interface CartState {
    items: CartItem[],
    qty: {
        [key: string]: number
    }
}

export const ADD_ITEM = "ADD_ITEM"
export const INC_ITEM = "INC_ITEM"
export const DEC_ITEM = "DEC_ITEM"
export const CLEAR = "CLEAR"

interface AddItemAction {
    type: typeof ADD_ITEM,
    data: CartItem
}

interface IncItemAction {
    type: typeof INC_ITEM,
    data: string
}

interface DecItemAction {
    type: typeof DEC_ITEM,
    data: string
}

interface ClearCartAction {
    type: typeof CLEAR
}

export type CartActionTypes = AddItemAction | IncItemAction | DecItemAction | ClearCartAction