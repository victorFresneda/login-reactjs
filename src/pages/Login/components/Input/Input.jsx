import React from 'react'
import './Input.css';

export const Input = ({ attribute, handleChange, param}) => {
  return (
    <div className= 'input-container'>
        <input 
        className={param ? 'input-error' : 'regular-style'}
        id={attribute.id}
        name={attribute.name}
        onChange={ (e) => handleChange(e.target.name, e.target.value)}
        placeholder={attribute.placeholder}
        type={attribute.type}
        />
    </div>
  )
}

// https://www.youtube.com/watch?v=tZFoNl1RSGg&t=3130s