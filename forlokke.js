
const list = [
  'abc', 'dbv', 'nisse', 'lanes', 'danr', 'qwer', 'asdf', 'poire',
  'abc', 'dbv', 'nisse', 'lanes', 'danr', 'qwer', 'asdf', 'poire',
  'abc', 'dbv', 'nisse', 'lanes', 'danr', 'qwer', 'asdf', 'poire',
  'abc', 'dbv', 'nisse', 'lanes', 'danr', 'qwer', 'asdf', 'poire',
  'abc', 'dbv', 'nisse', 'lanes', 'danr', 'qwer', 'asdf', 'poire'
]

const times = 10000


function normal () {
 for (let j = 0; j < times; j++) {
   for (let i = 0, l = list.length; i < l; i++) {
     console.log(list[i])
   }
 }
}

function es6 () {
 for (let j = 0; j < times; j++) {
   for (let i in list) {
     console.log(list[i])
   }
 }
}

// Start klokka
const start = new Date()

// Bytt til denne for å kjøre normal for-løkke

normal()

// Bytt til denne for å teste es6:
// es6()

// Kalkuler sluttid
let end = new Date() - start

console.log(end)
