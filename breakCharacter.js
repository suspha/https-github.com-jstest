// break after 50 character

const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
 console.log(text.length) // 74
l = text.length;
loop = l / 50

 for(i = 0; i <= loop; i++) {
  console.log(text.slice(0, 50))
}
// Resultat: Lorem Ipsum is simply dummy text of the printing a



// Tester om det er riktig:

  // const text1 = "Lorem Ipsum is simply dummy text of the printing a"
  // console.log(text1.length)

  //Resultat = 50
