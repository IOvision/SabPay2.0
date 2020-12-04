import Base from "./Base";
import Item from "./Item";

export default class CartItem implements Base {
    
    pk: string;
    id: string;
    name: string;
    image: string;
    variant: string;
    price: number;
    
    constructor(a: Item, selected: number) {
        this.pk = a.pk
        this.id = a.id
        this.name = a.name
        this.image = a.image
        this.variant = a.child[selected].name
        this.price = a.child[selected].price
    }
    
    public static getTotal(items: CartItem[], qty: any) {
        var total = 0
        for (var i = 0; i < items.length; i++){
            total += items[i].price * qty[items[i].id]
        }
        return total
    }

}