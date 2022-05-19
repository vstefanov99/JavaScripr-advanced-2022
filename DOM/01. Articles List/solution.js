function createArticle() {
	let titleText = document.getElementById("createTitle")
	let articleText = document.getElementById("createContent")

	if (titleText.value != '' && articleText.value != '') {
		let newText = document.createElement('p')
		let newTitle = document.createElement('h3')
		let newArticle = document.createElement('article')
	
		newText.innerHTML = articleText.value
		newTitle.innerHTML = titleText.value
		newArticle.appendChild(newTitle)
		newArticle.appendChild(newText)
		titleText.value = ''
		articleText.value = ''

		let articlesList = document.getElementById('articles')
		articlesList.appendChild(newArticle)

	}
}