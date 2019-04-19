import axios from './http'
const BASE = 'http://127.0.0.1:7001/api/'

const getData = function(url) {
	return axios(BASE + url)
}

export default {
	getData
}