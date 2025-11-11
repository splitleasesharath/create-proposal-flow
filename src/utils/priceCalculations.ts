/**
 * Price Calculation Utilities
 * Functions for calculating rental prices based on nights selected
 */

import { Listing, PricingCalculation } from '../types';

/**
 * Calculate nightly rate based on nights selected
 * Replicates the complex Bubble workflow for nightly rate selection
 */
export const calculateNightlyRate = (
  listing: Listing,
  nightsSelected: number,
  isHostListing: boolean = false
): number => {
  // Check for specific nightly rates based on nights selected
  if (nightsSelected === 7 && listing.nightly7NightRate) {
    return listing.nightly7NightRate;
  }

  if (nightsSelected === 5 && listing.nightly5NightRate) {
    return listing.nightly5NightRate;
  }

  if (nightsSelected === 4 && listing.nightly4NightRate) {
    return listing.nightly4NightRate;
  }

  if (nightsSelected === 3 && listing.nightly3NightRate) {
    return listing.nightly3NightRate;
  }

  if (nightsSelected === 2 && listing.hostRate && isHostListing) {
    return listing.hostRate;
  }

  // Default to host rate or calculate from weekly/monthly
  if (listing.hostRate) {
    return listing.hostRate;
  }

  // Calculate from weekly rate
  if (listing.weeklyRate) {
    return listing.weeklyRate / 7;
  }

  // Calculate from monthly rate (assuming 30 days per month)
  if (listing.monthlyRate) {
    return listing.monthlyRate / 30;
  }

  // Fallback
  return 0;
};

/**
 * Calculate total reservation cost
 */
export const calculateTotalReservation = (
  nightlyRate: number,
  nightsSelected: number
): number => {
  return nightlyRate * nightsSelected;
};

/**
 * Calculate 4-week rent
 */
export const calculateFourWeekRent = (
  nightlyRate: number
): number => {
  return nightlyRate * 28; // 4 weeks = 28 nights
};

/**
 * Get damage deposit
 */
export const getDamageDeposit = (listing: Listing): number => {
  return listing.damageDeposit || 0;
};

/**
 * Calculate complete pricing breakdown
 */
export const calculatePricing = (
  listing: Listing,
  nightsSelected: number,
  isHostListing: boolean = false
): PricingCalculation => {
  const nightlyRate = calculateNightlyRate(listing, nightsSelected, isHostListing);
  const totalReservation = calculateTotalReservation(nightlyRate, nightsSelected);
  const fourWeekRent = calculateFourWeekRent(nightlyRate);
  const damageDeposit = getDamageDeposit(listing);
  const totalDue = totalReservation + damageDeposit;

  return {
    nightlyRate,
    totalReservation,
    fourWeekRent,
    damageDeposit,
    totalDue,
  };
};

/**
 * Format price for display
 */
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};

/**
 * Calculate price per week
 */
export const calculatePricePerWeek = (nightlyRate: number): number => {
  return nightlyRate * 7;
};

/**
 * Calculate price per month (30 days)
 */
export const calculatePricePerMonth = (nightlyRate: number): number => {
  return nightlyRate * 30;
};
