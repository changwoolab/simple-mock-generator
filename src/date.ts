export type DateOptions = {
    min?: string | Date;
    max?: string | Date;
}

export function generateDate(dateOptions?: DateOptions): Date {
  return new Date();
}
