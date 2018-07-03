const readline = require('readline-sync');
const colors = require('colors');
const fs = require('fs')

// const foodList= ['chips', 'chocolate', 'pizza', 'godis', 'cake', 'meat']
const file = fs.readFileSync('./handleliste.json', 'utf8');
console.log(file)
// const foodList = file.split(',')
const foodList = JSON.parse(file)

const menuList = () => {
  console.log("press 1 to look at the list".cyan)
  console.log("press 2 to edit".cyan)
  console.log("press 3 to add new item".cyan)
  console.log("press 4 to delete item".cyan)
  console.log("press x to exit".red)

  const submit = readline.question('---->')
  if (submit === '1') {
    for(var j = 0; j< foodList.length; j++) {
      console.log(foodList[j]);
    }

  } else if (submit === '2'){
    let foodName = readline.question('Type in the item you want to edit? ')
    // check if it exist in names
    console.log(foodName)
    foodName = foodName.toLowerCase()
    const index = foodList.findIndex((str) => {
      return foodName === str
    })

    if(index === -1){
      console.log("wrong item")
    } else {
      const newFood = readline.question('New item: ')
      console.log(newFood)
      //save new name as string
      foodList[index] = newFood.toLowerCase()
    }

  } else if (submit === '3'){
    const foodName = readline.question('Type new item:  ')
    foodList.unshift(foodName.toLowerCase())

  } else if (submit === '4'){
    let foodName = readline.question('Delete item:  ')
    foodName = foodName.toLowerCase()
    const index = foodList.findIndex((str)=> {
      return foodName === str
    })
    if(index === -1) {
      console.log('Cant find item')
    } else {
      foodList.splice(index, 1)
      console.log(foodName)
    }
  } else if(submit === 'x'){
    run = false;
    // const file = foodList.join(',')
    const file = JSON.stringify(foodList)
    fs.writeFileSync('handleliste.json', file, 'utf8');
  }
}

var run = true
while(run) {
  menuList()
}

console.log('Thanks!')
