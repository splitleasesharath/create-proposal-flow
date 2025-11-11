/**
 * Step 1: Move-in Date Selection
 * Allows user to select their desired move-in date
 */

import React from 'react';
import { formatDateForInput, getMinDate, formatDate } from '../../utils/dateHelpers';
import './StepStyles.css';

interface Step1Props {
  moveInDate: Date | null;
  pulseMoveIn: boolean;
  onMoveInDateChange: (date: Date | null) => void;
  onTurnOffPulsing?: () => void;
  listing: {
    title?: string;
    availability?: string;
  };
}

export const Step1MoveInDate: React.FC<Step1Props> = ({
  moveInDate,
  pulseMoveIn,
  onMoveInDateChange,
  onTurnOffPulsing,
  listing,
}) => {
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value) {
      onMoveInDateChange(new Date(value));
      if (onTurnOffPulsing) {
        onTurnOffPulsing();
      }
    } else {
      onMoveInDateChange(null);
    }
  };

  return (
    <div className="step-container">
      <div className="step-header">
        <h3 className="step-title">Select Your Move-In Date</h3>
        <p className="step-description">
          {listing.availability || 'Let us know when you would like to move in.'}
        </p>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label htmlFor="move-in-date" className="form-label">
            Preferred Move-In Date <span className="required">*</span>
          </label>
          <input
            id="move-in-date"
            type="date"
            className={`form-input date-input ${pulseMoveIn ? 'pulse-animation' : ''}`}
            value={moveInDate ? formatDateForInput(moveInDate) : ''}
            onChange={handleDateChange}
            min={getMinDate()}
            required
          />
          {moveInDate && (
            <p className="input-help-text">
              Selected: {formatDate(moveInDate, 'EEEE, MMMM dd, yyyy')}
            </p>
          )}
        </div>

        <div className="info-box">
          <svg
            className="info-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div>
            <p className="info-title">Why do we need this?</p>
            <p className="info-text">
              Your move-in date helps us understand your housing timeline and coordinate with the
              property owner. This date can be discussed and adjusted after proposal submission.
            </p>
          </div>
        </div>
      </div>

      <div className="step-footer-info">
        <p>
          <strong>Next:</strong> You'll provide some information about yourself and your housing
          needs.
        </p>
      </div>
    </div>
  );
};
