import React from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import destructor from '../images/cards/destructor.jpeg';

function Inventory() {
  return (
    <Card>
      <CardHeader tag="h3">Inventory List</CardHeader>
      <CardBody>
        Placeholder inventory
        <img src={destructor} />
      </CardBody>
    </Card>
  )
};

export default Inventory;