import CartItem from './CartItem'

export default class Order {

    items: CartItem[]
    total: string
    discount: string
    address: string
    id: string
    merchantName: string

    constructor() {
        this.items = [];
        this.total = "";
        this.discount = "";
        this.address = "";
        this.id = "";
        this.merchantName = "";
    }

    public static fullDetails(obj: any) {
        var a = new Order()
        a.items = obj.items;
        a.total = obj.total;
        a.discount = obj.discount;
        a.address = obj.address;
        a.id = obj.SK
        a.merchantName = obj.merchantName
        return a
    }

    public static partialDetails(items: CartItem[], total: string, discount: string) {
        var a = new Order();
        a.items = items;
        a.total = total;
        a.discount = discount;
        return a;
    }

    public toJSON() {
        var a = {
            items: this.items,
            total: this.total,
            discount: this.discount,
            address: this.address
        }
        return a;
    }
}