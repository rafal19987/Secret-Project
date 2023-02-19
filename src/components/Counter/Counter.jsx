import React from 'react';
import PropTypes from 'prop-types';
import './Counter.scss';

const Counter = ({ value }) => {
  return <div className="counter">{value}</div>;
};

Counter.propTypes = {
  value: PropTypes.string
};
export default Counter;
