import useRoll from './useRoll';
import { useContext, useState } from "react";
import RollsContext from "../context/RollsContext";

export default function useInput() {
  const [value, setValue] = useState('');
  const { calcInput } = useRoll();

  const handleChange = ({target: {value}}) => setValue(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    calcInput(value);
  };

  return {
    value,
    handleSubmit,
    handleChange,
  };
};