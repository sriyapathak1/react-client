import React from 'react';
import PropTypes from 'prop-types';
import style from './style';

const defaultProps = {
  error: '',

};

const propTypes = {
  error: PropTypes.string,
  value: PropTypes.string.isRequired,
};

const TextField = (props) => {
  const { error } = props;

  // If error, apply styling
  const errorStyle = error ? style.errorInput : {};

  return (
    <>
      <input style={{ ...style.base, ...errorStyle }} type="text" {...props} />
      {
        error && (
          <div style={style.error}>{error}</div>
        )
      }
    </>
  );
};

TextField.defaultProps = defaultProps;
TextField.propTypes = propTypes;

export default TextField;
