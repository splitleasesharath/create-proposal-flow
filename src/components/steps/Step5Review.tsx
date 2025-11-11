/**
 * Step 5: Review
 * Final review of all proposal details before submission
 */

import React from 'react';
import { formatDate } from '../../utils/dateHelpers';
import { calculatePricing, formatPrice } from '../../utils/priceCalculations';
import { Listing } from '../../types';
import './StepStyles.css';

interface Step5Props {
  moveInDate: Date | null;
  checkInDate: Date | null;
  checkOutDate: Date | null;
  reservationSpanWeeks: number;
  nightsSelected: number;
  aboutYourself: string;
  needForSpace: string;
  specialNeeds: string;
  listing: Listing;
  onEdit: (step: number) => void;
}

export const Step5Review: React.FC<Step5Props> = ({
  moveInDate,
  checkInDate,
  checkOutDate,
  reservationSpanWeeks,
  nightsSelected,
  aboutYourself,
  needForSpace,
  specialNeeds,
  listing,
  onEdit,
}) => {
  const pricing = calculatePricing(listing, nightsSelected);

  return (
    <div className="step-container review-container">
      <div className="step-header">
        <h3 className="step-title">Review Your Proposal</h3>
        <p className="step-description">
          Please review all details before submitting your proposal.
        </p>
      </div>

      <div className="review-sections">
        {/* Move-In Date */}
        <div className="review-section">
          <div className="review-section-header">
            <h4>Move-In Date</h4>
            <button
              type="button"
              className="edit-link"
              onClick={() => onEdit(1)}
            >
              Edit
            </button>
          </div>
          <div className="review-content">
            <p className="review-value">
              {moveInDate ? formatDate(moveInDate, 'EEEE, MMMM dd, yyyy') : 'Not specified'}
            </p>
          </div>
        </div>

        {/* Personal Information */}
        <div className="review-section">
          <div className="review-section-header">
            <h4>Personal Information</h4>
            <button
              type="button"
              className="edit-link"
              onClick={() => onEdit(2)}
            >
              Edit
            </button>
          </div>
          <div className="review-content">
            <div className="review-item">
              <span className="review-label">About Yourself:</span>
              <p className="review-text">{aboutYourself || 'Not provided'}</p>
            </div>
            <div className="review-item">
              <span className="review-label">Need for Space:</span>
              <p className="review-text">{needForSpace || 'Not provided'}</p>
            </div>
            {specialNeeds && (
              <div className="review-item">
                <span className="review-label">Special Needs:</span>
                <p className="review-text">{specialNeeds}</p>
              </div>
            )}
          </div>
        </div>

        {/* Reservation Details */}
        <div className="review-section">
          <div className="review-section-header">
            <h4>Reservation Details</h4>
            <button
              type="button"
              className="edit-link"
              onClick={() => onEdit(3)}
            >
              Edit
            </button>
          </div>
          <div className="review-content">
            <div className="review-grid">
              <div className="review-item">
                <span className="review-label">Reservation Span:</span>
                <span className="review-value">{reservationSpanWeeks} weeks</span>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div className="review-section">
          <div className="review-section-header">
            <h4>Selected Dates</h4>
            <button
              type="button"
              className="edit-link"
              onClick={() => onEdit(4)}
            >
              Edit
            </button>
          </div>
          <div className="review-content">
            <div className="review-grid">
              <div className="review-item">
                <span className="review-label">Check-In:</span>
                <span className="review-value">
                  {checkInDate ? formatDate(checkInDate, 'MMM dd, yyyy') : 'Not selected'}
                </span>
              </div>
              <div className="review-item">
                <span className="review-label">Check-Out:</span>
                <span className="review-value">
                  {checkOutDate ? formatDate(checkOutDate, 'MMM dd, yyyy') : 'Not selected'}
                </span>
              </div>
              <div className="review-item">
                <span className="review-label">Total Nights:</span>
                <span className="review-value">{nightsSelected} nights</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Summary */}
        <div className="review-section pricing-section">
          <div className="review-section-header">
            <h4>Pricing Summary</h4>
          </div>
          <div className="review-content">
            <div className="pricing-breakdown">
              <div className="pricing-item">
                <span className="pricing-label">Nightly Rate:</span>
                <span className="pricing-value">{formatPrice(pricing.nightlyRate)}</span>
              </div>
              <div className="pricing-item">
                <span className="pricing-label">
                  Total for {nightsSelected} {nightsSelected === 1 ? 'night' : 'nights'}:
                </span>
                <span className="pricing-value">{formatPrice(pricing.totalReservation)}</span>
              </div>
              {pricing.damageDeposit > 0 && (
                <div className="pricing-item">
                  <span className="pricing-label">Refundable Damage Deposit:</span>
                  <span className="pricing-value">{formatPrice(pricing.damageDeposit)}</span>
                </div>
              )}
              <div className="pricing-item pricing-total">
                <span className="pricing-label">Total Due:</span>
                <span className="pricing-value">{formatPrice(pricing.totalDue)}</span>
              </div>
            </div>

            <div className="pricing-info">
              <p className="info-text">
                <strong>Note:</strong> The final price may be subject to additional fees or
                adjustments based on the property owner's policies.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="final-disclaimer">
        <div className="disclaimer-box">
          <svg
            className="disclaimer-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div>
            <p className="disclaimer-title">Ready to Submit?</p>
            <p className="disclaimer-text">
              By clicking "Submit Proposal", you're sending your rental proposal to the property
              owner. They will review your information and respond accordingly. This is not a
              binding agreement until both parties confirm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
