/**
 * Step 2: Personal Information
 * Collects information about the user and their housing needs
 * Includes optional ChatGPT integration from Bubble workflow
 */

import React, { useState } from 'react';
import './StepStyles.css';

interface Step2Props {
  aboutYourself: string;
  needForSpace: string;
  specialNeeds: string;
  onAboutYourselfChange: (value: string) => void;
  onNeedForSpaceChange: (value: string) => void;
  onSpecialNeedsChange: (value: string) => void;
  enableChatGPT?: boolean;
}

export const Step2PersonalInfo: React.FC<Step2Props> = ({
  aboutYourself,
  needForSpace,
  specialNeeds,
  onAboutYourselfChange,
  onNeedForSpaceChange,
  onSpecialNeedsChange,
  enableChatGPT = false,
}) => {
  const [charCounts, setCharCounts] = useState({
    about: aboutYourself.length,
    need: needForSpace.length,
    special: specialNeeds.length,
  });

  const handleAboutChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    onAboutYourselfChange(value);
    setCharCounts((prev) => ({ ...prev, about: value.length }));
  };

  const handleNeedChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    onNeedForSpaceChange(value);
    setCharCounts((prev) => ({ ...prev, need: value.length }));
  };

  const handleSpecialChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    onSpecialNeedsChange(value);
    setCharCounts((prev) => ({ ...prev, special: value.length }));
  };

  return (
    <div className="step-container">
      <div className="step-header">
        <h3 className="step-title">Tell Us About Yourself</h3>
        <p className="step-description">
          Help the property owner understand who you are and your housing needs.
        </p>
      </div>

      <div className="form-section">
        {/* About Yourself */}
        <div className="form-group">
          <label htmlFor="about-yourself" className="form-label">
            About Yourself <span className="required">*</span>
          </label>
          <p className="field-hint">
            Share a bit about yourself, your background, and what you do.
          </p>
          <textarea
            id="about-yourself"
            className="form-textarea"
            rows={4}
            value={aboutYourself}
            onChange={handleAboutChange}
            placeholder="Tell us about yourself, your occupation, hobbies, lifestyle, etc."
            required
            minLength={10}
          />
          <div className="char-count">
            {charCounts.about} characters {charCounts.about < 10 && '(min: 10)'}
          </div>
        </div>

        {/* Need for Space */}
        <div className="form-group">
          <label htmlFor="need-for-space" className="form-label">
            Why Do You Need This Space? <span className="required">*</span>
          </label>
          <p className="field-hint">
            Explain your reasons for seeking this rental and your housing situation.
          </p>
          <textarea
            id="need-for-space"
            className="form-textarea"
            rows={4}
            value={needForSpace}
            onChange={handleNeedChange}
            placeholder="Describe why you're looking for this space, your current situation, and what you're looking for in a home."
            required
            minLength={10}
          />
          <div className="char-count">
            {charCounts.need} characters {charCounts.need < 10 && '(min: 10)'}
          </div>
        </div>

        {/* Special Needs (Optional) */}
        <div className="form-group">
          <label htmlFor="special-needs" className="form-label">
            Special Needs or Requests <span className="optional">(Optional)</span>
          </label>
          <p className="field-hint">
            Any special requirements, accommodations, or additional information you'd like to share.
          </p>
          <textarea
            id="special-needs"
            className="form-textarea"
            rows={3}
            value={specialNeeds}
            onChange={handleSpecialChange}
            placeholder="e.g., accessibility needs, pet accommodations, specific amenities, etc."
          />
          <div className="char-count">{charCounts.special} characters</div>
        </div>

        {enableChatGPT && (
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
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            <div>
              <p className="info-title">Writing Tip</p>
              <p className="info-text">
                Be honest and authentic. Property owners appreciate genuine, thoughtful responses
                that help them understand you as a potential tenant.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="step-footer-info">
        <p>
          <strong>Next:</strong> Specify how long you'd like to rent the property.
        </p>
      </div>
    </div>
  );
};
