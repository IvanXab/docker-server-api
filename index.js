import { createServer } from 'node:http'
import dockerExecCommand from './docker.js'

const server = createServer(async (req, res) => {
  res.end(await dockerExecCommand(req.url))
})

server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000')
})