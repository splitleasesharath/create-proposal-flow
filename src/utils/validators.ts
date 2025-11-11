/**
 * Validation Helper Utilities
 * Functions for validating form inputs and state
 */

import { Listing, StepValidation } from '../types';
import { calculateNights, isValidDateRange } from './dateHelpers';

/**
 * Validate Step 1: Move-in date selection
 */
export const validateStep1 = (moveInDate: Date | null): StepValidation => {
  const errors: string[] = [];

  if (!moveInDate) {
    errors.push('Please select a move-in date');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Validate Step 2: Personal information
 */
export const validateStep2 = (
  aboutYourself: string,
  needForSpace: string,
  specialNeeds: string
): StepValidation => {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!aboutYourself || aboutYourself.trim().length < 10) {
    errors.push('Please provide information about yourself (at least 10 characters)');
  }

  if (!needForSpace || needForSpace.trim().length < 10) {
    errors.push('Please explain your need for space (at least 10 characters)');
  }

  // Special needs is optional
  if (specialNeeds && specialNeeds.trim().length < 5) {
    warnings.push('Special needs description seems too short');
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
};

/**
 * Validate Step 3: Reservation span
 */
export const validateStep3 = (reservationSpanWeeks: number): StepValidation => {
  const errors: string[] = [];

  if (!reservationSpanWeeks || reservationSpanWeeks <= 0) {
    errors.push('Please enter a valid reservation span in weeks');
  }

  if (reservationSpanWeeks < 1) {
    errors.push('Reservation span must be at least 1 week');
  }

  if (reservationSpanWeeks > 52) {
    errors.push('Reservation span cannot exceed 52 weeks (1 year)');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Validate Step 4: Schedule selection (check-in/check-out)
 */
export const validateStep4 = (
  checkInDate: Date | null,
  checkOutDate: Date | null,
  nightsSelected: number,
  daysSelected: number,
  listing: Listing
): StepValidation => {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!checkInDate || !checkOutDate) {
    errors.push('Please select both check-in and check-out dates');
    return { isValid: false, errors };
  }

  if (!isValidDateRange(checkInDate, checkOutDate)) {
    errors.push('Check-out date must be after check-in date');
  }

  const nights = calculateNights(checkInDate, checkOutDate);

  // Validate against listing constraints
  if (nights < listing.minimumNights) {
    errors.push(`Minimum stay is ${listing.minimumNights} nights`);
  }

  if (nights > listing.maximumNights) {
    errors.push(`Maximum stay is ${listing.maximumNights} nights`);
  }

  if (nights > listing.numberOfNightsAvailable) {
    errors.push(`Only ${listing.numberOfNightsAvailable} nights available`);
  }

  // Check for contiguous selection
  if (nightsSelected !== nights) {
    warnings.push('Selected nights do not match the date range');
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
};

/**
 * Validate Step 5: Final review before submission
 */
export const validateStep5 = (
  checkInDate: Date | null,
  checkOutDate: Date | null,
  moveInDate: Date | null,
  reservationSpanWeeks: number,
  nightsSelected: number,
  aboutYourself: string,
  needForSpace: string
): StepValidation => {
  const errors: string[] = [];

  // Combine all validations
  const step1 = validateStep1(moveInDate);
  const step2 = validateStep2(aboutYourself, needForSpace, '');
  const step3 = validateStep3(reservationSpanWeeks);

  if (!step1.isValid) {
    errors.push(...step1.errors);
  }

  if (!step2.isValid) {
    errors.push(...step2.errors);
  }

  if (!step3.isValid) {
    errors.push(...step3.errors);
  }

  if (!checkInDate || !checkOutDate) {
    errors.push('Please complete the schedule selection');
  }

  if (nightsSelected === 0) {
    errors.push('Please select at least one night');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone format (simple US phone validation)
 */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
};

/**
 * Check if text is not empty
 */
export const isNotEmpty = (text: string): boolean => {
  return text && text.trim().length > 0;
};

/**
 * Check if text meets minimum length
 */
export const meetsMinLength = (text: string, minLength: number): boolean => {
  return text && text.trim().length >= minLength;
};
