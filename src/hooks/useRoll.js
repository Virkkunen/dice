import { useCallback, useEffect, useState } from 'react'

function useRoll() {
  const [isRolling, setIsRolling] = useState(false);
  const [total, setTotal] = useState(null);
  const [rolls, setRolls] = useState(null);

  const calcTotal = useCallback(() => {
    
  }, [rolls]);

  const rollDice = (diceArray) => {
    setIsRolling(true);
    console.log("rolling: " + diceArray)
    const amount = diceArray[0];
    const face = diceArray[1];
    const operator = diceArray[2];
    const mod = diceArray[3];
    console.log(amount, face, operator, mod)

    const resultArr = [];
    let thisRoll;

    for (let i = 0; i < amount; i += 1) {
      thisRoll = Math.floor(Math.random() * face) + 1;
      resultArr.push(thisRoll);
    };
    console.log(resultArr)
    setRolls(resultArr);
  };

  return {
    rollDice,
    isRolling,
    total,
    rolls,
  };
}

export default useRoll;