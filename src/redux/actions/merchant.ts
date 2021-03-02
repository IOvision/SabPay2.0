import Inventory from '../../models/Inventory';
import { SET_INVENTORY, InventoryActionTypes } from './types'

export const setMerchant = (inventory: Inventory): InventoryActionTypes => {
    return {
        type: SET_INVENTORY,
        data: inventory
    }
};
