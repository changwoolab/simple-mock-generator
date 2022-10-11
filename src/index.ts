interface NumberInput {
    min: number;
    max: number;
}

function generateString(length: number): string {
     let result = '';
     let characters =
       'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
     for (let i = 0; i < length; i++) {
       result += characters.charAt(
         Math.floor(Math.random() * characters.length)
       );
     }
     return result;
}

function generateDate(): Date {
    return new Date()
}

function generateNumber(numberInput?: NumberInput): number {
  return Math.floor(Math.random() * 10);
}

function MockClassDataGenerator(c: any) {
    const keys = Object.keys(c);
    console.log(keys)
    for (const key of keys) {
        const value = c[key]
        console.log(value, typeof value)
        if (value instanceof Date) {
            c[key] = generateDate();
        } else if (typeof value === 'number') {
            c[key] = generateNumber();
        } else if (typeof value === 'string') {
            c[key] = generateString(10);
        }
    }
    return c;
}

export default MockClassDataGenerator;
