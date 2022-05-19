function solve() {
    let binaryElement = document.createElement('option')
    let hexElement = document.createElement('option')
    let selectMenuElement = document.getElementById('selectMenuTo')
    let convertButton = document.getElementById('container').lastElementChild
    let inputElement = document.getElementById('input')
    let outputElement = document.getElementById('result')

    convertButton.addEventListener('click',convert)

    function convert() {
        let currentConvertValue = selectMenuElement.value
        let currentInput = Number(inputElement.value)
        console.log(currentConvertValue)
        if (currentConvertValue == 'binary') {
            currentInput = currentInput.toString(2)
        } else if (currentConvertValue == 'hexadecimal') {
            currentInput = currentInput.toString(16).toUpperCase()
        }
        outputElement.value = currentInput
    }

    binaryElement.value = 'binary'
    binaryElement.textContent = 'Binary'
    hexElement.value = 'hexadecimal'
    hexElement.textContent = 'Hexadecimal'

    selectMenuElement.appendChild(binaryElement)
    selectMenuElement.appendChild(hexElement)
    //TODO...
}