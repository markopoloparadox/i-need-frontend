"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import PersonForm from "./components/personform"

const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;


ReactDOM.render(<PersonForm />, document.getElementById('root'));

/* function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
  }
  
  setInterval(tick, 1000); */
