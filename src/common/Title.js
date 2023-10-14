import React from 'react';

// Presentational only component
function Title(data) {
  // data = { message: 'The Trading Store', tag: 'h2' }
  // const Tag = data.tag;
  // data.message = 'New Message'; This is not allowed
  return (
    <h1>{data.message}</h1>
  )
};

export default Title;