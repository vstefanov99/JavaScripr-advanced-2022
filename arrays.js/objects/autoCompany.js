function asd(input) {
    let brandsObj = {}
    for (let line of input) {
        let [carBrand, carModel, producedQnt] = line.split(' | ')
        producedQnt = Number(producedQnt)
        if (!brandsObj[carBrand]) {
            brandsObj[carBrand] = []  
        } 
        if (!brandsObj[carBrand].includes(carModel)) {
            brandsObj[carBrand].push({[carModel]:producedQnt})
        } 
    }
    console.log(brandsObj)
}
asd(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
])