import Base from "./Base";
import Item from "./Item";

export default class CartItem implements Base {
    
    PK: string;
    SK: string;
    name: string;
    image: string;
    variant: string;
    variantKey: number;
    price: number;
    
    constructor(a: Item, selected: number) {
        this.PK = a.PK
        this.SK = a.SK
        this.name = a.name
        this.image = a.image
        this.variantKey = selected
        this.variant = a.child[selected].name
        this.price = a.child[selected].price
    }
    
    public static getTotal(items: CartItem[], qty: any) {
        var total = 0
        for (var i = 0; i < items.length; i++){
            total += items[i].price * qty[items[i].getSelectedId()]
        }
        return total
    }

    public getSelectedId() {
        return `${this.SK}-${this.variantKey}`
    }
}