const express = require('express')
const app = express()

app.get('/api/users', (req, res) => {
  res.send({
    name: 'web',
    age: 18,
  })
})

app.listen(3000, () => {
  console.log('3000端口监听中...')
})
