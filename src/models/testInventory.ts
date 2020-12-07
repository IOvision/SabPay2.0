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
                image: "https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-red-tilt-texture-offer-image_11168.jpg"
            },
            {
                key: "1",
                image: "https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-red-tilt-texture-offer-image_11168.jpg"
            }
        ]
    },
    {
        "PK": "2",
        "SK": "2",
        "name": "Merchant 2",
        "address": "Merchant 2 address",
        "image": "https://cdn4.vectorstock.com/i/1000x1000/08/28/shop-store-flat-icon-vector-14270828.jpg",
        "rating": 4,
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
                image: "https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-red-tilt-texture-offer-image_11168.jpg"
            },
            {
                key: "1",
                image: "https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-red-tilt-texture-offer-image_11168.jpg"
            }
        ]
    },
    {
        "PK": "3",
        "SK": "3",
        "name": "Merchant 3",
        "address": "Merchant 3 address",
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
                image: "https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-red-tilt-texture-offer-image_11168.jpg"
            },
            {
                key: "1",
                image: "https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-red-tilt-texture-offer-image_11168.jpg"
            }
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
                image: "https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-red-tilt-texture-offer-image_11168.jpg"
            },
            {
                key: "1",
                image: "https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-red-tilt-texture-offer-image_11168.jpg"
            }
        ]
    },
    {
        "PK": "5",
        "SK": "5",
        "name": "Merchant 5",
        "address": "Merchant 5 address",
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
                image: "https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-red-tilt-texture-offer-image_11168.jpg"
            },
            {
                key: "1",
                image: "https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-red-tilt-texture-offer-image_11168.jpg"
            }
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
                image: "https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-red-tilt-texture-offer-image_11168.jpg"
            },
            {
                key: "1",
                image: "https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-red-tilt-texture-offer-image_11168.jpg"
            }
        ]
    },
]

a = Merchant.itemsFromList(json)

export default a