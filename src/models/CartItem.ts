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
    
}