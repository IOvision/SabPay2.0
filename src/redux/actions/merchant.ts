import Merchant from '../../models/Merchant';
import { SET_MERCHANT, MerchantActionTypes } from './types'

export const setMerchant = (merchant: Merchant): MerchantActionTypes => (
    {
        type: SET_MERCHANT,
        data: merchant
    }
);
