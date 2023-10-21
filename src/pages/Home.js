import React from 'react';
import { Card, CardHeader, CardBody, Row, Col, Button } from 'reactstrap';
import Title from '../common/Title';
import Map from '../common/Map';

function Home() {
  return (
    <Card>
      <CardHeader tag="h3" className="text-center">
        <Title message="Welcome to Trader's Terrace" />
      </CardHeader>
      <CardBody className="text-center">
        <Row>
          <Col>
            <Title tag="h2" message="Start shopping!" />
            <Button color="primary" size="lg">Browse Our Inventory</Button>
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