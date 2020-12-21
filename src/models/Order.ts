import CartItem from './CartItem'

export default class Order {

    items: CartItem[]
    total: string
    discount: string

    constructor(items: CartItem[], total: string, discount: string) {
        this.items = items
        this.total = total
        this.discount = discount
    }

}