import React from 'react'

export default function Input() {
  return (
    <form>
      <label htmlFor='dice-input'>
        <input
          type="text"
          id='dice-input'
          placeholder='2d20'
        />
      </label>
    </form>
  )
}
