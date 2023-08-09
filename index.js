const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.SERVER_PORT
const cors = require('cors')
const path = require('path')

const clientPath = path.join(__dirname, './client/dist')

app.use(express.json())
app.use(cors())
app.use('/', express.static(clientPath))
app.use('/api', require('./api/users/router'))
app.use('/api', require('./api/products/router'))
app.use('/api', require('./api/brands/router'))
app.use('/api', require('./api/category/router'))
app.use('/api', require('./api/mailer/router'))
app.use('/api', require('./api/orders/router'))


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/dist/index.html'))

})





app.listen(port, () => {
    console.log(`Example app listening on port ${port} , ${clientPath}`)
})