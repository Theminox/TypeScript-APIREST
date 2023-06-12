import express from 'express' //ESmodules
//const express = require('express') //commonJS

import diariesRouter from './routes/diaries'

const app = express()
app.use(express.json()) //middleware que transforma  la req.body a un json

const PORT = 3000

app.get('/ping', (_, res) => {
    console.log('someone pinged here! '+ new Date().toLocaleString())
    res.send('pong')
})

app.use('/api/diaries', diariesRouter)

app.listen(PORT, () => {
    console.log('server on port 3000')
})

