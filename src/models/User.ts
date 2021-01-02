export default class User {

    name: string
    address: string[]
    phoneNumber: string

    constructor(phone: string) {
        this.name = "Mr. Customer"
        this.address = ["M-473, Ashiyana, Kanpur Road, Lucknow - 226012", "Galgotias University, Sector-17A, Greater Noida - 201310"]
        this.phoneNumber = phone
    }

    public getPhone() {
        return this.phoneNumber.substr(3)
    }

}