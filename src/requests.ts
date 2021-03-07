import { Auth } from 'aws-amplify'
import axios from 'axios'

axios.defaults.baseURL = "https://oqy97amyd0.execute-api.ap-south-1.amazonaws.com/v1"
axios.defaults.headers = { "x-api-key": 'RDFCXXNZwW2FBxGykBgKz3E0MPcz3A5I4yFqzmlw' }

import Item from './models/Item'
import Inventory from './models/Inventory'
import Order from './models/Order'
import User from './models/User'
import InventoryMetadata from './models/InventoryMetadata'

export const getItemsFromTag = (tag: string, lastKey: string) => new Promise<Array<Item>>((resolve, reject) => {
    axios.get(`/item/${tag}`, {
        params: {
            lastKey: lastKey
        }
    })
    .then(res => {
        console.log('done')
        resolve(Item.itemsFromList(res.data.data))
    })
    .catch(err => reject(err.response))
}) 
    
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


export const getMerchant = (latitude: number, longitude: number, radius: number, cb: (err: any, resp: InventoryMetadata[]) => void) => {
    const params = {
        radius: radius,
        latitude: latitude,
        longitude: longitude
      };
    axios.get('/inventory', { params })
    .then(res => {
        console.log("gatemERchant: " + Object.values(res.data.data))
        cb(false, InventoryMetadata.itemsFromList(res.data.data))
    })
    .catch(err => cb(err, null))
}

export const order = (order: Order, phone: string, merchantId: string, cb: (err: any, resp: any) => void) => {
    var a = order.toJSON()
    axios.post("/order", {
        PK: merchantId,
        GS1_PK: phone,
        ...a
    })
    .then(res => {
        console.log(res.data)
        cb(false, res.data.success)
    })
    .catch(err => cb(err, null))
}

export const getOrders = (phone: string, lastKey: string, cb: (err: any, resp: any) => void) => {
    Auth.currentSession()
    .then(data => {
        const token = data.getIdToken().getJwtToken()
        axios.get(`/user/${phone}/order`, {
            params: {
                lastKey: lastKey
            },
            headers: {
                "SP-TOKEN": token
            }
        })
        .then(res => {
            cb(false, Order.itemsFromList(res.data.data))
        })
        .catch(err => cb(err, null))
    })
}

export const getSpecialOffers = () => new Promise<Array<String>>((resolve, reject) => {
    axios.get(`/graphics`)
    .then(res => {
        resolve(res.data.data)
    })
    .catch(err => reject(err))
})

export const getMerchantDetails = (SK: string) => new Promise<Inventory>((resolve, reject) => {
    axios.get(`/inventory/${SK}`)
    .then(res => {
        console.log(Object.keys(res.data.data[0]))
        resolve(res.data.data[0])
    })
    .catch(err => reject(err))
})

export const getUserData = (phone: string, token: string, cb: (err: any, resp: User) => void) => {
    axios.get(`/user/${phone}`, {
        headers: {
            "SP-TOKEN": token
        }
    })
    .then(res => {
        if(res.data.data !== null)
            cb(false, new User(res.data.data[0]))
        else
            cb('signup', null)
    })
    .catch(err => cb(err.response, null))
}

export const putUserData = (user: User, cb: (err: any, resp: User) => void) => {
    Auth.currentSession()
    .then(data => {
        const token = data.getIdToken().getJwtToken()
        axios.put(`/user/${user.getPhone()}`, {
            UpdateExpression: "set username=:n, address= :a, phoneNumber= :p",
            ExpressionAttributeValues: {
                ":n": user.username,
                ":a": user.address,
                ":p": user.phoneNumber
            }
        }, {
            headers: {
                "SP-TOKEN": token
            }
        })
        .then(res => {
            cb(false, new User(res.data.data[0]))
        })
        .catch(err => {
            cb(true, null)
        })
    })
}