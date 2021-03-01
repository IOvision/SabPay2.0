export default class MerchantDetails {
    
    PK: string;
    SK: string;
    shopname: string;
    address: string;
    phone: string;
    image: string;
    rating: number

    constructor(a: any) {
        console.log("metadata", a)
        this.PK = a.PK
        this.SK = a.SK
        this.shopname = a.shopname
        this.address = a.address
        this.phone = a.phone
        this.image = a.image
        this.rating = a.rating
    }

    public static itemsFromList(json: Object[]) {
        var list: MerchantDetails[] = []
        json.forEach(element => {
            var a = new MerchantDetails(element)
            list.push(a)
        });
        return list
    }
    
    public toJson() {
        return JSON.stringify(this)
    }

    public static fromString(a: string) {
        return new MerchantDetails(JSON.parse(a))
    }
}