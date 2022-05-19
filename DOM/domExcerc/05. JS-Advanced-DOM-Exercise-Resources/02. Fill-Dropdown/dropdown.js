function addItem() {
    let newItemText = document.getElementById('newItemText')
    let newItemValue = document.getElementById('newItemValue')
    let dropdownMenu = document.getElementById('menu')
    let newOption = document.createElement('option')
    newOption.textContent = newItemText.value
    newOption.value = newItemValue.value
    dropdownMenu.appendChild(newOption)
    newItemText.value = ''
    newItemValue.value = ''

    console.log('TODO:...');
}