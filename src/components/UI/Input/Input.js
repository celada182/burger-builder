import React from 'react';
import classes from './Input.css';

const Input = (props) => {
  let input;

  switch (props.type) {
    case ('text'):
      input = <input className={classes.InputElement}
                     value={props.value} {...props}/>;
      break;
    case ('textarea'):
      input = <textarea className={classes.InputElement}
                        value={props.value} {...props}/>;
      break;
    case('select'):
      input = <select>{props.options.map(option =>
          <option key={option.value} value={option.value}>{option.display}</option>)}
      </select>;
      break;
    default:
      input = <input className={classes.InputElement}
                     value={props.value} {...props}/>;
  }

  return (
      <div className={classes.Input}>
        <label className={classes.Label}>{props.label}</label>
        {input}
      </div>);
};

export default Input;