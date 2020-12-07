import Merchant from './Merchant'

var a: Merchant[]
var json = [
    {
        "PK": "1",
        "SK": "1",
        "name": "Merchant 1",
        "address": "Merchant 1 address",
        "image": "https://cdn4.vectorstock.com/i/1000x1000/08/28/shop-store-flat-icon-vector-14270828.jpg",
        "rating": 4,
        "tags": ["Fruits, Vegetables"],
        "isOpen": false,
        "exclude": [{
            "tag": "fruit",
            "items": []
        }],
        "offers": [],
        "storeSp": [],
    },
    {
        "PK": "2",
        "SK": "2",
        "name": "Merchant 2",
        "address": "Merchant 2 address",
        "image": "https://cdn4.vectorstock.com/i/1000x1000/08/28/shop-store-flat-icon-vector-14270828.jpg",
        "rating": 3,
        "tags": ["Fruits, Vegetables"],
        "isOpen": false,
        "exclude": [{
            "tag": "fruit",
            "items": []
        }],
        "offers": [],
        "storeSp": [],
    },
    {
        "PK": "3",
        "SK": "3",
        "name": "Merchant 3",
        "address": "Merchant 3 address",
        "image": "https://cdn4.vectorstock.com/i/1000x1000/08/28/shop-store-flat-icon-vector-14270828.jpg",
        "rating": 3,
        "tags": ["Fruits, Vegetables"],
        "isOpen": false,
        "exclude": [{
            "tag": "fruit",
            "items": []
        }],
        "offers": [],
        "storeSp": [],
    },
    {
        "PK": "4",
        "SK": "4",
        "name": "Merchant 4",
        "address": "Merchant 4 address",
        "image": "https://cdn4.vectorstock.com/i/1000x1000/08/28/shop-store-flat-icon-vector-14270828.jpg",
        "rating": 2,
        "tags": ["Fruits, Vegetables"],
        "isOpen": false,
        "exclude": [{
            "tag": "fruit",
            "items": []
        }],
        "offers": [],
        "storeSp": [],
    },
    {
        "PK": "5",
        "SK": "5",
        "name": "Merchant 5",
        "address": "Merchant 5 address",
        "image": "https://cdn4.vectorstock.com/i/1000x1000/08/28/shop-store-flat-icon-vector-14270828.jpg",
        "rating": 1,
        "tags": ["Fruits, Vegetables"],
        "isOpen": false,
        "exclude": [{
            "tag": "fruit",
            "items": []
        }],
        "offers": [],
        "storeSp": [],
    },
    {
        "PK": "6",
        "SK": "6",
        "name": "Merchant 6",
        "address": "Merchant 6 address",
        "image": "https://cdn4.vectorstock.com/i/1000x1000/08/28/shop-store-flat-icon-vector-14270828.jpg",
        "rating": 5,
        "tags": ["Fruits, Vegetables"],
        "isOpen": false,
        "exclude": [{
            "tag": "fruit",
            "items": []
        }],
        "offers": [],
        "storeSp": [],
    },
    {
        "PK": "7",
        "SK": "7",
        "name": "Merchant 7",
        "address": "Merchant 7 address",
        "image": "https://cdn4.vectorstock.com/i/1000x1000/08/28/shop-store-flat-icon-vector-14270828.jpg",
        "rating": 4,
        "tags": ["Fruits, Vegetables"],
        "isOpen": false,
        "exclude": [{
            "tag": "fruit",
            "items": []
        }],
        "offers": [],
        "storeSp": [],
    },
]

a = Merchant.itemsFromList(json)

export default a