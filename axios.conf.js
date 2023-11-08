axios = require('axios')

const chatGPT = axios.create({
	baseURL: 'https://api.openai.com/v1/chat',
	timeout: 20000,
	headers: { 'Authorization': `Bearer ${process.env.OPENAI_APIKEY}` }
});

module.exports = {chatGPT}