function asd(input) {
    let result = []
    for (let line of input) {
        let newHero = {}
        let [name,level,items] = line.split(' / ')
        level = Number(level)
        items = items ? items.split(', ') : []
        result.push({name,level,items}) 
    }
    console.log(JSON.stringify(result))
}
asd(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])