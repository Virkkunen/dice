import useRoll from '../hooks/useRoll'
import RollsContext from './RollsContext'

export default function RollsProvider({children}) {
  const { isRolling, rolls, total, rollDice, rollPresetDie } = useRoll();

  return (
    <RollsContext.Provider value={{ rolls, total, isRolling, rollDice, rollPresetDie }}>
      {children}
    </RollsContext.Provider>
  )
}
