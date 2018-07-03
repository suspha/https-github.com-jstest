const readline = require('readline-sync');
const colors = require('colors');
const fs = require('fs')

const file = fs.readFileSync('./db.json','utf8')
const db = JSON.parse(file)
console.log(db)

//loop alle objekter i db og konverter fra string til date
for(let i = 0; i < db.length; i++) {
  db[i].date = new Date(db[i].date)
}

console.log(db)
console.log("Welcome Susana!")
console.log("Write down your excercise plan for today")
console.log("Get started:")

const menu = () => {
  console.log("Press x to exit")
  console.log("Press 1 to add a new excercise")
  const command = readline.question('---->')
  if (command === 'x'){
    run = false;
  } else if (command === '1') {
    const desc = readline.question('Description:')
    // legge inn i db
    const data = {date: new Date(), description: desc}
    db.push(data)
    // skrive db til fil
    const file = JSON.stringify(db)
    fs.writeFileSync('db.json', file, 'utf8');
  }
}

// const weekdays = []
// weekdays[0] = "Sunday";
// weekdays[1] = "Monday";
// weekdays[2] = "Tuesday";
// weekdays[3] = "Wednesday";
// weekdays[4] = "Thursday";
// weekdays[5] = "Friday";
// weekdays[6] = "Saturday";

// var current_date = new Date();

// day = current_date.getDay();

// console.log("Today is " + weekdays[day]);

var run = true
while (run) {
  menu()
}

console.log("See you again!".red)
