import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Row, Col, Input, Button, CardFooter, UncontrolledAlert } from 'reactstrap';
import products from '../data/InventoryData';
import Filters from './Filters';

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
        <Col className="mt-3" xs={12} md={4} key={products[i].id}>
          <Card className="h-100 product">
            <CardHeader tag="h5">{products[i].title}</CardHeader>
            <CardBody className="text-center">
              <img width="100" src={products[i].image} />
            </CardBody>
            <CardFooter>
              <Row className="d-flex flex-row">
                <Col className='d-flex flex-column justify-content-center align-items-center'>
                  <h6><strong>Price</strong>: {new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(products[i].price)}</h6>
                </Col>
                <Col className="text-end">
                  <Button onClick={addToCart} color="warning">Add to Cart</Button>
                </Col>
              </Row>
            </CardFooter>
          </Card>
        </Col>
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
    <Row>
      <Col xs={12} md={4}><Filters /></Col>
      <Col xs={12} md={8}>
        <Card>
          <CardHeader tag="h3">Inventory List</CardHeader>
          <CardBody>
            <Row>
              <Col xs={4}></Col>
              <Col xs={4}>
                <p>Sort by:</p>
                <Input type="select">
                  <option>Please select</option>
                  <option value="name_asc">Name A-Z</option>
                  <option value="name_desc">Name Z-A</option>
                </Input>
              </Col>
              <Col xs={4}>
                <p>Results per page: {resultsPerPage}</p>
                <Input type="select" onChange={handleResultsPerPage}>
                  <option>Please select</option>
                  <option value="1">1</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                </Input>
              </Col>
            </Row>
            {message && <UncontrolledAlert type='sucess'>{message}</UncontrolledAlert>}
            
            <hr />
            <Row className="mb-2">
              {displayProducts()}
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
};

export default Inventory;