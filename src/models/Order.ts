import CartItem from './CartItem'

export default class Order {

    items: CartItem[]
    total: number
    discount: number

    constructor(a: CartItem[], b: number, c: number) {
        this.items = a
        this.total = b
        this.discount = c
    }

}