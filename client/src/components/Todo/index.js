import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import axios from '../../axios';
import Form from '../Form';
import TodoList from '../TodoList';
import Author from '../Author';

function Todo() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:${process.env.PORT || 8000}/todos`);
      setTodos(response.data);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();
    if(input.length === 0) return null;
    await axios.post(`http://localhost:${process.env.PORT || 8000}/todos`, [{
      ...todos, 
      text: input,
    }]);
    fetchData();
    setInput('');
  };

  return (
    <Container>
        <h2>List of To-Dos</h2>

        {/* Form component */}
        <Form input = {input} setInput = {setInput} addTodo = {addTodo}/>

        {/* TodoList */}
        <TodoList todos = {todos} fetchData = {fetchData} />

        {/* Author component */}
        <Author />
    </Container>
  )
}

export default Todo;