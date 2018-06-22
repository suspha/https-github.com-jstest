const hello = "hello"
console.log(hello)

const name = "Susana"
let obj = {name: name}
console.log(obj)

obj = {name}
console.log(obj)

const fn = () => {
  let {name} = obj
  console.log(name)
}
fn()

const fn2 = ({name}) => {
  console.log(name)
}
fn2(obj)

// Obtion 1
const arr = [1,2,3]
console.log(arr)

let a = arr[0]
let b = arr[1]
let c = arr[2]
console.log(a,b,c)


//option 2
let x = arr[0], y = arr[1], z = arr[2]

console.log(x,y,z)

//optoion 3 dereferencing
let [i, j, k] = arr
console.log(i,j,k)
