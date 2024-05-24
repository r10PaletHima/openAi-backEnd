const openaiService = require("../service/openaiService");

const completeText = async (req, res, next) => {
    const { prompt, headers } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
        const completion = await openaiService.getCompletion(prompt, headers);
        res.json({ completion });
    } catch (error) {
        next(error); // Pass error to the error handling middleware
    }
};

module.exports = {
    completeText,
};
