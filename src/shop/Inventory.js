import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardBody, Row, Col, Input, Button, CardFooter, UncontrolledAlert } from 'reactstrap';
import products from '../data/InventoryData';
import Filters from './Filters';
import { useDispatch, useSelector } from 'react-redux';

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

/*
  How filters work:

  1. Capture all the filters inside the <Filters /> component
    a) Use event binding to hold all filter selections in local state
  2. Handled the click of "Apply" to send our filter selections (local state) back up to our parent <Inventory /> component
    a) Used a callback function provided by <Inventory /> to <Filters /> to communicate the data
  3. Filter down all of the products list based on the filter criteria passed from <Filters />
    a) Use vanilla JS functions to filter down an array
  4. Update our <Inventory /> state with our filtered array of products
    a) When state updates, React re-renders our component (aka reloads the inventory products list) by calling DisplayProducts() again
*/

function Inventory() {
  // state setup
  // useState = set up a tracking system on specific data
  const [message, setMessage] = useState();
  const [outOfStockInventory, setOutOfStockInventory] = useState([]);

  const dispatcher = useDispatch();

  const inventoryList = useSelector(function(state) {
    console.log('state of redux is', state);
    
    return state.inventoryList;
  });

  const resultsPerPage = useSelector(state => state.resultsPerPage);

  const initialStockCounts = {};
  products.forEach(product => initialStockCounts[product.title] = product.stockCount);
  const [stockCounts, setStockCounts] = useState(initialStockCounts); // { destructor: 4, frodo: 1 }

  const addToCart = (inventoryItem) => {
    const updatedStockCounts = { ...stockCounts, [inventoryItem.title]: stockCounts[inventoryItem.title] - 1 };
    setStockCounts(updatedStockCounts);

    // Describe action object
    const action = {
      type: 'ADD_TO_CART', // Unique ID, required property for the dispatcher
      addedItem: inventoryItem
    }

    // Send this action to redux reducer
    dispatcher(action);
  }

  const removeItem = (inventoryItem) => {
    const action = {
      type: 'REMOVE_ITEM', // Unique ID, required property for the dispatcher
      removedItem: inventoryItem
    }

    // Send this action to redux reducer
    dispatcher(action);
  }

  /* useEffect hook:

    - Hooking into the renders of the component
      - Every time our component re-renders (effect), run our custom callback function
    
    - Syntax
      useEffect() takes two arguments:
        1st arg: the callback function
          - What is the code you want to run as a side effect
        2nd arg: What are the dependencies (aka what events) will trigger your side effect
          - [] = Very first render
          - [dependency1, dependency2, dependency3] = When changes occur on one of your dependency variables
          - null = Every single render
  */

  useEffect(() => {
    const zeroStocks = [];
    for(let inventoryTitle in stockCounts) {
      const stockCount = stockCounts[inventoryTitle];
      if (stockCount === 0) zeroStocks.push(inventoryTitle);
    };

    setOutOfStockInventory(zeroStocks);
    
  }, [stockCounts]);

  useEffect(() => {
    // sum up all the prices
    // compare the sum to our budget ($500)
    // if it exceeds our budget, put a message on the screen, disable all the add to cart buttons
  }, []); // listen for changes for each item added to cart


  const displayProducts = () => {
    const results = [];
    // Don't allow more than what we have
    const max = resultsPerPage > inventoryList.length ? inventoryList.length : resultsPerPage;

    for(let i = 0; i < max; i++) {

      const outofStock = outOfStockInventory.includes(inventoryList[i].title);

      results.push(
        <Col className="mt-3" xs={12} md={4} key={inventoryList[i].id}>
          <Card className="h-100 product" style={{ opacity: outofStock ? '50%' : '100%'}}>
            <CardHeader tag="h5" style={{backgroundColor: outofStock ? 'red' : 'aliceblue'}}>
              <Button onClick={() => removeItem(inventoryList[i])} color="danger" size={'sm'}>X</Button>&nbsp;
              {inventoryList[i].title} ({stockCounts[inventoryList[i].title]})
            </CardHeader>
            <CardBody className="text-center">
              <img width="100" src={inventoryList[i].image} />
            </CardBody>
            <CardFooter>
              <Row className="d-flex flex-row">
                <Col className='d-flex flex-column justify-content-center align-items-center'>
                  <h6><strong>Price</strong>: {new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(inventoryList[i].price)}</h6>
                </Col>
                <Col className="text-end">
                  <Button disabled={outofStock} onClick={() => addToCart(inventoryList[i])} color="warning">Add to Cart</Button>
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
    const action = {
      type: 'UPDATE_RESULTS_PER_PAGE',
      resultsPerPage: userSelection
    }
    dispatcher(action);
  }

  console.log('inventory list', inventoryList);
  
  return (
    <Row>
      <Col xs={12} md={4}>
        <Filters clearFilterCallback={() => {}} />
      </Col>
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