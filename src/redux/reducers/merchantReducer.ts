import { SET_INVENTORY, InventoryActionTypes, InventoryState } from '../actions/types'

const initialState: InventoryState = {
    inventory: null
}

const merchantReducer = (state = initialState, action: InventoryActionTypes) => {
    switch(action.type) {
        case SET_INVENTORY:
            return {
                inventory: action.data
            }
        default:
            return state;
    }
}

export default merchantReducer;