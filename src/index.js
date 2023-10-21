// injecting code from another location
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import "leaflet/dist/leaflet.css";
import './index.css';
import Home from './pages/Home';
import Navigation from './common/Navigation';
import { Container } from 'reactstrap';
/*
  --const vs. let--
  const = a variable that can't be changed
  let = a dynamic variable
*/
const htmlElement = document.getElementById('root'); // locating an HTML element on our DOM
const root = ReactDOM.createRoot(htmlElement); // root of our React DOM (tree)
root.render(
  <>
    <Navigation />
    <Container>
      <Home />
    </Container>
  </>
);