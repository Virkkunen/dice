import useRoll from './useRoll';

export default function usePresetRoll() {
  const { rollDice } = useRoll();

  const onClick = ({ target: { value } }) => {
    rollDice(value);
    console.log(value)
  };

  return {
    onClick,
  };
};

