const { default: axios } = require('axios')
const geocode = async query => {
    if(!query || query.length === 0) throw 'Cannot geocode empty query'
    axios.get()
}