import React, { useContext, useMemo } from 'react'
import RollsContext from '../context/RollsContext';

export default function Display() {
  const { total, rolls } = useContext(RollsContext);
  const hasRolls = useMemo(() => rolls && rolls.length > 1, [rolls]);

  return (
    <div className='display'>
      <span className='display-total'>{total || '---'}</span>
      <span className='display-rolls'>{hasRolls ? (`[${rolls.join(', ')}]`) : 'ㅤ'}</span>
    </div>
  )
}
