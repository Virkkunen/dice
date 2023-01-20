import React, {useState} from 'react'
import { useEffect } from 'react';
import useRoll from '../hooks/useRoll'
import RollsContext from './RollsContext'

export default function RollsProvider({children}) {
  const { isRolling, rolls, total } = useRoll();

  return (
    <RollsContext.Provider value={{ rolls, isRolling, total }}>
      {children}
    </RollsContext.Provider>
  )
}
