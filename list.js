let foodItem = ['chicken', 'egg', 'milk', 'nuts', 'cheese', 'sugar', 'candies']
let unhealthy = ['sugar', 'icecream', 'candies']
let count = 0

for(let i = 0; i < foodItem.length; i++) {
  if(!unhealthy.includes(foodItem[i])){
    count++
  }
}

//How many healthy and unhealthy

console.log('Amount of healthy food is:', count)
console.log('Amount of unhealthy food is:' , foodItem.length - count)
