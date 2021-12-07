import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({ todo }) {
  return <li>{todo}</li>;
}

TodoItem.propTypes = {
//   todo: PropTypes.bool.isRequired,
  todo: PropTypes.string.isRequired,
};

export default TodoItem;
