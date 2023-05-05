import React from 'react';
import FludicImage from "./images/Fludic.jpg";
import Mycontent  from './Components/mycontent2';
import Header from './Components/Header';
import Mycontent2 from './Components/mycontent2';
import bootstrap from 'bootstrap'

fetch("http://localhost:8000/carl").then(req => req.text()).then(console.log)


const Fludic = <img src={FludicImage}/>
const carl = () =>{
    return (<h1>
        <Header/>
    
<Mycontent2/>
    
    </h1>)
        
        
    
}
export default carl;