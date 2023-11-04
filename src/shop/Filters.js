import React, { useState } from 'react';
import { ButtonGroup, Card, CardBody, CardFooter, CardHeader, Button, Input, FormGroup, Label } from 'reactstrap';
import Title from '../common/Title';
import products from '../data/InventoryData';
import RangeSlider from 'react-bootstrap-range-slider';
import { useDispatch } from 'react-redux';

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
  const [price, setPrice] = useState(50);

  const dispatcher = useDispatch();

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

  const clearFilters = () => {
    setFilterMessage('');
    const action = {
      type: 'CLEAR_FILTERS'
    }

    dispatcher(action);
  }

  const applyFilters = (event) => {
    // capture all the filters
    setFilterMessage(`Apply filters: Category = ${category}; Title = ${title}; Price = ${price}`);
    
    const action = {
      type: 'APPLY_FILTERS',
      filters: {
        category,
        title,
        price
      }
    }
    dispatcher(action);
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
        <FormGroup>
          <Label>Price Range</Label>
          <RangeSlider value={price} min={0} max={20000} tooltip='on' onChange={changeEvent => setPrice(changeEvent.target.value)} />
        </FormGroup>
      </CardBody>
      <CardFooter className='text-end'>
        {filterMessage}
        <ButtonGroup>
          <Button onClick={clearFilters} className="me-3" color="warning">Clear</Button>
          <Button onClick={applyFilters} color="success">Apply</Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
};

export default Filters;