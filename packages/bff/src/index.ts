import express from 'express'

const app = express()
const PORT = 9000

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(PORT, () => {
  console.log(`BFF running on port :${PORT}`)
})
