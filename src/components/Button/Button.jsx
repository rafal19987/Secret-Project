import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = (props) => {
  return (
    <button {...props} className="btn">
      {props.btnText}
    </button>
  );
};

Button.propTypes = {
  btnText: PropTypes.string
};

export default Button;
