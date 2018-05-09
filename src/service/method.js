import axios from 'axios'
import iView from 'iview'

let httpMethod = {
  postService: (url, data, no_loading) => {

    if (no_loading) {
      return new Promise((resolve, reject) => {
        axios
          .post(url, data)
          .then((response) => {
            if (response.data) {
              resolve(response.data)
            }
          })
          .catch((error) => {
            resolve({
              'response_code': '500',
              'message': '网络错误'
            })
          })
      })
    }

    return new Promise((resolve, reject) => {
      iView.LoadingBar.start()
      axios
        .post(url, data)
        .then((response) => {
          if (response.data) {
            resolve(response.data)
            iView.LoadingBar.finish()
          }
        })
        .catch((error) => {
          resolve({
            'response_code': '500',
            'message': '网络错误'
          })
          iView.LoadingBar.error()
        })
    })
  },

  getService: (url, no_loading) => {
    if (no_loading) {
      return new Promise((resolve, reject) => {
        axios.get(url)
          .then((response) => {
            if (response.data) {
              resolve(response.data)
            }
          }).catch((error) => {
            resolve({
              "response_code": "500",
              "message": "网络错误"
            })
          })
      })
    }
    return new Promise((resolve, reject) => {
      iView.LoadingBar.start()
      axios.get(url)
        .then((response) => {
          if (response.data) {
            resolve(response.data)
            iView.LoadingBar.finish()
          }
        }).catch((error) => {
          resolve({
            "response_code": "500",
            "message": "网络错误"
          })
          iView.LoadingBar.error()
        })
    })
  }

}


export default httpMethod
