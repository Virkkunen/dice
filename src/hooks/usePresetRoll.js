import useRoll from './useRoll';
import { useContext } from "react";
import RollsContext from "../context/RollsContext";

export default function usePresetRoll() {
  const { rollDice } = useRoll();
  const { setRolls } = useContext(RollsContext);


  const onClick = ({ target: { value } }) => {
    const r = rollDice(value);
    setRolls(r);
  };

  return {
    onClick,
  };
};

