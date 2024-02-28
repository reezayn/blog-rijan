import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDateString(isoString: string): string {
  const date: Date = new Date(isoString)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    // hour: '2-digit',
    // minute: '2-digit',
    // hour12: true,
  }
  return date.toLocaleString('en-US', options)
}
