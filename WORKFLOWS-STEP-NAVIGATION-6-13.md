# Proposal Step Navigations/Actions Workflows (6-13)

**Category**: Proposal Step Navigations /Actions
**Total Workflows in Category**: 13
**Documented**: Workflows 6-13 (8 workflows)
**Source URL**: https://bubble.io/page?id=upgradefromstr&tab=Workflow&name=%E2%99%BB%EF%B8%8F%F0%9F%92%A5create-proposal-flow&version=live&type=custom

---

## Workflow 6: Go back when user is at step 5

**Name**: 🔘Go back when user is at step 5
**Status**: Enabled
**Screenshot**: `workflow-6-go-back-step-5-overview.png`, `workflow-6-action-details.png`

### Trigger
- **Type**: Element Event
- **Element**: B: Go back a step is clicked
- **Condition**: Only when G: Create proposal flow's step is 5

### Actions

#### Step 1: Set state as step 3
- **Action Type**: Element > Set State
- **Element**: G: Create proposal flow
- **Custom state**: step
- **Value**: 3
- **Only when**: Click

---

## Workflow 7: Next Button is clicked (next on step 4)

**Name**: 🔘Next Button is clicked (next on step 4)
**Status**: Enabled
**Screenshot**: `workflow-7-next-button-step-4-overview.png`, `workflow-7-action-1-details.png`, `workflow-7-action-2-details.png`, `workflow-7-action-3-details.png`

### Trigger
- **Type**: Element Event
- **Element**: B: Submit Proposal is clicked
- **Condition**: Only when G: Create proposal flow's step is 4 and C: nights and days selected confirm is checked or C: *Check out day is checked

### Actions

#### Step 1: Go to confirmation step
- **Action Type**: Element > Set State
- **Element**: G: Create proposal flow
- **Custom state**: step
- **Value**: 2
- **Only when**: Click

#### Step 2: Set state days selected of ♻️💥create-proposal-flow
- **Action Type**: Element > Set State (Multiple states)
- **Element**: ♻️💥create-proposal-flow
- **States being set**:
  1. **days selected**: clone2-listing schedule selector for Step4's Selected Days (days)
  2. **nights selected**: clone2-listing schedule selector for Step4's Selected Nights (nights)
  3. **check-in day**: clone2-listing schedule selector for Step4's Selected Check In Day (days)
  4. **check-out day**: clone2-listing schedule selector for Step4's Selected Check Out Day (days)
- **Only when**: Click

#### Step 3: Scroll to T: Create Proposal
- **Action Type**: Element > Scroll to
- **Element**: T: Create Proposal
- **Offset (pixels)**: 0
- **Only when**: Click

---

## Workflow 8: Next button is clicked at step 1

**Name**: 🔘Next button is clicked at step 1
**Status**: Enabled
**Screenshot**: `workflow-8-next-button-step-1-overview.png`

### Trigger
- **Type**: Element Event
- **Element**: B: Submit Proposal is clicked
- **Condition**: Only when G: Create proposal flow's step is 1

### Actions

This workflow contains 12 steps that handle validation and state management when moving from step 1. Key actions include:

#### Step 1: Move to step 2 when all requirements are filled and checkboxes are marked
- **Condition**: Only when G: Create proposal flow's step is 1

#### Step 2: Scroll to T: Create Proposal

#### Step 3: Trigger Alerts general WARNING add about yourself
- **Condition**: Only when G: Create proposal flow's step is 1 and MI: About yourself's value:number of characters < 30

#### Step 4: Trigger Alerts general WARNING add need this space
- **Condition**: Only when G: Create proposal flow's step is 1 and MI: Need for space's value:number of characters < 30

#### Step 5: Trigger Alerts general WARNING about special requirements
- **Condition**: Only when G: Create proposal flow's step is 1 and MI: Special Needs's value:number of characters < 30 and C: special needs is checked

#### Step 6: Schedule API Workflow core-update-user-profile-completeness BIO
- **Condition**: Only when ♻️💥create-proposal-flow's guest user's Tasks Completed doesn't contain bio

#### Step 7: Schedule API Workflow core-update-user-profile-completeness NEED FOR SPACE
- **Condition**: Only when ♻️💥create-proposal-flow's guest user's Tasks Completed doesn't contain need for space

#### Step 8: Schedule API Workflow core-update-user-profile-completeness SPECIAL NEEDS
- **Condition**: Only when ♻️💥create-proposal-flow's guest user's Tasks Completed doesn't contain special needs and C: special needs is checked

#### Step 9: Add a pause before next action

#### Step 10: Terminate this workflow

#### Step 11: Show GF: Advise to Change
- **Condition**: Only when GF: Advise to Change's already closed? is no and clone2-listing schedule selector for Step4's Selected Check In Day (days)'s First 3 letters is not D: Move-in bid date 1's value:formatted as Tue and clone2-listing schedule selector for Step4's Selected Nights (nights):count is not 7

#### Step 12: Animate GF: Advise to Change
- **Condition**: Only when GF: Advise to Change's already closed? is no and clone2-listing schedule selector for Step4's Selected Check In Day (days)'s First 3 letters is not D: Move-in bid date 1's value:formatted as Tue and clone2-listing schedule selector for Step4's Selected Nights (nights):count is not 7

---

## Workflow 9: Next button is clicked at step 3 and enter weeks number is empty

**Name**: 🔘Next button is clicked at step 3 and enter weeks number is empty
**Status**: Enabled
**Screenshot**: `workflow-9-next-button-step-3-empty-weeks-overview.png`

### Trigger
- **Type**: Element Event
- **Element**: B: Submit Proposal is clicked
- **Condition**: Only when G: Create proposal flow's step is 3 and D: Reservation Span proposal flow's value is Other (wks) and IN: Enter # Weeks submit proposal flow's value is empty

### Actions

#### Step 1: Trigger Alerts general WARNING submit right number of weeks
- **Action Type**: Element > Trigger Event
- Displays a warning alert to the user prompting them to enter the number of weeks

---

## Workflow 10: Submit Proposal is clicked FINAL step PROPOSAL for the Listing already exists

**Name**: 🔘Submit Proposal is clicked FINAL step PROPOSAL for the Listing already exists
**Status**: Enabled
**Screenshot**: `workflow-10-submit-proposal-final-listing-exists-overview.png`

### Trigger
- **Type**: Element Event
- **Element**: B: Submit Proposal is clicked
- **Condition**: Only when G: Create proposal flow's step is 2 and G: Create proposal flow's isProposal is yes and ♻️💥create-proposal-flow's guest user's Proposals List:filtered's Listing contains Parent group's Listing

### Actions

#### Step 1: Trigger Alerts general INFORMATION system working
- **Action Type**: Element > Trigger Event
- Displays an informational alert notifying the user that a proposal for this listing already exists

**Note**: This workflow prevents duplicate proposals by checking if the user has already submitted a proposal for the selected listing.

---

## Workflow 11: Submit Proposal is clicked FINAL step SUGGESTED Proposal awaiting rental app

**Name**: 🔘Submit Proposal is clicked FINAL step SUGGESTED Proposal awaiting rental app
**Status**: DISABLED
**Screenshot**: `workflow-11-submit-proposal-suggested-awaiting-disabled-overview.png`

### Trigger
- **Type**: Element Event
- **Element**: B: Submit Proposal is clicked
- **Condition**: Only when G: Create proposal flow's step is 2 and G: Create proposal flow's isProposal is yes and ♻️💥create-proposal-flow's guest user's Proposals List:filtered's Listing doesn't contain Parent group's Listing and ♻️💥create-proposal-flow [not found: custom.status_of_the_proposal_] [not found: equals]

**Note**: Contains conditions referencing missing custom states (`custom.status_of_the_proposal_`), which is why this workflow is disabled.

### Actions

This workflow contains 17 steps that handle proposal creation for suggested proposals with "awaiting rental app" status:

#### Step 1: Set states creating proposal?... of ♻️💥create-proposal-flow

#### Step 2: Trigger Alerts general INFO system working

#### Step 3: Create Proposal on the backend
- **Condition**: Only when D: Reservation Span proposal flow's value is not Other (wks)

#### Step 4: Create Proposal on the backend when RESERVATION SPAN is OTHER
- **Condition**: Only when D: Reservation Span proposal flow's value is Other (wks)

#### Step 5: Show GF: Lottie animation Confetti

#### Step 6: Set state to SHOW confetti

#### Step 7: notify discrepancy on WFs prices and Pricing_list prices
- **Condition**: Only when Parent group's Listing's pricing_list's Nightly Price:item #clone2-listing schedule selector for Step4's Selected Nights (nights):count's num - clone2-listing schedule selector for Step4's Listing Nightly Price ^ 2 ^ 0.5 > 2 and Parent group's Listing's 💰Price Override is empty

#### Step 8: Add a pause before next action

#### Step 9: Trigger Alerts general SUCCESS first proposale notification
- **Condition**: Only when ♻️💥create-proposal-flow's guest user's Proposals List:filtered:count is 1

#### Step 10: Trigger Alerts general SUCCESS third proposale notification
- **Condition**: Only when ♻️💥create-proposal-flow's guest user's Proposals List:filtered:count is 3

#### Step 11: Add a pause before next action

#### Step 12: Set states creating proposal?... of ♻️💥create-proposal-flow

#### Step 13: Hide ♻️💥create-proposal-flow

#### Step 14: Set state SHOW CONFETTI back to NO (Hide it)

#### Step 15: Show P: Less than 3 proposals created
- **Condition**: Only when ♻️💥create-proposal-flow's guest user's Proposals List:count < 4 and ♻️💥create-proposal-flow [not found: custom.is_internal_usage__] [not found: is_false]

#### Step 16: Trigger Alerts general SUCCESS
- **Condition**: Only when ♻️💥create-proposal-flow's guest user's Proposals List:count ≥ 4 and This URL doesn't contain search and ♻️💥create-proposal-flow [not found: custom.is_internal_usage__] [not found: is_false]

#### Step 17: Trigger go to guest dashboard
- **Condition**: Only when ♻️💥create-proposal-flow's guest user's Proposals List:count ≥ 4 and This URL doesn't contain search and ♻️💥create-proposal-flow [not found: custom.is_internal_usage__] [not found: is_false]

---

## Workflow 12: Submit Proposal is clicked FINAL step SUGGESTED Proposal Pending confirmation

**Name**: 🔘Submit Proposal is clicked FINAL step SUGGESTED Proposal Pending confirmation
**Status**: DISABLED
**Screenshot**: `workflow-12-submit-proposal-suggested-pending-disabled-overview.png`

### Trigger
- **Type**: Element Event
- **Element**: B: Submit Proposal is clicked
- **Condition**: Only when G: Create proposal flow's step is 2 and G: Create proposal flow's isProposal is yes and ♻️💥create-proposal-flow's guest user's Proposals List:filtered's Listing doesn't contain Parent group's Listing and ♻️💥create-proposal-flow [not found: custom.status_of_the_proposal_] [not found: equals]

**Note**: Contains conditions referencing missing custom states (`custom.status_of_the_proposal_`), which is why this workflow is disabled. This workflow is nearly identical to Workflow 11 but handles the "Pending confirmation" status instead of "awaiting rental app" status.

### Actions

This workflow contains the same 17 steps as Workflow 11, handling proposal creation for suggested proposals with "Pending confirmation" status. See Workflow 11 for detailed step breakdown.

---

## Workflow 13: Submit Proposal is clicked FINAL step WITHOUT suggested statuses

**Name**: 🔘Submit Proposal is clicked FINAL step WITHOUT suggested statuses
**Status**: Enabled
**Screenshot**: `workflow-13-submit-proposal-final-without-suggested-overview.png`

### Trigger
- **Type**: Element Event
- **Element**: B: Submit Proposal is clicked
- **Condition**: Only when G: Create proposal flow's step is 2 and G: Create proposal flow's isProposal is yes and ♻️💥create-proposal-flow's guest user's Proposals List:filtered's Listing doesn't contain Parent group's Listing

**Note**: This is the active workflow for creating proposals when no suggested status conditions are met. It's nearly identical to Workflows 11 and 12 but without the disabled custom state conditions.

### Actions

This workflow contains 17 steps that handle the standard proposal creation flow:

#### Step 1: Set states creating proposal?... of ♻️💥create-proposal-flow

#### Step 2: Trigger Alerts general INFO system working

#### Step 3: Create Proposal on the backend
- **Condition**: Only when D: Reservation Span proposal flow's value is not Other (wks)

#### Step 4: Create Proposal on the backend when RESERVATION SPAN is OTHER
- **Condition**: Only when D: Reservation Span proposal flow's value is Other (wks)

#### Step 5: Show GF: Lottie animation Confetti

#### Step 6: Set state to SHOW confetti

#### Step 7: notify discrepancy on WFs prices and Pricing_list prices
- **Condition**: Only when Parent group's Listing's pricing_list's Nightly Price:item #clone2-listing schedule selector for Step4's Selected Nights (nights):count's num - clone2-listing schedule selector for Step4's Listing Nightly Price ^ 2 ^ 0.5 > 2 and Parent group's Listing's 💰Price Override is empty

#### Step 8: Add a pause before next action

#### Step 9: Trigger Alerts general SUCCESS first proposale notification
- **Condition**: Only when ♻️💥create-proposal-flow's guest user's Proposals List:filtered:count is 1

#### Step 10: Trigger Alerts general SUCCESS third proposale notification
- **Condition**: Only when ♻️💥create-proposal-flow's guest user's Proposals List:filtered:count is 3

#### Step 11: Add a pause before next action

#### Step 12: Set states creating proposal?... of ♻️💥create-proposal-flow

#### Step 13: Hide ♻️💥create-proposal-flow

#### Step 14: Set state SHOW CONFETTI back to NO (Hide it)

#### Step 15: Show P: Less than 3 proposals created
- **Condition**: Only when ♻️💥create-proposal-flow's guest user's Proposals List:count < 100

#### Step 16: Trigger Alerts general SUCCESS
- **Condition**: Only when ♻️💥create-proposal-flow's guest user's Proposals List:count ≥ 4 and This URL doesn't contain search

#### Step 17: Trigger go to guest dashboard
- **Condition**: Only when ♻️💥create-proposal-flow's guest user's Proposals List:count ≥ 4 and This URL doesn't contain search

**Notable Differences from Workflows 11 & 12**:
- Step 15: Condition changed to `< 100` instead of `< 4`, and removed `is_internal_usage__` check
- Steps 16-17: Removed `is_internal_usage__` condition checks

---

## Summary and Key Observations

### Navigation Patterns
- **Go Back**: Workflow 6 handles backward navigation from step 5 to step 3
- **Next Button**: Workflows 7, 8, 9 handle forward navigation with various validations
- **Submit**: Workflows 10-13 handle final submission with different conditions

### Proposal Creation Logic
The system has three proposal creation workflows:
1. **Workflow 10**: Prevents duplicate proposals (shows info alert)
2. **Workflows 11 & 12**: DISABLED - Were designed for suggested proposal statuses
3. **Workflow 13**: ACTIVE - Standard proposal creation without suggested statuses

### Validation Checks
- Step 1 (Workflow 8): Multiple text field length validations (minimum 30 characters)
- Step 3 (Workflow 9): Required weeks number validation
- Step 4 (Workflow 7): Date selection confirmation validation

### User Experience Enhancements
- Confetti animation on successful proposal creation
- Progressive milestone notifications (1st and 3rd proposals)
- Price discrepancy notifications
- Profile completeness tracking via API workflows

### Technical Notes
- Workflows 11 & 12 are disabled due to missing custom state definitions (`custom.status_of_the_proposal_`, `custom.is_internal_usage__`)
- Workflow 13 is the active fallback handling all standard proposal submissions
- The system tracks user progress through custom states on `G: Create proposal flow` and `♻️💥create-proposal-flow`

---

**Documentation Generated**: 2025-11-11
**Screenshots Location**: `.playwright-mcp/` directory
**Total Screenshots**: 13 files
