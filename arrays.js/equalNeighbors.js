function asd(input) {
    let counter = 0
    for (let line in input) {
        line = Number(line)
        let nextLine = line + 1
        if (input[nextLine] !== undefined) {
            for (let i =0 ; i < input[line].length;i++) {
                if (input[line][i] === input[nextLine][i]) {
                    counter ++
                }
                
            }

        }
        for (let i = 0;i < input[line].length;i++) {
            if (input[line][i] === input[line][i+1]) {
                counter ++
            }
        }

    }
    console.log(counter)
}
asd([[2,2,5,7,4],
    [4,0,5,3,4],
    [2,5,5,4,2]])