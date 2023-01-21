import useRoll from '../hooks/useRoll'
import RollsContext from './RollsContext'

export default function RollsProvider({children}) {
  const { isRolling, rolls, total, rollDice } = useRoll();

  return (
    <RollsContext.Provider value={{ rolls, total, isRolling, rollDice }}>
      {children}
    </RollsContext.Provider>
  )
}
