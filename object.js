let person = {
	name: 'Susana',
  address: 'Rathkes gate 3',
  professional: 'student',
  age: '37'

}

for(let key in person) {
  let value = person[key]
  let result = `${key}: ${value}`
  console.log(result)
}


