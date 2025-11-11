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

  // Mock Listing
  const mockListing: Listing = {
    id: 'listing-456',
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
  };

  const handleOpenFlow = () => {
    setIsFlowOpen(true);
    setSubmittedProposal(null);
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
          Complete 5-step proposal wizard converted from Bubble.io to React
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
            featuring a non-linear 5-step wizard with state management, validation,
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
              <p>Price Breakdown</p>
              <small>Complete reservation details and pricing</small>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h3>Step 3</h3>
              <p>Date Selection</p>
              <small>Move-in date and reservation length</small>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🗓️</div>
              <h3>Step 4</h3>
              <p>Schedule Selection</p>
              <small>Weekly pattern and check-in/out days</small>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✅</div>
              <h3>Step 5</h3>
              <p>Final Confirmation</p>
              <small>Review and submit proposal</small>
            </div>
          </div>
        </section>

        {/* Test Data */}
        <section className="mock-data-section">
          <h2>Test Data</h2>
          <div className="data-grid">
            <div className="data-card">
              <h3>Mock User</h3>
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

            <div className="data-card">
              <h3>Mock Listing</h3>
              <div className="data-details">
                <div className="data-row">
                  <span className="data-label">Title:</span>
                  <span className="data-value">{mockListing.title}</span>
                </div>
                <div className="data-row">
                  <span className="data-label">Price/Night:</span>
                  <span className="data-value">${mockListing.pricePerNight}</span>
                </div>
                <div className="data-row">
                  <span className="data-label">Min Weeks:</span>
                  <span className="data-value">{mockListing.minWeeks}</span>
                </div>
                <div className="data-row">
                  <span className="data-label">Max Weeks:</span>
                  <span className="data-value">{mockListing.maxWeeks}</span>
                </div>
                <div className="data-row">
                  <span className="data-label">Deposit:</span>
                  <span className="data-value">${mockListing.refundableDeposit}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Action Section */}
        <section className="action-section">
          <h2>Test the Component</h2>
          <p>Click below to open the proposal flow and test all 5 steps</p>
          <button className="open-flow-btn" onClick={handleOpenFlow}>
            🚀 Open Create Proposal Flow
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

      {/* The Proposal Flow Component */}
      {isFlowOpen && (
        <ProposalFlow
          userId={mockUser.id}
          listingId={mockListing.id}
          listing={mockListing}
          user={mockUser}
          onClose={handleCloseFlow}
          onSuccess={handleSuccess}
          enableChatGPT={false}
        />
      )}
    </div>
  );
};
