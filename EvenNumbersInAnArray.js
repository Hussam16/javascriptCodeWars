

let arr=[5,10,15,20,25,30]


//[-22, 26, -6, -8, -8, 26]
let x=arr.filter(e=>e%2==0)
let y=x.slice(x.length-2)

console.log(arr)
arr.sort()
console.log(arr)

function sum(element){
  let total=0
  return total=total+element
}





function evenNumbers(array, number) {
    // good luck
    let x=array.filter(e=>e%2==0)
    let y=x.slice(x.length-number)

    return y
  }