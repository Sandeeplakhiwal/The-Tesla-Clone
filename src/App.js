import styled from "styled-components";

import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

// const Button = styled.button`
//   background: blue;
//   color: white;
//   border-radius: 5px;
//   padding: 20px;
// `

export default App;
