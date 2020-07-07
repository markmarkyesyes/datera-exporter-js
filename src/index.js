const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

const metricsRouter = require('./route-metrics');
app.use('/metrics', metricsRouter)

export {app}