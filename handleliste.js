const readline = require('readline-sync')

const foodList= [
  ['chips', 'chocolate', 'pizza', 'godis', 'cake'],
  ['squah', 'salad', 'pepper', 'onion', 'ruccola', 'carrot'],
  ['chicken', 'pork', 'beef', 'bacon', 'cod', 'salomon'],
  ['wine', 'water', 'soda', 'coke', 'juice']
];
const menuList = () => {
  console.log("press 1 to look at the list")
  console.log("press x to exit")
  console.log("press 2 to edit")


  // List
  const submit = readline.question('>>>>>>>');
  if(submit === '1') {
    for(let i = 0; i < foodList.length; i++) {
      console.log(foodList[i])
    }
    // Exit
    if (submit === 'x') {
      run = false
    } else if (submit === '2') {
      //
      const foodName = readline.question('Type in the item you want to edit')
      const index = foodList.findIndex((r) => {
        return foodName === r.foodName
      })
      // When type in wrong item
      if(submit === -1){
      console.log("Item does not exist")

      // else this will be shown for edit
    } else {
      const newItem = readline.question('Type new item: ')
      console.log(newItem)
      //save new name as object
      foodList[index] = { foodName: newItem }
    }
    }
  }

}

var run = true
while(run) {
  menuList()
}

console.log('Thanks!')
