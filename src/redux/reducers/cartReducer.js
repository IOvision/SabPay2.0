import { ADD_ITEM, INC_ITEM, DEC_ITEM, CLEAR } from '../actions/types'

const initialState = {
    items: [],
    qty: {},
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM:
            const items = state.items.concat(action.data.item)
            const qty = state.qty
            qty[action.data.key] = 1
            return {
                ...state,
                items,
                qty
            }
        case INC_ITEM:
            const incQty = state.qty
            incQty[action.data] += 1
            return {
                ...state,
                qty: incQty
            }
        case DEC_ITEM:
            if (state.qty[action.data] == 1) {
                const newItem = state.items.filter((item) => item.key !== action.data)
                const decQty = state.qty
                delete decQty[action.data]
                return {
                    ...state,
                    items: newItem,
                    qty: decQty
                }
            } else {
                const decQty = state.qty
                decQty[action.data] -= 1
                return {
                    ...state,
                    qty: decQty
                }
            }
        case CLEAR:
            return {
                items: [],
                qty: {}
            }
        default: 
            return state;
    }
}

export default cartReducer;