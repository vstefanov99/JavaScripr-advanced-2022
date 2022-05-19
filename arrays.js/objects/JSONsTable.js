function asd(input) {
    console.log('<table>')
    for (let line of input) {
        line = JSON.parse(line) 
        console.log('\t<tr>')
        for (let x in line) {
            console.log('\t\t<td>' + line[x] + '</td>')
        }
        console.log('\t</tr>')
    }
    console.log('</table>')
}
asd(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}'])