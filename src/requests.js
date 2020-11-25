const apiKey = require('./Keys')
const axios = require('axios').default

axios.defaults.baseURL = "https://oqy97amyd0.execute-api.ap-south-1.amazonaws.com/v1"
axios.defaults.headers = { "x-api-key": apiKey }

export const test = () => {
    axios.get('/test')
    .then(res => console.log(res))
    .catch(err => console.log(err.response))
}