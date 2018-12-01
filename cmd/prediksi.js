const ora = require('ora')
const getCuaca = require('../utils/cuaca')

module.exports = async args => {
    const muter = ora().start()

    try {
        const location = args.location || args._[1]
        const weather = await getCuaca(location)
        muter.stop()
        console.log(`Prediksi untuk ${location}`)
        weather.forecast.map(item =>
            console.log(
                `\t${item.date} - Terendah : ${item.low}° | Tertinggi: ${
                    item.high
                }° | ${item.text}`
            )
        )
        //console.log(` ${weather.condition.temp} ° ${weather.condition.text}`)
    } catch (err) {
        muter.stop()
        console.error(err)
    }
}
