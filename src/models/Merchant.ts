import Base from './Base'
import Item from './Item'

export default class Merchant implements Base {
    
    pk: string;
    id: string;
    name: string;
    address: string;
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
        this.tags = a.tags
        this.isOpen = a.isOpen
        this.exclude = a.exclude
        this.offers = a.offers
        this.storeSp = a.storeSp
    }
    
}