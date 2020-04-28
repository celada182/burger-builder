import React from 'react';
import classes from './Input.css';

const Input = (props) => {
  let input;

  switch (props.type) {
    case ('text'):
      input = <input className={classes.InputElement}
                     value={props.value} {...props}
                     onChange={props.changed}
                     {...props}/>;
      break;
    case ('textarea'):
      input = <textarea className={classes.InputElement}
                        value={props.value}
                        onChange={props.changed}
                        {...props}/>;
      break;
    case('select'):
      input = <select
          onChange={props.changed}
          {...props}>
        {props.options.map(option =>
            <option key={option.value}
                    value={option.value}>{option.display}</option>)}
      </select>;
      break;
    default:
      input = <input className={classes.InputElement}
                     value={props.value}
                     onChange={props.changed}
                     {...props}/>;
  }

  return (
      <div className={classes.Input}>
        <label className={classes.Label}>{props.label}</label>
        {input}
      </div>);
};

export default Input;