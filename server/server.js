const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id":"1",
      "name":"jhone",
      "address":"sl"
    },
    {
        "id":"2",
        "name":"ana",
        "address":"aus"
    },
    {
        "id":"3",
        "name":"sthephan",
        "address":"usa"
    }
  ])
})

app.listen(5000, () => {
  console.log('listening for requests on port 5000')
})