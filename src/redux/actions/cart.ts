
import CartItem from '../../models/CartItem'
import { ADD_ITEM, INC_ITEM, DEC_ITEM, CartActionTypes, CLEAR } from './types'

export const addItem = (a: CartItem): CartActionTypes => {
    return (
        {
            type: ADD_ITEM,
            data: a,
        }
    )
}

export const incItem = (id: string, price: number): CartActionTypes => (
    {
        type: INC_ITEM,
        data: id,
        price
    }
)

export const decItem = (id: string, price: number): CartActionTypes => (
    {
        type: DEC_ITEM,
        data: id,
        price
    }
)

export const clear = (): CartActionTypes => (
    {
        type: CLEAR
    }
)