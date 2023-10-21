import React from 'react';

// Presentational only component
function Title(data) {
  // data = { message: 'The Trading Store', tag: 'h2' }
  const Tag = data.tag;
  return (
    <Tag>{data.message}</Tag>
  )
};

Title.defaultProps = {
  tag: 'h1'
}

export default Title;