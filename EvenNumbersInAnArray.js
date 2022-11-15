

let arr=[-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26]


//[-22, 26, -6, -8, -8, 26]
let x=arr.filter(e=>e%2==0)
let y=x.slice(x.length-2)



console.log(y)

function evenNumbers(array, number) {
    // good luck
    let x=array.filter(e=>e%2==0)
    let y=x.slice(x.length-number)

    return y
  }