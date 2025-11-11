/**
 * Step 4: Schedule Selection
 * User selects specific check-in and check-out dates
 * This integrates with the listing schedule selector
 */

import React from 'react';
import { formatDateForInput, getMinDate, formatDate, calculateNights } from '../../utils/dateHelpers';
import { Listing } from '../../types';
import './StepStyles.css';

interface Step4Props {
  checkInDate: Date | null;
  checkOutDate: Date | null;
  listing: Listing;
  nightsSelected: number;
  daysSelected: number;
  editModeCheckIn: boolean;
  editModeCheckOut: boolean;
  onCheckInDateChange: (date: Date | null) => void;
  onCheckOutDateChange: (date: Date | null) => void;
  onToggleEditModeCheckIn: () => void;
  onToggleEditModeCheckOut: () => void;
}

export const Step4ScheduleSelection: React.FC<Step4Props> = ({
  checkInDate,
  checkOutDate,
  listing,
  nightsSelected,
  daysSelected,
  editModeCheckIn,
  editModeCheckOut,
  onCheckInDateChange,
  onCheckOutDateChange,
  onToggleEditModeCheckIn,
  onToggleEditModeCheckOut,
}) => {
  const handleCheckInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value) {
      onCheckInDateChange(new Date(value));
    } else {
      onCheckInDateChange(null);
    }
  };

  const handleCheckOutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value) {
      onCheckOutDateChange(new Date(value));
    } else {
      onCheckOutDateChange(null);
    }
  };

  const calculatedNights = checkInDate && checkOutDate ? calculateNights(checkInDate, checkOutDate) : 0;

  return (
    <div className="step-container">
      <div className="step-header">
        <h3 className="step-title">Select Your Dates</h3>
        <p className="step-description">
          Choose your check-in and check-out dates for your stay.
        </p>
      </div>

      <div className="form-section">
        {/* Listing Info */}
        <div className="listing-constraints">
          <h4>Property Requirements</h4>
          <div className="constraints-grid">
            <div className="constraint-item">
              <span className="constraint-label">Minimum Stay:</span>
              <span className="constraint-value">{listing.minimumNights} nights</span>
            </div>
            <div className="constraint-item">
              <span className="constraint-label">Maximum Stay:</span>
              <span className="constraint-value">{listing.maximumNights} nights</span>
            </div>
            <div className="constraint-item">
              <span className="constraint-label">Available Nights:</span>
              <span className="constraint-value">{listing.numberOfNightsAvailable} nights</span>
            </div>
            <div className="constraint-item">
              <span className="constraint-label">Check-in Time:</span>
              <span className="constraint-value">{listing.checkInTime}</span>
            </div>
            <div className="constraint-item">
              <span className="constraint-label">Check-out Time:</span>
              <span className="constraint-value">{listing.checkOutTime}</span>
            </div>
          </div>
        </div>

        {/* Check-in Date */}
        <div className="form-group">
          <div className="label-with-edit">
            <label htmlFor="check-in-date" className="form-label">
              Check-In Date <span className="required">*</span>
            </label>
            {checkInDate && !editModeCheckIn && (
              <button
                type="button"
                className="edit-btn"
                onClick={onToggleEditModeCheckIn}
              >
                Edit
              </button>
            )}
          </div>

          {!checkInDate || editModeCheckIn ? (
            <input
              id="check-in-date"
              type="date"
              className="form-input date-input"
              value={checkInDate ? formatDateForInput(checkInDate) : ''}
              onChange={handleCheckInChange}
              min={getMinDate()}
              required
            />
          ) : (
            <div className="selected-date-display">
              {formatDate(checkInDate, 'EEEE, MMMM dd, yyyy')}
            </div>
          )}
        </div>

        {/* Check-out Date */}
        <div className="form-group">
          <div className="label-with-edit">
            <label htmlFor="check-out-date" className="form-label">
              Check-Out Date <span className="required">*</span>
            </label>
            {checkOutDate && !editModeCheckOut && (
              <button
                type="button"
                className="edit-btn"
                onClick={onToggleEditModeCheckOut}
              >
                Edit
              </button>
            )}
          </div>

          {!checkOutDate || editModeCheckOut ? (
            <input
              id="check-out-date"
              type="date"
              className="form-input date-input"
              value={checkOutDate ? formatDateForInput(checkOutDate) : ''}
              onChange={handleCheckOutChange}
              min={checkInDate ? formatDateForInput(checkInDate) : getMinDate()}
              required
            />
          ) : (
            <div className="selected-date-display">
              {formatDate(checkOutDate, 'EEEE, MMMM dd, yyyy')}
            </div>
          )}
        </div>

        {/* Summary */}
        {checkInDate && checkOutDate && calculatedNights > 0 && (
          <div className="selection-summary">
            <h4>Your Selection</h4>
            <div className="summary-grid">
              <div className="summary-item">
                <span className="summary-label">Total Nights:</span>
                <span className="summary-value">{calculatedNights} nights</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Total Days:</span>
                <span className="summary-value">{calculatedNights + 1} days</span>
              </div>
            </div>

            {/* Validation messages */}
            {calculatedNights < listing.minimumNights && (
              <div className="validation-warning">
                ⚠️ Selection is below minimum stay of {listing.minimumNights} nights
              </div>
            )}
            {calculatedNights > listing.maximumNights && (
              <div className="validation-error">
                ❌ Selection exceeds maximum stay of {listing.maximumNights} nights
              </div>
            )}
            {calculatedNights >= listing.minimumNights && calculatedNights <= listing.maximumNights && (
              <div className="validation-success">
                ✓ Your selection meets the property requirements
              </div>
            )}
          </div>
        )}
      </div>

      <div className="step-footer-info">
        <p>
          <strong>Next:</strong> Review your proposal before submitting.
        </p>
      </div>
    </div>
  );
};
