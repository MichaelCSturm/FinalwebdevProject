import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Mycontent() {
    const [messages, setMessages] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [drCount, setDrCount] = useState(0);
    const [alisonCount, setAlisonCount] = useState(0);
    const [victorCount, setVictorCount] = useState(0);

    const getMessages = () => {
        axios.get('http://localhost:8000/deda')
        .then(res => {
            console.log(res.data);
            setMessages(res.data);
        })
    }

    useEffect(() => {
        getMessages();
    }, []);

    const handleAnswer = (answer) => {
        if (answer === 'Dr') {
            setDrCount(drCount + 1);
        } 
        if (answer === 'Alison') {
            setAlisonCount(alisonCount + 1);
        } if (answer === 'Victor') {
            setVictorCount(victorCount + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
    }

    return (
        <div>
            <h1>Question: {currentQuestion + 1}</h1>
            <h2>{messages[currentQuestion]?.Question}</h2>
            <button onClick={() => handleAnswer('Dr')}>{messages[currentQuestion]?.DrAnswer}</button>
            <button onClick={() => handleAnswer('Alison')}>{messages[currentQuestion]?.AlisonAnswer}</button>
            <button onClick={() => handleAnswer('Victor')}>{messages[currentQuestion]?.VictorAnswer}</button>

            {currentQuestion >= messages.length && (
                <div>
                    <h1>Results:</h1>
                    <p>Dr. Answer Count: {drCount}</p>
                    <p>Alison Answer Count: {alisonCount}</p>
                    <p>Victor Answer Count: {victorCount}</p>
                </div>
            )}
        </div>
    );
}

export default Mycontent;
