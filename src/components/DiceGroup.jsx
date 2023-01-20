import React from "react";
import usePresetRoll from "../hooks/usePresetRoll";

export default function DiceGroup() {
  const presetRoll = usePresetRoll();
  const dice = [3, 6, 8, 10, 12, 20, 100];

  return (
    <div className="button-group">
      {dice.map((die) => (
        <button
          {...presetRoll}
          type="button"
          className="dice-button"
          value={die}
          name={`d${die}`}
          key={`d${die}`}
        >
          {`d${die}`}
        </button>
      ))}
    </div>
  );
}
