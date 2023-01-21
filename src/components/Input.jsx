import React from 'react'
import useInput from '../hooks/useInput'

export default function Input() {
  const {handleSubmit, handleChange, inputValue} = useInput();
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='dice-input'>
        <input
          onChange={handleChange}
          type="text"
          id='dice-input'
          placeholder='2d20'
          value={inputValue}
        />
      </label>
    </form>
  )
}
