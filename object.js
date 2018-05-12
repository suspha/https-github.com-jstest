let person = {
	name: 'Suong',
  address: 'Rathkes gate 3',
  age: '36'
}
console.log(person)

for(let key in person) {
  let value = person[key] 
  let result = `${key}: ${value}`
  console.log(result)
}