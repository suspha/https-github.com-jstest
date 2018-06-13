// const date = new Date()
// let hour = date.getHours()

// if (hour > 21) {
//  time to sleep
// } else {
//  // time to program
// }
// console.log(hour)


const date = new Date()
const hour = date.getHours()
const bedtime = 23


const d = (hour > bedtime) ? "time to sleep" : "time to program"

console.log(d)


