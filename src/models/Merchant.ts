export default class Merchant {
    
    username: string
    address: string[]
    phoneNumber: string
    invId: string

    constructor(a: any) {
        this.username = a.username
        this.address = a.address
        this.phoneNumber = a.phoneNumber
        this.invId = a.invId
    }

    public static itemsFromList(json: Object[]) {
        var list: Merchant[] = []
        json.forEach(element => {
            var a = new Merchant(element)
            list.push(a)
        });
        return list
    }

    public getPhone(): string {
        return this.phoneNumber.substr(3)
    }

    public toJson() {
        return JSON.stringify(this)
    }

    public static fromString(a: string) {
        return new Merchant(JSON.parse(a))
    }
}