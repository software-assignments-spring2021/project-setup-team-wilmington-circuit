// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object

app.get('/', (req, res)=>{
    res.send('Test server')
})

module.exports = app