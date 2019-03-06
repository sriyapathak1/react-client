import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const TextField = (props) => {
  let input = null;
  const { value } = props;

  switch (value) {
  case 'valid':
    input = <input type="text" placeholder="valid value" />;
    break;
  case 'invalid':
    input = <input type="text" placeholder="disable" disabled="disabled" />;
    break;
  default:
    input = (
      <div className="error">
        <input type="text" className="errorbox" placeholder="invalid value" />
        <h2>error</h2>
      </div>
    );
  }

  return (
    <>
      {' '}
      {input}
    </>
  );
};
TextField.defaultProps = {
  value: ' ',
};
TextField.propTypes = {
  value: PropTypes.string,
};

export default TextField;
