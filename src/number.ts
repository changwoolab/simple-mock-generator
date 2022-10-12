export type NumberOptions = {
  min: number;
  max: number;
};

/**
 * generate number in range ( min <= number < max )
 * 
 * default min = 0    
 * default max = min + 50
 */
export function generateNumber(numberOptions?: NumberOptions): number {
  const min = numberOptions?.min ? numberOptions.min : 0;
  const max = numberOptions?.max ? numberOptions.max : 50;
  if (max < min) throw new Error('max is smaller than min');
  return min + Math.floor(Math.random() * (max - min));
}
