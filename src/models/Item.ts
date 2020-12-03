import Base from './Base'

export default class Item implements Base {
    
    pk: string;
    id: string;
    name: string;
    image: string;
    desc: string;
    child: [{
        key: number,
        name: string,
        price: string
    }];
    selected: number

    constructor(a: any) {
        this.pk = a.PK
        this.id = a.SK
        this.name = a.name
        this.image = a.image
        this.desc = a.desc
        this.child = a.child
        this.selected = 0
    }
    
    public log() {
        console.log(this)
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

    public getSelected() {
        return this.selected
    }

    public setSelected(select: number) {
        this.selected = select
    }
}