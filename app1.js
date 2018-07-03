let person = {
  name: 'Petter Olafson',
  address: 'Rathkes gate 1',
  professional: 'student',
  age: '37'

}

let person2 = {
  name: 'Nina Eriksen',
  address: 'Proffessor Dahls gate 13',
  professional: 'IT Consultant',
  age: '29'

}

for(let key in person) {
  let value = person[key]
  let result = `${key}: ${value}`
  console.log(result)
}

for(let key in person2) {
  let value = person2[key]
  let result = `${key}: ${value}`
  console.log(result)
}
