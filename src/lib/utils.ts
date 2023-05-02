import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function classnames(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const delay = (ms: number = 1000) => new Promise((resolve) => setTimeout(resolve, ms))

export const validateCartExpirationDate = (value: string): boolean => {
  const now = new Date()
  const [month, year] = value.split('/').map((str) => parseInt(str, 10))
  const currentYear = now.getFullYear() % 100
  const currentMonth = now.getMonth() + 1

  if (year < currentYear || (year === currentYear && month < currentMonth) || month > 12) {
    return false
  }

  return true
}
