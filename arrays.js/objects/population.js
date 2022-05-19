function asd(input) {
    let townsObj = {}
    for (let line of input) {
        let [townName,population] = line.split(' <-> ')
        population = Number(population)
        if (townsObj[townName]) {
            townsObj[townName] += population
        } else {
            townsObj[townName] = population
        }

    }
    for (let town in townsObj) {
        console.log(`${town} : ${townsObj[town]}`)
    }
}
asd(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'])