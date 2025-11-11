/**
 * Step 2: Reservation Details Breakdown
 * Display-only step showing pricing breakdown and reservation details
 * Based on CONVERSION-GUIDE STEP-2-COMPLETE.md
 */

import React from 'react';
import { useProposalFlowStore } from '../../store/proposalFlowStore';
import { format } from 'date-fns';

interface Step2BreakdownProps {
  onEditCheckIn: () => void;
  onEditCheckOut: () => void;
  onEditMoveIn: () => void;
  onEditReservationSpan: () => void;
}

export const Step2Breakdown: React.FC<Step2BreakdownProps> = ({
  onEditCheckIn,
  onEditCheckOut,
  onEditMoveIn,
  onEditReservationSpan,
}) => {
  const { dateInfo, scheduleInfo, pricing } = useProposalFlowStore();

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
    return format(date, 'MMM d, yyyy');
  };

  // Format day name
  const formatDayName = (date: Date | null): string => {
    if (!date) return 'Not selected';
    return format(date, 'EEE');
  };

  return (
    <div className="step-2-breakdown">
      <h2 className="step-title">Review Reservation Details</h2>
      <p className="step-description">
        Please review your reservation details and pricing breakdown
      </p>

      <div className="breakdown-container">
        {/* Reservation Details Section */}
        <div className="breakdown-section">
          <h3 className="section-title">Reservation Details</h3>

          <div className="detail-row">
            <span className="detail-label">Approx Move-in date:</span>
            <span className="detail-value">
              {formatDate(dateInfo.moveInDate)}
              <button className="edit-link" onClick={onEditMoveIn}>edit</button>
            </span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Check-in day:</span>
            <span className="detail-value">
              {formatDayName(scheduleInfo.checkInDay)}
              <button className="edit-link" onClick={onEditCheckIn}>edit</button>
            </span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Check-out day:</span>
            <span className="detail-value">
              {formatDayName(scheduleInfo.checkOutDay)}
              <button className="edit-link" onClick={onEditCheckOut}>edit</button>
            </span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Reservation span (weeks):</span>
            <span className="detail-value">
              {scheduleInfo.weeksNumber} weeks
              <button className="edit-link" onClick={onEditReservationSpan}>edit</button>
            </span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Weekly Pattern:</span>
            <span className="detail-value">
              {scheduleInfo.daysOfWeekSelected.join(', ') || 'Not selected'}
            </span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Actual Weeks Used:</span>
            <span className="detail-value">{scheduleInfo.weeksNumber} weeks</span>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="breakdown-section">
          <h3 className="section-title">Pricing Breakdown</h3>

          <div className="price-row">
            <span className="price-label">Price per night:</span>
            <span className="price-value">{formatCurrency(pricing.pricePerNight)}</span>
          </div>

          <div className="price-row">
            <span className="price-label">Number of reserved nights:</span>
            <span className="price-value">× {scheduleInfo.nightsNumber}</span>
          </div>

          <div className="price-row total-price">
            <span className="price-label">Total price for reservation:</span>
            <span className="price-value">{formatCurrency(pricing.totalPrice)}</span>
          </div>

          <div className="price-row">
            <span className="price-label">Price per 4 weeks:</span>
            <span className="price-value">{formatCurrency(pricing.pricePerFourWeeks)}</span>
          </div>

          <div className="divider"></div>

          <div className="price-row additional">
            <span className="price-label">Refundable Damage Deposit:</span>
            <span className="price-value">+ {formatCurrency(pricing.refundableDeposit)}</span>
          </div>

          <div className="price-row additional">
            <span className="price-label">Maintenance Fee (per 4 wks):</span>
            <span className="price-value">+ {formatCurrency(pricing.maintenanceFee)}</span>
          </div>

          <div className="divider"></div>

          <div className="price-row initial-payment">
            <span className="price-label">Initial payment total:</span>
            <span className="price-value">{formatCurrency(pricing.initialPayment)}</span>
          </div>

          <p className="payment-note">
            Ongoing cost for duration of stay at {formatCurrency(pricing.pricePerFourWeeks)} per 4 weeks
          </p>
        </div>
      </div>
    </div>
  );
};
