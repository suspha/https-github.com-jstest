// endre farger avhengig av tid

const getTime = () => {
  const now = new Date();
  const hours = now.getHours();
  return hours
}
const hour = getTime();



// 5-9
if (hour > 4 && hour < 10){
  console.log('Color is: red');
}
// 10-13
else if(hour < 14){
  console.log('Color is: green');
}
// 14-16
else if(hour < 17) {
  console.log('Color is: Yellow');
}
// 17-20
else if(hour < 21) {
  console.log('Color is: blue');
}
// 21-23
else if(hour < 24 )  {
  console.log('Color is: purple');

} else {
  console.log('Color: White');
}

console.log(hour)
