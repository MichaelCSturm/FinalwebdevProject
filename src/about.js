import Dedapic from "./images/DifferentlyMorphous.jpg";
import CarlImage from "./images/DungeonCrawlerCarl.jpg";
import QuestionOne from './Question1'

import { Link } from 'react-router-dom';

const CarlQuiz = <img id= "Carl" class ="selection"src={CarlImage}/>


const AboutMe = () =>{
    return(
        <h1 id="ChangeMe"><a href='/home'>
            Click here to go back home
            </a>
            <b></b>
            
            These quizes were really only made for me. They have a ton of really nieche references and I am sorry if you haven't read either of them. They are extremely well written 
             books and have made my year
            </h1>
    )
}
export default AboutMe;