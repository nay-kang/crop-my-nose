const express = require('express')
const app = express()
const port = 4000

const path = require('path')

app.use(express.static(path.join(__dirname,'./')))

app.listen(port,()=>console.log('express started'))