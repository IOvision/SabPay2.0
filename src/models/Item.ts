export default class Item {
    name: string;
    image: string;
    desc: string;
    tag: string;
    child: [{
        key: string,
        name: string,
        price: string
    }];

    constructor(a: any) {
        this.name = a.name
        this.image = a.image
        this.desc = a.desc
        this.tag = a.tag
        this.child = a.child
    }

    public log() {
        console.log(this.name)
    }

    public static itemsFromList(json: Array<JSON>) {
        var list: Item[] = []
        json.forEach(element => {
            var a = new Item(element)
            list.push(a)
        });
        console.log('test', list)
        return list
    }
}