import React, { useState } from 'react';
import { ButtonGroup, Card, CardBody, CardFooter, CardHeader, Button, Input, FormGroup, Label } from 'reactstrap';
import Title from '../common/Title';
import products from '../data/InventoryData';

/*
  Filter:
    - Category: Dropdown
      - Options based on inventory
    - Price: Range (low and high)
      - Must be a Number
    - Color: Checkbox list
      - Must be a string
    - Title: Search field (text box)
      - Must be a string
      - Partial search
  
  Nice to have filters:
*/

function Filters(props) {
  const [category, setCategory] = useState();
  const [title, setTitle] = useState();
  const [filterMessage, setFilterMessage] = useState();

  // const [filterSelections, setFilterSelections] = useState({});

  const getCategories = () => {
    const categories = products.map((product) => {
      return product.category;
    });

    // get a unique list of categories
    return [...new Set(categories)];
  }

  const handleCategory = (event) => {
    const selection = event.target.value;

    // save selection into state
    setCategory(selection);
  }

  const handleTitle = (event) => {
    const titleInput = event.target.value;

    let validationRule = /^[a-zA-Z]+$/;
    if (validationRule.test(titleInput)) {
      // save titleInput into state
      setTitle(titleInput);
    } else {
      console.error('Title is not valid!');
    }

  }

  const applyFilters = (event) => {
    // capture all the filters
    setFilterMessage(`Apply filters: Category = ${category}; Title = ${title}`);
    props.applyFilterCallback(category, title);
  }

  return (
    <Card>
      <CardHeader><Title tag="h3" message="Filters" /></CardHeader>
      <CardBody>
        <FormGroup>
          <Label>Category</Label>
          <Input type="select" onChange={handleCategory}>
            <option>Please select</option>
            {getCategories().map(category => {
              return <option key={category} value={category}>{category}</option>
            })}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label>Title</Label>
          <Input onChange={handleTitle} />
        </FormGroup>
      </CardBody>
      <CardFooter className='text-end'>
        {filterMessage}
        <ButtonGroup>
          <Button className="me-3" color="warning">Clear</Button>
          <Button onClick={applyFilters} color="success">Apply</Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
};

export default Filters;