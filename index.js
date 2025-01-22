import Docker from './lib/docker.js'
import express from 'express'
import cors from 'cors'

const app = express()
const docker = new Docker('/var/run/docker.sock')
const port = 3000

app.use(cors({
   origin: 'http://localhost:5173'
}))

app.get('/', async (req, res) => {
  res.send(await docker.getVersion())
})

app.get('/images', async (req, res) => {
  res.send(await docker.getAllImages())
})

app.get('/containers', async (req, res) => {
  res.send(await docker.getAllContainers())
})


app.listen(port, () => {
  console.log(`http://localhost:3000`)
})
