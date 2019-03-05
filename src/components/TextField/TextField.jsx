import React from 'react';
import './style.css'
const TextField = (props) => {
 let input = null;
 const{value} = props;

 switch(value){
   case 'hello':
   input = <input type="text" placeholder="valid value"  /> 
   break;
   case 'hi':
   input = <input type="text" placeholder="disable" disabled="disabled" />
   break;
   default :
   input = (
   <div className="error">
    <input type="text" className="errorbox" placeholder="invalid value" />
    <h2>error</h2>
   </div>
   );
   
 }                  

  return (
    <> {input}</>
 )
}
export default TextField; 