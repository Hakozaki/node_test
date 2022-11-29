const express = require("express")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Olá imagem!")
})

app.listen(port, ()=> {
    console.log(`Executando porta: ${port}`)
})