/**
 * Complete Type Definitions for Create Proposal Flow
 * Based on Bubble.io CONVERSION-GUIDE specifications
 */

export type ReservationSpan =
  | '4 weeks'
  | '8 weeks'
  | '12 weeks'
  | '26 weeks'
  | '52 weeks'
  | 'Other (wks)';

export type DayOfWeek = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';

export interface ValidationError {
  field: string;
  message: string;
  type: 'error' | 'warning';
}

export interface AlertMessage {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  duration?: number;
}

export interface Listing {
  id: string;
  title: string;
  pricePerNight: number;
  monthlyHostRate: number;
  minWeeks: number;
  maxWeeks: number;
  weeksOffered: ReservationSpan[];
  blockedDates: Date[];
  refundableDeposit: number;
  maintenanceFee: number;
  actualWeeklyMaintenanceFee: number;
  nightly3NightRate?: number;
  nightly4NightRate?: number;
  nightly5NightRate?: number;
  nightly7NightRate?: number;
}

export interface ProposalFlowState {
  // Navigation
  step: 1 | 2 | 3 | 4 | 5;
  isProposal: boolean;
  canGoBack: boolean;
  canGoForward: boolean;

  // User Info (Step 1)
  userInfo: {
    needForSpace: string;
    aboutMe: string;
    hasSpecialNeeds: boolean;
    specialNeeds: string;
  };

  // Date/Duration (Step 3)
  dateInfo: {
    moveInDate: Date | null;
    moveInFlexible: boolean;
    reservationSpan: ReservationSpan;
    weeksNumber: number;
    customWeeks: number | null;
  };

  // Schedule (Step 4)
  scheduleInfo: {
    selectedDays: Date[];
    nightsNumber: number;
    checkInDay: Date | null;
    checkOutDay: Date | null;
    weeksNumber: number;
    daysOfWeekSelected: DayOfWeek[];
    nightsConfirmed: boolean;
    checkoutConfirmed: boolean;
  };

  // Pricing (calculated)
  pricing: {
    pricePerNight: number;
    totalNights: number;
    totalPrice: number;
    pricePerFourWeeks: number;
    refundableDeposit: number;
    maintenanceFee: number;
    initialPayment: number;
    minNightlyRate: number;
  };

  // Validation
  validation: {
    step1Errors: ValidationError[];
    step3Errors: ValidationError[];
    step4Errors: ValidationError[];
    hasErrors: boolean;
  };

  // UI State
  ui: {
    isSubmitting: boolean;
    showConfetti: boolean;
    pulseMovein: boolean;
    alertMessage: AlertMessage | null;
  };

  // Calculations
  calculations: {
    daysInSpanWeeks: number;
    endDate: Date | null;
    shouldRecalculate: boolean;
  };
}

export interface Proposal {
  id: string;
  userId: string;
  listingId: string;
  checkInDate: Date;
  checkOutDate: Date;
  weeksNumber: number;
  nightsNumber: number;
  daysOfWeek: DayOfWeek[];
  totalPrice: number;
  userInfo: ProposalFlowState['userInfo'];
  dateInfo: ProposalFlowState['dateInfo'];
  scheduleInfo: ProposalFlowState['scheduleInfo'];
  status: 'Pending' | 'Accepted' | 'Rejected';
  createdAt: Date;
}

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  needForSpace?: string;
  aboutMe?: string;
  specialNeeds?: string;
  proposalsList?: Proposal[];
}

// Step Validation Result
export interface StepValidation {
  isValid: boolean;
  errors: string[];
  warnings?: string[];
}

// Pricing Calculation
export interface PricingCalculation {
  nightlyRate: number;
  totalReservation: number;
  fourWeekRent: number;
  damageDeposit: number;
  maintenanceFee: number;
  initialPayment: number;
  totalDue: number;
}
