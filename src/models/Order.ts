import CartItem from './CartItem'

export default class Order {

    items: CartItem[]
    total: string
    discount: string
    address: string
    id: string
    merchantName: string
    status: string
    deliveryType: string

    constructor() {
        this.items = [];
        this.total = "";
        this.discount = "";
        this.address = "";
        this.id = "";
        this.merchantName = "";
        this.status = "";
        this.deliveryType = "";
    }

    public fullDetails(obj: any) {
        var a = new Order()
        a.items = obj.items;
        a.total = obj.total;
        a.discount = obj.discount;
        a.address = obj.address;
        a.id = obj.SK
        a.merchantName = obj.merchantName
        a.status = obj.status
        return a
    }

    public static partialDetails(items: CartItem[], total: string, discount: string, deliveryType: string) {
        var a = new Order();
        a.items = items;
        a.total = total;
        a.discount = discount;
        a.deliveryType = deliveryType
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

    public static itemsFromList(json: Object[]) {
        var list: Order[] = []
        json.forEach(element => {
            var a = new Order();
            a = a.fullDetails(element);
            list.push(a)
        });
        return list
    }

}