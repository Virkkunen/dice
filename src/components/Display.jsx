import React from 'react'
import { useContext } from 'react'
import RollsContext from '../context/RollsContext'

export default function Display() {
  const { rolls } = useContext(RollsContext);

  return (
    <div className='display'>{rolls || '---'}</div>
  )
}
