/**
 * Date Helper Utilities
 * Functions for date manipulation and calculation
 */

import { differenceInDays, addDays, format, startOfDay, endOfDay } from 'date-fns';

/**
 * Calculate the number of nights between two dates
 */
export const calculateNights = (checkIn: Date, checkOut: Date): number => {
  return differenceInDays(checkOut, checkIn);
};

/**
 * Calculate the number of days in a span (inclusive)
 */
export const calculateDaysInSpan = (startDate: Date, endDate: Date): number => {
  return differenceInDays(endDate, startDate) + 1;
};

/**
 * Calculate days from weeks
 */
export const weeksToDay = (weeks: number): number => {
  return weeks * 7;
};

/**
 * Calculate weeks from days (rounded up)
 */
export const daysToWeeks = (days: number): number => {
  return Math.ceil(days / 7);
};

/**
 * Format date for display
 */
export const formatDate = (date: Date | null, formatString: string = 'MMM dd, yyyy'): string => {
  if (!date) return '';
  return format(date, formatString);
};

/**
 * Format date for input field (YYYY-MM-DD)
 */
export const formatDateForInput = (date: Date | null): string => {
  if (!date) return '';
  return format(date, 'yyyy-MM-dd');
};

/**
 * Check if a date is in the past
 */
export const isDateInPast = (date: Date): boolean => {
  return date < startOfDay(new Date());
};

/**
 * Check if a date is in the future
 */
export const isDateInFuture = (date: Date): boolean => {
  return date > endOfDay(new Date());
};

/**
 * Add days to a date
 */
export const addDaysToDate = (date: Date, days: number): Date => {
  return addDays(date, days);
};

/**
 * Get today's date at midnight
 */
export const getToday = (): Date => {
  return startOfDay(new Date());
};

/**
 * Check if dates are contiguous (no gaps)
 */
export const areDatesContiguous = (dates: Date[]): boolean => {
  if (dates.length <= 1) return true;

  const sortedDates = [...dates].sort((a, b) => a.getTime() - b.getTime());

  for (let i = 1; i < sortedDates.length; i++) {
    const diff = differenceInDays(sortedDates[i], sortedDates[i - 1]);
    if (diff !== 1) {
      return false;
    }
  }

  return true;
};

/**
 * Validate date range
 */
export const isValidDateRange = (startDate: Date | null, endDate: Date | null): boolean => {
  if (!startDate || !endDate) return false;
  return startDate < endDate;
};

/**
 * Get minimum date for date picker (today or later)
 */
export const getMinDate = (): string => {
  return formatDateForInput(getToday());
};
