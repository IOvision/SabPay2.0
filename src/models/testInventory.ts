import Merchant from './Merchant'

var a: Merchant[]
var json = [
    {
        "PK": "1",
        "SK": "1",
        "name": "Merchant 1",
        "address": "Merchant 1 address",
        "image": "https://cdn4.vectorstock.com/i/1000x1000/08/28/shop-store-flat-icon-vector-14270828.jpg",
        "rating": 1,
        "tags": [
            {
                "title": "Groceries & Staples",
                "image": "https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-red-tilt-texture-offer-image_11168.jpg",
                "tag": "grocery",
            }
        ],
        "isOpen": false,
        "exclude": [{
            "tag": "fruit",
            "items": []
        }],
        "offers": [],
        "storeSp": [
            {
                key: "0",
                image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
                title: "Dry Fruits Diwali",
                price: "Rs. 1000"
            },
            {
                key: "2",
                image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
                title: "Dry Fruits Diwali",
                price: "Rs. 1000"
            },
        ]
    },
    {
        "PK": "2",
        "SK": "2",
        "name": "Merchant 2",
        "address": "Merchant 2 address",
        "image": "https://cdn4.vectorstock.com/i/1000x1000/08/28/shop-store-flat-icon-vector-14270828.jpg",
        "rating": 2,
        "tags": [
            {
                "title": "Biscuits and Chocolates",
                "image": "https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-red-tilt-texture-offer-image_11168.jpg",
                "tag": "grocery",
            }
        ],
        "isOpen": false,
        "exclude": [{
            "tag": "fruit",
            "items": []
        }],
        "offers": [],
        "storeSp": [
            {
                key: "0",
                image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
                title: "Dry Fruits Diwali",
                price: "Rs. 1000"
            },
            {
                key: "2",
                image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
                title: "Dry Fruits Diwali",
                price: "Rs. 1000"
            },
        ]
    },
    {
        "PK": "3",
        "SK": "3",
        "name": "Merchant 3",
        "address": "Merchant 3 address",
        "image": "https://cdn4.vectorstock.com/i/1000x1000/08/28/shop-store-flat-icon-vector-14270828.jpg",
        "rating": 3,
        "tags": [
            {
                "title": "Groceries & Staples",
                "image": "https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-red-tilt-texture-offer-image_11168.jpg",
                "tag": "grocery",
            }
        ],
        "isOpen": false,
        "exclude": [{
            "tag": "fruit",
            "items": []
        }],
        "offers": [],
        "storeSp": [
            {
                key: "0",
                image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
                title: "Dry Fruits Diwali",
                price: "Rs. 1000"
            },
            {
                key: "2",
                image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
                title: "Dry Fruits Diwali",
                price: "Rs. 1000"
            },
        ]
    },
    {
        "PK": "4",
        "SK": "4",
        "name": "Merchant 4",
        "address": "Merchant 4 address",
        "image": "https://cdn4.vectorstock.com/i/1000x1000/08/28/shop-store-flat-icon-vector-14270828.jpg",
        "rating": 4,
        "tags": [
            {
                "title": "Groceries & Staples",
                "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
                "tag": "grocery",
            }
        ],
        "isOpen": false,
        "exclude": [{
            "tag": "fruit",
            "items": []
        }],
        "offers": [],
        "storeSp": [
            {
                key: "0",
                image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
                title: "Dry Fruits Diwali",
                price: "Rs. 1000"
            },
            {
                key: "2",
                image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
                title: "Dry Fruits Diwali",
                price: "Rs. 1000"
            },
        ]
    },
    {
        "PK": "5",
        "SK": "5",
        "name": "Merchant 5",
        "address": "Merchant 5 address",
        "image": "https://cdn4.vectorstock.com/i/1000x1000/08/28/shop-store-flat-icon-vector-14270828.jpg",
        "rating": 5,
        "tags": [
            {
                "title": "Groceries & Staples",
                "image": "https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-red-tilt-texture-offer-image_11168.jpg",
                "tag": "grocery",
            }
        ],
        "isOpen": false,
        "exclude": [{
            "tag": "fruit",
            "items": []
        }],
        "offers": [],
        "storeSp": [
            {
                key: "0",
                image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
                title: "Dry Fruits Diwali",
                price: "Rs. 1000"
            },
            {
                key: "2",
                image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
                title: "Dry Fruits Diwali",
                price: "Rs. 1000"
            },
        ]
    },
    {
        "PK": "6",
        "SK": "6",
        "name": "Merchant 6",
        "address": "Merchant 6 address",
        "image": "https://cdn4.vectorstock.com/i/1000x1000/08/28/shop-store-flat-icon-vector-14270828.jpg",
        "rating": 4,
        "tags": [
            {
                "title": "Groceries & Staples",
                "image": "https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-red-tilt-texture-offer-image_11168.jpg",
                "tag": "grocery",
            }
        ],
        "isOpen": false,
        "exclude": [{
            "tag": "fruit",
            "items": []
        }],
        "offers": [],
        "storeSp": [
            {
                key: "0",
                image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
                title: "Dry Fruits Diwali",
                price: "Rs. 1000"
            },
            {
                key: "2",
                image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
                title: "Dry Fruits Diwali",
                price: "Rs. 1000"
            },
        ]
    },
]

a = Merchant.itemsFromList(json)

export default a