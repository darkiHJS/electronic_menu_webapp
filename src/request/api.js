import axios from './http'
const BASE = 'http://127.0.0.1:7001/api/'

const get_jsonData = function(url) {
	return axios(BASE + url)
}

export default {
	get_jsonData
}