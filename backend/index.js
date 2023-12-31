const express = require('express');
const mongoose = require('mongoose');
const Cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const {
    getTodos,
    createTodo,
    deleteTodo,
    generateActionSteps,
} = require('./controllers/todoController')

// App Config
const app = express();

const port = process.env.REACT_APP_PORT || 8000;

const connectionURL = process.env.REACT_APP_MONGO_URI

// Middlewares
// convert to json
app.use(express.json())

app.use(Cors())

// DB Config
mongoose.connect(connectionURL)
.then(() => {
    app.listen(port, () => console.log(`Running on port: ${port}`))
})

.catch((err) => {
    console.log(err);
})

// API Endpoints
// Get todos list
app.get('/todos', getTodos);

// Create a new Todo
app.post('/todos', createTodo);

// Delete a Todo
app.delete('/todos/:id', deleteTodo);

// Generate action steps
app.post('/generate', generateActionSteps);


