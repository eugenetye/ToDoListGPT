const openai = require('./api');

const generate = async (queryDescription) => {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Generate action steps for the following action: ${queryDescription}.`,
        max_tokens: 200,
        temperature: 0.6
    })

    return response.data.choices[0].text
}

module.exports = generate;