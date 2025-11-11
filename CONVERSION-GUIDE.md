# create-proposal-flow: Bubble to React Conversion Guide

**Component**: ♻️💥create-proposal-flow (Reusable Element)
**Type**: Multi-step Proposal Creation Flow
**Extraction Date**: 2025-11-11
**Documentation Files**: 20+ files, 150+ screenshots

---

## Executive Summary

This guide provides complete specifications for converting the Bubble.io "create-proposal-flow" reusable element into a React component. The element is a sophisticated 5-step wizard for creating rental proposals with:

- **50+ UI elements** with conditional visibility
- **35+ workflows** managing state transitions and business logic
- **20+ custom states** for data management
- **ChatGPT integration** for AI-enhanced text input
- **Complex validation** across multiple steps
- **Reactive calculations** for pricing and dates
- **Calendar/schedule selection** functionality

**Complexity Level**: High (8/10)
**Estimated Development Time**: 40-60 hours
**Recommended Team Size**: 2-3 developers

---

## Table of Contents

1. [Component Overview](#component-overview)
2. [Technical Architecture](#technical-architecture)
3. [Step-by-Step Implementation Plan](#step-by-step-implementation-plan)
4. [Component Specifications](#component-specifications)
5. [State Management Implementation](#state-management-implementation)
6. [Workflow-to-Handler Mapping](#workflow-to-handler-mapping)
7. [Validation System](#validation-system)
8. [API Integration](#api-integration)
9. [UI/UX Implementation](#uiux-implementation)
10. [Testing Strategy](#testing-strategy)
11. [Deployment Checklist](#deployment-checklist)

---

## Component Overview

### Purpose
Allow guests to create detailed rental proposals by collecting:
1. Personal information and needs (Step 1)
2. Review reservation details and pricing (Step 2)
3. Select move-in date and duration (Step 3)
4. Choose weekly schedule/calendar pattern (Step 4)
5. Confirm final details before submission (Step 5)

### Key Features

**✅ Multi-step Wizard**
- Non-linear navigation (1→3→4→2→5)
- Back button support with data persistence
- Step validation before proceeding

**✅ AI Enhancement**
- Real-time ChatGPT integration on Step 1 text fields
- Improves user-written content automatically
- Uses GPT-4o model

**✅ Complex Calendar Selection**
- Weekly pattern selection
- Date range validation
- Blocked dates handling
- Contiguous date checking

**✅ Dynamic Pricing**
- Real-time calculations based on selections
- Multiple pricing tiers
- Breakdown display

**✅ Responsive Design**
- Desktop: 490px fixed width
- Mobile: Adaptive layouts with breakpoints
- Touch-friendly interactions

---

## Technical Architecture

### Recommended Stack

```
Frontend Framework: React 18+ with TypeScript
State Management: Zustand or React Context + useReducer
Form Management: React Hook Form
Validation: Zod
Date Handling: date-fns
Calendar: Custom component (or react-big-calendar)
Animations: Framer Motion
Styling: Tailwind CSS + CSS Modules
AI Integration: OpenAI API (GPT-4o)
Testing: Jest + React Testing Library + Playwright
```

### Folder Structure

```
src/components/proposal-flow/
├── ProposalFlow.tsx                  # Main container
├── ProposalFlowProvider.tsx          # Context provider
├── hooks/
│   ├── useProposalFlow.ts           # Main state hook
│   ├── useStepValidation.ts         # Validation logic
│   ├── useAIEnhancement.ts          # ChatGPT integration
│   ├── usePricingCalculation.ts     # Pricing logic
│   └── useDateCalculations.ts       # Date utilities
├── steps/
│   ├── Step1UserInfo.tsx            # Personal info step
│   ├── Step2Breakdown.tsx           # Pricing review step
│   ├── Step3DateTime.tsx            # Date selection step
│   ├── Step4Schedule.tsx            # Calendar selection step
│   └── Step5Confirmation.tsx        # Final confirmation step
├── components/
│   ├── ProposalHeader.tsx           # Header with close/back
│   ├── NoRiskBanner.tsx             # Info banner
│   ├── StepIndicator.tsx            # Progress indicator
│   ├── ValidationMessage.tsx        # Error/warning display
│   ├── ScheduleSelector/            # Calendar component
│   │   ├── ScheduleSelector.tsx
│   │   ├── Calendar.tsx
│   │   ├── WeekPattern.tsx
│   │   └── DateValidation.ts
│   ├── ConfettiAnimation.tsx        # Success animation
│   └── AlertSystem.tsx              # Alert notifications
├── types/
│   ├── proposalFlow.types.ts        # TypeScript interfaces
│   └── api.types.ts                 # API types
├── utils/
│   ├── validation.ts                # Validation functions
│   ├── calculations.ts              # Pricing/date calculations
│   ├── formatting.ts                # Data formatting
│   └── constants.ts                 # Constants/enums
├── api/
│   ├── aiService.ts                 # ChatGPT API calls
│   ├── proposalService.ts           # Proposal CRUD
│   └── userService.ts               # User updates
└── __tests__/
    ├── ProposalFlow.test.tsx
    ├── steps/                        # Step component tests
    ├── hooks/                        # Hook tests
    └── e2e/                         # E2E tests
```

---

## Step-by-Step Implementation Plan

### Phase 1: Foundation (Week 1)

**Day 1-2: Project Setup**
- [ ] Initialize React project with TypeScript
- [ ] Set up Tailwind CSS + CSS Modules
- [ ] Configure ESLint, Prettier
- [ ] Set up testing environment
- [ ] Create folder structure
- [ ] Install dependencies

**Day 3-4: Type Definitions**
- [ ] Define TypeScript interfaces (see `proposalFlow.types.ts` below)
- [ ] Create API type definitions
- [ ] Set up constants and enums

**Day 5: State Management**
- [ ] Implement Zustand store (or Context + Reducer)
- [ ] Create initial state structure
- [ ] Implement state actions/reducers
- [ ] Add state persistence (if needed)

### Phase 2: Core Components (Week 2)

**Day 6-7: Layout Components**
- [ ] Create `ProposalFlow.tsx` container
- [ ] Implement `ProposalHeader.tsx`
- [ ] Create `StepIndicator.tsx`
- [ ] Build `NoRiskBanner.tsx`
- [ ] Set up routing/navigation between steps

**Day 8-9: Step 1 - User Info**
- [ ] Create `Step1UserInfo.tsx`
- [ ] Implement form fields with validation
- [ ] Add AI enhancement hook
- [ ] Connect to state management
- [ ] Style and responsive design

**Day 10: Step 3 - Date/Time**
- [ ] Create `Step3DateTime.tsx`
- [ ] Implement date picker integration
- [ ] Add duration selection
- [ ] Implement validation logic
- [ ] Date range calculations

### Phase 3: Complex Features (Week 3)

**Day 11-13: Step 4 - Schedule Selector**
- [ ] Design calendar component architecture
- [ ] Build `ScheduleSelector.tsx`
- [ ] Implement `Calendar.tsx` with date selection
- [ ] Add `WeekPattern.tsx` for weekly selection
- [ ] Implement date validation (contiguous, blocked)
- [ ] Connect to schedule state
- [ ] Calculate pricing based on selections

**Day 14-15: Step 2 - Breakdown & Step 5 - Confirmation**
- [ ] Create `Step2Breakdown.tsx` with pricing display
- [ ] Create `Step5Confirmation.tsx`
- [ ] Implement dynamic data display
- [ ] Add edit navigation links
- [ ] Style breakdown sections

### Phase 4: Business Logic (Week 4)

**Day 16-17: Validation System**
- [ ] Implement `useStepValidation.ts` hook
- [ ] Create validation functions for each step
- [ ] Build `ValidationMessage.tsx` component
- [ ] Connect validation to form fields
- [ ] Add error handling

**Day 18-19: Pricing & Calculations**
- [ ] Implement `usePricingCalculation.ts` hook
- [ ] Create pricing calculation functions
- [ ] Add reactive calculation system
- [ ] Implement min nightly rate logic
- [ ] Test all pricing scenarios

**Day 20: Navigation & Flow**
- [ ] Implement step navigation logic
- [ ] Add back button functionality
- [ ] Create go-back data cleanup
- [ ] Test non-linear flow (1→3→4→2→5)

### Phase 5: Integrations (Week 5)

**Day 21-22: ChatGPT Integration**
- [ ] Set up OpenAI API client
- [ ] Implement `useAIEnhancement.ts` hook
- [ ] Create AI enhancement service
- [ ] Add debouncing for API calls
- [ ] Handle API errors gracefully
- [ ] Add loading states

**Day 23-24: API Integration**
- [ ] Create `proposalService.ts` for CRUD operations
- [ ] Implement proposal creation endpoint
- [ ] Add duplicate proposal check
- [ ] Create user profile update endpoints
- [ ] Implement error handling

**Day 25: Animations & Feedback**
- [ ] Create `ConfettiAnimation.tsx` with Lottie
- [ ] Implement `AlertSystem.tsx`
- [ ] Add transition animations between steps
- [ ] Create loading states
- [ ] Add success/error feedback

### Phase 6: Polish & Testing (Week 6)

**Day 26-27: UI Polish**
- [ ] Responsive design refinement
- [ ] Accessibility improvements (ARIA, keyboard nav)
- [ ] Browser compatibility testing
- [ ] Performance optimization

**Day 28-29: Testing**
- [ ] Write unit tests for hooks
- [ ] Write unit tests for components
- [ ] Write integration tests for steps
- [ ] Create E2E tests for full flow
- [ ] Test edge cases

**Day 30: Documentation & Deployment**
- [ ] Write component documentation
- [ ] Create usage examples
- [ ] Deployment preparation
- [ ] Final QA pass

---

## Component Specifications

### Main Component: ProposalFlow

```typescript
// ProposalFlow.tsx
import React from 'react';
import { ProposalFlowProvider } from './ProposalFlowProvider';
import { ProposalPopup } from './ProposalPopup';

interface ProposalFlowProps {
  userId: string;
  listingId: string;
  listing: Listing;
  onClose: () => void;
  onSuccess?: (proposal: Proposal) => void;
}

export const ProposalFlow: React.FC<ProposalFlowProps> = ({
  userId,
  listingId,
  listing,
  onClose,
  onSuccess
}) => {
  return (
    <ProposalFlowProvider
      userId={userId}
      listingId={listingId}
      listing={listing}
    >
      <ProposalPopup onClose={onClose} onSuccess={onSuccess} />
    </ProposalFlowProvider>
  );
};
```

### TypeScript Interfaces

```typescript
// types/proposalFlow.types.ts

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
```

---

## State Management Implementation

### Zustand Store

```typescript
// store/proposalFlowStore.ts
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

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
  calculatePricing: () => void;
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
        get().calculatePricing();
      },

      updateScheduleInfo: (info) => {
        set((state) => ({
          scheduleInfo: { ...state.scheduleInfo, ...info },
        }));

        // Trigger recalculation
        get().calculatePricing();
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
            [`step${step}Errors`]: errors,
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
        set({ ui: { ...get().ui, alertMessage: alert } });
      },

      startSubmission: () => {
        set({ ui: { ...get().ui, isSubmitting: true } });
      },

      completeSubmission: () => {
        set({ ui: { ...get().ui, isSubmitting: false } });
      },

      showConfetti: () => {
        set({ ui: { ...get().ui, showConfetti: true } });
        setTimeout(() => {
          set({ ui: { ...get().ui, showConfetti: false } });
        }, 3000);
      },

      calculatePricing: () => {
        const state = get();
        // Implement pricing calculation logic here
        // (see calculations section below)
      },

      reset: () => {
        set(initialState);
      },
    }),
    { name: 'ProposalFlowStore' }
  )
);
```

---

## Workflow-to-Handler Mapping

This section maps each Bubble workflow to its React equivalent.

### Complete Handler Implementation

```typescript
// hooks/useProposalFlowHandlers.ts
import { useProposalFlowStore } from '../store/proposalFlowStore';
import { validateStep1, validateStep3, validateStep4 } from '../utils/validation';
import { calculateMinNightlyRate } from '../utils/calculations';
import { createProposal } from '../api/proposalService';
import { updateProfileCompleteness } from '../api/userService';

export const useProposalFlowHandlers = (userId: string, listingId: string, listing: Listing) => {
  const store = useProposalFlowStore();

  /**
   * Workflow 8: Next button clicked at step 1
   * Validates text fields and navigates to step 3
   */
  const handleNextFromStep1 = async () => {
    const errors = validateStep1(store.userInfo);

    if (errors.length > 0) {
      // Show validation alerts
      errors.forEach((error) => {
        store.setAlert({
          type: 'warning',
          message: error.message,
          duration: 5000,
        });
      });

      store.setValidationError(1, errors);
      return; // Terminate (like Bubble workflow)
    }

    // Schedule profile completeness API calls
    try {
      await Promise.all([
        updateProfileCompleteness(userId, 'bio'),
        updateProfileCompleteness(userId, 'need_for_space'),
        store.userInfo.hasSpecialNeeds &&
          updateProfileCompleteness(userId, 'special_needs'),
      ].filter(Boolean));
    } catch (error) {
      console.error('Profile completeness update failed:', error);
      // Don't block navigation on failure
    }

    // Navigate to step 3
    store.clearValidationErrors();
    store.setStep(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /**
   * Workflows 14, 15: Date/duration selection
   */
  const handleDateInfoChange = (field: string, value: any) => {
    store.updateDateInfo({ [field]: value });

    // Recalculate date range (Workflow 14)
    if (field === 'moveInDate' || field === 'weeksNumber') {
      const daysInSpan = store.dateInfo.weeksNumber * 7;
      const endDate = store.dateInfo.moveInDate
        ? new Date(store.dateInfo.moveInDate.getTime() + daysInSpan * 24 * 60 * 60 * 1000)
        : null;

      store.calculations = {
        ...store.calculations,
        daysInSpanWeeks: daysInSpan,
        endDate,
      };
    }
  };

  /**
   * Workflow 9: Next button clicked at step 3
   */
  const handleNextFromStep3 = () => {
    const errors = validateStep3(store.dateInfo, listing);

    if (errors.length > 0) {
      errors.forEach((error) => {
        store.setAlert({
          type: 'warning',
          message: error.message,
          duration: 5000,
        });
      });

      store.setValidationError(3, errors);
      return;
    }

    store.clearValidationErrors();
    store.setStep(4);
  };

  /**
   * Workflow 7: Next button clicked at step 4
   */
  const handleNextFromStep4 = () => {
    const errors = validateStep4(store.scheduleInfo);

    if (errors.length > 0) {
      store.setValidationError(4, errors);
      return;
    }

    // Save schedule selections
    // (already saved in store via updateScheduleInfo)

    // Navigate to step 2 (review)
    store.clearValidationErrors();
    store.setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /**
   * Workflow 1: Submit button clicked at step 3 (goes to step 2)
   */
  const handleSubmitFromStep3 = () => {
    // Calculate min nightly rate
    const minRate = calculateMinNightlyRate(
      store.scheduleInfo.nightsNumber,
      listing.monthlyHostRate
    );

    store.setPricing({ minNightlyRate: minRate });

    // Navigate to step 2 (review/breakdown)
    store.setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /**
   * Submit button clicked at step 2 (goes to step 5)
   */
  const handleSubmitFromStep2 = () => {
    store.setStep(5);
  };

  /**
   * Workflows 2, 10, 13: Final submission
   */
  const handleFinalSubmit = async () => {
    // Check for duplicate proposal
    // (This check should be done via API)
    const checkResponse = await fetch(
      `/api/user/${userId}/proposals?listingId=${listingId}`
    );
    const existingProposals = await checkResponse.json();

    if (existingProposals.length > 0) {
      store.setAlert({
        type: 'info',
        message: 'You already have a proposal for this listing',
        duration: 5000,
      });
      return;
    }

    // Start submission
    store.startSubmission();

    try {
      // Create proposal (Workflow 13)
      const proposal = await createProposal({
        userId,
        listingId,
        checkInDate: store.scheduleInfo.checkInDay!,
        checkOutDate: store.scheduleInfo.checkOutDay!,
        weeksNumber: store.scheduleInfo.weeksNumber,
        nightsNumber: store.scheduleInfo.nightsNumber,
        daysOfWeek: store.scheduleInfo.daysOfWeekSelected,
        totalPrice: store.pricing.totalPrice,
        userInfo: store.userInfo,
        dateInfo: store.dateInfo,
        scheduleInfo: store.scheduleInfo,
      });

      // Show success feedback
      store.showConfetti();
      store.setAlert({
        type: 'success',
        message: 'Proposal submitted successfully!',
        duration: 3000,
      });

      // Navigate to dashboard after delay
      setTimeout(() => {
        window.location.href = '/guest-dashboard';
      }, 2000);

    } catch (error) {
      store.setAlert({
        type: 'error',
        message: 'Failed to submit proposal. Please try again.',
        duration: 5000,
      });
    } finally {
      store.completeSubmission();
    }
  };

  /**
   * Workflows 3-6: Go back navigation
   */
  const handleGoBack = () => {
    const backStepMap: Record<number, number> = {
      5: 3,
      4: 2,
      3: 2,
      2: 1,
    };

    const previousStep = backStepMap[store.step];

    // Reset data if going back from step 4 (Workflow 4)
    if (store.step === 3) {
      store.updateScheduleInfo({
        selectedDays: [],
        nightsNumber: 0,
        nightsConfirmed: false,
        checkoutConfirmed: false,
      });
    }

    store.setStep(previousStep);
  };

  /**
   * Workflows 19-23: Edit navigation
   */
  const handleEditCheckIn = () => {
    store.setStep(4);
  };

  const handleEditCheckOut = () => {
    store.setStep(4);
  };

  const handleEditMoveIn = () => {
    store.setStep(3);
  };

  const handleEditReservationSpan = () => {
    store.setStep(3);
  };

  return {
    handleNextFromStep1,
    handleDateInfoChange,
    handleNextFromStep3,
    handleNextFromStep4,
    handleSubmitFromStep3,
    handleSubmitFromStep2,
    handleFinalSubmit,
    handleGoBack,
    handleEditCheckIn,
    handleEditCheckOut,
    handleEditMoveIn,
    handleEditReservationSpan,
  };
};
```

---

## Validation System

```typescript
// utils/validation.ts

export const validateStep1 = (userInfo: ProposalFlowState['userInfo']): ValidationError[] => {
  const errors: ValidationError[] = [];

  // Workflow 8: 30 character minimum validation
  if (userInfo.aboutMe.length < 30) {
    errors.push({
      field: 'aboutMe',
      message: 'Please write at least 30 characters about yourself',
      type: 'error',
    });
  }

  if (userInfo.needForSpace.length < 30) {
    errors.push({
      field: 'needForSpace',
      message: 'Please write at least 30 characters about why you need this space',
      type: 'error',
    });
  }

  if (userInfo.hasSpecialNeeds && userInfo.specialNeeds.length < 30) {
    errors.push({
      field: 'specialNeeds',
      message: 'Please write at least 30 characters about your special needs',
      type: 'error',
    });
  }

  return errors;
};

export const validateStep3 = (
  dateInfo: ProposalFlowState['dateInfo'],
  listing: Listing
): ValidationError[] => {
  const errors: ValidationError[] = [];

  // Workflow 9: Week number validation
  if (dateInfo.reservationSpan === 'Other (wks)' && !dateInfo.customWeeks) {
    errors.push({
      field: 'weeksNumber',
      message: 'Please enter the number of weeks',
      type: 'error',
    });
  }

  // Min/max week validation (from Design tab conditional logic)
  if (dateInfo.weeksNumber < listing.minWeeks) {
    errors.push({
      field: 'weeksNumber',
      message: `This host requires a minimum of ${listing.minWeeks} weeks`,
      type: 'warning',
    });
  }

  if (dateInfo.weeksNumber > listing.maxWeeks) {
    errors.push({
      field: 'weeksNumber',
      message: `This host allows a maximum of ${listing.maxWeeks} weeks`,
      type: 'warning',
    });
  }

  // Move-in date required
  if (!dateInfo.moveInDate) {
    errors.push({
      field: 'moveInDate',
      message: 'Please select a move-in date',
      type: 'error',
    });
  }

  return errors;
};

export const validateStep4 = (scheduleInfo: ProposalFlowState['scheduleInfo']): ValidationError[] => {
  const errors: ValidationError[] = [];

  // Workflow 7: Checkbox confirmation validation
  if (!scheduleInfo.nightsConfirmed && !scheduleInfo.checkoutConfirmed) {
    errors.push({
      field: 'confirmation',
      message: 'Please confirm your selected nights and checkout day',
      type: 'error',
    });
  }

  // Must have selected days
  if (scheduleInfo.selectedDays.length === 0) {
    errors.push({
      field: 'selectedDays',
      message: 'Please select at least one day',
      type: 'error',
    });
  }

  return errors;
};
```

---

## API Integration

```typescript
// api/proposalService.ts

export interface CreateProposalRequest {
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
}

export const createProposal = async (data: CreateProposalRequest): Promise<Proposal> => {
  const response = await fetch('/api/proposal/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to create proposal');
  }

  return response.json();
};

// api/aiService.ts
export const enhanceText = async (text: string, field: string): Promise<string> => {
  const response = await fetch('/api/ai/enhance', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      prompt: `${DESINTERMEDIATION_PROMPT}"${text}"`,
      model: 'gpt-4o',
      maxTokens: 150,
    }),
  });

  if (!response.ok) {
    throw new Error('AI enhancement failed');
  }

  const data = await response.json();
  return data.choices[0].message.content;
};
```

---

## Deployment Checklist

**Pre-Deployment**:
- [ ] All tests passing (unit, integration, E2E)
- [ ] Accessibility audit complete (WCAG 2.1 AA)
- [ ] Browser compatibility verified (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsive design tested
- [ ] Performance optimizations applied (code splitting, lazy loading)
- [ ] Environment variables configured
- [ ] API endpoints tested in staging
- [ ] Error handling and logging in place

**Deployment**:
- [ ] Deploy to staging environment
- [ ] QA testing in staging
- [ ] User acceptance testing
- [ ] Deploy to production
- [ ] Monitor error logs
- [ ] Verify analytics tracking

**Post-Deployment**:
- [ ] Monitor user feedback
- [ ] Track conversion rates
- [ ] Performance monitoring
- [ ] Bug triage and fixes

---

## Conclusion

This guide provides a complete roadmap for converting the Bubble.io create-proposal-flow element to React. Follow the implementation plan sequentially, referring to the Design and Workflow context documents for detailed specifications.

**Key Success Factors**:
1. Maintain parity with Bubble functionality
2. Improve performance and user experience
3. Ensure robust validation and error handling
4. Comprehensive testing at all levels
5. Accessibility and responsive design

**Estimated Timeline**: 6 weeks (with 2-3 developers)
**Documentation References**: 20+ files, 150+ screenshots in `.playwright-mcp/` directory

Good luck with the implementation! 🚀
