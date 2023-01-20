import { useState } from 'react'

function useRoll() {
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = (face, dice = 1) => {
    setIsRolling(true);
    const resultArr = [];
    let thisRoll = 0;

    for (let i = 0; i < dice; i += 1) {
      thisRoll = Math.floor(Math.random() * face) + 1;
      resultArr.push(thisRoll);
    }
    setIsRolling(false);
    return resultArr;
  };

  const validateString = (str) => {
    const strValidation = /^(?=(\d*|d)d)\d*d\d+$/;
    return strValidation.test(str);
  };

  const calcInput = (inputDice) => {
    console.log(validateString(inputDice))
    const inputArr = inputDice.toLowerCase().split('d');
    console.log(inputArr)
  };

  return {
    rollDice,
    isRolling,
    calcInput,
  };
}

export default useRoll;