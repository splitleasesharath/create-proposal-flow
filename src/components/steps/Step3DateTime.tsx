/**
 * Step 3: Date and Duration Selection
 * Collects: Move-in date, reservation span (weeks)
 * Based on CONVERSION-GUIDE STEP-3-COMPLETE.md
 */

import React, { useEffect } from 'react';
import { useProposalFlowStore } from '../../store/proposalFlowStore';
import { ReservationSpan } from '../../types/proposalFlow.types';

interface Step3DateTimeProps {
  listing: { minWeeks: number; maxWeeks: number; blockedDates: Date[]; weeksOffered: ReservationSpan[] };
}

export const Step3DateTime: React.FC<Step3DateTimeProps> = ({ listing }) => {
  const { dateInfo, updateDateInfo, calculations } = useProposalFlowStore();

  // Predefined reservation span options
  const reservationSpanOptions: ReservationSpan[] = [
    '4 weeks',
    '8 weeks',
    '12 weeks',
    '26 weeks',
    '52 weeks',
    'Other (wks)',
  ];

  const handleMoveInDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value ? new Date(e.target.value) : null;
    updateDateInfo({ moveInDate: date });
  };

  const handleFlexibilityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateDateInfo({ moveInFlexible: e.target.checked });
  };

  const handleReservationSpanChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const span = e.target.value as ReservationSpan;
    updateDateInfo({ reservationSpan: span });

    // Parse weeks number from span
    if (span !== 'Other (wks)') {
      const weeks = parseInt(span.split(' ')[0]);
      updateDateInfo({ weeksNumber: weeks, customWeeks: null });
    }
  };

  const handleCustomWeeksChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const weeks = parseInt(e.target.value) || 0;
    updateDateInfo({ customWeeks: weeks, weeksNumber: weeks });
  };

  // Calculate end date
  useEffect(() => {
    if (dateInfo.moveInDate && dateInfo.weeksNumber) {
      const daysInSpan = dateInfo.weeksNumber * 7;
      const endDate = new Date(dateInfo.moveInDate);
      endDate.setDate(endDate.getDate() + daysInSpan);
      // End date is set in store via updateDateInfo effect
    }
  }, [dateInfo.moveInDate, dateInfo.weeksNumber]);

  // Check if weeks are within valid range
  const isWeeksValid = dateInfo.weeksNumber >= listing.minWeeks && dateInfo.weeksNumber <= listing.maxWeeks;
  const showWeeksWarning = dateInfo.weeksNumber > 0 && !isWeeksValid;

  // Format date for input
  const formatDateForInput = (date: Date | null): string => {
    if (!date) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Get today's date for min attribute
  const today = formatDateForInput(new Date());

  return (
    <div className="step-3-date-time">
      <h2 className="step-title">Select Move-in Date & Duration</h2>
      <p className="step-description">
        Choose your preferred move-in date and reservation length
      </p>

      {/* Move-in Date Selection */}
      <div className="form-group">
        <label htmlFor="moveInDate" className="form-label">
          Move-in Date <span className="required">*</span>
        </label>
        <input
          type="date"
          id="moveInDate"
          className="form-date-input"
          value={formatDateForInput(dateInfo.moveInDate)}
          onChange={handleMoveInDateChange}
          min={today}
          required
        />
        <p className="field-help">Select your approximate move-in date</p>
      </div>

      {/* Move-in Flexibility */}
      <div className="form-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={dateInfo.moveInFlexible}
            onChange={handleFlexibilityChange}
            className="form-checkbox"
          />
          <span className="checkbox-text">My move-in date is flexible</span>
        </label>
      </div>

      {/* Reservation Span */}
      <div className="form-group">
        <label htmlFor="reservationSpan" className="form-label">
          Reservation Length <span className="required">*</span>
        </label>
        <select
          id="reservationSpan"
          className="form-select"
          value={dateInfo.reservationSpan}
          onChange={handleReservationSpanChange}
          required
        >
          <option value="">Select duration...</option>
          {reservationSpanOptions.map((span) => (
            <option key={span} value={span}>
              {span}
            </option>
          ))}
        </select>
        <p className="field-help">
          This host accepts: {listing.minWeeks}-{listing.maxWeeks} weeks
        </p>
      </div>

      {/* Custom Weeks Input (Conditional) */}
      {dateInfo.reservationSpan === 'Other (wks)' && (
        <div className="form-group conditional-field">
          <label htmlFor="customWeeks" className="form-label">
            Number of Weeks <span className="required">*</span>
          </label>
          <input
            type="number"
            id="customWeeks"
            className="form-number-input"
            value={dateInfo.customWeeks || ''}
            onChange={handleCustomWeeksChange}
            min={listing.minWeeks}
            max={listing.maxWeeks}
            placeholder={`Enter ${listing.minWeeks}-${listing.maxWeeks} weeks`}
            required
          />
        </div>
      )}

      {/* Weeks Warning */}
      {showWeeksWarning && (
        <div className="warning-message">
          <span className="warning-icon">⚠️</span>
          <div className="warning-content">
            <strong>Duration Notice:</strong>
            {dateInfo.weeksNumber < listing.minWeeks && (
              <p>This host requires a minimum of {listing.minWeeks} weeks.</p>
            )}
            {dateInfo.weeksNumber > listing.maxWeeks && (
              <p>This host allows a maximum of {listing.maxWeeks} weeks.</p>
            )}
            <p>Please adjust your reservation length or contact the host to discuss.</p>
          </div>
        </div>
      )}

      {/* End Date Display */}
      {calculations.endDate && dateInfo.weeksNumber > 0 && isWeeksValid && (
        <div className="info-display">
          <h4>Reservation Summary:</h4>
          <p>
            <strong>Move-in:</strong> {dateInfo.moveInDate?.toLocaleDateString()}
          </p>
          <p>
            <strong>Move-out:</strong> {calculations.endDate.toLocaleDateString()}
          </p>
          <p>
            <strong>Duration:</strong> {dateInfo.weeksNumber} weeks ({calculations.daysInSpanWeeks} days)
          </p>
        </div>
      )}

      {/* Blocked Dates Warning */}
      {listing.blockedDates.length > 0 && (
        <div className="info-message">
          <span className="info-icon">ℹ️</span>
          <div className="info-content">
            <strong>Note:</strong> This host has some blocked dates. Please verify your selected dates are available.
          </div>
        </div>
      )}
    </div>
  );
};
