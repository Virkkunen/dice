import { useState } from 'react'

function useRoll() {
  const [isRolling, setIsRolling] = useState(false);
  const [total, setTotal] = useState(null);
  const [rolls, setRolls] = useState(null);

  const calcTotal = (resultArr, operator, mod) => {
    let result = 0;
    resultArr.forEach((roll) => result += roll);
    if (operator === "+") result += Number(mod);
    if (operator === "-") result -= Number(mod);
    setTotal(result);
    setIsRolling(false);
  };

  const rollDice = (diceArray) => {
    setIsRolling(true);
    const amount = diceArray[0];
    const face = diceArray[1];
    const operator = diceArray[2];
    const mod = diceArray[3];

    const resultArr = [];
    let thisRoll;

    for (let i = 0; i < amount; i += 1) {
      thisRoll = Math.floor(Math.random() * face) + 1;
      resultArr.push(thisRoll);
    };
    setRolls(resultArr);
    calcTotal(resultArr, operator, mod);
  };

  const rollPresetDie = (die) => rollDice(["1", die]);

  return {
    rollDice,
    rollPresetDie,
    isRolling,
    total,
    rolls,
  };
}

export default useRoll;