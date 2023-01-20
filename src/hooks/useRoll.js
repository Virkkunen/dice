import { useState } from 'react'

function useRoll() {
  const [isRolling, setIsRolling] = useState(false);
  const [rolls, setRolls] = useState(null);

  const rollDice = (face, dice = 1) => {
    setIsRolling(true);
    const resultArr = [];
    let thisRoll = 0;

    for (let i = 0; i < dice; i += 1) {
      thisRoll = Math.floor(Math.random() * face) + 1;
      resultArr.push(thisRoll);
    }
    console.log(resultArr)
    setRolls(resultArr);
    setIsRolling(false);
  };

  return {
    rollDice,
    isRolling,
    rolls,
  };
}

export default useRoll;