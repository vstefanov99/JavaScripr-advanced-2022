function growingWord() {
    let wordElement = document.getElementById('exercise').lastElementChild
    let colorChanges = {
        'blue':'green',
        'green':'red',
        'red':'blue'
    }
    if (!wordElement.hasAttribute('style')) {
        wordElement.setAttribute('style',`color: blue ; font-size: 2px`)
    } else {
        let px = wordElement.style["font-size"]
        let currentColor = wordElement.style.color
        px = px.substring(0, px.length - 2)
        
        console.log(px)
        wordElement.setAttribute('style',`color: ${colorChanges[currentColor]};font-size: ${px * 2}px`)
    }
}