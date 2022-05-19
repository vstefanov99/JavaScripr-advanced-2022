function asd(input) {
    function Sum(arr) {
        let sum = arr.reduce((a,b) => a + b , 0)
        return sum
    }
    function SumInverse(arr) {
        arr = arr.map(a => 1 / a).reduce((a,b) => a + b,0)
        return arr
    }
    function Concat(arr) {
        arr = arr.reduce((a,b) => String(a) + String(b))
        return arr
    }
    console.log(Sum(input))
    console.log(SumInverse(input))
    console.log(Concat(input))
}
asd([2,4,8,16])