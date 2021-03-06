const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
  const startTimeObj = new Date()
  const time = startTimeObj.toLocaleString()

  res.on('finish', () => {
    const endTimeObj = new Date()
    const duration = endTimeObj - startTimeObj
    console.log(time, '|', req.method, 'from', req.originalUrl, '|', 'total time:', duration, 'ms')
  })

  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})
