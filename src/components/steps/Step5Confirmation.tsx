/**
 * Step 5: Final Confirmation
 * Reviews all selections and shows final confirmation message
 * Based on CONVERSION-GUIDE STEP-5-COMPLETE.md
 */

import React from 'react';
import { useProposalFlowStore } from '../../store/proposalFlowStore';
import { format } from 'date-fns';

export const Step5Confirmation: React.FC = () => {
  const { userInfo, dateInfo, scheduleInfo, pricing } = useProposalFlowStore();

  // Format currency
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  // Format date
  const formatDate = (date: Date | null): string => {
    if (!date) return 'Not selected';
    return format(date, 'EEEE, MMMM d, yyyy');
  };

  // Calculate nights per week
  const nightsPerWeek = scheduleInfo.daysOfWeekSelected.length;

  // Get checkout day name
  const checkoutDayName = scheduleInfo.checkOutDay ? format(scheduleInfo.checkOutDay, 'EEEE') : 'Not selected';

  return (
    <div className="step-5-confirmation">
      <h2 className="step-title">Confirm Your Proposal</h2>
      <p className="step-description">
        Please review all details before submitting your proposal to the host
      </p>

      {/* Confirmation Question */}
      <div className="confirmation-question">
        <p className="question-text">
          Are you sure you want <strong>{nightsPerWeek} night{nightsPerWeek !== 1 ? 's' : ''} per week</strong> and
          to check out on <strong>{checkoutDayName}</strong>?
        </p>
      </div>

      {/* Complete Summary */}
      <div className="confirmation-summary">
        {/* Personal Information */}
        <div className="summary-section">
          <h3 className="section-title">Your Information</h3>

          <div className="summary-item">
            <span className="item-label">Why you want this space:</span>
            <p className="item-value">{userInfo.needForSpace || 'Not provided'}</p>
          </div>

          <div className="summary-item">
            <span className="item-label">About you:</span>
            <p className="item-value">{userInfo.aboutMe || 'Not provided'}</p>
          </div>

          {userInfo.hasSpecialNeeds && (
            <div className="summary-item">
              <span className="item-label">Special needs:</span>
              <p className="item-value">{userInfo.specialNeeds || 'Not provided'}</p>
            </div>
          )}
        </div>

        {/* Reservation Details */}
        <div className="summary-section">
          <h3 className="section-title">Reservation Details</h3>

          <div className="summary-row">
            <span className="item-label">Move-in date:</span>
            <span className="item-value">{formatDate(dateInfo.moveInDate)}</span>
          </div>

          {dateInfo.moveInFlexible && (
            <div className="summary-row">
              <span className="item-label">Move-in flexibility:</span>
              <span className="item-value">Flexible</span>
            </div>
          )}

          <div className="summary-row">
            <span className="item-label">Reservation length:</span>
            <span className="item-value">{dateInfo.weeksNumber} weeks</span>
          </div>

          <div className="summary-row">
            <span className="item-label">Weekly schedule:</span>
            <span className="item-value">{scheduleInfo.daysOfWeekSelected.join(', ')}</span>
          </div>

          <div className="summary-row">
            <span className="item-label">Nights per week:</span>
            <span className="item-value">{nightsPerWeek} nights</span>
          </div>

          <div className="summary-row">
            <span className="item-label">Total nights:</span>
            <span className="item-value">{scheduleInfo.nightsNumber} nights</span>
          </div>

          <div className="summary-row">
            <span className="item-label">Check-in day:</span>
            <span className="item-value">{scheduleInfo.checkInDay ? format(scheduleInfo.checkInDay, 'EEEE') : 'Not selected'}</span>
          </div>

          <div className="summary-row">
            <span className="item-label">Check-out day:</span>
            <span className="item-value">{checkoutDayName}</span>
          </div>
        </div>

        {/* Pricing Summary */}
        <div className="summary-section pricing-summary">
          <h3 className="section-title">Pricing Summary</h3>

          <div className="summary-row">
            <span className="item-label">Price per night:</span>
            <span className="item-value">{formatCurrency(pricing.pricePerNight)}</span>
          </div>

          <div className="summary-row">
            <span className="item-label">Total nights:</span>
            <span className="item-value">× {scheduleInfo.nightsNumber}</span>
          </div>

          <div className="summary-row total">
            <span className="item-label">Subtotal:</span>
            <span className="item-value">{formatCurrency(pricing.totalPrice)}</span>
          </div>

          <div className="summary-row">
            <span className="item-label">Refundable deposit:</span>
            <span className="item-value">{formatCurrency(pricing.refundableDeposit)}</span>
          </div>

          <div className="summary-row">
            <span className="item-label">Maintenance fee (4 wks):</span>
            <span className="item-value">{formatCurrency(pricing.maintenanceFee)}</span>
          </div>

          <div className="divider"></div>

          <div className="summary-row grand-total">
            <span className="item-label">Initial Payment:</span>
            <span className="item-value">{formatCurrency(pricing.initialPayment)}</span>
          </div>

          <div className="summary-row">
            <span className="item-label">Per 4 weeks ongoing:</span>
            <span className="item-value">{formatCurrency(pricing.pricePerFourWeeks)}</span>
          </div>
        </div>
      </div>

      {/* Final Notice */}
      <div className="final-notice">
        <span className="notice-icon">✓</span>
        <div className="notice-content">
          <h4>Ready to Submit?</h4>
          <p>
            Once you submit this proposal, the host will be notified and can review your request.
            You'll be able to track the status in your dashboard.
          </p>
          <p className="risk-free">
            <strong>Risk-free:</strong> This is a proposal, not a booking. The host must approve before any charges occur.
          </p>
        </div>
      </div>
    </div>
  );
};
