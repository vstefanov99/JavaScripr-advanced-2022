function rectangle(width, height, color) {
    let firstLetter = color[0]
    color = color.replace(firstLetter,firstLetter.toUpperCase())
    let obj = {
        width,
        height,
        color,
        calcArea() {
            return width * height
        }
    }
    return obj
    
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());