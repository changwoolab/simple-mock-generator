export type StringOptions = {
  length?: number;
  includeNumber?: boolean;
};

export function generateString(stringOptions?: StringOptions): string {
  let result = '';
  let characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charLen = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charLen));
  }
  return result;
}
