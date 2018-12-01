const axios = require('axios')

module.exports = async () => {
    const result = await axios({
        method: 'GET',
        url: 'https://api.ipdata.co',
    })
    const { city, region } = result.data
    return `${city},${region}`
}
