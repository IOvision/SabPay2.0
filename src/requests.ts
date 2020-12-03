import axios from 'axios'

axios.defaults.baseURL = "https://oqy97amyd0.execute-api.ap-south-1.amazonaws.com/v1"
axios.defaults.headers = { "x-api-key": 'RDFCXXNZwW2FBxGykBgKz3E0MPcz3A5I4yFqzmlw' }

import Item from './models/Item'

export const test = (cb: (err: any, resp: Item[] | null) => void) => {
    axios.post('/test', [
        {
            "name": "Rich Tomato Ketchup",
            "image": "https://padelasuperstore.in/wp-content/uploads/2018/10/Rich-Tomato-Ketchup.jpg",
            "desc": "A Simple Ketchup",
            "tag": "grocery",
            "child": [
                {
                    "key": "0",
                    "name": "250ml",
                    "price": "150"
                },
                {
                    "key": "1",
                    "name": "500ml",
                    "price": "300"
                }
            ]
        },
        {
            "name": "Rich Tomato Maggi",
            "image": "https://padelasuperstore.in/wp-content/uploads/2018/10/Rich-Tomato-Ketchup.jpg",
            "desc": "A Simple Ketchup",
            "tag": "grocery",
            "child": [
                {
                    "key": "0",
                    "name": "250ml",
                    "price": "150"
                },
                {
                    "key": "1",
                    "name": "500ml",
                    "price": "300"
                }
            ]
        }
    ])
    .then((res: any) => {
        var a = Item.itemsFromList(JSON.parse(res.data.body))
        cb(null, a)
    })
    .catch((err: any) => {
        cb(err, null)
    })
}

export const getItems = (category: string, lastKey: string, cb: (err: any, resp: any) => void) => {
    axios.get(`/item/${category}`, {})
    .then(res => {
        cb(false, Item.itemsFromList(res.data.data))
    })
    .catch(err => cb(err, null))
}