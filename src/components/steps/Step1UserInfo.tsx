/**
 * Step 1: User Information Collection
 * Collects: Why you want space, About Me, Special Needs
 * Based on CONVERSION-GUIDE STEP-1-COMPLETE.md
 */

import React from 'react';
import { useProposalFlowStore } from '../../store/proposalFlowStore';

interface Step1UserInfoProps {
  userId: string;
  enableChatGPT?: boolean;
}

export const Step1UserInfo: React.FC<Step1UserInfoProps> = ({ userId, enableChatGPT = false }) => {
  const { userInfo, updateUserInfo } = useProposalFlowStore();

  const handleNeedForSpaceChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateUserInfo({ needForSpace: e.target.value });
  };

  const handleAboutMeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateUserInfo({ aboutMe: e.target.value });
  };

  const handleSpecialNeedsCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateUserInfo({ hasSpecialNeeds: e.target.checked });
  };

  const handleSpecialNeedsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateUserInfo({ specialNeeds: e.target.value });
  };

  return (
    <div className="step-1-user-info">
      <h2 className="step-title">Tell Us About Yourself</h2>
      <p className="step-description">
        Help the host understand your needs and background
      </p>

      {/* Why do you want this space? */}
      <div className="form-group">
        <label htmlFor="needForSpace" className="form-label">
          Why do you want this space? <span className="required">*</span>
        </label>
        <textarea
          id="needForSpace"
          className="form-textarea"
          placeholder="How will you use the space? What are your plans?"
          value={userInfo.needForSpace}
          onChange={handleNeedForSpaceChange}
          rows={4}
          required
        />
      </div>

      {/* About Me / Bio */}
      <div className="form-group">
        <label htmlFor="aboutMe" className="form-label">
          Tell us about yourself <span className="required">*</span>
        </label>
        <textarea
          id="aboutMe"
          className="form-textarea"
          placeholder="Please take a moment to share some details about yourself..."
          value={userInfo.aboutMe}
          onChange={handleAboutMeChange}
          rows={4}
          required
        />
      </div>

      {/* Special Needs Checkbox */}
      <div className="form-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={userInfo.hasSpecialNeeds}
            onChange={handleSpecialNeedsCheckbox}
            className="form-checkbox"
          />
          <span className="checkbox-text">Do you have any unique requirements?</span>
        </label>
      </div>

      {/* Special Needs Textarea (Conditional) */}
      {userInfo.hasSpecialNeeds && (
        <div className="form-group conditional-field">
          <label htmlFor="specialNeeds" className="form-label">
            Write your unique requirements <span className="required">*</span>
          </label>
          <textarea
            id="specialNeeds"
            className="form-textarea"
            placeholder="Any special needs, personal preference or specific requirements you may have"
            value={userInfo.specialNeeds}
            onChange={handleSpecialNeedsChange}
            rows={4}
            required
          />
        </div>
      )}

      {enableChatGPT && (
        <div className="ai-notice">
          <span className="ai-icon">✨</span>
          <span className="ai-text">AI enhancement available for text fields</span>
        </div>
      )}
    </div>
  );
};
