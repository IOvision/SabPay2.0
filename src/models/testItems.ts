import Item from './Item'

var a: Item[]
var json = [
    {
        "PK": "1",
        "name": "Rich Tomato Ketchup",
        "image": "https://padelasuperstore.in/wp-content/uploads/2018/10/Rich-Tomato-Ketchup.jpg",
        "desc": "A Simple Ketchup",
        "child": [
            {
                "key": 0,
                "name": "250ml",
                "price": "150"
            },
            {
                "key": 1,
                "name": "500ml",
                "price": "300"
            }
        ]
    },
    {
        "PK": "2",
        "name": "Rich Tomato Maggi",
        "image": "https://padelasuperstore.in/wp-content/uploads/2018/10/Rich-Tomato-Ketchup.jpg",
        "desc": "A Simple Ketchup",
        "child": [
            {
                "key": 0,
                "name": "250ml",
                "price": "150"
            },
            {
                "key": 1,
                "name": "500ml",
                "price": "300"
            }
        ]
    },
    {
        "PK": "3",
        "name": "Rich Tomato Maggi",
        "image": "https://padelasuperstore.in/wp-content/uploads/2018/10/Rich-Tomato-Ketchup.jpg",
        "desc": "A Simple Ketchup",
        "child": [
            {
                "key": 0,
                "name": "250ml",
                "price": "150"
            },
            {
                "key": 1,
                "name": "500ml",
                "price": "300"
            }
        ]
    },
    {
        "PK": "4",
        "name": "Rich Tomato Maggi",
        "image": "https://padelasuperstore.in/wp-content/uploads/2018/10/Rich-Tomato-Ketchup.jpg",
        "desc": "A Simple Ketchup",
        "child": [
            {
                "key": 0,
                "name": "250ml",
                "price": "150"
            },
            {
                "key": 1,
                "name": "500ml",
                "price": "300"
            }
        ]
    },
    {
        "PK": "5",
        "name": "Rich Tomato Maggi",
        "image": "https://padelasuperstore.in/wp-content/uploads/2018/10/Rich-Tomato-Ketchup.jpg",
        "desc": "A Simple Ketchup",
        "child": [
            {
                "key": 0,
                "name": "250ml",
                "price": "150"
            },
            {
                "key": 1,
                "name": "500ml",
                "price": "300"
            }
        ]
    },
    {
        "PK": "6",
        "name": "Rich Tomato Maggi",
        "image": "https://padelasuperstore.in/wp-content/uploads/2018/10/Rich-Tomato-Ketchup.jpg",
        "desc": "A Simple Ketchup",
        "child": [
            {
                "key": 0,
                "name": "250ml",
                "price": "150"
            },
            {
                "key": 1,
                "name": "500ml",
                "price": "300"
            }
        ]
    },
    {
        "PK": "7",
        "name": "Rich Tomato Maggi",
        "image": "https://padelasuperstore.in/wp-content/uploads/2018/10/Rich-Tomato-Ketchup.jpg",
        "desc": "A Simple Ketchup",
        "child": [
            {
                "key": 0,
                "name": "250ml",
                "price": "150"
            },
            {
                "key": 1,
                "name": "500ml",
                "price": "300"
            }
        ]
    },
    {
        "PK": "8",
        "name": "Rich Tomato Maggi",
        "image": "https://padelasuperstore.in/wp-content/uploads/2018/10/Rich-Tomato-Ketchup.jpg",
        "desc": "A Simple Ketchup",
        "child": [
            {
                "key": 0,
                "name": "250ml",
                "price": "150"
            },
            {
                "key": 1,
                "name": "500ml",
                "price": "300"
            }
        ]
    },
    {
        "PK": "9",
        "name": "Rich Tomato Maggi",
        "image": "https://padelasuperstore.in/wp-content/uploads/2018/10/Rich-Tomato-Ketchup.jpg",
        "desc": "A Simple Ketchup",
        "child": [
            {
                "key": 0,
                "name": "250ml",
                "price": "150"
            },
            {
                "key": 1,
                "name": "500ml",
                "price": "300"
            }
        ]
    },
    {
        "PK": "10",
        "name": "Rich Tomato Maggi",
        "image": "https://padelasuperstore.in/wp-content/uploads/2018/10/Rich-Tomato-Ketchup.jpg",
        "desc": "A Simple Ketchup",
        "child": [
            {
                "key": 0,
                "name": "250ml",
                "price": "150"
            },
            {
                "key": 1,
                "name": "500ml",
                "price": "300"
            }
        ]
    }
]

a = Item.itemsFromList(json)

export default a