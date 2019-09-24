const express = require('express')
const path = require('path')

const app = express()

const port = process.env.PORT || 3000

app.set('views',path.join(__dirname,"views"))
app.set("view engine", "hbs")


const publicDirectory = path.join(__dirname,'../public')
console.log(publicDirectory)


app.use(express.static(publicDirectory))

app.get('', (req, res) => {
    res.render('index');
})

app.get('/course', (req, res) => {
    res.render('Course')
})



app.listen(port);