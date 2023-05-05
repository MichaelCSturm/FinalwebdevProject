import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import React from "react"
import Dedapic from "./images/DifferentlyMorphous.jpg";
import CarlImage from "./images/DungeonCrawlerCarl.jpg";
import QuestionOne from './Question1'
import Home from './Home'
import { Link } from "react-router-dom";
import AboutMe from './about';
import Carl from './carl';
import QuizAder from './AddquizQuestion';

function App(){
    



    return (<Router>
        <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/home" element={<Home/>} />
            
          <Route path="/Question1" element={<QuestionOne/>} />
          <Route path = "/about" element={<AboutMe/>}/>
          <Route path = "/carl" element={<Carl/>}/>
          <Route path='/AddDeda' element={<QuizAder/>}/>
                  
          
        </Routes>
      </Router>)
    /*<h1 id="ChangeMe">{DedaQuiz}{CarlQuiz}</h1>*/


}



export default App