// injecting code from another location
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
/*
  --const vs. let--
  const = a variable that can't be changed
  let = a dynamic variable
*/
const htmlElement = document.getElementById('root'); // locating an HTML element on our DOM
const root = ReactDOM.createRoot(htmlElement); // root of our React DOM (tree)
root.render(
  <Home></Home> // JSX (JavaScript XML)
); // rendering the HTML into the container above

/*
  <Home /> = Home();
*/