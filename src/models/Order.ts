import CartItem from './CartItem'

export default class Order {

    items: CartItem[]
    total: string
    discount: string

    constructor(obj: any) {
        this.items = undefined;
        this.total = undefined;
        this.discount = undefined;
    }

    public static fromJson = (obj: any) => {
        var a = new Order()
        a.items = obj.items;
        a.total = obj.total;
        a.discount = obj.discount;
    }

    // constructor(items: CartItem[], total: string, discount: string) {
    //     this.items = items
    //     this.total = total
    //     this.discount = discount
    // }

    public static itemsFromList(json: Object[]) {
        var list: Order[] = []
        json.forEach(element => {
            var a = new Order(element)
            list.push(a)
        });
        return list
    }
}