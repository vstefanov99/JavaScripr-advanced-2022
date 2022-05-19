function solve() {

    let keysElement = document.getElementsByClassName('keys')
    let expressionOutputElement = document.getElementById('expressionOutput')
    let resultOutput = document.getElementById('resultOutput')
    let clearButton = document.getElementsByClassName('clear')[0]
    clearButton.addEventListener('click',clearCalc)
    keysElement[0].addEventListener('click',asd)
    let currentOperation = ''
    function clearCalc(e) {
        resultOutput.innerText = ''
        expressionOutputElement.innerText = ''
        currentOperation = ''
    }
    function asd(e) {
        let currentTarget = (e.target).textContent
        if (currentTarget == '+') {
            expressionOutput.textContent += ' ' + currentTarget + ' '

            currentOperation += ' ' + currentTarget + ' '

        } else if (currentTarget == '-') {
            expressionOutput.textContent += ' ' + currentTarget + ' '

            currentOperation += ' ' + currentTarget + ' '

        } else if (currentTarget == 'x') {
            expressionOutput.textContent += ' ' + currentTarget + ' '

            currentOperation += ' ' + currentTarget + ' '

        } else if (currentTarget == '/') {
            expressionOutput.textContent += ' ' + currentTarget + ' '

            currentOperation += ' ' + currentTarget + ' '

        } else if (currentTarget == '=') {
            currentOperation = currentOperation.split(' ')
            if (currentOperation[2] != '' && currentOperation[0] != '' && currentOperation[1] != '') {
                let currentOperand = currentOperation[1]
                if (currentOperand == '+') {
                    resultOutput.textContent = (Number(currentOperation[0]) + Number(currentOperation[2]))
                } else if (currentOperand == '-') {
                    resultOutput.textContent = (Number(currentOperation[0]) - Number(currentOperation[2]))
                } else if (currentOperand == '/') {
                    resultOutput.textContent = (Number(currentOperation[0]) / Number(currentOperation[2]))
                } else if (currentOperand == 'x') {
                    resultOutput.textContent = (Number(currentOperation[0]) * Number(currentOperation[2]))
                }
            } else {
                resultOutput.textContent = 'NaN'
            }
            currentOperation = ''
        } else if (currentTarget == '.') {
            currentOperation += currentTarget
            expressionOutput.textContent += currentTarget

        } else {
            currentOperation += currentTarget
            expressionOutput.textContent += currentTarget
        }
    }
    
    //TODO...
}