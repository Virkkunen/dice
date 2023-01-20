import React, {useState} from 'react'
import { useEffect } from 'react';
import useRoll from '../hooks/useRoll'
import RollsContext from './RollsContext'

export default function RollsProvider({children}) {
  const { isRolling } = useRoll();
  const [rolls, setRolls] = useState(null);
  const [total, setTotal] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {rolls && calcTotal()}, [rolls]);

  const calcTotal = () => {
    let total = 0;
    rolls.forEach((roll) => total += roll);
    setTotal(total);
  };

  return (
    <RollsContext.Provider value={{ rolls, setRolls, isRolling, total, setTotal }}>
      {children}
    </RollsContext.Provider>
  )
}
