function asd(input) {
    let mainSum = 0
    let secondarySum = 0
    for (let i = 0; i < input.length;i++) {
        mainSum += input[i][i]
        secondarySum += input[i][input.length - 1 - i]
    }
    console.log(mainSum, secondarySum)
    
}
asd([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]])