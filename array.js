
let names = ['Suong', 'Vidar', 'Henning', 'Daniel', 'Jonas'];

console.log('printing list normal')
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}


console.log('\nprinting list reverse')
for(let i = names.length-1; i >= 0; i--) {
  console.log(names[i]);
}

console.log('\nprinting list es model')


// mutere endrer seg
let reverse = names.slice().reverse()
for(let name of reverse) {
  console.log(name)
}

console.log('\nprinting list es model')

for(let name in names) {
  console.log(names[name])
}

console.log('\nprinting list normal let outside')
let i = 0;
for(; i < names.length; i++) {
  console.log(names[i]);
}

console.log('\nprinting list normal let outside')
i = 0;
for(; i < names.length;) {
  console.log(names[i++]);
}

console.log('\nprinting list empty for')
i = 0;
for(;;) {
  console.log(i);
  console.log(names[i]);
  i += 1

  if(i === names.length) {
    break;
  }
}


console.log('\nprinting list while true')
i = 0;
while(true) {
  console.log(i);
  console.log(names[i++]);

  if(i === names.length) {
    break;
  }
}

console.log('\nprinting list while true 2')
i = 0;
while(i < names.length) {
  console.log(i);
  console.log(names[i++]);
}

console.log('\nprinting list do while')
i = 0;
do {
  console.log(names[i++])
} while(i < names.length-1)


console.log('printing list every other')
for (let i = 0; i < names.length; i += 2) {
  console.log(names[i]);
}


console.log('printing list every other reverse')
for (let i = names.length-1; i >= 0; i -= 2) {
  console.log(names[i]);
}
