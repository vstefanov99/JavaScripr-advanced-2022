function solve() {
    let links = document.getElementsByClassName('link-1')
    for (let link of links) {
        let child = link.firstElementChild
        child.addEventListener('click',asd)
    }
  //TODO...
  function asd(e) {
      let parent = e.target.parentElement
      let sibling = parent.nextElementSibling
      let timesVisited = sibling.textContent.split(' ')[1]
      timesVisited ++
      sibling.textContent = `visited ${timesVisited} times`
      console.log(timesVisited)
  }
}