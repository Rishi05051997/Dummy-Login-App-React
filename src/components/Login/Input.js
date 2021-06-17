import React, {useRef, useEffect} from 'react'
import classes from './Login.module.css';

export default function Input(props) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [])
  
    return (
        <div
          className={`${classes.control} ${
            props.isvalid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor={props.id}>E-Mail</label>
          <input
            ref={inputRef}
            type="email"
            id={props.id}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
          />
        </div>
    )
}
