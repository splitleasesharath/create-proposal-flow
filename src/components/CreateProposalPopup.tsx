/**
 * CreateProposalPopup - Main Component
 * Multi-step proposal creation flow converted from Bubble.io
 */

import React, { useState, useEffect, useCallback } from 'react';
import { CreateProposalPopupProps, CreateProposalState, Proposal } from '../types';
import { showAlert, showInfo } from '../utils/toastHelper';
import { calculateNights, calculateDaysInSpan } from '../utils/dateHelpers';
import { calculatePricing } from '../utils/priceCalculations';
import {
  validateStep1,
  validateStep2,
  validateStep3,
  validateStep4,
  validateStep5,
} from '../utils/validators';
import { Step1MoveInDate } from './steps/Step1MoveInDate';
import { Step2PersonalInfo } from './steps/Step2PersonalInfo';
import { Step3ReservationSpan } from './steps/Step3ReservationSpan';
import { Step4ScheduleSelection } from './steps/Step4ScheduleSelection';
import { Step5Review } from './steps/Step5Review';
import './CreateProposalPopup.css';

export const CreateProposalPopup: React.FC<CreateProposalPopupProps> = ({
  listing,
  guestUser,
  isOpen = true,
  onClose,
  onProposalSubmit,
  onNavigateToRentalApp,
  onNavigateToDashboard,
  initialStep = 1,
  enableChatGPT = false,
  showLiveAlerts = true,
}) => {
  // Initialize state based on Bubble custom states
  const [state, setState] = useState<CreateProposalState>({
    step: initialStep,
    pulseMoveIn: false,
    calculateNewTerms: false,
    checkInDay: null,
    checkOutDay: null,
    startDate: null,
    endDate: null,
    moveInDateSelected: null,
    daysSelected: 0,
    nightsSelected: 0,
    daysInSpan: 0,
    reservationSpanWeeks: 0,
    otherReservationSpan: 0,
    guestUser,
    listing,
    scheduleState: null,
    editModeCheckIn: false,
    editModeCheckOut: false,
    editModeMoveIn: false,
    editModeReservationSpan: false,
    aboutYourself: '',
    needForSpace: '',
    specialNeeds: '',
    isSubmitting: false,
    hasRentalApplication: guestUser.rentalApplication?.submitted || false,
    proposalCount: guestUser.proposalsList?.length || 0,
  });

  // Effect: Initialize on open (Bubble: "G: Create proposal flow is opened")
  useEffect(() => {
    if (isOpen) {
      // Set initial states
      setState((prev) => ({
        ...prev,
        step: initialStep,
      }));
    }
  }, [isOpen, initialStep]);

  // Effect: Recalculate when terms change
  useEffect(() => {
    if (state.calculateNewTerms && state.checkInDay && state.checkOutDay) {
      const nights = calculateNights(state.checkInDay, state.checkOutDay);
      const days = calculateDaysInSpan(state.checkInDay, state.checkOutDay);

      setState((prev) => ({
        ...prev,
        nightsSelected: nights,
        daysSelected: days,
        daysInSpan: days,
        calculateNewTerms: false,
      }));
    }
  }, [state.calculateNewTerms, state.checkInDay, state.checkOutDay]);

  // Handler: Go to next step
  const goToNextStep = useCallback(() => {
    let validation;
    let canProceed = false;

    switch (state.step) {
      case 1:
        validation = validateStep1(state.moveInDateSelected);
        canProceed = validation.isValid;
        break;
      case 2:
        validation = validateStep2(state.aboutYourself, state.needForSpace, state.specialNeeds);
        canProceed = validation.isValid;
        break;
      case 3:
        validation = validateStep3(state.reservationSpanWeeks);
        canProceed = validation.isValid;
        break;
      case 4:
        validation = validateStep4(
          state.checkInDay,
          state.checkOutDay,
          state.nightsSelected,
          state.daysSelected,
          listing
        );
        canProceed = validation.isValid;
        break;
      default:
        canProceed = true;
    }

    if (!canProceed && validation) {
      validation.errors.forEach((error) => {
        showAlert({
          title: 'Validation Error',
          content: error,
          alertType: 'error',
          showOnLive: showLiveAlerts,
        });
      });
      return;
    }

    setState((prev) => ({
      ...prev,
      step: prev.step + 1,
    }));
  }, [state, listing, showLiveAlerts]);

  // Handler: Go to previous step
  const goToPreviousStep = useCallback(() => {
    setState((prev) => ({
      ...prev,
      step: Math.max(1, prev.step - 1),
    }));
  }, []);

  // Handler: Update state field
  const updateField = useCallback(
    <K extends keyof CreateProposalState>(field: K, value: CreateProposalState[K]) => {
      setState((prev) => ({
        ...prev,
        [field]: value,
      }));
    },
    []
  );

  // Handler: Submit proposal
  const handleSubmitProposal = useCallback(async () => {
    // Final validation
    const validation = validateStep5(
      state.checkInDay,
      state.checkOutDay,
      state.moveInDateSelected,
      state.reservationSpanWeeks,
      state.nightsSelected,
      state.aboutYourself,
      state.needForSpace
    );

    if (!validation.isValid) {
      validation.errors.forEach((error) => {
        showAlert({
          title: 'Validation Error',
          content: error,
          alertType: 'error',
          showOnLive: showLiveAlerts,
        });
      });
      return;
    }

    setState((prev) => ({ ...prev, isSubmitting: true }));

    try {
      // Calculate pricing
      const pricing = calculatePricing(listing, state.nightsSelected);

      // Create proposal object
      const proposal: Proposal = {
        id: `proposal-${Date.now()}`, // Would be generated by backend
        userId: guestUser.id,
        listingId: listing.id,
        checkInDate: state.checkInDay!,
        checkOutDate: state.checkOutDay!,
        moveInDate: state.moveInDateSelected || undefined,
        nightsSelected: state.nightsSelected,
        daysSelected: state.daysSelected,
        reservationSpanWeeks: state.reservationSpanWeeks,
        totalPrice: pricing.totalReservation,
        nightlyRate: pricing.nightlyRate,
        status: 'submitted',
        aboutYourself: state.aboutYourself,
        needForSpace: state.needForSpace,
        specialNeeds: state.specialNeeds,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      // Call submit callback
      if (onProposalSubmit) {
        onProposalSubmit(proposal);
      }

      // Show success message
      showAlert({
        title: 'Proposal Submitted!',
        content: 'Your proposal has been submitted successfully.',
        alertType: 'success',
        showOnLive: showLiveAlerts,
      });

      // Show info if less than 4 proposals
      if (state.proposalCount < 4) {
        showInfo(
          'Dashboard',
          'You can view your proposal in your dashboard.',
          3000
        );
      }

      // Navigate to dashboard
      setTimeout(() => {
        if (onNavigateToDashboard) {
          onNavigateToDashboard(proposal.id);
        } else if (onClose) {
          onClose();
        }
      }, 1500);
    } catch (error) {
      showAlert({
        title: 'Submission Error',
        content: 'Failed to submit proposal. Please try again.',
        alertType: 'error',
        showOnLive: showLiveAlerts,
      });
    } finally {
      setState((prev) => ({ ...prev, isSubmitting: false }));
    }
  }, [
    state,
    listing,
    guestUser,
    onProposalSubmit,
    onNavigateToDashboard,
    onClose,
    showLiveAlerts,
  ]);

  // Handler: Close popup and reset
  const handleClose = useCallback(() => {
    // Reset state
    setState({
      step: 1,
      pulseMoveIn: false,
      calculateNewTerms: false,
      checkInDay: null,
      checkOutDay: null,
      startDate: null,
      endDate: null,
      moveInDateSelected: null,
      daysSelected: 0,
      nightsSelected: 0,
      daysInSpan: 0,
      reservationSpanWeeks: 0,
      otherReservationSpan: 0,
      guestUser,
      listing,
      scheduleState: null,
      editModeCheckIn: false,
      editModeCheckOut: false,
      editModeMoveIn: false,
      editModeReservationSpan: false,
      aboutYourself: '',
      needForSpace: '',
      specialNeeds: '',
      isSubmitting: false,
      hasRentalApplication: guestUser.rentalApplication?.submitted || false,
      proposalCount: guestUser.proposalsList?.length || 0,
    });

    if (onClose) {
      onClose();
    }
  }, [guestUser, listing, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="create-proposal-popup-overlay">
      <div className="create-proposal-popup">
        {/* Header */}
        <div className="popup-header">
          <h2>Create Proposal</h2>
          <button
            className="close-button"
            onClick={handleClose}
            aria-label="Close"
            disabled={state.isSubmitting}
          >
            ×
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="progress-indicator">
          <div className="progress-steps">
            {[1, 2, 3, 4, 5].map((stepNum) => (
              <div
                key={stepNum}
                className={`progress-step ${
                  stepNum === state.step ? 'active' : stepNum < state.step ? 'completed' : ''
                }`}
              >
                <div className="step-number">{stepNum}</div>
                <div className="step-label">Step {stepNum}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="popup-content">
          <div className="step-content">
            {state.step === 1 && (
              <Step1MoveInDate
                moveInDate={state.moveInDateSelected}
                pulseMoveIn={state.pulseMoveIn}
                onMoveInDateChange={(date) => updateField('moveInDateSelected', date)}
                onTurnOffPulsing={() => updateField('pulseMoveIn', false)}
                listing={listing}
              />
            )}

            {state.step === 2 && (
              <Step2PersonalInfo
                aboutYourself={state.aboutYourself}
                needForSpace={state.needForSpace}
                specialNeeds={state.specialNeeds}
                onAboutYourselfChange={(value) => updateField('aboutYourself', value)}
                onNeedForSpaceChange={(value) => updateField('needForSpace', value)}
                onSpecialNeedsChange={(value) => updateField('specialNeeds', value)}
                enableChatGPT={enableChatGPT}
              />
            )}

            {state.step === 3 && (
              <Step3ReservationSpan
                reservationSpanWeeks={state.reservationSpanWeeks}
                onReservationSpanChange={(weeks) => updateField('reservationSpanWeeks', weeks)}
              />
            )}

            {state.step === 4 && (
              <Step4ScheduleSelection
                checkInDate={state.checkInDay}
                checkOutDate={state.checkOutDay}
                listing={listing}
                nightsSelected={state.nightsSelected}
                daysSelected={state.daysSelected}
                editModeCheckIn={state.editModeCheckIn}
                editModeCheckOut={state.editModeCheckOut}
                onCheckInDateChange={(date) => {
                  updateField('checkInDay', date);
                  if (date && state.checkOutDay) {
                    updateField('calculateNewTerms', true);
                  }
                }}
                onCheckOutDateChange={(date) => {
                  updateField('checkOutDay', date);
                  if (state.checkInDay && date) {
                    updateField('calculateNewTerms', true);
                  }
                }}
                onToggleEditModeCheckIn={() => updateField('editModeCheckIn', !state.editModeCheckIn)}
                onToggleEditModeCheckOut={() => updateField('editModeCheckOut', !state.editModeCheckOut)}
              />
            )}

            {state.step === 5 && (
              <Step5Review
                moveInDate={state.moveInDateSelected}
                checkInDate={state.checkInDay}
                checkOutDate={state.checkOutDay}
                reservationSpanWeeks={state.reservationSpanWeeks}
                nightsSelected={state.nightsSelected}
                aboutYourself={state.aboutYourself}
                needForSpace={state.needForSpace}
                specialNeeds={state.specialNeeds}
                listing={listing}
                onEdit={(step) => updateField('step', step)}
              />
            )}
          </div>
        </div>

        {/* Footer with navigation */}
        <div className="popup-footer">
          {state.step > 1 && (
            <button
              className="btn btn-secondary"
              onClick={goToPreviousStep}
              disabled={state.isSubmitting}
            >
              Back
            </button>
          )}

          {state.step < 5 ? (
            <button
              className="btn btn-primary"
              onClick={goToNextStep}
              disabled={state.isSubmitting}
            >
              Next
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={handleSubmitProposal}
              disabled={state.isSubmitting}
            >
              {state.isSubmitting ? 'Submitting...' : 'Submit Proposal'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
