import React from 'react';
import { Link } from 'react-router-dom';

const button={
    width: '16.25rem',
    height: '2.1875rem',
    top: '41.5625rem',
    background: '#9fe5f5',
    border: '2px solid #000000',
    boxSizing: 'border-box',
    borderRadius: '20px',
    color:'black',
    font: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '350',
    fontSize: '20px',
    align: 'center',
    margin: '9px'
}
const Button = (props) => {
    return(
        <div>
        <Link to ={props.page}>
        <button style={button}> {props.text} </button> 
        </Link>
        </div>
    )
}

export default Button;