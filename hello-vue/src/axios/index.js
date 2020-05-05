import Axios from 'axios'

var axios = Axios.create({
  baseURL: '/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    // 'Access-Control-Allow-Originn': '*',
    // 'Access-Control-Allow-Headers': 'Content-Type,Content-Length, Authorization,\'Origin\',Accept,X-Requested-With',
    // 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    // 'Access-Control-Allow-Credentials': true
  },
  protocol: '',
  timeout: 1000
})

export default axios
