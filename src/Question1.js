import React from 'react';
import FludicImage from "./images/Fludic.jpg";
import Mycontent  from './Components/Mycontent';
import Header from './Components/Header';


fetch("http://localhost:8000/deda").then(req => req.text()).then(console.log)


const Fludic = <img src={FludicImage}/>
const quizQuestionOne = () =>{
    return (<body>
        <Header/>
    
<Mycontent/>
    
    </body>)
        
        
    
}
export default quizQuestionOne;