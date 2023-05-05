import React from 'react';
import Dedapic from "./images/DifferentlyMorphous.jpg";
import CarlImage from "./images/DungeonCrawlerCarl.jpg";
import QuestionOne from './Question1'

import { Link } from 'react-router-dom';
import Header from './Components/Header';
import './App.css';

const CarlQuiz = <img id= "Carl" class ="selection"src={CarlImage}/>


const WhichQuiz = () =>{
    return(
        
        <body id="important"><h1 id="ChangeMe">
            <Header/><a href='/Question1'>
            <img id= "Deda" class ="selection"src={Dedapic}/>
            </a>
            <a href='/carl'>{CarlQuiz}</a></h1>
            </body>
    )
}
export default WhichQuiz;