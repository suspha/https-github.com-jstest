// format: dd.mm.yyyy

// function formatDate(date) {
//   let day = ('0' + date.getDate()).slice(-2)
//   let month = ('0' + (date.getMonth() + 1)).slice(-2)
//   let year = ('0' + (date.getYear())).slice(-2)

//   return `${day}.${month}.${year}`
// }

// let date = new Date()
// let formatted = formatDate(date)
// console.log(formatted)


// optional Denne funker uansett dato

const formatDate = (date) => {
  if( !date) {
    date = new Date()
  }
  const day = ('0' + date.getDate()).slice(-2);
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  // const year = now.getFullYear();
  const year = ('0' + (date.getYear())).slice(-2)
  return day + '.' + month + '.' + year;
  };

const date = new Date();
const f = formatDate()
console.log(f)



// Alltid nå

// const getToday = () => {
//         const now = new Date();
//         const day = ('0' + now.getDate()).slice(-2);
//         const month = ('0' + (now.getMonth() + 1)).slice(-2);
//         const year = now.getFullYear();
//         return day + '.' + month + ' ' + year;
//     };

//    const date = getToday()
//    console.log(date)
