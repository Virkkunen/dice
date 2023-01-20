import React from 'react'
import RollsContext from './RollsContext'

export default function RollsProvider({children}) {
  return (
    <RollsContext.Provider>
      {children}
    </RollsContext.Provider>
  )
}
