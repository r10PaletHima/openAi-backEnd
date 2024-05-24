const openaiRepository = require('../repository/openaiRespository');

const getCompletion = async (prompt) => {
    try {
        const completion = await openaiRepository.fetchCompletion(prompt);
        return completion;
    } catch (error) {
        throw new Error('Service error: ' + error.message);
    }
};

module.exports = {
    getCompletion,
};
