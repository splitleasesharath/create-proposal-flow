/**
 * ProposalFlow - Main Component
 * Multi-step proposal creation flow with Zustand state management
 * Based on CONVERSION-GUIDE specifications
 */

import React, { useEffect } from 'react';
import { useProposalFlowStore } from '../store/proposalFlowStore';
import { Listing, User, Proposal } from '../types/proposalFlow.types';
import { Step1UserInfo } from './steps/Step1UserInfo';
import { Step2Breakdown } from './steps/Step2Breakdown';
import { Step3DateTime } from './steps/Step3DateTime';
import { Step4Schedule } from './steps/Step4Schedule';
import { Step5Confirmation } from './steps/Step5Confirmation';
import { toast } from 'react-toastify';
import './ProposalFlow.css';

interface InitialData {
  moveInDate?: Date;
  reservationWeeks?: number;
  selectedDays?: string[];
  nightsPerWeek?: number;
  totalNights?: number;
}

interface ProposalFlowProps {
  userId: string;
  listingId: string;
  listing: Listing;
  user: User;
  onClose: () => void;
  onSuccess?: (proposal: Proposal) => void;
  enableChatGPT?: boolean;
  initialData?: InitialData;
}

export const ProposalFlow: React.FC<ProposalFlowProps> = ({
  userId,
  listingId,
  listing,
  user,
  onClose,
  onSuccess,
  enableChatGPT = false,
  initialData,
}) => {
  const {
    step,
    setStep,
    userInfo,
    dateInfo,
    scheduleInfo,
    pricing,
    validation,
    ui,
    updateUserInfo,
    updateDateInfo,
    updateScheduleInfo,
    calculatePricing,
    clearValidationErrors,
    startSubmission,
    completeSubmission,
    showConfetti: triggerConfetti,
    reset,
  } = useProposalFlowStore();

  // Initialize with user data if available
  useEffect(() => {
    if (user) {
      updateUserInfo({
        needForSpace: user.needForSpace || '',
        aboutMe: user.aboutMe || '',
        specialNeeds: user.specialNeeds || '',
      });
    }
  }, [user]);

  // Initialize with pre-filled reservation data
  useEffect(() => {
    if (initialData) {
      if (initialData.moveInDate) {
        updateDateInfo({
          moveInDate: initialData.moveInDate,
          weeksNumber: initialData.reservationWeeks || 0,
        });
      }
      if (initialData.selectedDays && initialData.nightsPerWeek) {
        updateScheduleInfo({
          daysOfWeekSelected: initialData.selectedDays,
          nightsNumber: initialData.totalNights || 0,
          weeksNumber: initialData.reservationWeeks || 0,
          nightsConfirmed: true,
          checkoutConfirmed: true,
        });
      }
      // Calculate pricing with initial data
      if (initialData.totalNights) {
        calculatePricing(listing, initialData.totalNights);
      }
    }
  }, [initialData]);

  // Validate current step before proceeding
  const validateCurrentStep = (): boolean => {
    clearValidationErrors();

    switch (step) {
      case 1: {
        const errors = [];

        if (!userInfo.needForSpace.trim()) {
          errors.push({ field: 'needForSpace', message: 'Please tell us why you want this space', type: 'error' as const });
        }
        if (!userInfo.aboutMe.trim()) {
          errors.push({ field: 'aboutMe', message: 'Please tell us about yourself', type: 'error' as const });
        }
        if (userInfo.hasSpecialNeeds && !userInfo.specialNeeds.trim()) {
          errors.push({ field: 'specialNeeds', message: 'Please describe your special needs', type: 'error' as const });
        }

        if (errors.length > 0) {
          errors.forEach(err => toast.error(err.message));
          return false;
        }
        return true;
      }

      case 2: {
        // Validate review step before submission
        const errors = [];

        if (!userInfo.needForSpace.trim()) {
          errors.push({ field: 'needForSpace', message: 'Please tell us why you want this space', type: 'error' as const });
        }
        if (!userInfo.aboutMe.trim()) {
          errors.push({ field: 'aboutMe', message: 'Please tell us about yourself', type: 'error' as const });
        }
        if (!dateInfo.moveInDate) {
          errors.push({ field: 'moveInDate', message: 'Please select a move-in date', type: 'error' as const });
        }
        if (dateInfo.weeksNumber === 0) {
          errors.push({ field: 'weeksNumber', message: 'Please select a reservation length', type: 'error' as const });
        }
        if (scheduleInfo.daysOfWeekSelected.length === 0) {
          errors.push({ field: 'schedule', message: 'Please select at least one day of the week', type: 'error' as const });
        }
        if (!scheduleInfo.nightsConfirmed || !scheduleInfo.checkoutConfirmed) {
          errors.push({ field: 'confirmation', message: 'Please confirm your night selection and checkout day', type: 'error' as const });
        }

        if (errors.length > 0) {
          errors.forEach(err => toast.error(err.message));
          return false;
        }
        return true;
      }

      case 3: {
        const errors = [];
        if (!dateInfo.moveInDate) {
          errors.push({ field: 'moveInDate', message: 'Please select a move-in date', type: 'error' as const });
        }
        if (dateInfo.weeksNumber === 0) {
          errors.push({ field: 'weeksNumber', message: 'Please select a reservation length', type: 'error' as const });
        }
        if (dateInfo.weeksNumber < listing.minWeeks) {
          errors.push({ field: 'weeksNumber', message: `This host requires a minimum of ${listing.minWeeks} weeks`, type: 'warning' as const });
        }
        if (dateInfo.weeksNumber > listing.maxWeeks) {
          errors.push({ field: 'weeksNumber', message: `This host allows a maximum of ${listing.maxWeeks} weeks`, type: 'warning' as const });
        }

        if (errors.length > 0) {
          errors.forEach(err => {
            if (err.type === 'error') {
              toast.error(err.message);
            } else {
              toast.warning(err.message);
            }
          });
          return false;
        }
        return true;
      }

      case 4: {
        const errors = [];
        if (scheduleInfo.daysOfWeekSelected.length === 0) {
          errors.push({ field: 'schedule', message: 'Please select at least one day of the week', type: 'error' as const });
        }
        if (!scheduleInfo.nightsConfirmed || !scheduleInfo.checkoutConfirmed) {
          errors.push({ field: 'confirmation', message: 'Please confirm your night selection and checkout day', type: 'error' as const });
        }

        if (errors.length > 0) {
          errors.forEach(err => toast.error(err.message));
          return false;
        }
        return true;
      }

      default:
        return true;
    }
  };

  // Handle navigation
  const handleNext = () => {
    if (validateCurrentStep()) {
      // Review (Step 2) is the central hub
      if (step === 1) {
        // After user info, always go to review if data exists, otherwise go to date selection first
        if (initialData && initialData.moveInDate && initialData.selectedDays) {
          setStep(2); // Go to review with pre-filled data
        } else {
          setStep(3); // Go to date/move-in selection for first-time flow
        }
      } else if (step === 3) {
        // After editing dates, go to schedule selector
        setStep(4);
      } else if (step === 4) {
        // After editing schedule, ALWAYS return to Review
        setStep(2);
      } else if (step === 2) {
        // From Review, submit the proposal
        handleSubmit();
        return;
      } else {
        setStep(step + 1);
      }

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    // Back button always returns to Review (Step 2) when editing, or to Step 1 from Review
    if (step === 3 || step === 4) {
      // From any edit screen, go back to Review
      setStep(2);
    } else if (step === 2) {
      // From Review, go back to User Info
      setStep(1);
    } else {
      // Default fallback
      setStep(Math.max(1, step - 1));
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle edit navigation from Step 2
  const handleEditCheckIn = () => setStep(4);
  const handleEditCheckOut = () => setStep(4);
  const handleEditMoveIn = () => setStep(3);
  const handleEditReservationSpan = () => setStep(3);

  // Handle final submission
  const handleSubmit = async () => {
    startSubmission();

    try {
      // Create proposal object
      const proposal: Proposal = {
        id: `proposal-${Date.now()}`,
        userId,
        listingId,
        checkInDate: scheduleInfo.checkInDay!,
        checkOutDate: scheduleInfo.checkOutDay!,
        weeksNumber: dateInfo.weeksNumber,
        nightsNumber: scheduleInfo.nightsNumber,
        daysOfWeek: scheduleInfo.daysOfWeekSelected,
        totalPrice: pricing.totalPrice,
        userInfo,
        dateInfo,
        scheduleInfo,
        status: 'Pending',
        createdAt: new Date(),
      };

      // Show success
      toast.success('Proposal submitted successfully!');
      triggerConfetti();

      // Call success callback
      if (onSuccess) {
        onSuccess(proposal);
      }

      // Navigate after delay
      setTimeout(() => {
        onClose();
      }, 2000);

    } catch (error) {
      toast.error('Failed to submit proposal. Please try again.');
      console.error('Submission error:', error);
    } finally {
      completeSubmission();
    }
  };

  // Handle close with cleanup
  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <div className="proposal-flow-overlay">
      <div className="proposal-flow-container">
        {/* Header */}
        <div className="proposal-header">
          {step > 1 && (
            <button className="back-button" onClick={handleBack} disabled={ui.isSubmitting}>
              ← Back
            </button>
          )}
          <h1 className="proposal-title">Create Proposal</h1>
          <button className="close-button" onClick={handleClose} disabled={ui.isSubmitting}>
            ×
          </button>
        </div>

        {/* Info banner - Match Bubble.io */}
        <div className="risk-free-banner">
          <span className="banner-icon">🤝</span>
          <span className="banner-text">Start the conversation! After submitting a proposal, you'll begin a negotiation process with the host to finalize the details of your booking.</span>
        </div>

        {/* Step Indicator */}
        <div className="step-indicator">
          <div className="step-progress">
            <div className={`progress-bar progress-step-${step > 4 ? 4 : step}`}></div>
          </div>
          <div className="step-labels">
            <span className={step >= 1 ? 'active' : ''}>Info</span>
            <span className={step >= 2 ? 'active' : ''}>Review</span>
            <span className={step === 3 ? 'active' : ''}>Dates</span>
            <span className={step === 4 ? 'active' : ''}>Schedule</span>
          </div>
        </div>

        {/* Step Content */}
        <div className="proposal-content">
          {step === 1 && <Step1UserInfo userId={userId} enableChatGPT={enableChatGPT} />}
          {step === 2 && (
            <Step2Breakdown
              onEditCheckIn={handleEditCheckIn}
              onEditCheckOut={handleEditCheckOut}
              onEditMoveIn={handleEditMoveIn}
              onEditReservationSpan={handleEditReservationSpan}
            />
          )}
          {step === 3 && <Step3DateTime listing={listing} />}
          {step === 4 && <Step4Schedule listing={listing} />}
        </div>

        {/* Footer with navigation */}
        <div className="proposal-footer">
          <div className="footer-actions">
            <button
              className={`btn btn-primary ${step === 2 ? 'btn-submit' : 'btn-next'}`}
              onClick={handleNext}
              disabled={ui.isSubmitting}
            >
              {step === 2
                ? (ui.isSubmitting ? 'Submitting...' : 'Submit Proposal')
                : 'Next →'
              }
            </button>
          </div>
        </div>

        {/* Confetti Animation */}
        {ui.showConfetti && (
          <div className="confetti-container">
            <div className="confetti">🎉</div>
          </div>
        )}
      </div>
    </div>
  );
};
