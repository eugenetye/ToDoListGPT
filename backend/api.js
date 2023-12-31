const dotenv = require('dotenv');
const { Configuration, OpenAIApi } = require("openai");

dotenv.config();

const openaiApiKey = process.env.REACT_APP_OPENAI_API_KEY

if (!openaiApiKey) {
    console.error('OPENAI_API_KEY is not set')
    process.exit(1)
}

const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

module.exports = openai;