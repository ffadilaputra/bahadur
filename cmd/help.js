const menu = {
    main: `
        Cuaca cli 🌝

        cuaca [command] <options>

        sekarang .......... tampilkan cuaca sekarang gan
        version  .......... nampilin versi
        help     .......... petunjuk gan
    `,
    sekarang: `
        cuaca sekarang <options>

        --lokasi , -l .. berdasar lokasi
    `,
}

module.exports = args => {
    const subCommand = args._[0] === 'help' ? args._[1] : args._[0]
    console.log(menu[subCommand] || menu.main)
}
