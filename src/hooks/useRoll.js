import { useEffect, useState } from 'react'

function useRoll() {
  const [isRolling, setIsRolling] = useState(false);
  const [total, setTotal] = useState(null);
  const [rolls, setRolls] = useState(null);
  const [extra, setExtra] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {rolls && calcTotal()}, [rolls]);

  const rollDice = (face, dice = 1, operator, mod) => {
    setIsRolling(true);
    if (operator && mod) setExtra({operator, mod});

    const resultArr = [];
    let thisRoll = 0;

    for (let i = 0; i < dice; i += 1) {
      thisRoll = Math.floor(Math.random() * face) + 1;
      resultArr.push(thisRoll);
    }
    setRolls(resultArr);
    setIsRolling(false);
  };

  const calcTotal = () => {
    let total = 0;
    rolls.forEach((roll) => total += roll);
    if (extra) extra.operator === "+" ? (total += extra.mod) : (total -= extra.mod);
    setTotal(total);
  };

  return {
    rollDice,
    isRolling,
    total,
    rolls,
    calcTotal,
  };
}

export default useRoll;