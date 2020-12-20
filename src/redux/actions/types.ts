import CartItem from "../../models/CartItem"
import Merchant from "../../models/Merchant"
import User from "../../models/User"

//USER
export interface UserState {
    user: User
    signedIn: boolean
}

export const SET_SIGNED_IN = "SET_SIGNED_IN"
export const SET_SIGNED_OUT = "SET_SIGNED_OUT"

interface SignInAction {
    type: typeof SET_SIGNED_IN,
    user: User
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
    },
    total: number
}

export const ADD_ITEM = "ADD_ITEM"
export const INC_ITEM = "INC_ITEM"
export const DEC_ITEM = "DEC_ITEM"
export const CLEAR = "CLEAR"

interface AddItemAction {
    type: typeof ADD_ITEM,
    data: CartItem,
    selected: number
}

interface IncItemAction {
    type: typeof INC_ITEM,
    data: string,
    price: number
}

interface DecItemAction {
    type: typeof DEC_ITEM,
    data: string,
    price: number
}

interface ClearCartAction {
    type: typeof CLEAR
}

export type CartActionTypes = AddItemAction | IncItemAction | DecItemAction | ClearCartAction


//MERCHANT
export interface MerchantState {
    merchant: Merchant
}

export const SET_MERCHANT = 'SET_MERCHANT'

interface SetMerchantAction {
    type: typeof SET_MERCHANT,
    data: Merchant
}

export type MerchantActionTypes = SetMerchantAction