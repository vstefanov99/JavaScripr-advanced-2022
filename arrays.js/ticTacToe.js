function asd(input) {
    let board = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ]
    let player = 'X'
    let win = false
    let hasFreeFields = (matrix) => matrix.some((arr) => arr.some(value => value === false))
    for (let i = 0;i < input.length && hasFreeFields(board);i++) {
        let [row, col] = input[i].split(' ').map(n => Number(n))
        if (!board[row][col]) {
            board[row][col] = player

            if (isWinner(board, player)) {
                win = true
                break
            }
            player = player === 'X' ? 'O' : 'X'
        } else {
            console.log(`This place is already taken. Please choose another!`)
        }

    }
    if (win) {
        console.log(`Player ${player} wins!`)
    } else {
        console.log(`The game ended! Nobody wins :(`)
    }
    board.forEach(line=>{
        console.log(line.join('\t'))
    })
    function isWinner(currentBoard, currentPlayer) {
        let wins = false
        for (let i = 0; i < 3; i++) {
            if (currentBoard[i][0] === currentPlayer && currentBoard[i][1] === currentPlayer && currentBoard[i][2] === currentPlayer) {
                wins = true
                break
            }
            if (currentBoard[0][i] === currentPlayer && currentBoard[1][i] === currentPlayer && currentBoard[2][i] == currentPlayer) {
                wins = true
                break
            }
        }
        if (!wins) {
            if ((currentBoard[0][0] === currentPlayer && currentBoard[1][1] === currentPlayer && currentBoard[2][2] === currentPlayer) ||
                (currentBoard[0][2] === currentPlayer && currentBoard[1][1] === currentPlayer && currentBoard[2][0] === currentPlayer)) {
                wins = true
            }
        }
        return wins
    }
}
asd(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"
])