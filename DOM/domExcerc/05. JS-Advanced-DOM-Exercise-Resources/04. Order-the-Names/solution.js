function solve() {
    let element = document.getElementById('exercise')
    let button = element.firstElementChild.lastElementChild
    button.addEventListener('click',asd)
    
    function asd(e) {
        let currentName = element.firstElementChild.firstElementChild.value
        let firstLetter = currentName.charCodeAt(0) - 97
        
        let listElement = element.lastElementChild.lastElementChild.children

        for (let i = 0;i < listElement.length;i++) {
            if (i == firstLetter) {
                if (listElement[i].textContent != '') {
                    listElement[i].textContent += `, ${currentName[0].toUpperCase() + currentName.substring(1,currentName.length)}`
                } else {
                    listElement[i].textContent = currentName[0].toUpperCase() + currentName.substring(1,currentName.length)
                }
            }
        }
     
    }


    // //TODO...
}