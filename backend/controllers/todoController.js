const mongoose = require('mongoose');

const Todos = require('../dbTodos');

const express = require('express');
const app = express();
app.use(express.json());

const generate = require('../generate.js');

// Get Todos List
const getTodos = async (req, res) => {
    try {
        const allTodos = await Todos.find({}).sort({createdAt: -1});
        res.status(200).send(allTodos);
    } catch (error){
        res.status(400).send(error.message);
    }
}

// Create a new Todo
const createTodo = async (req, res) => {
    const dbTodo = req.body;

    try {
        const newTodo = await Todos.create(dbTodo);
        res.status(201).send(newTodo);
    } catch (error){
        res.status(500).send(error.message);
    }
}

// Delete a new Todo
const deleteTodo = async (req, res) => {
    const {id} = req.params

    try {
        // check if id is valid
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`There is no Todo with the id of ${id}`)
        }

        const deleteTodo = await Todos.findOneAndDelete({_id: id});
        res.status(200).send(deleteTodo);
    } catch (error){
        res.status(500).send(error.message);
    }
}

// Generate action steps
const generateActionSteps = async (req, res) => {
    const queryDescription = req.body.queryDescription
    try{
        const actionQuery = await generate(queryDescription)
        res.json({response: actionQuery})

    } catch (error){
        console.error(error)
        res.status(500).send("Internal server error")
    }
}


module.exports = {
    getTodos,
    createTodo,
    deleteTodo,
    generateActionSteps,
};
    