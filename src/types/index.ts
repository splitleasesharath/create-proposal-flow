/**
 * Type definitions for Create Proposal Flow component
 * Converted from Bubble.io custom states and data schema
 */

// Alert Types for Toast Notifications
export type AlertType = 'error' | 'information' | 'warning' | 'success' | 'empty';

// Toast Notification Parameters
export interface ToastParams {
  title: string;
  content?: string;
  time?: number;
  alertType?: AlertType;
  showOnLive?: boolean;
}

// User Type (Guest User)
export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  proposalsList?: Proposal[];
  rentalApplication?: RentalApplication;
  createdAt?: Date;
  updatedAt?: Date;
}

// Rental Application
export interface RentalApplication {
  id: string;
  userId: string;
  submitted: boolean;
  submittedAt?: Date;
  status?: 'pending' | 'approved' | 'rejected';
}

// Listing Type
export interface Listing {
  id: string;
  title: string;
  address?: string;
  description?: string;
  minimumNights: number;
  maximumNights: number;
  numberOfNightsAvailable: number;
  checkInTime: string;
  checkOutTime: string;
  active: boolean;
  approved: boolean;
  availability?: string; // "depends on this listing's availability"
  hostId?: string;
  nightly3NightRate?: number;
  nightly4NightRate?: number;
  nightly5NightRate?: number;
  nightly7NightRate?: number;
  hostRate?: number;
  weeklyRate?: number;
  monthlyRate?: number;
  damageDeposit?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

// Day Type (for schedule selector)
export interface Day {
  id: string;
  date: Date;
  name: string; // Full day name (e.g., "Monday")
  first3Letters: string; // Short name (e.g., "Mon")
  dayNumber: number; // 1-7 (Monday = 1, Sunday = 7)
  isSelected: boolean;
  isBlocked?: boolean;
  isWeekend?: boolean;
  price?: number;
}

// Proposal Type
export interface Proposal {
  id: string;
  userId: string;
  listingId: string;
  checkInDate: Date;
  checkOutDate: Date;
  moveInDate?: Date;
  nightsSelected: number;
  daysSelected: number;
  reservationSpanWeeks: number;
  totalPrice: number;
  nightlyRate: number;
  status: 'draft' | 'submitted' | 'accepted' | 'rejected';
  aboutYourself?: string;
  needForSpace?: string;
  specialNeeds?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Schedule State (from listing-schedule-selector)
export interface ScheduleState {
  selectedDays: Day[];
  notSelectedDays: Day[];
  nightsCount: number;
  isContiguous: boolean;
  acceptableSchedule: boolean;
  checkInDay: Day | null;
  checkOutDay: Day | null;
  startNight: number | null;
  endNight: number | null;
  limitToFiveNights: boolean;
  autobindListing: boolean;
  recalculateState: boolean;
  unusedNights: Day[];
  totalReservation: number[];
  fourWeekRent: number[];
}

// Create Proposal Flow State (Main Component State)
export interface CreateProposalState {
  // Step management
  step: number; // 1-5

  // Pulsing/UI effects
  pulseMoveIn: boolean;

  // Calculation flags
  calculateNewTerms: boolean;

  // Date selections
  checkInDay: Date | null;
  checkOutDay: Date | null;
  startDate: Date | null;
  endDate: Date | null;
  moveInDateSelected: Date | null;

  // Numeric selections
  daysSelected: number;
  nightsSelected: number;
  daysInSpan: number;
  reservationSpanWeeks: number;
  otherReservationSpan: number;

  // References to entities
  guestUser: User | null;
  listing: Listing | null;

  // Schedule selector state
  scheduleState: ScheduleState | null;

  // Edit modes
  editModeCheckIn: boolean;
  editModeCheckOut: boolean;
  editModeMoveIn: boolean;
  editModeReservationSpan: boolean;

  // Form data for Step 2
  aboutYourself: string;
  needForSpace: string;
  specialNeeds: string;

  // Flags
  isSubmitting: boolean;
  hasRentalApplication: boolean;
  proposalCount: number;
}

// Props for main component
export interface CreateProposalPopupProps {
  // Required props
  listing: Listing;
  guestUser: User;

  // Optional props
  isOpen?: boolean;
  onClose?: () => void;
  onProposalSubmit?: (proposal: Proposal) => void;
  onNavigateToRentalApp?: (proposalId: string) => void;
  onNavigateToDashboard?: (proposalId?: string) => void;

  // Initial state
  initialStep?: number;

  // Feature flags
  enableChatGPT?: boolean;
  showLiveAlerts?: boolean;
}

// Custom Event Payloads
export interface AlertEventPayload {
  title: string;
  content?: string;
  time?: number;
  alertType?: AlertType;
  showOnLive?: boolean;
}

export interface GoToDashboardEventPayload {
  proposal?: Proposal;
}

// Step validation result
export interface StepValidation {
  isValid: boolean;
  errors: string[];
  warnings?: string[];
}

// Pricing calculation result
export interface PricingCalculation {
  nightlyRate: number;
  totalReservation: number;
  fourWeekRent: number;
  damageDeposit: number;
  totalDue: number;
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface CreateProposalResponse extends ApiResponse {
  data?: Proposal;
}
