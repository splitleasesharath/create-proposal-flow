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

interface ProposalFlowProps {
  userId: string;
  listingId: string;
  listing: Listing;
  user: User;
  onClose: () => void;
  onSuccess?: (proposal: Proposal) => void;
  enableChatGPT?: boolean;
}

export const ProposalFlow: React.FC<ProposalFlowProps> = ({
  userId,
  listingId,
  listing,
  user,
  onClose,
  onSuccess,
  enableChatGPT = false,
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
      // Navigate based on current step (non-linear flow)
      if (step === 1) {
        setStep(3); // Go to date/time selection
      } else if (step === 3) {
        setStep(4); // Go to schedule
      } else if (step === 4) {
        setStep(2); // Go to breakdown/review
      } else if (step === 2) {
        setStep(5); // Go to final confirmation
      } else {
        setStep(step + 1);
      }

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    // Non-linear back navigation
    const backStepMap: Record<number, number> = {
      5: 2,
      4: 3,
      3: 1,
      2: 1,
    };

    const previousStep = backStepMap[step] || step - 1;

    // Reset schedule data if going back from step 3
    if (step === 3) {
      updateScheduleInfo({
        selectedDays: [],
        nightsNumber: 0,
        nightsConfirmed: false,
        checkoutConfirmed: false,
      });
    }

    setStep(previousStep);
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
            <div className={`progress-bar progress-step-${step}`}></div>
          </div>
          <div className="step-labels">
            <span className={step >= 1 ? 'active' : ''}>Info</span>
            <span className={step >= 2 ? 'active' : ''}>Review</span>
            <span className={step >= 3 ? 'active' : ''}>Dates</span>
            <span className={step >= 4 ? 'active' : ''}>Schedule</span>
            <span className={step >= 5 ? 'active' : ''}>Confirm</span>
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
          {step === 5 && <Step5Confirmation />}
        </div>

        {/* Footer with navigation */}
        <div className="proposal-footer">
          <div className="footer-actions">
            {step < 5 ? (
              <button
                className="btn btn-primary btn-next"
                onClick={handleNext}
                disabled={ui.isSubmitting}
              >
                Next →
              </button>
            ) : (
              <button
                className="btn btn-primary btn-submit"
                onClick={handleSubmit}
                disabled={ui.isSubmitting}
              >
                {ui.isSubmitting ? 'Submitting...' : 'Submit Proposal'}
              </button>
            )}
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
