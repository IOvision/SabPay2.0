export default class User {

    name: string
    address: string[]
    phoneNumber: string

    constructor(phone: string) {
        this.name = ""
        this.address = []
        this.phoneNumber = phone
    }

    public getPhone() {
        return this.phoneNumber.substr(3)
    }

}