const express = require('express')
const app = express()
const port = 3000

app.listen(port,() => console.log('API rodando na porta: ' + port))


console.log("Node rodando normalmente");