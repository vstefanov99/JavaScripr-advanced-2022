function asd(x1,x2) {
    let bigger = ''
    if (x1 > x2) {
        bigger = x1
    } else if (x2 > x1) {
        bigger = x2
    } else {
        bigger = x1
    }
    let biggestDivisor = 0
    for (let i = 0;i < bigger;i++) {
        if (x1 % i == 0 && x2 % i == 0) {
            biggestDivisor = i
        }
    }
    console.log(biggestDivisor)
}
asd(2154,458)