import http from 'node:http'

class Docker {

  constructor(socketPath) {
    this.socketPath = socketPath 
  }

  async getVersion() {
    return await this._execCommand('/version')
  }

  async getAllImages () {
    return await this._execCommand('/images/json')
  }

  async _execCommand (url) {
    const options = {
      socketPath: this.socketPath,
      path: url,
    }

    return new Promise((resolve, reject) => {
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
}

export default Docker