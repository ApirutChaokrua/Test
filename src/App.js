import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodolistTable} from './component/TodolistTable'
import { Button,Input} from 'reactstrap';

class App extends Component {

  state = {
test :"hello heart",
test1 :"hello narm"

  }

  handlechange=(e,id)=>{
    let state ={...this.state}
    state[id] = e.target.value
    this.setState(state)    
}

  render() {
    return (
      <div className="App">
       
        <Input type="text" onChange={(e)=>this.handlechange(e,"test")} value = {this.state.test}/>
          {this.state.test}
          <br/>
          <input type="text" onChange={(e)=>this.handlechange(e,"test1")} value = {this.state.test1}/>
          {this.state.test1}
        <TodolistTable/>
       
      </div>
    );
  }
}

export default App;
