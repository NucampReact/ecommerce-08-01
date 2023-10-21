import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Row, Col, Input, Button, Alert } from 'reactstrap';
import products from '../data/InventoryData';

/*
Data Management within React:

  State
   - Local and private only to this component
   - Writeable data (Immutabale)
   - useState hook: opens up communication into React Engine
    Syntax:
      - useState() returns an array of two elements
        - 1st element: the pointer to the data you're tracking
        - 2nd element: a special function to change the data
      - Accepts an optional argument
        - Initial value for your state
  
  Props:
    - Read-only data
    - Pass data from parent to child component
*/

function alphabet() {
  return ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
};

alphabet(); // ['a', 'b', 'c']
// alphabet(); // ['a', 'b', 'c', 'd', 'e', 'f']
// alphabet(); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

// <Inventory /> Inventory()
// Inventory()
// Inventory()
function Inventory() {
  // state setup
  // useState = set up a tracking system on specific data
  let [resultsPerPage, setResultsPerPage] = useState(products.length);
  const [message, setMessage] = useState();

  const addToCart = () => {
    setMessage('You added this item to your cart! Congrats!')
  }

  const displayProducts = () => {
    const results = [];
    // Don't allow more than what we have
    const max = resultsPerPage > products.length ? products.length : resultsPerPage;

    for(let i = 0; i < max; i++) {
    results.push(
        <Row key={products[i].title} className="mb-2">
          <Col>
            <h3>{products[i].title}</h3>
            <h4>Price: {new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(products[i].price)}</h4>
          </Col>
          <Col>
            <img width="100" src={products[i].image} />
          </Col>
          <Col>
            <Button onClick={addToCart} color="warning">Add to Cart</Button>
          </Col>
        </Row>
      );
    };

    return results;
  }

  const handleResultsPerPage = (event) => {
    const userSelection = event.target.value; // Capture user selection
    
    // Update state
    setResultsPerPage(userSelection); // React re-rendering your component
  }

  console.log('results per page', resultsPerPage);

  return (
    <Card>
      <CardHeader tag="h3">Inventory List</CardHeader>
      <CardBody>
        <p>Results per page: {resultsPerPage}</p>
        {message && <Alert type='sucess'>{message}</Alert>}
        <Input type="select" onChange={handleResultsPerPage}>
          <option>Please select</option>
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </Input>
        <hr />
        {displayProducts()}
      </CardBody>
    </Card>
  )
};

export default Inventory;