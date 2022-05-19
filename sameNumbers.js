function asd(x) {
    let sum = String(x)
        .split('')
        .map(Number)
        .reduce((a, b) => a + b, 0)
    let arr = String(x)
        .split('')
        .map(Number)
    let i = arr[0]
    let areSame = false
    for (let j = 1;j < arr.length;j++) {
        if (i == arr[j]) {
           areSame = true
        } else {
            areSame = false
        }
    }
    console.log(areSame)
    console.log(sum)
}
asd(1234)
let a = 2
a **= 10
console.log(a)