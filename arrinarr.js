let food = [
  ['chips', 'chocolate', 'pizza', 'godis', 'cake'],
  ['squah', 'salad', 'pepper', 'onion', 'ruccola', 'carrot'],
  ['chicken', 'pork', 'beef', 'bacon', 'cod', 'salomon'],
  ['wine', 'water', 'soda', 'coke', 'juice']
]

console.log(food)


for (var i = 0; i < food.length; i++){
  for(var j = 0; j < food[i].length; j++) {
    console.log(food[i][j])
  }
}
