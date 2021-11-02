const { 
  load 
} = require('@xarc/run')



const tasks = {
  hello: "echo hello world",
  jsFunc() {
    console.log("JS hello world")
  },
  both: [
    `hello`, 
    `jsFunc`
  ]
}



load(tasks)
