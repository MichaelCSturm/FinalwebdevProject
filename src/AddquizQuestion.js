import React, { useState } from 'react';
import axios from 'axios';
import Header from './Components/Header';

function QuizAder() {
  const [objectData, setObjectData] = useState({
    question: '',
    drAnswer: '',
    alisonAnswer: '',
    victorAnswer: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setObjectData(prevObjectData => ({
      ...prevObjectData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/deda', objectData)
      .then((res) => {
        console.log(res.data);
        setObjectData({
          question: '',
          drAnswer: '',
          alisonAnswer: '',
          victorAnswer: ''
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Add to the deda quiz! Please put only relevant questions!</h1>
      <form onSubmit={handleSubmit}>
        <Header />
        <label>
          Question:
          <input type="text" name="question" value={objectData.question} onChange={handleChange} />
        </label>
        <label>
          Dr. Answer:
          <input type="text" name="drAnswer" value={objectData.drAnswer} onChange={handleChange} />
        </label>
        <label>
          Alison Answer:
          <input type="text" name="alisonAnswer" value={objectData.alisonAnswer} onChange={handleChange} />
        </label>
        <label>
          Victor Answer:
          <input type="text" name="victorAnswer" value={objectData.victorAnswer} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default QuizAder;
