

let x="hello"

let arr1=["spongebob","sonic","themask"]

let squares=arr1.map(reversString)

console.log(squares)

console.log(arr1[0])

console.log(reversString(x))

function reversString(element){
    return element.split('').reverse().join('');
}


