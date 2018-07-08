let person = {
  name: 'Petter Olafson',
  address: 'Rathkes gate 1',
  professional: 'student',
  age: '38'

}

let person2 = {
  name: 'Nina Eriksen',
  address: 'Proffessor Dahls gate 13',
  professional: 'Customer Sevice',
  age: '29'

}

let person3 = {
  name: 'Susana Pham',
  address: 'Askergata 1',
  professional: 'Consultant',
  age: '37'

}

for (let k in person) {
  let value = person[k]
  let result = `${k}: ${value}`
 console.log(result)
}


for(let key in person2) {
  let value = person2[key]
  let result = `${key}: ${value}`
  console.log(result)
}


for(let key in person3) {
  var value = person3[key]
  let result = `${key}: ${value}`
  console.log(result)
}
