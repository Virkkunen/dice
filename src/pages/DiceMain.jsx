import React from 'react'
import DiceGroup from '../components/DiceGroup'
import Display from '../components/Display'
import Input from '../components/Input'

export default function DiceMain() {
  return (
    <div className='content'>
      <Display />
      <Input />
      <DiceGroup />
    </div>
  )
}
