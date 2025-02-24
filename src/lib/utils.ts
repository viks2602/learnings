import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Convert prisma object into a regular JS object
export function convertToPlainObject<T>(obj: T) {
  return JSON.parse(JSON.stringify(obj))
}

//Format number with decimal places
export function formatNumberWithDecimal(num:number):string{
  const [int , dec] = num.toString().split('.');
  return dec ? `${int}.${dec?.slice(0,2)}` :  `${int}.00`;
}
