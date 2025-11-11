# Workflow Extraction: Proposal Step Navigations/Actions (1-5)

**Source:** Bubble.io - create-proposal-flow Custom Element
**URL:** https://bubble.io/page?id=upgradefromstr&tab=Workflow&name=%E2%99%BB%EF%B8%8F%F0%9F%92%A5create-proposal-flow&version=live&type=custom
**Category:** Proposal Step Navigations /Actions
**Extraction Date:** 2025-11-11

---

## WORKFLOW 1: B: Submit Proposal is clicked (Condition: step is 3)

### TRIGGER:
Element Event: B: Submit Proposal is clicked

### CONDITIONS:
```
Only when G: Create proposal flow's step is 3
```

### ACTIONS:

#### Step 1: Set states step... of G: Create proposal flow
- **Action Type:** Set State
- **Element:** G: Create proposal flow
- **Custom state:** step
- **Value:** 2
- **Only when:** Click

---

#### Step 2: Scroll to T: Create Proposal
- **Action Type:** Scroll to Element
- **Element:** T: Create Proposal
- **Offset (pixels):** 0
- **Only when:** Click

---

#### Step 3: set min nightly rate when nights selected = 7 & landlord listing
- **Action Type:** Set State
- **Element:** G: Create proposal flow
- **Custom state:** min nightly rate
- **Value:** Parent group's Listing's 💰Monthly Host Rate / 28 * 1.2
- **Only when:** Parent group's Listing's 💰Nightly Host Rate for 3 nights is empty and clone2-listing schedule selector for Step4's Selected Nights (nights):count is 7

---

#### Step 4: set min nightly rate when nights selected = 5 & landlord listing
- **Action Type:** Set State
- **Element:** G: Create proposal flow
- **Custom state:** min nightly rate
- **Value:** Parent group's Listing's 💰Monthly Host Rate / 28 * 1.2
- **Only when:** Parent group's Listing's 💰Nightly Host Rate for 3 nights is empty and clone2-listing schedule selector for Step4's Selected Nights (nights):count is 5

---

#### Step 5: set min nightly rate when nights selected = 4 & landlord listing
- **Action Type:** Set State
- **Element:** G: Create proposal flow
- **Custom state:** min nightly rate
- **Value:** Parent group's Listing's 💰Monthly Host Rate / 28 * 1.2
- **Only when:** Parent group's Listing's 💰Nightly Host Rate for 3 nights is empty and clone2-listing schedule selector for Step4's Selected Nights (nights):count is 4

---

#### Step 6: set min nightly rate when nights selected = 3 & landlord listing
- **Action Type:** Set State
- **Element:** G: Create proposal flow
- **Custom state:** min nightly rate
- **Value:** Parent group's Listing's 💰Monthly Host Rate / 28 * 1.2
- **Only when:** Parent group's Listing's 💰Nightly Host Rate for 3 nights is empty and clone2-listing schedule selector for Step4's Selected Nights (nights):count is 3

---

#### Step 7: set min nightly rate when nights selected = 2 & landlord listing
- **Action Type:** Set State
- **Element:** G: Create proposal flow
- **Custom state:** min nightly rate
- **Value:** Parent group's Listing's 💰Monthly Host Rate / 28 * 1.2
- **Only when:** Parent group's Listing's 💰Nightly Host Rate for 3 nights is empty and clone2-listing schedule selector for Step4's Selected Nights (nights):count is 2

---

#### Step 8: set nightly rate when host listing and less than 60 days
- **Action Type:** Set State
- **Element:** G: Create proposal flow
- **Custom state:** min nightly rate
- **Value:** Parent group's Listing's 💰Monthly Host Rate / 28 * 1.2
- **Only when:** D: Reservation Span proposal flow's value's Weeks in this Period * clone2-listing schedule selector for Step4's Selected Nights (nights):count < 61 and Parent group's Listing's 💰Nightly Host Rate for 3 nights is not empty

---

#### Step 9: Set state reservation span (weeks) of create-proposal-flow
- **Action Type:** Set State
- **Element:** ♻️💥create-proposal-flow
- **Custom state:** reservation span (weeks)
- **Value:** D: Reservation Span proposal flow's value
- **Nested State:**
  - **Custom state:** other reservation span weeks number
  - **Value:** G: Proposed Weeks proposal flow's number
- **Only when:** Click

---

## WORKFLOW 2: B: Submit Proposal is clicked (Condition: step is 5...)

### TRIGGER:
Element Event: B: Submit Proposal is clicked

### CONDITIONS:
```
Only when:
  - G: Create proposal flow's step is 5 AND
  - G: Create proposal flow's isProposal is yes AND
  - ♻️💥create-proposal-flow's guest user's Proposals List:filtered's Listing contains Parent group's Listing
```

### ACTIONS:

#### Step 1: Trigger Alerts general WARNING proposal already created
- **Action Type:** Trigger Custom Event
- **Custom event:** Alerts general
- **Parameters:**
  - **title:** You have already submitted a proposal.
  - **content:** Click
  - **time (ms):** Click
  - **alert type:** warning
  - **Show on Live?:** "yes"
- **Only when:** Click

---

## WORKFLOW 3: Go back when user is at step 2

### TRIGGER:
Element Event: B: Go back a step is clicked

### CONDITIONS:
```
Only when G: Create proposal flow's step is 2
```

### ACTIONS:

#### Step 1: Set step as 1
- **Action Type:** Set State
- **Element:** G: Create proposal flow
- **Custom state:** step
- **Value:** 1
- **Only when:** Click

---

#### Step 2: Show the element at step 1
- **Action Type:** Show Element
- **Element:** G: Create proposal flow
- **Only when:** Click

---

## WORKFLOW 4: Go back when user is at step 3

### TRIGGER:
Element Event: B: Go back a step is clicked

### CONDITIONS:
```
Only when G: Create proposal flow's step is 3
```

### ACTIONS:

#### Step 1: Reset data of Group step 4
- **Action Type:** Reset Data
- **Element:** G: step 4
- **Only when:** Click

---

#### Step 2: set step 2
- **Action Type:** Set State
- **Element:** G: Create proposal flow
- **Custom state:** step
- **Value:** 2
- **Only when:** Click

---

## WORKFLOW 5: Go back when user is at step 4

### TRIGGER:
Element Event: B: Go back a step is clicked

### CONDITIONS:
```
Only when G: Create proposal flow's step is 4
```

### ACTIONS:

#### Step 1: Get back to step 2, the reservation details form
- **Action Type:** Set State
- **Element:** G: Create proposal flow
- **Custom state:** step
- **Value:** 2
- **Only when:** Click

---

## Summary

### Workflow Patterns Observed:

1. **Submit Proposal Workflows (1-2):**
   - Navigate between steps with state management
   - Calculate dynamic pricing based on listing type and duration
   - Prevent duplicate proposals with conditional checks
   - Show user alerts for error states

2. **Go Back Workflows (3-5):**
   - Simple step decrement logic
   - Data cleanup when navigating backwards
   - State reset for specific form groups
   - Consistent pattern: set step value to previous step

### Key Elements Referenced:
- `G: Create proposal flow` - Main group state container
- `B: Submit Proposal` - Submit button
- `B: Go back a step` - Back navigation button
- `♻️💥create-proposal-flow` - Custom element wrapper
- `Parent group's Listing` - Listing data source

### State Variables:
- `step` - Current step number (1-5)
- `min nightly rate` - Calculated minimum rate
- `reservation span (weeks)` - Selected reservation period
- `other reservation span weeks number` - Alternative weeks input
- `isProposal` - Boolean flag for proposal vs application

### Screenshots Location:
All screenshots saved to: `.playwright-mcp/` directory
- workflow-1-submit-proposal-step3-overview.png
- workflow-1-step1-details.png
- workflow-1-step2-details.png
- workflow-1-step3-details.png
- workflow-1-step9-details.png
- workflow-2-submit-proposal-step5-overview.png
- workflow-2-step1-details.png
- workflow-3-go-back-step2-overview.png
- workflow-3-step1-details.png
- workflow-3-step2-details.png
- workflow-4-go-back-step3-overview.png
- workflow-4-step1-details.png
- workflow-4-step2-details.png
- workflow-5-go-back-step4-overview.png
- workflow-5-step1-details.png
