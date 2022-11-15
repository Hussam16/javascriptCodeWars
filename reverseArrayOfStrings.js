

let arr1=["spongebob","sonic","themask"]

let squares=arr1.map(reversString)

function reversString(element){
    return element.split('').reverse().join('');
}
