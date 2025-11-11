/**
 * Step 3: Reservation Span
 * User specifies how many weeks they want to reserve
 */

import React from 'react';
import { weeksToDay, daysToWeeks } from '../../utils/dateHelpers';
import './StepStyles.css';

interface Step3Props {
  reservationSpanWeeks: number;
  onReservationSpanChange: (weeks: number) => void;
}

export const Step3ReservationSpan: React.FC<Step3Props> = ({
  reservationSpanWeeks,
  onReservationSpanChange,
}) => {
  const handleWeeksChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0) {
      onReservationSpanChange(value);
    }
  };

  const days = reservationSpanWeeks > 0 ? weeksToDay(reservationSpanWeeks) : 0;
  const months = reservationSpanWeeks > 0 ? (reservationSpanWeeks / 4).toFixed(1) : 0;

  const handlePresetClick = (weeks: number) => {
    onReservationSpanChange(weeks);
  };

  return (
    <div className="step-container">
      <div className="step-header">
        <h3 className="step-title">How Long Do You Want to Stay?</h3>
        <p className="step-description">
          Specify the duration of your proposed reservation in weeks.
        </p>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label htmlFor="reservation-weeks" className="form-label">
            Reservation Span (Weeks) <span className="required">*</span>
          </label>
          <input
            id="reservation-weeks"
            type="number"
            className="form-input number-input"
            value={reservationSpanWeeks || ''}
            onChange={handleWeeksChange}
            min={1}
            max={52}
            step={0.5}
            placeholder="Enter number of weeks"
            required
          />

          {reservationSpanWeeks > 0 && (
            <div className="conversion-info">
              <p>
                <strong>{reservationSpanWeeks} weeks</strong> = {days} days ≈ {months} months
              </p>
            </div>
          )}
        </div>

        {/* Quick Selection Presets */}
        <div className="preset-options">
          <p className="preset-label">Quick Selection:</p>
          <div className="preset-buttons">
            <button
              type="button"
              className={`preset-btn ${reservationSpanWeeks === 1 ? 'active' : ''}`}
              onClick={() => handlePresetClick(1)}
            >
              1 Week
            </button>
            <button
              type="button"
              className={`preset-btn ${reservationSpanWeeks === 2 ? 'active' : ''}`}
              onClick={() => handlePresetClick(2)}
            >
              2 Weeks
            </button>
            <button
              type="button"
              className={`preset-btn ${reservationSpanWeeks === 4 ? 'active' : ''}`}
              onClick={() => handlePresetClick(4)}
            >
              1 Month
            </button>
            <button
              type="button"
              className={`preset-btn ${reservationSpanWeeks === 12 ? 'active' : ''}`}
              onClick={() => handlePresetClick(12)}
            >
              3 Months
            </button>
            <button
              type="button"
              className={`preset-btn ${reservationSpanWeeks === 24 ? 'active' : ''}`}
              onClick={() => handlePresetClick(24)}
            >
              6 Months
            </button>
            <button
              type="button"
              className={`preset-btn ${reservationSpanWeeks === 52 ? 'active' : ''}`}
              onClick={() => handlePresetClick(52)}
            >
              1 Year
            </button>
          </div>
        </div>

        <div className="info-box">
          <svg
            className="info-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div>
            <p className="info-title">Flexible Duration</p>
            <p className="info-text">
              Your reservation span represents your intended stay duration. The exact dates will be
              determined in the next step based on availability.
            </p>
          </div>
        </div>
      </div>

      <div className="step-footer-info">
        <p>
          <strong>Next:</strong> Select your specific check-in and check-out dates.
        </p>
      </div>
    </div>
  );
};
