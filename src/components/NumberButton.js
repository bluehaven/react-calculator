import React from 'react';
import PropTypes from 'prop-types';

const NumberButton = ({n, onClick}) => (
    < button onClick={onClick}> {n} </button>
);

NumberButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default NumberButton;