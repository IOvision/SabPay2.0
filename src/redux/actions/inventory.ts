import Inventory from '../../models/Inventory';
import { SET_INVENTORY, InventoryActionTypes } from './types'

export const setInventory = (inventory: Inventory): InventoryActionTypes => {
    return {
        type: SET_INVENTORY,
        data: inventory
    }
};
