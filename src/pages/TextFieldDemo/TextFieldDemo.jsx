import React from 'react';
import TextField from '../../components/TextField/TextField';

const TextFieldDemo = () => (
  <div className="inbox">
    <>
      <h1>This is TextInput</h1>
      <TextField value="valid" />
      <TextField value="invalid" />
      <TextField value="Error" error="Im error" />
    </>
  </div>

);

export default TextFieldDemo;
