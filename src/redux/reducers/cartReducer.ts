import CartItem from '../../models/CartItem'
import { ADD_ITEM, INC_ITEM, DEC_ITEM, CLEAR, CartState, CartActionTypes } from '../actions/types'

const initialState: CartState = {
    items: [],
    qty: {},
    total: 0
}

const cartReducer = (state = initialState, action: CartActionTypes) => {
    switch(action.type) {
        case ADD_ITEM:
            var items = state.items.concat(action.data)
            var total = state.total + action.data.price
            var qty = state.qty
            qty[action.data.getSelectedId()] = 1
            return {
                ...state,
                items,
                qty,
                total
            }
        case INC_ITEM:
            var qty = state.qty
            var total = state.total + action.price
            qty[action.data] += 1
            return {
                ...state,
                qty,
                total
            }
        case DEC_ITEM:
            if (state.qty[action.data] == 1) {
                const newItem = state.items.filter((item) => item.getSelectedId() !== action.data)
                var total = state.total - action.price
                const decQty = state.qty
                delete decQty[action.data]
                return {
                    ...state,
                    items: newItem,
                    qty: decQty,
                    total
                }
            } else {
                const decQty = state.qty
                var total = state.total - action.price
                decQty[action.data] -= 1
                return {
                    ...state,
                    qty: decQty,
                    total
                }
            }
        case CLEAR:
            var newItem: CartItem[] = []
            return {
                items: newItem,
                qty: {},
                total: 0
            };
        default: 
            return state;
    }
}

export default cartReducer;