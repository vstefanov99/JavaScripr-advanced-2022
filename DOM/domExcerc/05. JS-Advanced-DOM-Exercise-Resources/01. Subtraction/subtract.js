function subtract() {
    let firstNum = document.getElementById('firstNumber').value
    let secondNumber = document.getElementById('secondNumber').value
    let output = document.getElementById('result')
    output.textContent = Number(firstNum) - Number(secondNumber) 
    console.log(firstNum,secondNumber);
}