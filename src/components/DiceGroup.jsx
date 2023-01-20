import React from "react";
import useRoll from "../hooks/useRoll";

export default function DiceGroup() {
  const { rollDice } = useRoll();

  const handleClick = ({ target: { value } }) => {
    rollDice(value);
    console.log(value)
  };

  return (
    <div className="button-group">
      <button onClick={handleClick} type="button" className="dice-button" value="3" name="d3">
        d3
      </button>
      <button onClick={handleClick} type="button" className="dice-button" value="6" name="d6">
        d6
      </button>
      <button type="button" className="dice-button" value="8" name="d8">
        d8
      </button>
      <button type="button" className="dice-button" value="10" name="d10">
        d10
      </button>
      <button type="button" className="dice-button" value="12" name="d12">
        d12
      </button>
      <button type="button" className="dice-button" value="20" name="d20">
        d20
      </button>
      <button type="button" className="dice-button" value="100" name="d100">
        d100
      </button>
    </div>
  );
}
