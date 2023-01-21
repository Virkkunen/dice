import { useContext, useState } from "react";
import RollsContext from "../context/RollsContext";

export default function useInput() {
  const [inputValue, setInputValue] = useState("");
  const { rollDice } = useContext(RollsContext);

  const validateString = (str) => {
    // accepts 2d20, d12, 3d3+4, d10-2
    const strValidation = /^(d|[0-9]+d)[0-9]+([+-][0-9]+)?$/gi; //thanks chatGPT
    return strValidation.test(str) && str.length <= 10; // arbitrary string length limit
  };

  const calcInput = () => {
    /*
      index 0 is the amount of dice to roll
      index 1 is the face value
      index 2 is the operator
      index 3 is the mod
      3d20+10 = [3, 20, +, 10]
    */

    if (!validateString(inputValue)) return;

    // checks if string starts with a d (d20, d12) and adds 1 to index 0 
    const singleDieRegex = /(^d)+(\d+)/gi;
    if (singleDieRegex.test(inputValue)) {
      const diceArray = inputValue.match(/\d+|[+,-]/gi);
      diceArray.unshift("1"); // for consistency, values are strings
      rollDice(diceArray)
    }

    // checks if string starts with a number (2d20, 10d6)
    const multiDiceRegex = /^(\d+)([d])(\d+)/gi;
    if (multiDiceRegex.test(inputValue)) {
      const diceArray = inputValue.match(/\d+|[+,-]/gi);
      rollDice(diceArray)
    };
  };

  const handleChange = ({ target: { value } }) => setInputValue(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    calcInput();
  };

  return {
    inputValue,
    handleSubmit,
    handleChange,
  };
}
