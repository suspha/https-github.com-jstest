let val = false // false
val = 0 // false
val = null //false
val = -1 //true
val = 1 // true
val = '' // false
val = undefined //false
val = NaN // false
val = [] // true
val = {} //true
val = 'Hello' // true
if(val){
  console.log('true')
} else {
  console.log('false')
}


