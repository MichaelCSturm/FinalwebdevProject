import React, { Component } from 'react'
import axios from 'axios'
const api = axios.create({baseURL:'http://localhost:8000/'})
export class Seconds extends Component {
  constructor(){
    super();
    api.get('./').then(res =>{
      console.log(res)
    })
  }
  render() {
    return (
      <div>Seconds</div>
    )
  }
}

export default Seconds