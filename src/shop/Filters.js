import React from 'react';
import { ButtonGroup, Card, CardBody, CardFooter, CardHeader, Button } from 'reactstrap';
import Title from '../common/Title';

function Filters() {
  return (
    <Card>
      <CardHeader><Title tag="h3" message="Filters" /></CardHeader>
      <CardBody>

      </CardBody>
      <CardFooter className='text-end'>
        <ButtonGroup>
          <Button className="me-3" color="warning">Clear</Button>
          <Button color="success">Apply</Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
};

export default Filters;