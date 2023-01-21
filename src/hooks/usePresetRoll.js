import { useContext } from "react";
import RollsContext from "../context/RollsContext";

export default function usePresetRoll() {
const { rollPresetDie } = useContext(RollsContext);

  const onClick = ({ target: { value } }) => rollPresetDie(value);

  return {
    onClick,
  };
};

