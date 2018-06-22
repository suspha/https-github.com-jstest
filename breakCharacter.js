// break after 50 character

const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
console.log(text.length) // 74
let truncatedText = text.slice(0, 50)

console.log(truncatedText)
console.log(truncatedText.length)


//with ...
//let truncatedText = `${text.slice(0, 50)}...`
