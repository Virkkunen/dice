import React, {useState} from 'react'
import useRoll from '../hooks/useRoll'
import RollsContext from './RollsContext'

export default function RollsProvider({children}) {
  const { isRolling } = useRoll();
  const [rolls, setRolls] = useState(null);

  return (
    <RollsContext.Provider value={{ rolls, setRolls, isRolling }}>
      {children}
    </RollsContext.Provider>
  )
}
