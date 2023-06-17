import React, { useState } from 'react'
import { ListContainer, Row, Text, Delete, Generate, Icons } from './styles';
import axios from '../../axios';
import Popup from './Popup';
import ClipLoader from "react-spinners/ClipLoader";

function TodoList({todos, fetchData}) {
    const deleteTodo = async (id) => {
        try{
            const response = await axios.delete(`http://localhost:${process.env.REACT_APP_PORT || 8000}/todos/${id}`, {
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
        const response = await fetch(`http://localhost:${process.env.REACT_APP_PORT || 8000}/generate`, {
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
            {/* render all todos in bullet points */}

            {todos?.map((todo) => (
                <Row key = {todo._id}>
                    <Text >{todo.text}</Text>
                    <Icons>
                        <Generate type = 'submit' onClick={() => {onSubmit(todo.text); setButtonPopup(true)}}>Generate Action Steps</Generate>
                        <Popup trigger = {buttonPopup} setTrigger = {setButtonPopup}>
                            {loading ? (
                                <ClipLoader
                                color={"#36d7b7"}
                                size={100}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                              />
                            ) : (<p>{result}</p>)}
                            
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