import { SET_MERCHANT, MerchantActionTypes, MerchantState } from '../actions/types'

const initialState: MerchantState = {
    merchant: null
}

const merchantReducer = (state = initialState, action: MerchantActionTypes) => {
    switch(action.type) {
        case SET_MERCHANT:
            console.log("Merchant: " + action.data)
            return {
                merchant: action.data
            }
        default:
            return state;
    }
}

export default merchantReducer;