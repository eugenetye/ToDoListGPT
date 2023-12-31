import React, { useState } from 'react'
import { ListContainer, Row, Text, Delete, Generate, Icons, Spinner } from './styles';
import axios from '../../axios';
import Popup from './Popup';

function TodoList({todos, fetchData}) {
    const deleteTodo = async (id) => {
        try{
            const response = await axios.delete(`/todos/${id}`, {
                id
            });
            fetchData();
            return response.data.json;
        } catch (err) {
            console.error(err.message);
        }
    }

    const [result, setResult] = useState("");

    const onSubmit = async (text) => {
        const generatedResult = await generateQuery(text);
        setResult(generatedResult);
    };

    const [loading, setLoading] = useState(false);

    const generateQuery = async (text) => {
        setLoading(true);
        const response = await fetch("https://to-do-list-gpt-backend.vercel.app/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ queryDescription: text})
        });

        setLoading(false);
        const data = await response.json();
        const result = data.response.trim();
        return result;
    };

    const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div>
        <ListContainer>
            {/* render all the todos in bullet points */}

            {todos?.map((todo) => (
                <Row key = {todo._id}>
                    <Text >{todo.text}</Text>
                    <Icons>
                        <Generate type = 'submit' onClick={() => {onSubmit(todo.text); setButtonPopup(true)}}>Generate Action Steps</Generate>
                        <Popup trigger = {buttonPopup} setTrigger = {setButtonPopup}>
                            {loading ? (<Spinner/>) : (<pre style = {{fontFamily: 'Courier', fontSize: '20px',}}>{result}</pre>)}
                            
                        </Popup>
                        <Delete onClick={() => deleteTodo(todo._id)}></Delete>
                    </Icons>
                </Row>
            ))}

        </ListContainer>
    </div>
  )
}

export default TodoList

