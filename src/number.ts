interface NumberInput {
  min: number;
  max: number;
}

export function generateNumber(numberInput?: NumberInput): number {
  return Math.floor(Math.random() * 10);
}
