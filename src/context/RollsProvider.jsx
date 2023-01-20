import React from 'react'
import useRoll from '../hooks/useRoll'
import RollsContext from './RollsContext'

export default function RollsProvider({children}) {
  const { rolls, isRolling } = useRoll();
  return (
    <RollsContext.Provider value={{ rolls, isRolling }}>
      {children}
    </RollsContext.Provider>
  )
}
