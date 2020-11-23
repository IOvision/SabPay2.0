const axios = require('axios').default

axios.defaults.baseURL = "https://oqy97amyd0.execute-api.ap-south-1.amazonaws.com/v1"

export const test = () => {
    axios.get('/')
    .then(res => console.log(res))
    .catch(err => console.log(err.response))
}