/**
 * Step 4: Schedule Selection (Weekly Pattern & Calendar)
 * Selects: Check-in/check-out days, weekly pattern, nights per week
 * Based on CONVERSION-GUIDE STEP-4-COMPLETE.md
 *
 * Note: This is a simplified version. The full Bubble implementation uses
 * a complex reusable "clone2-listing schedule selector" component.
 */

import React, { useState, useEffect } from 'react';
import { useProposalFlowStore } from '../../store/proposalFlowStore';
import { DayOfWeek } from '../../types/proposalFlow.types';

interface Step4ScheduleProps {
  listing: { pricePerNight: number; monthlyHostRate: number };
}

export const Step4Schedule: React.FC<Step4ScheduleProps> = ({ listing }) => {
  const { scheduleInfo, dateInfo, updateScheduleInfo, calculatePricing } = useProposalFlowStore();
  const [selectedDaysOfWeek, setSelectedDaysOfWeek] = useState<DayOfWeek[]>(scheduleInfo.daysOfWeekSelected);

  const daysOfWeek: DayOfWeek[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Handle day of week selection
  const toggleDayOfWeek = (day: DayOfWeek) => {
    setSelectedDaysOfWeek((prev) => {
      if (prev.includes(day)) {
        return prev.filter((d) => d !== day);
      } else {
        return [...prev, day].sort((a, b) => daysOfWeek.indexOf(a) - daysOfWeek.indexOf(b));
      }
    });
  };

  // Calculate nights per week based on selected days
  useEffect(() => {
    const nightsPerWeek = selectedDaysOfWeek.length;
    const totalNights = nightsPerWeek * dateInfo.weeksNumber;

    updateScheduleInfo({
      daysOfWeekSelected: selectedDaysOfWeek,
      nightsNumber: totalNights,
      weeksNumber: dateInfo.weeksNumber,
    });

    // Trigger pricing calculation
    if (totalNights > 0) {
      calculatePricing(listing);
    }
  }, [selectedDaysOfWeek, dateInfo.weeksNumber]);

  // Handle check-in day selection
  const handleCheckInDay = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const dayName = e.target.value as DayOfWeek;
    // Create a mock date (you'd calculate the actual date in a full implementation)
    updateScheduleInfo({ checkInDay: new Date() });
  };

  // Handle check-out day selection
  const handleCheckOutDay = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const dayName = e.target.value as DayOfWeek;
    // Create a mock date (you'd calculate the actual date in a full implementation)
    updateScheduleInfo({ checkOutDay: new Date() });
  };

  // Handle confirmation checkboxes
  const handleNightsConfirmation = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateScheduleInfo({ nightsConfirmed: e.target.checked });
  };

  const handleCheckoutConfirmation = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateScheduleInfo({ checkoutConfirmed: e.target.checked });
  };

  const allConfirmed = scheduleInfo.nightsConfirmed && scheduleInfo.checkoutConfirmed;
  const hasSelectedDays = selectedDaysOfWeek.length > 0;

  return (
    <div className="step-4-schedule">
      <h2 className="step-title">Select Your Weekly Schedule</h2>
      <p className="step-description">
        Choose which days of the week you'll stay at the property
      </p>

      {/* Weekly Pattern Selection */}
      <div className="form-group">
        <label className="form-label">
          Days of the Week <span className="required">*</span>
        </label>
        <p className="field-help">Select the days you plan to stay each week</p>

        <div className="days-selector">
          {daysOfWeek.map((day) => (
            <button
              key={day}
              type="button"
              className={`day-button ${selectedDaysOfWeek.includes(day) ? 'selected' : ''}`}
              onClick={() => toggleDayOfWeek(day)}
            >
              {day}
            </button>
          ))}
        </div>

        {hasSelectedDays && (
          <p className="selection-summary">
            {selectedDaysOfWeek.length} night{selectedDaysOfWeek.length !== 1 ? 's' : ''} per week selected
          </p>
        )}
      </div>

      {/* Nights Summary */}
      {hasSelectedDays && (
        <div className="nights-summary">
          <h4>Reservation Summary:</h4>
          <p>
            <strong>Weekly pattern:</strong> {selectedDaysOfWeek.join(', ')}
          </p>
          <p>
            <strong>Nights per week:</strong> {selectedDaysOfWeek.length}
          </p>
          <p>
            <strong>Total weeks:</strong> {scheduleInfo.weeksNumber}
          </p>
          <p>
            <strong>Total nights:</strong> {scheduleInfo.nightsNumber}
          </p>
        </div>
      )}

      {/* Check-in/Check-out Day Selection */}
      {hasSelectedDays && (
        <>
          <div className="form-group">
            <label htmlFor="checkInDay" className="form-label">
              Preferred Check-in Day <span className="required">*</span>
            </label>
            <select
              id="checkInDay"
              className="form-select"
              onChange={handleCheckInDay}
              required
            >
              <option value="">Select check-in day...</option>
              {selectedDaysOfWeek.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="checkOutDay" className="form-label">
              Preferred Check-out Day <span className="required">*</span>
            </label>
            <select
              id="checkOutDay"
              className="form-select"
              onChange={handleCheckOutDay}
              required
            >
              <option value="">Select check-out day...</option>
              {selectedDaysOfWeek.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
        </>
      )}

      {/* Confirmation Checkboxes */}
      {hasSelectedDays && scheduleInfo.nightsNumber > 0 && (
        <div className="confirmation-section">
          <h4>Confirmation Required:</h4>

          <div className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={scheduleInfo.nightsConfirmed}
                onChange={handleNightsConfirmation}
                className="form-checkbox"
              />
              <span className="checkbox-text">
                I confirm I want {selectedDaysOfWeek.length} night{selectedDaysOfWeek.length !== 1 ? 's' : ''} per week ({scheduleInfo.nightsNumber} total nights)
              </span>
            </label>
          </div>

          <div className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={scheduleInfo.checkoutConfirmed}
                onChange={handleCheckoutConfirmation}
                className="form-checkbox"
              />
              <span className="checkbox-text">
                I confirm my checkout day selection
              </span>
            </label>
          </div>

          {!allConfirmed && (
            <p className="warning-text">
              Please confirm both your night selection and checkout day to proceed.
            </p>
          )}
        </div>
      )}

      {/* Help Text */}
      <div className="info-message">
        <span className="info-icon">ℹ️</span>
        <div className="info-content">
          <strong>How it works:</strong> Select the days you plan to stay each week throughout your reservation period.
          For example, if you select Mon, Wed, Fri and reserve for 4 weeks, you'll have 12 total nights (3 nights × 4 weeks).
        </div>
      </div>
    </div>
  );
};
