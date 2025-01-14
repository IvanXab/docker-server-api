import http from 'node:http'

const dockerExecCommand = async (url) => {
  return new Promise((resolve, reject) => {
    const options = {
      socketPath: '/var/run/docker.sock',
      path: url,
    }
  
    const callback = res => {
      res.on('data', data => {
        try {    
          resolve(data.toString())
        }
        catch (e) {
          reject(e)
        }
      })
  
      res.on('error', error => {
        reject(error)
      })
    }
  
    http.request(options, callback).end()
  })
}

export default dockerExecCommand