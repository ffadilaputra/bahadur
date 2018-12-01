const minimist = require('minimist')
const error = require('./utils/errors')

module.exports = () => {
    const args = minimist(process.argv.slice(2))
    let command = args._[0] || 'help'

    if (args.version || args.v) {
        command = 'version'
    }

    if (args.help || args.h) {
        command = 'help'
    }

    switch (command) {
        case 'sekarang':
            require('./cmd/sekarang')(args)
            break
        case 'help':
            require('./cmd/help')(args)
            break
        case 'prediksi':
            require('./cmd/prediksi')(args)
            break
        case 'version':
            require('./cmd/version')(args)
            break
        default:
            error(`"${command}" perintah ngga valid gan !`)
            break
    }
}
