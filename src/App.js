import React, { Component } from 'react';
import {createGlobalStyle} from 'styled-components';
import TodoTemplate from './Components/TodoTemplate';
import TodoHead from './Components/TodoHead';
import Counter from './Countter';
import InputSample from './InputSample';
import ServiceSlot from './Components/ServiceSlot';
import TestCode from'./Components/Test';




const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
  
`;


class App extends Component{
  render(){
    return(
      <div className="App">
        <>
      <GlobalStyle />
      <TodoHead />
      <TodoTemplate>
        <ServiceSlot title = "Netflix" status = "Now On" link = "https://nexflix.com"/>
        <ServiceSlot title = "Wavve" status = "Now On" link = "https://nexflix.com"/>
        <br/><br/><br/><br/><br/>
        <ServiceSlot title = "Wacha" status = "Now On" link = "https://nexflix.com"/>
        <ServiceSlot title = "Apple Music" status = "Now On" link = "https://nexflix.com"/>
        <TestCode name="aaa"/>
      </TodoTemplate>

      
      <Counter />
      <br></br>
      <InputSample />

      
    </>
      </div>
    );
  }
}


export default App;
