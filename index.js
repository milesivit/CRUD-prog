const express = require('express')

const app = express()

const port = 3000

app.use(express.json())

const productRouter = require('./routes/products.routes')
app.use('/productos', productRouter)


app.listen(port, () =>{
    console.log(`servidor corriendo en el localhost:${port}`)
})