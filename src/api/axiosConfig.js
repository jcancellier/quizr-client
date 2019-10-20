import axios from 'axios'

defaultURL = 'myapi.com:3000/api'

const instance = axios.create({
  baseURL: 'defaultURL'
})