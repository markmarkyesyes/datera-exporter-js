const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/metrics', (req, res) => res.send('I am alive.'))
export {app}