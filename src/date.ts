export interface DateOptions {
    min: Date;
    max: Date;
}

export const defaultDateOptions = {
  min: new Date(new Date().getTime() - Math.random() * 1e12),
  max: new Date(new Date().getTime() - Math.random() * 1e11),
};