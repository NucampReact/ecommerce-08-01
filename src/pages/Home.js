import React, { useEffect } from 'react';
import { Card, CardHeader, CardBody, Row, Col, Button } from 'reactstrap';
import Title from '../common/Title';
import Map from '../common/Map';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

let x = '123';
let y = '123123';
async function longRunningFunc() {
  // takes 20 seconds to complete
}
longRunningFunc();
let z = 'asdf';

/*
  Asynchronous vs. Synchronous Code

  Async:
    - Executes code in whatever order it completes
    - "Running code in the background"
  Sync:
    - Executes code line by line, wait for completion of each statement
*/

function Home() {
  const navigate = useNavigate();

  const dispatcher = useDispatch();

  useEffect(() => {
    // go make a request to get inventory data
    fetch('http://localhost:3001/inventory')
      .then(async(response) => {
        // async/await
        const data = await response.json();
        
        // put the data into redux
        const action = {
          type: 'LOAD_INVENTORY',
          inventory: data
        }

        dispatcher(action);

      }) // success response
      .catch((response) => {
        // catch error and do something custom
        console.error('You have an error!')
      }) // failure response

  }, []) // first render

  return (
    <Card>
      <CardHeader className="text-center">
        <Title message="Welcome to Trader's Terrace" />
      </CardHeader>
      <CardBody className="text-center">
        <Row>
          <Col>
            <Title tag="h2" message="Start shopping!" />
            <Button onClick={() => navigate('/shop')} color="primary" size="lg">Browse Our Inventory</Button>
          </Col>
          <Col>
            <Title tag="h2" message="Visit Us In Person!" />
            <Button color="primary" size="lg">Get Directions</Button>
            <Map />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

function func1() {};
function func2() {};

export default Home; // default export
export { Home, func1, func2 }; // explicit import/export