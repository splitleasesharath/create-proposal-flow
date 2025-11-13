/**
 * Step 4: Schedule Selection - Bubble.io Design
 * Days of the week selector with automatic check-in/check-out calculation
 * Mon, Tue, Wed selected = 2 nights (Mon night, Tue night), Check-in Mon, Check-out Wed
 */

import React, { useState, useEffect } from 'react';
import { useProposalFlowStore } from '../../store/proposalFlowStore';
import { DayOfWeek } from '../../types/proposalFlow.types';
import './Step4Schedule.css';

interface Step4ScheduleProps {
  listing: any;
}

const DAYS_OF_WEEK: DayOfWeek[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const Step4Schedule: React.FC<Step4ScheduleProps> = ({ listing }) => {
  const { scheduleInfo, dateInfo, updateScheduleInfo } = useProposalFlowStore();
  const [selectedDays, setSelectedDays] = useState<DayOfWeek[]>(scheduleInfo.daysOfWeekSelected || []);
  const [nightsConfirmed, setNightsConfirmed] = useState(false);
  const [checkoutConfirmed, setCheckoutConfirmed] = useState(false);

  // Calculate nights, check-in, and check-out automatically
  const calculateScheduleInfo = (days: DayOfWeek[]) => {
    if (days.length === 0) return null;

    // Sort days in week order
    const sortedDays = [...days].sort((a, b) =>
      DAYS_OF_WEEK.indexOf(a) - DAYS_OF_WEEK.indexOf(b)
    );

    // Check-in is first day, check-out is last day
    const checkInDay = sortedDays[0];
    const checkOutDay = sortedDays[sortedDays.length - 1];

    // Nights = number of days - 1 (gaps between days)
    const nightsPerWeek = sortedDays.length - 1;
    const totalNights = nightsPerWeek * (dateInfo.weeksNumber || 0);

    return {
      checkInDay,
      checkOutDay,
      nightsPerWeek,
      totalNights,
      sortedDays
    };
  };

  const scheduleCalc = calculateScheduleInfo(selectedDays);

  // Toggle day selection
  const toggleDay = (day: DayOfWeek) => {
    const newSelected = selectedDays.includes(day)
      ? selectedDays.filter(d => d !== day)
      : [...selectedDays, day];

    setSelectedDays(newSelected);
  };

  // Update store when selection changes
  useEffect(() => {
    if (scheduleCalc) {
      updateScheduleInfo({
        daysOfWeekSelected: selectedDays,
        nightsNumber: scheduleCalc.totalNights,
        weeksNumber: dateInfo.weeksNumber || 0,
        checkInDay: null, // We'll store as day name strings
        checkOutDay: null,
        nightsConfirmed: nightsConfirmed,
        checkoutConfirmed: checkoutConfirmed,
      });
    }
  }, [selectedDays, nightsConfirmed, checkoutConfirmed, dateInfo.weeksNumber]);

  const isContiguous = (days: DayOfWeek[]): boolean => {
    if (days.length < 2) return true;
    const indices = days.map(d => DAYS_OF_WEEK.indexOf(d)).sort((a, b) => a - b);
    for (let i = 0; i < indices.length - 1; i++) {
      if (indices[i + 1] - indices[i] !== 1) return false;
    }
    return true;
  };

  const allConfirmed = nightsConfirmed && checkoutConfirmed;
  const hasSelection = selectedDays.length >= 2; // Need at least 2 days for 1 night

  return (
    <div className="step-4-schedule-bubble">
      {/* Days of the Week Selection */}
      <div className="form-section">
        <label className="form-label">
          Days of the Week <span className="required">*</span>
        </label>
        <p className="help-text">Select the days you plan to stay each week</p>

        <div className="day-buttons-grid">
          {DAYS_OF_WEEK.map((day) => (
            <button
              key={day}
              type="button"
              className={`day-btn ${selectedDays.includes(day) ? 'selected' : ''}`}
              onClick={() => toggleDay(day)}
            >
              {day}
            </button>
          ))}
        </div>

        {scheduleCalc && scheduleCalc.nightsPerWeek >= 0 && (
          <p className="nights-indicator">
            {scheduleCalc.nightsPerWeek} night{scheduleCalc.nightsPerWeek !== 1 ? 's' : ''} per week selected
          </p>
        )}
      </div>

      {/* Reservation Summary */}
      {hasSelection && scheduleCalc && (
        <div className="reservation-summary">
          <h4 className="summary-title">Reservation Summary:</h4>
          <div className="summary-row">
            <span className="summary-label">Weekly pattern:</span>
            <span className="summary-value">{scheduleCalc.sortedDays.join(', ')}</span>
          </div>
          <div className="summary-row">
            <span className="summary-label">Nights per week:</span>
            <span className="summary-value">{scheduleCalc.nightsPerWeek}</span>
          </div>
          <div className="summary-row">
            <span className="summary-label">Total weeks:</span>
            <span className="summary-value">{dateInfo.weeksNumber || 0}</span>
          </div>
          <div className="summary-row">
            <span className="summary-label">Total nights:</span>
            <span className="summary-value">{scheduleCalc.totalNights}</span>
          </div>
        </div>
      )}


      {/* Confirmation Checkboxes */}
      {hasSelection && scheduleCalc && scheduleCalc.totalNights > 0 && (
        <div className="confirmation-box">
          <h4 className="confirmation-title">Confirmation Required:</h4>

          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={nightsConfirmed}
              onChange={(e) => setNightsConfirmed(e.target.checked)}
            />
            <span className="checkbox-label">
              I confirm I want {scheduleCalc.nightsPerWeek} night{scheduleCalc.nightsPerWeek !== 1 ? 's' : ''} per week ({scheduleCalc.totalNights} total nights)
            </span>
          </label>

          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={checkoutConfirmed}
              onChange={(e) => setCheckoutConfirmed(e.target.checked)}
            />
            <span className="checkbox-label">
              I confirm my checkout day selection
            </span>
          </label>
        </div>
      )}

      {/* How It Works Info */}
      <div className="info-box">
        <div className="info-icon">ℹ️</div>
        <div className="info-content">
          <strong>How it works:</strong>
          <p>
            Select the days you plan to stay each week throughout your reservation period.
            For example, if you select Mon, Wed, Fri and reserve for 4 weeks, you'll have
            8 total nights (2 nights × 4 weeks).
          </p>
        </div>
      </div>

      {!hasSelection && (
        <p className="error-message">Please select at least 2 days to create 1 night.</p>
      )}

      {hasSelection && !isContiguous(selectedDays) && (
        <p className="warning-message">
          Note: Your selected days are not consecutive. Make sure this matches your needs.
        </p>
      )}

      {hasSelection && !allConfirmed && (
        <p className="warning-message">
          Please confirm both selections to proceed.
        </p>
      )}
    </div>
  );
};
