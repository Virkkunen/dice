import useRoll from './useRoll';
import { useState } from "react";

export default function useInput() {
  const [inputValue, setInputValue] = useState('');
  const { rollDice } = useRoll();

  const invalidInput = () => setInputValue('Input invalid');

  const validateString = (str) => {
    const strValidation = /^(d|[0-9]+d)[0-9]+([+-][0-9]+)?$/; //thanks chatGPT
    return (strValidation.test(str) && str.length <= 10);
  };

  const rollLogic = (filteredArr, operator) => {
    // [dice, face, mod], operator
    if (filteredArr.length === 3 && operator) {
      rollDice(filteredArr[1], filteredArr[0], operator, filteredArr[2])
    }

    //[face, mod], operator

    // [dice, face, mod]

    // [face]
  };

  const calcInput = () => {
    if (!validateString(inputValue)) return invalidInput();
    
    // convert string to array
    const separator = /\d+|[d+-]/g;
    const inputArr = inputValue.toLowerCase().match(separator);
    // filter "d" and operator sign
    const filteredArr = inputArr.filter((x) => x !== "d" && x !== "+" && x !== "-");
    // save operator sign to variable
    const operator = inputArr.filter((x) => x === "+" || x === "-")[0];
    // roll log
    rollLogic(filteredArr, operator);
  };

  const handleChange = ({target: {value}}) => setInputValue(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    calcInput(inputValue);
  };

  return {
    inputValue,
    handleSubmit,
    handleChange,
  };
};