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
    storeSp: {
        key: string,
        image: string
    }[];
    latitude: number;
    longitude: number;
    phone: string;

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
        this.latitude = 0
        this.longitude = 0
        this.phone = a.phone
    }

    public static itemsFromList(json: Object[]) {
        var list: Merchant[] = []
        json.forEach(element => {
            var a = new Merchant(element)
            list.push(a)
        });
        return list
    }
    
    public toJson() {
        return JSON.stringify(this)
    }

    public static fromString(a: string) {
        return new Merchant(JSON.parse(a))
    }
}