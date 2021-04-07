import CartItem from "../../models/CartItem"
import Inventory from "../../models/Inventory"
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
    data: CartItem
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


//INVENTORY
export interface InventoryState {
    inventory: Inventory
}

export const SET_INVENTORY = 'SET_INVENTORY'

interface SetInventoryAction {
    type: typeof SET_INVENTORY,
    data: Inventory
}

export type InventoryActionTypes = SetInventoryAction

//App Utility
export interface AppState {
    isDrawerOpen: boolean,
    headerTitle: string | undefined
}

export const SET_DRAWER_STATE = "SET_DRAWER_STATE"
export const SET_HEADER_TITLE = "SET_HEADER_TITLE"
export const REMOVE_HEADER_TITLE = "REMOVE_HEADER_TITLE"


interface SetDrawerStateAction {
    type: typeof SET_DRAWER_STATE,
    data: boolean
}

interface SetHeaderTitleAction {
    type: typeof SET_HEADER_TITLE,
    data: string
}

interface RemoveHeaderTitleAction {
    type: typeof REMOVE_HEADER_TITLE,
}

export type AppActionTypes = SetDrawerStateAction | SetHeaderTitleAction | RemoveHeaderTitleAction