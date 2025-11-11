/**
 * Zustand Store for Proposal Flow State Management
 * Based on CONVERSION-GUIDE specifications
 */

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { ProposalFlowState, ValidationError, AlertMessage, Listing, User } from '../types/proposalFlow.types';

interface ProposalFlowStore extends ProposalFlowState {
  // Actions
  setStep: (step: number) => void;
  updateUserInfo: (info: Partial<ProposalFlowState['userInfo']>) => void;
  updateDateInfo: (info: Partial<ProposalFlowState['dateInfo']>) => void;
  updateScheduleInfo: (info: Partial<ProposalFlowState['scheduleInfo']>) => void;
  setPricing: (pricing: Partial<ProposalFlowState['pricing']>) => void;
  setValidationError: (step: number, errors: ValidationError[]) => void;
  clearValidationErrors: () => void;
  setAlert: (alert: AlertMessage | null) => void;
  startSubmission: () => void;
  completeSubmission: () => void;
  showConfetti: () => void;
  calculatePricing: (listing: Listing) => void;
  reset: () => void;
}

const initialState: ProposalFlowState = {
  step: 1,
  isProposal: true,
  canGoBack: false,
  canGoForward: false,
  userInfo: {
    needForSpace: '',
    aboutMe: '',
    hasSpecialNeeds: false,
    specialNeeds: '',
  },
  dateInfo: {
    moveInDate: null,
    moveInFlexible: false,
    reservationSpan: '12 weeks',
    weeksNumber: 12,
    customWeeks: null,
  },
  scheduleInfo: {
    selectedDays: [],
    nightsNumber: 0,
    checkInDay: null,
    checkOutDay: null,
    weeksNumber: 0,
    daysOfWeekSelected: [],
    nightsConfirmed: false,
    checkoutConfirmed: false,
  },
  pricing: {
    pricePerNight: 0,
    totalNights: 0,
    totalPrice: 0,
    pricePerFourWeeks: 0,
    refundableDeposit: 0,
    maintenanceFee: 0,
    initialPayment: 0,
    minNightlyRate: 0,
  },
  validation: {
    step1Errors: [],
    step3Errors: [],
    step4Errors: [],
    hasErrors: false,
  },
  ui: {
    isSubmitting: false,
    showConfetti: false,
    pulseMovein: false,
    alertMessage: null,
  },
  calculations: {
    daysInSpanWeeks: 0,
    endDate: null,
    shouldRecalculate: false,
  },
};

export const useProposalFlowStore = create<ProposalFlowStore>()(
  devtools(
    (set, get) => ({
      ...initialState,

      setStep: (step) => {
        set({ step: step as 1 | 2 | 3 | 4 | 5 });
      },

      updateUserInfo: (info) => {
        set((state) => ({
          userInfo: { ...state.userInfo, ...info },
        }));
      },

      updateDateInfo: (info) => {
        set((state) => ({
          dateInfo: { ...state.dateInfo, ...info },
        }));

        // Trigger recalculation
        const currentState = get();
        if (currentState.dateInfo.moveInDate && currentState.dateInfo.weeksNumber) {
          const daysInSpan = currentState.dateInfo.weeksNumber * 7;
          const endDate = new Date(currentState.dateInfo.moveInDate.getTime() + daysInSpan * 24 * 60 * 60 * 1000);

          set((state) => ({
            calculations: {
              ...state.calculations,
              daysInSpanWeeks: daysInSpan,
              endDate,
              shouldRecalculate: true,
            },
          }));
        }
      },

      updateScheduleInfo: (info) => {
        set((state) => ({
          scheduleInfo: { ...state.scheduleInfo, ...info },
        }));

        // Trigger price recalculation when schedule changes
        const currentState = get();
        set((state) => ({
          calculations: {
            ...state.calculations,
            shouldRecalculate: true,
          },
        }));
      },

      setPricing: (pricing) => {
        set((state) => ({
          pricing: { ...state.pricing, ...pricing },
        }));
      },

      setValidationError: (step, errors) => {
        set((state) => ({
          validation: {
            ...state.validation,
            [`step${step}Errors` as keyof typeof state.validation]: errors,
            hasErrors: errors.length > 0,
          },
        }));
      },

      clearValidationErrors: () => {
        set({
          validation: {
            step1Errors: [],
            step3Errors: [],
            step4Errors: [],
            hasErrors: false,
          },
        });
      },

      setAlert: (alert) => {
        set((state) => ({
          ui: { ...state.ui, alertMessage: alert },
        }));
      },

      startSubmission: () => {
        set((state) => ({
          ui: { ...state.ui, isSubmitting: true },
        }));
      },

      completeSubmission: () => {
        set((state) => ({
          ui: { ...state.ui, isSubmitting: false },
        }));
      },

      showConfetti: () => {
        set((state) => ({
          ui: { ...state.ui, showConfetti: true },
        }));
        setTimeout(() => {
          set((state) => ({
            ui: { ...state.ui, showConfetti: false },
          }));
        }, 3000);
      },

      calculatePricing: (listing: Listing) => {
        const state = get();
        const { nightsNumber, weeksNumber } = state.scheduleInfo;

        if (!nightsNumber || !weeksNumber) return;

        // Calculate pricing based on listing rates
        const pricePerNight = listing.pricePerNight;
        const totalPrice = pricePerNight * nightsNumber;
        const pricePerFourWeeks = (totalPrice / weeksNumber) * 4;
        const refundableDeposit = listing.refundableDeposit;
        const maintenanceFee = listing.maintenanceFee;
        const initialPayment = pricePerFourWeeks + refundableDeposit + maintenanceFee;

        // Calculate min nightly rate based on monthly host rate
        const minNightlyRate = listing.monthlyHostRate / 28 * 1.2;

        set({
          pricing: {
            pricePerNight,
            totalNights: nightsNumber,
            totalPrice,
            pricePerFourWeeks,
            refundableDeposit,
            maintenanceFee,
            initialPayment,
            minNightlyRate,
          },
          calculations: {
            ...state.calculations,
            shouldRecalculate: false,
          },
        });
      },

      reset: () => {
        set(initialState);
      },
    }),
    { name: 'ProposalFlowStore' }
  )
);
