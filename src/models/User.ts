export default class User {

    name: string
    address: string[]
    phoneNumber: string

    constructor(data: any) {
        this.name = data.name
        this.address = data.address
        this.phoneNumber = data.phoneNumber
    }

    public getPhone() {
        return this.phoneNumber.substr(3)
    }

}