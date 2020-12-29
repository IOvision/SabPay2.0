import axios from 'axios'

axios.defaults.baseURL = "https://oqy97amyd0.execute-api.ap-south-1.amazonaws.com/v1"
axios.defaults.headers = { "x-api-key": 'RDFCXXNZwW2FBxGykBgKz3E0MPcz3A5I4yFqzmlw' }

import Item from './models/Item'
import Merchant from './models/Merchant'
import Order from './models/Order'

export const getItemsFromTag = (tag: string, lastKey: string, cb: (err: any, resp: any) => void) => {
    axios.get(`/item/${tag}`)
    .then(res => {
        console.log('done')
        cb(false, Item.itemsFromList(res.data.data))
    })
    .catch(err => cb(err, null))
}

export const getItemsFromCategory = (category: string, lastKey: string, cb: (err: any, resp: any) => void) => {
    axios.get(`/item/${category}`, {
        params: {
            byCategory: true
        }
    })
    .then(res => {
        cb(false, Item.itemsFromList(res.data.data))
    })
    .catch(err => cb(err, null))
}


export const getMerchant = (latitude: number, longitude: number, radius: number, cb: (err: any, resp: any) => void) => {
    const params = {
        radius: radius,
        latitude: latitude,
        longitude: longitude
      };
    axios.get('/inventory', { params })
    .then(res => {
        cb(false, Merchant.itemsFromList(res.data.data))
    })
    .catch(err => cb(err, null))
}

export const order = (order: Order, phone: string, merchantId: string, cb: (err: any, resp: any) => void) => {
    var a = order.toJSON()
    axios.post("https://sabpay.requestcatcher.com/order", {
        PK: merchantId,
        GS1_PK: phone,
        ...a
    })
    .then(res => {
        cb(false, res.data.success)
    })
    .catch(err => cb(err, null))
}

export const getOrders = (phone: string, token: string, cb: (err: any, resp: any) => void) => {
    axios.get(`/user/${phone}/order`, {
        headers: {
            "SP-TOKEN": token
          }
    })
    .then(res => {
        console.log("full: " + Object.keys(res.data.data[0]))
        console.log("full: " + res.data.data[0].SK)
        cb(false, Order.itemsFromList(res.data.data))
    })
    .catch(err => cb(err, null))
}

export const getSpecialOffers = (cb: (err: any, resp: any) => void) => {
    // axios.get(`\graphics`)
    // .then(res => {
    //     cb(false, res.data.data)
    // })
    // .catch(err => cb(err, null))
}