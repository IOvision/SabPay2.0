import Base from './Base'
import Item from './Item'

export default class Merchant implements Base {
    
    pk: string;
    id: string;
    name: string;
    address: string;
    image: string;
    rating: number;
    tags: string[];
    isOpen: boolean;
    exclude: {
        tag: string,
        items: Item[]
    }[];
    offers: Item[];
    storeSp: Item[];

    constructor(a: any) {
        this.pk = a.PK
        this.id = a.SK
        this.name = a.name
        this.address = a.address
        this.image = a.image
        this.rating = a.rating
        this.tags = a.tags
        this.isOpen = a.isOpen
        this.exclude = a.exclude
        this.offers = a.offers
        this.storeSp = a.storeSp
    }

    public static itemsFromList(json: Object[]) {
        var list: Merchant[] = []
        json.forEach(element => {
            var a = new Merchant(element)
            list.push(a)
        });
        return list
    }
    
}