const apiKey = require('./Keys')
const axios = require('axios').default

axios.defaults.baseURL = "https://oqy97amyd0.execute-api.ap-south-1.amazonaws.com/v1"
axios.defaults.headers = { "x-api-key": 'RDFCXXNZwW2FBxGykBgKz3E0MPcz3A5I4yFqzmlw' }

import Item from './models/Item'

export const test = () => {
    axios.post('/test', [
        {
            "name": "Rich Tomato Ketchup",
            "image": "https://padelasuperstore.in/wp-content/uploads/2018/10/Rich-Tomato-Ketchup.jpg",
            "desc": "A Simple Ketchup",
            "tag": "grocery",
            "child": [
                {
                    "key": "0",
                    "child_name": "250ml",
                    "child_price": "150"
                },
                {
                    "key": "1",
                    "child_name": "500ml",
                    "child_price": "300"
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
                    "child_name": "250ml",
                    "child_price": "150"
                },
                {
                    "key": "1",
                    "child_name": "500ml",
                    "child_price": "300"
                }
            ]
        }
    ])
    .then(res => {
        var a = Item.itemsFromList(JSON.parse(res.data.body))
        a[0].log()
        a[1].log()
    })
    .catch(err => console.log(err.response))
}