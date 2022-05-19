function toggle() {
    let hiddenText = document.getElementById('extra')
    let buttonElement = document.getElementsByClassName('button')
    if (buttonElement[0].textContent == 'More') {
        buttonElement[0].textContent = 'Less'
        hiddenText.style.display = 'block'
    } else {
        hiddenText.style.display = 'none'
        buttonElement[0].textContent = 'More'

    }
}