const OpenAI = require('openai');
const axios = require('axios');
require('dotenv').config();

// Get your OpenAI API key from environment variables
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// Initialize OpenAI with your API key
const openai = new OpenAI(OPENAI_API_KEY);

const fetchCompletion = async (prompt) => {
    try {
        // const response = await openai.chat.completions.create({
        //     messages: [{"role": "system", "content": prompt}],
        //     model: "gpt-3.5-turbo",
        // });
        // console.log("api",response)
        // return  response.choices[0].message.content
        let response ={
            "id": "cmpl-abc123",
            "object": "text_completion",
            "created": 1627979142,
            "model": "gpt-3.5-turbo",
            "choices": [
              {
                "id": "cmpl-abc123-0",
                "object": "text_completion",
                "model": "gpt-3.5-turbo",
                "index": 0,
                "message": {
                  "role": "system",
                  "content": "The Taj Mahal 'Crown of the Palace') is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan (r. 1628–1658) to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.Construction of the mausoleum was completed in 1648, but work continued on other phases of the project for another five years. The first ceremony held at the mausoleum was an observance by Shah Jahan, on 6 February 1643, of the 12th anniversary of the death of Mumtaz Mahal. The Taj Mahal complex is believed to have been completed in its entirety in 1653 at a cost estimated at the time to be around ₹5 million, which in 2023 would be approximately ₹35 billion (US$77.8 million).The building complex incorporates the design traditions of Indo-Islamic and Mughal architecture. It employs symmetrical constructions with the usage of various shapes and symbols. While the mausoleum is constructed of white marble inlaid with semi-precious stones, red sandstone was used for other buildings in the complex similar to the Mughal era buildings of the time. The construction project employed more than 20,000 workers and artisans under the guidance of a board of architects led by Ustad Ahmad Lahori, the emperor's court architect.The Taj Mahal was designated as a UNESCO World Heritage Site in 1983 for being the jewel of Islamic art in India and one of the universally admired masterpieces of the world's heritage. It is regarded as one of the best examples of Mughal architecture and a symbol of Indian history. The Taj Mahal is a major tourist attraction and attracts more than five million visitors a year. In 2007, it was declared a winner of the New 7 Wonders of the World initiative."
                },
                "finish_reason": "stop"
              }
            ]
          }
        return response.choices[0].message.content
          
    } catch (error) {
        if (error.response) {
            const errorMessage = error.response.data.error.message;
            const err = new Error(errorMessage);
            err.status = error.response.status;
            throw err;
        } else {
            throw new Error('Request error: ' + error.message);
        }
    }
};

module.exports = {
    fetchCompletion,
};
