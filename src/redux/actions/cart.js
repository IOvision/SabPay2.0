import { ADD_ITEM, INC_ITEM, DEC_ITEM } from './types'

export const addItem = (key, item) => {
    item.qty = 1
    return (
        {
            type: ADD_ITEM,
            data: {
                key: key,
                item: item,
            }
        }
    )
}

export const incItem = (key) => (
    {
        type: INC_ITEM,
        data: key
    }
)

export const decItem = (key) => (
    {
        type: DEC_ITEM,
        data: key
    }
)