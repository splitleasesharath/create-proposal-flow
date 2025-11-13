/**
 * PreviewApp - Test Environment
 * Test the ProposalFlow component with mock data
 */

import React, { useState } from 'react';
import { ProposalFlow } from './components/ProposalFlow';
import { Listing, User, Proposal } from './types/proposalFlow.types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './PreviewApp.css';

export const PreviewApp: React.FC = () => {
  const [isFlowOpen, setIsFlowOpen] = useState(false);
  const [submittedProposal, setSubmittedProposal] = useState<Proposal | null>(null);
  const [showDataSelector, setShowDataSelector] = useState(false);

  // Listing selection
  const [selectedListingId, setSelectedListingId] = useState<string>('listing-1');

  // Pre-fill reservation data
  const [moveInDate, setMoveInDate] = useState<Date>(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)); // 1 week from now
  const [reservationWeeks, setReservationWeeks] = useState<number>(8);
  const [selectedDays, setSelectedDays] = useState<string[]>(['Mon', 'Tue', 'Wed', 'Thu']);
  const [nightsPerWeek, setNightsPerWeek] = useState<number>(4);

  // Mock User
  const mockUser: User = {
    id: 'user-123',
    email: 'guest@example.com',
    name: 'John Doe',
    phone: '(555) 123-4567',
    needForSpace: '',
    aboutMe: '',
    specialNeeds: '',
    proposalsList: [],
  };

  // Mock Listings
  const mockListings: Record<string, Listing> = {
    'listing-1': {
      id: 'listing-1',
      title: 'Beautiful 2BR Apartment in Downtown',
      pricePerNight: 150,
      monthlyHostRate: 3000,
      minWeeks: 4,
      maxWeeks: 52,
      weeksOffered: ['4 weeks', '8 weeks', '12 weeks', '26 weeks', '52 weeks'],
      blockedDates: [],
      refundableDeposit: 900,
      maintenanceFee: 200,
      actualWeeklyMaintenanceFee: 50,
      nightly3NightRate: 160,
      nightly4NightRate: 150,
      nightly5NightRate: 140,
      nightly7NightRate: 130,
    },
    'listing-2': {
      id: 'listing-2',
      title: 'Cozy Studio Near University',
      pricePerNight: 100,
      monthlyHostRate: 2000,
      minWeeks: 4,
      maxWeeks: 26,
      weeksOffered: ['4 weeks', '8 weeks', '12 weeks', '26 weeks'],
      blockedDates: [],
      refundableDeposit: 600,
      maintenanceFee: 150,
      actualWeeklyMaintenanceFee: 37.50,
      nightly3NightRate: 110,
      nightly4NightRate: 100,
      nightly5NightRate: 95,
      nightly7NightRate: 90,
    },
    'listing-3': {
      id: 'listing-3',
      title: 'Luxury 3BR Penthouse with View',
      pricePerNight: 250,
      monthlyHostRate: 5000,
      minWeeks: 8,
      maxWeeks: 52,
      weeksOffered: ['8 weeks', '12 weeks', '26 weeks', '52 weeks'],
      blockedDates: [],
      refundableDeposit: 1500,
      maintenanceFee: 300,
      actualWeeklyMaintenanceFee: 75,
      nightly3NightRate: 270,
      nightly4NightRate: 250,
      nightly5NightRate: 240,
      nightly7NightRate: 220,
    },
  };

  const selectedListing = mockListings[selectedListingId];

  const handleOpenDataSelector = () => {
    setShowDataSelector(true);
    setSubmittedProposal(null);
  };

  const handleOpenFlow = () => {
    setShowDataSelector(false);
    setIsFlowOpen(true);
  };

  const handleCloseFlow = () => {
    setIsFlowOpen(false);
  };

  const handleSuccess = (proposal: Proposal) => {
    console.log('Proposal submitted:', proposal);
    setSubmittedProposal(proposal);
    setTimeout(() => {
      setIsFlowOpen(false);
    }, 2000);
  };

  return (
    <div className="preview-app">
      {/* Toast Notifications */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />

      {/* Header */}
      <header className="preview-header">
        <h1>Create Proposal Flow - Test Environment</h1>
        <p className="preview-subtitle">
          Complete 4-step proposal wizard converted from Bubble.io to React
        </p>
        <div className="preview-badges">
          <span className="badge badge-react">React 18</span>
          <span className="badge badge-ts">TypeScript</span>
          <span className="badge badge-zustand">Zustand</span>
          <span className="badge badge-vite">Vite</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="preview-content">
        {/* Component Info */}
        <section className="info-section">
          <h2>Component Overview</h2>
          <p className="info-description">
            This component replicates the complete create-proposal-flow from Bubble.io,
            featuring a 4-step wizard with edit functionality, state management, validation,
            and real-time calculations.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📝</div>
              <h3>Step 1</h3>
              <p>User Info Collection</p>
              <small>Why you want space, about me, special needs</small>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Step 2</h3>
              <p>Review & Submit</p>
              <small>Review details with edit buttons, then submit</small>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h3>Step 3</h3>
              <p>Date/Span Editor</p>
              <small>Edit move-in date and reservation length</small>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🗓️</div>
              <h3>Step 4</h3>
              <p>Schedule Editor</p>
              <small>Edit weekly pattern and check-in/out days</small>
            </div>
          </div>
        </section>

        {/* Listing Selection */}
        <section className="listing-selection-section">
          <h2>Select Listing</h2>
          <div className="listing-selector-container">
            <label htmlFor="listing-select" className="listing-label">Choose a listing to create proposal for:</label>
            <select
              id="listing-select"
              className="listing-dropdown"
              value={selectedListingId}
              onChange={(e) => setSelectedListingId(e.target.value)}
            >
              {Object.entries(mockListings).map(([id, listing]) => (
                <option key={id} value={id}>
                  {listing.title} - ${listing.pricePerNight}/night
                </option>
              ))}
            </select>
          </div>

          <div className="selected-listing-details">
            <h3>Selected Listing Details</h3>
            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">Price/Night:</span>
                <span className="detail-value">${selectedListing.pricePerNight}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Monthly Rate:</span>
                <span className="detail-value">${selectedListing.monthlyHostRate}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Min Weeks:</span>
                <span className="detail-value">{selectedListing.minWeeks}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Max Weeks:</span>
                <span className="detail-value">{selectedListing.maxWeeks}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Deposit:</span>
                <span className="detail-value">${selectedListing.refundableDeposit}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Maintenance Fee:</span>
                <span className="detail-value">${selectedListing.maintenanceFee}/4wks</span>
              </div>
            </div>
          </div>
        </section>

        {/* Test Data */}
        <section className="mock-data-section">
          <h2>Mock User Data</h2>
          <div className="data-card">
            <div className="data-details">
              <div className="data-row">
                <span className="data-label">Name:</span>
                <span className="data-value">{mockUser.name}</span>
              </div>
              <div className="data-row">
                <span className="data-label">Email:</span>
                <span className="data-value">{mockUser.email}</span>
              </div>
              <div className="data-row">
                <span className="data-label">Proposals:</span>
                <span className="data-value">{mockUser.proposalsList?.length || 0}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Action Section */}
        <section className="action-section">
          <h2>Test the Component</h2>
          <p>First, configure your reservation details, then open the proposal flow</p>
          <button className="open-flow-btn" onClick={handleOpenDataSelector}>
            ⚙️ Configure Reservation Data
          </button>
        </section>

        {/* Result Display */}
        {submittedProposal && (
          <section className="result-section">
            <h2>✅ Proposal Submitted Successfully!</h2>
            <div className="result-card">
              <div className="result-header">
                <h3>Proposal ID: {submittedProposal.id}</h3>
                <p className="result-status">Status: {submittedProposal.status}</p>
              </div>
              <div className="result-details">
                <div className="result-row">
                  <span className="result-label">Weeks:</span>
                  <span className="result-value">{submittedProposal.weeksNumber}</span>
                </div>
                <div className="result-row">
                  <span className="result-label">Total Nights:</span>
                  <span className="result-value">{submittedProposal.nightsNumber}</span>
                </div>
                <div className="result-row">
                  <span className="result-label">Weekly Pattern:</span>
                  <span className="result-value">{submittedProposal.daysOfWeek.join(', ')}</span>
                </div>
                <div className="result-row">
                  <span className="result-label">Total Price:</span>
                  <span className="result-value price">${submittedProposal.totalPrice.toFixed(2)}</span>
                </div>
              </div>
              <button className="test-again-btn" onClick={handleOpenFlow}>
                Test Again
              </button>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="preview-footer">
        <p>Split Lease - Create Proposal Flow Component</p>
        <p className="copyright">Generated with Claude Code | {new Date().getFullYear()}</p>
      </footer>

      {/* Data Selector Modal */}
      {showDataSelector && (
        <div className="data-selector-overlay">
          <div className="data-selector-modal">
            <div className="modal-header">
              <h2>Configure Reservation Data</h2>
              <button className="close-button" onClick={() => setShowDataSelector(false)}>×</button>
            </div>

            <div className="modal-content">
              <div className="form-group">
                <label>Move-in Date:</label>
                <input
                  type="date"
                  value={moveInDate.toISOString().split('T')[0]}
                  onChange={(e) => setMoveInDate(new Date(e.target.value))}
                />
              </div>

              <div className="form-group">
                <label>Reservation Length (weeks):</label>
                <input
                  type="number"
                  min="4"
                  max="52"
                  value={reservationWeeks}
                  onChange={(e) => setReservationWeeks(Number(e.target.value))}
                />
              </div>

              <div className="form-group">
                <label>Select Nights per Week:</label>
                <div className="day-selector">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <label key={day} className="day-checkbox">
                      <input
                        type="checkbox"
                        checked={selectedDays.includes(day)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedDays([...selectedDays, day]);
                            setNightsPerWeek(selectedDays.length + 1);
                          } else {
                            setSelectedDays(selectedDays.filter(d => d !== day));
                            setNightsPerWeek(selectedDays.length - 1);
                          }
                        }}
                      />
                      {day}
                    </label>
                  ))}
                </div>
                <p className="helper-text">Nights per week: {nightsPerWeek}</p>
              </div>

              <div className="modal-actions">
                <button className="btn btn-secondary" onClick={() => setShowDataSelector(false)}>
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={handleOpenFlow}>
                  Open Proposal Flow →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* The Proposal Flow Component */}
      {isFlowOpen && (
        <ProposalFlow
          userId={mockUser.id}
          listingId={selectedListing.id}
          listing={selectedListing}
          user={mockUser}
          onClose={handleCloseFlow}
          onSuccess={handleSuccess}
          enableChatGPT={false}
          initialData={{
            moveInDate,
            reservationWeeks,
            selectedDays,
            nightsPerWeek,
            totalNights: reservationWeeks * nightsPerWeek,
          }}
        />
      )}
    </div>
  );
};
