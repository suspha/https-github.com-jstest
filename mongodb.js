const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const readline = require('readline-sync')
var colors = require('colors')

// Connection URL
const url = 'mongodb://localhost:27017'

// Database Name
const dbName = 'training'

// Run while this is true
let run = true

var db
const connect = async (err, client) => {
  // console.log("Connected successfully to server")

  db = client.db(dbName)

  while(run) {
    await init()
  }
}

// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, connect)

const menu = () => {
  console.log()
  console.log('Welcome to the excercise diary'.underline.blue)
  console.log('Select option'.bold)
  console.log('1.'.cyan + 'insert')
  console.log('2.'.cyan + 'list')
  console.log('3.'.cyan + 'delete')
  console.log('4.'.cyan + 'update')
  console.log('x.'.cyan + 'exit')
}

// Model: name(string)
const insert = async () => {
  let name = readline.question('Name: ')
  console.log(name)
  let res = await db.collection('excercises').insertOne({name: name})
  console.log('inserted ', res.insertedId)
}

const list = async () => {
  let docs = await db.collection('exercices').find({}).toArray()
  let pretty = JSON.stringify(docs, null, 2)
  console.log(pretty)
}

const remove = async () => {
  let name = readline.question('Name: ')
  let existing = await db.collection('excercices').findOne({name: name})
    if(existing){
      let res = await db.collection('excercises').deleteOne({name: name})
      console.log('Deleted ' + res.deleteCount + ' excercise(s')
  } else {
    console.log('Ukjent navn'.red.bold)
  }
}

const update = async () => {
  let name = readline.question('Type the name you want to update? ')
  let existing = await db.collection('excercises').findOne({name: name})
  if(existing) {
    let newName = readline.question('New name: ')
    let res = await db.collection('excercises').updateOne({name: name}, {$set: {name: newName}})
    console.log('Updated ' + res.modifiedCount + ' excercise(s)')
  } else {
    console.log('Feil!!!'.red.bold)
  }
}

const init = async () => {
  menu()
  let answer = readline.question('--> ')

  if(answer === '1') {
    await insert()
  } else if(answer === '2') {
    await list()
  } else if(answer === '3') {
    await remove()
  } else if(answer === '4') {
    await update()
  } else if(answer === 'x') {
    run = false
    console.log('Goodbye')
    process.exit()
  } else {
    console.log('unknown command')
  }
}
