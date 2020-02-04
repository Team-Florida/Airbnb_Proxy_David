const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static(path.join(__dirname, '../client/')))


app.get('/carousel', (req, res) => {
    console.log('get request for carousel')
    axios.get('http://localhost:2500/bundle.js')
        .then((response) => {
            console.log('my proxy server works for carousel')
            res.send(response.data)
            res.end()
        }).catch((err) => {
            console.log('an error occured on the get to bundle.js for carosoul')
            res.end()
        })
})

app.get('/checkout', (req, res) => {
    console.log('get request for checkout')
    axios.get('http://localhost:2000/bundle.js')
        .then((response) => {
            console.log('my proxy server works for checkout')
            res.send(response.data)
            res.end()
        })

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))