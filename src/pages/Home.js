import React from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import Title from '../common/Title';

// A component = a function that returns JSX
/*
  React converts the JSX into pure HTML

  Pure vanilla JS to create your HTML structure
  React.createElement('div', {
    class: 'JSXClass',
    id: 'MyID'
  });

  React.createElement is a wrapper for document.createElement

  let div = document.createElement('div');
  div.attribute.class = 'JSXClass';
*/

/*
  Declarative vs. Imperative code

  Declarative = Only need to know what to do, not how it's done
  Imperative = Step by step, how to do something
*/

/*
  XML (Extensible Markup Language)

  <tag>
    <custom_attribute anyAttr="">
    </custom_attribute>
  </tag>
*/

/*
  let person = {
    firstName: 'Nas',
    height: 5,
    weight: 100
  };

  person.firstName;
*/

/*
  Props = passing data from one component to another
    - Read-only data
*/
function Home() {
  return (
    <Card>
      <CardHeader tag="h3">
        <Title message="The Trading Store" tag="h2" />
        <Title message="Start shopping!" />
        <Title message="Browse our inventory" />
      </CardHeader>
      <CardBody>
        Start shopping by browsing our inventory!
      </CardBody>
    </Card>
  );
};

function func1() {};
function func2() {};

export default Home; // default export
export { Home, func1, func2 }; // explicit import/export