const ora = require('ora')
const getCuaca = require('../utils/cuaca')
const getLokasi = require('../utils/cuaca')

module.exports = async args => {
    const muter = ora().start()
    try {
        const location = args.location || args._[1] || (await getLokasi())
        const weather = await getCuaca(location)
        muter.stop()
        console.log(`Posisi anda saat ini ${location}`)
        console.log(` ${weather.condition.temp} ° ${weather.condition.text}`)
    } catch (err) {
        muter.stop()
        console.error(err)
    }
}
