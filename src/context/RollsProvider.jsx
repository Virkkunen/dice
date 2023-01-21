import React, {useMemo, useState} from 'react'
import { useEffect } from 'react';
import useRoll from '../hooks/useRoll'
import RollsContext from './RollsContext'

export default function RollsProvider({children}) {
  const { isRolling, rolls, total } = useRoll();

  const value = useMemo(() => ({
    isRolling, rolls, total,
  }), [isRolling, rolls, total]);

  return (
    <RollsContext.Provider value={{ value }}>
      {children}
    </RollsContext.Provider>
  )
}
