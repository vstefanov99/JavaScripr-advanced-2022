function solve() {
	let answers = document.getElementsByClassName('answer-wrap')
	let resultElement = document.getElementById('results').firstElementChild
	let answeredTimes = 0
	let correctAnswers = 0
	for (let a of answers) {
		a.addEventListener('click',asd)
		
	}
	function asd(e) {

		let currentAnswer = ''
		let currSection = document.querySelectorAll("section")[answeredTimes];
		if (answeredTimes == 0) {
			currentAnswer = e.target.textContent 
			if (currentAnswer == 'onclick') {
				correctAnswers ++ 
			} 
			
		} else if (answeredTimes == 1) {
			currentAnswer = e.target.textContent 
			if (currentAnswer == 'JSON.stringify()') {
				correctAnswers ++ 
			} 
		} else if (answeredTimes == 2) {
			currentAnswer = e.target.textContent 
			if (currentAnswer == 'A programming API for HTML and XML documents') {
				correctAnswers ++ 
			} 
		}
		currSection.style.display = "none";
		if (document.querySelectorAll("section")[answeredTimes + 1] !== undefined) {
			let nextSection = document.querySelectorAll("section")[answeredTimes + 1]
			nextSection.style.display = 'block'
		} else {
			document.querySelector("#results").style.display = "block";
			if (correctAnswers !== 3) {
				resultElement.firstElementChild.textContent = `You have ${correctAnswers} right answers`
			} else {
				resultElement.firstElementChild.textContent = `You are recognized as top JavaScript fan!`
			}
		}
		answeredTimes++

		
	}
	//TODO...
}
