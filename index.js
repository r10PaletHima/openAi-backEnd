const express = require('express');
const openaiController = require('./src/controller/openaiContoller');
const errorHandler = require('./src/middlewares.js/errorHandler');
const cors = require('cors');

const app = express();
const port = 3050;

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/complete-text', openaiController.completeText);

// Error handling middleware
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
