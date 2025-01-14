import Docker from '.lib/docker.js'
import express from 'express'

const app = express()
const docker = new Docker('/var/run/docker.sock')
const port = 3000

app.get('/', async (req, res) => {
  res.send(await docker.getVersion())
})

app.get('/images', async (req, res) => {
  res.send(await docker.getAllImages())
})

app.listen(port, () => {
  console.log(`http://localhost:3000`)
})