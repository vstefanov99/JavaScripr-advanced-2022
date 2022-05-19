function fromJSONToHTMLTable(input){
    let arr = JSON.parse(input)
    for (let line of arr) {
        console.log(line.Price)
    }
}
fromJSONToHTMLTable(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'])