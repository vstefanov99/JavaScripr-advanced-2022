function solve() {
  let text = document.getElementById('input').innerHTML
  let output = document.getElementById('output')
  text = text.split('.')
  let newParagraphText = ''
  while (text.length > 0) {
    let newParagraph = document.createElement('p')
    for (let i = 0; i < 3; i++) {
      let sentence = text.shift()
      sentence += '.'
      newParagraphText += sentence
    }
    newParagraph.innerHTML = newParagraphText
    output.appendChild(newParagraph)

  }
}