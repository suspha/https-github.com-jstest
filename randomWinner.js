const names = require('./personDB').names
console.log(names)


const readline = require('readline-sync')
var colors = require('colors')

const menu = () => {
  console.log('Push the button to choose the winner:')
  console.log('Press x to exit')
  console.log('Press 1 to edit')
  console.log('Press 2 for list')

  const answer = readline.question('---->')
  if(answer === 'x'){
    run = false;
  } else if (answer === '1'){
    const name = readline.question('Type the name you want to edit? ')
    // check if it exist in names
    const index = names.findIndex((obj) => {
      return name === obj.name
    })
    if(index === -1){
      console.log("wrong name")
    } else {
      const newName = readline.question('New name: ')
      console.log(newName)
      //save new name as object
      names[index] = { name: newName }
    }
  } else if (answer === '2') {
    for(var j = 0; j< names.length; j++) {
      console.log(names[j]);
    }

  } else {
    const winner = Math.floor(Math.random() * names.length)
    console.log('The winner is:' , names[winner].name)
  }

}



// Run while this is true
var run = true
while(run) {
  menu()
}
console.log('bidie, bidie')
