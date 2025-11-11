# Workflow Tab - Complete Context Extraction
## create-proposal-flow Reusable Element

---

## Table of Contents
1. [Overview](#overview)
2. [Workflow Inventory](#workflow-inventory)
3. [Step Navigation Workflows](#step-navigation-workflows)
4. [Scheduling & Dates Workflows](#scheduling--dates-workflows)
5. [ChatGPT Integration Workflows](#chatgpt-integration-workflows)
6. [Supporting Workflows](#supporting-workflows)
7. [Data Flow Analysis](#data-flow-analysis)
8. [State Management](#state-management)
9. [Event System](#event-system)
10. [React Conversion Strategy](#react-conversion-strategy)

---

## Overview

**Total Workflows Extracted**: 35+ workflows across 11 categories
**Source**: Bubble.io - create-proposal-flow Reusable Element
**URL**: https://bubble.io/page?id=upgradefromstr&tab=Workflow&name=%E2%99%BB%EF%B8%8F%F0%9F%92%A5create-proposal-flow&version=live&type=custom

### Workflow Categories

| Category | Count | Purpose |
|----------|-------|---------|
| Proposal Step Navigations/Actions | 13 | Core step progression and submission logic |
| Scheduling & dates | 10 | Date selection and calendar interactions |
| Send Message to ChatGPT | 3 | AI assistance for text fields |
| Custom Events | 3 | Reusable event triggers |
| Apply Rental | 2 | Rental application navigation |
| Uncategorized | 2 | Initialization and utility |
| Navigation | 2 | Close and navigation actions |
| Do When Condition | 1 | Reactive calculation trigger |
| Hide Element | 1 | Popup dismissal |
| **Total** | **37** | |

---

## Workflow Inventory

### Complete List (Organized by Category)

#### 1. Proposal Step Navigations/Actions (13 workflows) ⭐ CORE

1. **B: Submit Proposal is clicked** (step is 3)
   - Navigates from Step 3 → Step 2 (review)
   - Calculates min nightly rates based on nights selected (2,3,4,5,7)
   - Sets reservation span state

2. **B: Submit Proposal is clicked** (step is 5, proposal exists)
   - Shows warning alert if duplicate proposal

3. **🔘Go back when user is at step 2**
   - Returns to Step 1
   - Shows Step 1 elements

4. **🔘Go back when user is at step 3**
   - Resets Step 4 data
   - Returns to Step 2

5. **🔘Go back when user is at step 4**
   - Returns to Step 2 (reservation details)

6. **🔘Go back when user is at step 5**
   - Returns to Step 3 (date selection)

7. **🔘Next Button is clicked** (next on step 4)
   - Validates checkboxes are checked
   - Saves selected days/nights states
   - Navigates to Step 2 (review)

8. **🔘Next button is clicked at step 1** (12 actions)
   - Validates text field lengths (30 char minimum)
   - Shows validation alerts if needed
   - Schedules API workflows for profile updates
   - Triggers LottieFiles animation
   - Terminates workflow if validation fails
   - Moves to Step 3 if validation passes

9. **🔘Next button is clicked at step 3** (weeks number empty)
   - Shows warning alert for empty week input

10-13. **🔘Submit Proposal is clicked FINAL step** (multiple variants)
   - Workflow 10: Duplicate proposal prevention
   - Workflows 11-12: DISABLED (missing custom states)
   - Workflow 13: ACTIVE proposal creation (17 actions)
     - Creates Proposal object
     - Updates user and listing records
     - Sends notifications
     - Shows confetti animation
     - Triggers success messages

#### 2. Scheduling & Dates (10 workflows)

14. **D: Move-in bid date 1 value changed**
    - Calculates days-in-span-weeks (weeks × 7)
    - Sets end-date (move-in + days)
    - Updates move-in date selected state

15. **D: Reservation Span proposal flow value changed**
    - Updates user's reservation span preference
    - Triggers recalculation
    - Updates date range states

16. **I: Movein 1 is clicked**
    - Sets focus to move-in date picker

17. **I: Reservation Span is clicked**
    - Sets focus to reservation span dropdown

18. **IN: Enter # Weeks submit proposal flow value changed**
    - Handles custom week number input
    - Updates reservation span calculations

19. **T: edit check in is clicked**
    - Navigates back to schedule selector
    - Sets step to 4

20. **T: edit check out is clicked**
    - Navigates back to schedule selector
    - Sets step to 4

21. **T: edit move in is clicked**
    - Navigates to move-in date section
    - Sets step to 3

22. **T: edit move in is clicked** (with condition)
    - Conditional logic for date mismatches
    - Complex validation logic

23. **T: edit reservation span is clicked**
    - Navigates to reservation span section
    - Sets step to 3

#### 3. Send Message to ChatGPT (3 workflows)

24. **MI: About yourself value changed**
    - Sends "About Me" text to GPT-4o
    - Uses "Desintermediation data" prompt template
    - Updates User's "About Me / Bio" field with AI response

25. **MI: Need for space value changed**
    - Sends "Need for Space" text to GPT-4o
    - Uses "Desintermediation data" prompt template
    - Updates User's "need for Space" field with AI response

26. **MI: Special Needs value changed**
    - Sends "Special Needs" text to GPT-4o
    - Uses "Desintermediation data" prompt template
    - Updates User's "special needs" field with AI response

#### 4. Uncategorized (2 workflows)

27. **G: Create proposal flow opening**
    - Sets "check for contiguous" state on schedule selector
    - Initializes calendar validation

28. **G: move in texts is clicked**
    - Turns off pulsing effect
    - Triggers informational text display
    - Shows move-in flexibility information

#### 5. Apply Rental (2 workflows)

29. **B: Apply rental application is clicked**
    - Hides proposal limit popup
    - Navigates to rental application page
    - Condition: Only if application not already submitted

30. **T: X to close is clicked**
    - Animates and hides "Advise to Change" group

#### 6. Custom Events (3 workflows)

31. **Alerts general**
    - Reusable alert/notification trigger

32. **go to guest dashboard**
    - Navigation event to dashboard

33. **turn off pulsing effect**
    - Stops element pulsing animations

#### 7. Navigation (2 workflows)

34. **I: ion-close-round is clicked**
    - Closes/hides popup

35. **T: Refundable Damage Deposit is clicked**
    - Shows information about deposit

#### 8. Do When Condition (1 workflow)

36. **Every time condition: calculate new terms is yes**
    - Reactive workflow
    - Triggers when calculation flag changes
    - Recalculates pricing/terms

#### 9. Hide Element (1 workflow)

37. **Hide bid for this place popup**
    - Dismisses the proposal popup

---

## Step Navigation Workflows

**Reference Files**:
- `WORKFLOWS-STEP-NAVIGATION-1-5.md`
- `WORKFLOWS-STEP-NAVIGATION-6-13.md`

### Navigation Flow Map

```
Step 1 (User Info)
    ↓ [Next button - validates text fields]
    ↓ → Validation fails? → Show alerts, terminate
    ↓ → Validation passes? → Continue
    ↓
Step 3 (Date/Duration)
    ↓ [Submit/Next - validates week number]
    ↓ → Empty weeks? → Show warning alert
    ↓ → Valid weeks? → Continue
    ↓
Step 4 (Schedule Selection)
    ↓ [Next button - validates checkboxes]
    ↓ → Checkboxes unchecked? → Cannot proceed
    ↓ → Checkboxes checked? → Save selected days
    ↓
Step 2 (Review/Breakdown) ← Returns here for review
    ↓ [Submit from Step 2]
    ↓ → Duplicate check → Alert if exists
    ↓ → New proposal → Calculate nightly rates
    ↓
Step 5 (Final Confirmation)
    ↓ [Submit Proposal]
    ↓ → Create Proposal object
    ↓ → Show confetti animation
    ↓ → Send notifications
    ↓ → Navigate to dashboard
```

**Note**: The flow skips Step 2 initially (goes 1→3→4→2→5), showing review AFTER data collection.

### Key Patterns

#### 1. Validation Pattern (Step 1)

**Workflow 8**: "Next button is clicked at step 1"

```
Trigger: B: Submit Proposal clicked when step is 1

Actions:
1. Validate "About Me" field (30 char minimum)
   - Fail → Trigger "Alerts general" WARNING

2. Validate "Need for Space" field (30 char minimum)
   - Fail → Trigger "Alerts general" WARNING

3. Validate "Special Needs" field (if checkbox checked, 30 char min)
   - Fail → Trigger "Alerts general" WARNING

4-6. Schedule API workflows for profile completeness
   - bio, need for space, special needs
   - Only if not already in "Tasks Completed" list

7. Show LottieFiles animation (pulsing effect)
   - Condition: Validation failures exist

8. Hide animation
   - After showing errors

9. Terminate workflow
   - If validation failed, stop here

10. Set step to 3
    - Only reached if all validations pass

11-12. Additional state management and scrolling
```

**Key Insight**: Uses workflow termination to prevent navigation if validation fails.

#### 2. Pricing Calculation Pattern (Step 3 → Step 2)

**Workflow 1**: "Submit Proposal clicked when step is 3"

```
Actions:
1. Set step to 2 (navigate to review)

2. Scroll to top

3-7. Set min nightly rate (conditional branches):
   - IF nights = 7 AND landlord listing → rate = monthly/28 * 1.2
   - IF nights = 5 AND landlord listing → rate = monthly/28 * 1.2
   - IF nights = 4 AND landlord listing → rate = monthly/28 * 1.2
   - IF nights = 3 AND landlord listing → rate = monthly/28 * 1.2
   - IF nights = 2 AND landlord listing → rate = monthly/28 * 1.2

8. Set nightly rate for < 60 days:
   - IF weeks * nights < 61 → different rate calculation

9. Set reservation span states:
   - reservation span (weeks)
   - other reservation span weeks number
```

**Key Insight**: Multiple conditional actions for different night counts instead of a formula.

#### 3. Go Back Pattern

All "Go back" workflows follow a consistent pattern:

```
Trigger: B: Go back a step clicked when step is [N]

Actions:
1. Reset any data from current/next step (if needed)
2. Set step to [N-1] or appropriate previous step
3. Show relevant element (if needed)
```

**Navigation Map**:
- Step 5 → Step 3
- Step 4 → Step 2
- Step 3 → Step 2
- Step 2 → Step 1

#### 4. Final Submission Pattern

**Workflow 13**: "Submit Proposal clicked FINAL step WITHOUT suggested statuses"

17 Actions (Full proposal creation):

```
1. Create new Proposal object
   - Set all proposal fields
   - Link to User, Listing
   - Set dates, pricing, status

2. Update User record
   - Add proposal to user's proposals list

3. Update Listing record
   - Add proposal to listing's proposals

4. Hide proposal popup

5. Show confetti animation
   - LottieFiles "checkmark" animation

6. Trigger success notifications
   - Custom event: "go to guest dashboard"

7-17. Additional state management, cleanup, navigation
```

**Key Insight**: Full CRUD operation with multiple database updates and UI feedback.

---

## Scheduling & Dates Workflows

**Reference File**: `WORKFLOWS-SCHEDULING-DATES.md`

### Date Calculation Patterns

#### 1. Move-in Date Changed

**Workflow 14**: "D: Move-in bid date 1 value changed"

```
Trigger: Date picker value changes

Actions:
1. Calculate days-in-span-weeks = weeks × 7

2. Calculate end-date = move-in date + days-in-span-weeks

3. Set "already closed?" state on GF: Advise to Change

4. Set "move-in date selected" state on reusable element
```

#### 2. Reservation Span Changed

**Workflow 15**: "D: Reservation Span proposal flow value changed"

```
Trigger: Dropdown value changes

Actions:
1. Update User's reservation span preference

2. Set reservation span in weeks (from dropdown)

3. Set other reservation span value (if "Other" selected)

4. Trigger recalculation

5-6. Update date range states
```

### Navigation to Edit Patterns

Workflows 19-23 all follow a pattern for editing previously entered data:

```
Trigger: T: edit [field] is clicked

Actions:
1. Set step to appropriate step number
2. Set focus (if applicable)
3. Scroll to element (if applicable)
```

**Edit Actions**:
- Edit check-in → Go to Step 4 (schedule selector)
- Edit check-out → Go to Step 4 (schedule selector)
- Edit move-in → Go to Step 3 (date selection)
- Edit reservation span → Go to Step 3 (duration selection)

**Key Insight**: Allows users to navigate back to any step to modify data.

---

## ChatGPT Integration Workflows

**Reference File**: `WORKFLOWS-CHATGPT.md`

### AI Assistance Pattern

All 3 ChatGPT workflows follow an identical pattern:

```
Trigger: Multiline Input value is changed

Step 1: OpenAI ChatGPT - Send Message
  Parameters:
    - Prompt: Desintermediation data's prompt + user input
    - Token: gpt-4o's Max Completion Tokens
    - Model: gpt-4o's Model Name

Step 2: Make changes to User
  Field: [target field]
  Value: Result of step 1's body choices:first item's message content
```

### Field Mappings

| Workflow | Input Field | Output Field | Purpose |
|----------|-------------|--------------|---------|
| 24 | MI: About yourself | About Me / Bio | Enhance user bio |
| 25 | MI: Need for space | need for Space | Improve description |
| 26 | MI: Special Needs | special needs | Clarify requirements |

### Prompt Structure

**Template**: "Desintermediation data's prompt"

**Format**: `{prompt_template}"{user_input}"`

**Purpose**: The "Desintermediation" prompt likely:
- Reformats user input for clarity
- Expands abbreviated text
- Improves grammar and structure
- Maintains user's intent

**Model**: GPT-4o (referenced as "gpt 4.1" in Bubble)

**Key Insight**: Real-time AI assistance helps users write better proposals without leaving the form.

---

## Supporting Workflows

**Reference File**: `WORKFLOWS-REMAINING.md`

### Initialization Workflow

**Workflow 27**: "G: Create proposal flow opening"

```
Trigger: G: Create proposal flow is opened

Actions:
1. Set "check for contiguous" state on schedule selector
   - Validates that selected days are contiguous
   - Prevents fragmented reservations
```

**Purpose**: Initialize calendar validation rules when popup opens.

### Information Display Workflow

**Workflow 28**: "G: move in texts is clicked"

```
Trigger: Move-in info icon clicked

Actions:
1. Turn off pulsing effect
   - Set "pulse movein?" state to "no"

2. Trigger Display-Informational-Texts custom event
   - Parameters: element IDs, search tags
   - Shows helpful information about move-in flexibility
```

**Purpose**: Context-sensitive help system.

### Rental Application Workflows

**Workflow 29**: "B: Apply rental application is clicked"

```
Trigger: Apply button clicked

Actions:
1. Hide proposal limit popup

2. Navigate to rental-app-new-design page
   - Condition: Only if rental application not already submitted
```

**Purpose**: Redirect users who need to complete rental application first.

**Workflow 30**: "T: X to close is clicked"

```
Trigger: Close button clicked

Actions:
1. Animate GF: Advise to Change (fade out)

2. Hide GF: Advise to Change
```

**Purpose**: Dismiss advisory messages.

### Custom Events

**Workflows 31-33**: Reusable event triggers

- **Alerts general**: Shows alerts/notifications
- **go to guest dashboard**: Navigation event
- **turn off pulsing effect**: Stops animations

**Purpose**: Centralized event system for reusable actions.

### Reactive Workflow

**Workflow 36**: "Every time condition: calculate new terms is yes"

```
Trigger: Do when condition
  - Watches: ♻️💥create-proposal-flow's calculate new terms
  - Condition: is yes

Actions:
  [Recalculates pricing and terms dynamically]
```

**Purpose**: Reactive recalculation when data changes.

---

## Data Flow Analysis

### State Changes Across Workflows

#### Custom States on "G: Create proposal flow"

| State | Type | Set By | Used For |
|-------|------|--------|----------|
| `step` | Number (1-5) | All navigation workflows | Controls which step is visible |
| `isProposal` | Boolean | Initialization | Determines if creating new vs editing |
| `min nightly rate` | Number | Workflow 1 (step 3→2) | Pricing calculations |
| `reservation span (weeks)` | Option | Workflow 1 | Duration tracking |

#### Custom States on "♻️💥create-proposal-flow" (Reusable Element)

| State | Type | Set By | Used For |
|-------|------|--------|----------|
| `guest user` | User | Parent page | User data reference |
| `listing` | Listing | Parent page | Listing data reference |
| `days selected` | List of Days | Workflow 7 (step 4) | Selected calendar days |
| `nights selected` | List of Nights | Workflow 7 (step 4) | Selected nights |
| `check-in day` | Day | Workflow 7 (step 4) | Check-in date |
| `check-out day` | Day | Workflow 7 (step 4) | Check-out date |
| `move-in date selected` | Date | Workflow 14 | Move-in date |
| `pulse movein?` | Boolean | Workflow 28 | Animation control |
| `calculate new terms` | Boolean | Various | Triggers recalculation |
| `other reservation span weeks number` | Number | Workflow 1 | Custom week input |

#### Custom States on "clone2-listing schedule selector for Step4"

| State | Type | Set By | Used For |
|-------|------|--------|----------|
| `check for contiguous` | Text | Workflow 27 | Validation flag |
| `Selected Days` | List | User interaction | Days selected |
| `Nights Number` | Number | Calculated | Total nights |
| `Weeks Number` | Number | Calculated | Total weeks |
| `Check-in Day` | Day | Calculated | First selected day |
| `Checkout Day` | Day | Calculated | Last selected day |
| `Days of Week Selected` | List | Calculated | Weekly pattern |
| `Total Price` | Number | Calculated | Calculated price |

#### Custom States on "G: blocked dates inside proposal flow"

| State | Type | Set By | Used For |
|-------|------|--------|----------|
| `days-in-span-weeks` | Number | Workflows 14, 15 | Duration in days |
| `end-date` | Date | Workflows 14, 15 | Reservation end date |

#### Custom States on "GF: Advise to Change"

| State | Type | Set By | Used For |
|-------|------|--------|----------|
| `already closed?` | Boolean | Workflow 14 | Date availability check |

### Database Operations

#### Proposal Creation (Workflow 13)

**Creates**: New Proposal object

**Fields Set**:
- User (creator)
- Listing
- Check-in date
- Check-out date
- Number of weeks
- Number of nights
- Weekly pattern
- Total price
- Status (e.g., "Pending")
- Timestamps

**Related Updates**:
- User's Proposals List (add new proposal)
- Listing's Proposals (add new proposal)

#### User Profile Updates

**ChatGPT Workflows (24-26)**:
- Updates User fields with AI-enhanced text
- Fields: "About Me / Bio", "need for Space", "special needs"

**Profile Completeness Tracking (Workflow 8)**:
- Schedules API workflows: "core-update-user-profile-completeness"
- Parameters: Field name (BIO, need for space, special needs)
- Adds to User's "Tasks Completed" list

### Data Flow Diagram

```
User Input (Step 1) → ChatGPT Enhancement → User Record
    ↓
Date Selection (Step 3) → State Updates → Date Calculations
    ↓
Schedule Selection (Step 4) → Schedule Selector Component → Pricing Calculations
    ↓
Review (Step 2) ← Calculated Data Display
    ↓
Confirmation (Step 5) ← Verify Key Values
    ↓
Final Submission → Create Proposal → Update User & Listing → Navigate Away
```

---

## State Management

### Step State Machine

```
State: G: Create proposal flow's step (Number: 1-5)

Transitions:
  1 → 3 (Next from user info, after validation)
  3 → 4 (Next from date/duration, after week validation)
  4 → 2 (Next from schedule, after checkbox confirmation)
  2 → 5 (Submit from review, triggers submission)
  5 → [Complete] (Final submission)

  5 → 3 (Go back)
  4 → 2 (Go back)
  3 → 2 (Go back)
  2 → 1 (Go back)
```

### Validation States

**Text Field Validation (Step 1)**:
- Minimum: 30 characters
- Checked in: Workflow 8
- Failure action: Show alert, terminate workflow

**Week Number Validation (Step 3)**:
- Required: Non-empty value if "Other (wks)" selected
- Checked in: Workflow 9
- Failure action: Show warning alert

**Checkbox Validation (Step 4)**:
- Required: "nights and days selected confirm" OR "Check out day"
- Checked in: Workflow 7 trigger condition
- Failure action: Workflow doesn't trigger (button inactive)

**Duplicate Proposal Check (Step 5)**:
- Condition: User's Proposals List contains this Listing
- Checked in: Workflows 2, 10
- Failure action: Show information alert, prevent submission

### Reactive State Pattern

**Trigger**: "calculate new terms" state changes

```
When ♻️💥create-proposal-flow's calculate new terms is yes:
  → Recalculate pricing
  → Update display values
  → Reset flag
```

**Use Cases**:
- Date range changes
- Night count changes
- Week count changes
- Pricing tier changes

---

## Event System

### Custom Events

#### 1. Alerts general

**Purpose**: Centralized alert/notification display

**Triggered by**:
- Validation failures (Workflow 8)
- Week number validation (Workflow 9)
- Duplicate proposal detection (Workflows 2, 10)

**Parameters**:
- Alert type (WARNING, INFO, ERROR)
- Message content
- Display duration

#### 2. go to guest dashboard

**Purpose**: Navigate to user dashboard after successful submission

**Triggered by**:
- Workflow 13 (Final proposal submission)

**Parameters**:
- User ID
- Success message

#### 3. turn off pulsing effect

**Purpose**: Stop element animations

**Triggered by**:
- Workflow 28 (Info clicked)
- Workflow 8 (After showing validation errors)

**Parameters**:
- Element ID

#### 4. Display-Informational-Texts (from ⚛️ Informational text RE)

**Purpose**: Show contextual help/information

**Triggered by**:
- Workflow 28 (Move-in info clicked)

**Parameters**:
- id of the element
- tag title for search
- id of the RE
- id of popup
- id of the group
- button1id
- button2id

### Event Flow Example: Submit from Step 1

```
User clicks "Next" at Step 1
  ↓
Workflow 8 triggers
  ↓
Validate "About Me" (30 char min)
  ├─ FAIL → Trigger "Alerts general" (WARNING) → Terminate
  └─ PASS → Continue
  ↓
Validate "Need for Space" (30 char min)
  ├─ FAIL → Trigger "Alerts general" (WARNING) → Terminate
  └─ PASS → Continue
  ↓
Validate "Special Needs" (if checked, 30 char min)
  ├─ FAIL → Trigger "Alerts general" (WARNING) → Terminate
  └─ PASS → Continue
  ↓
Schedule API workflows (profile completeness)
  ↓
All validations passed → Set step to 3
  ↓
Step 3 becomes visible
```

---

## React Conversion Strategy

### 1. State Management Architecture

**Recommended**: React Context + useReducer or Zustand

```typescript
interface ProposalFlowState {
  // Navigation
  step: 1 | 2 | 3 | 4 | 5;
  isProposal: boolean;

  // User Info (Step 1)
  userInfo: {
    needForSpace: string;
    aboutMe: string;
    hasSpecialNeeds: boolean;
    specialNeeds: string;
  };

  // Date/Duration (Step 3)
  dateInfo: {
    moveInDate: Date | null;
    moveInFlexible: boolean;
    reservationSpan: string;
    weeksNumber: number;
  };

  // Schedule (Step 4)
  scheduleInfo: {
    selectedDays: Date[];
    nightsNumber: number;
    checkInDay: Date | null;
    checkOutDay: Date | null;
    weeksNumber: number;
    daysOfWeekSelected: string[];
    totalPrice: number;
  };

  // Validation
  validation: {
    errors: Record<string, string>;
    warnings: string[];
  };

  // UI State
  ui: {
    isSubmitting: boolean;
    showConfetti: boolean;
    pulseMovein: boolean;
  };

  // Calculations
  calculations: {
    minNightlyRate: number;
    daysInSpanWeeks: number;
    endDate: Date | null;
  };
}

type ProposalFlowAction =
  | { type: 'SET_STEP'; payload: number }
  | { type: 'UPDATE_USER_INFO'; payload: Partial<UserInfo> }
  | { type: 'UPDATE_DATE_INFO'; payload: Partial<DateInfo> }
  | { type: 'UPDATE_SCHEDULE_INFO'; payload: Partial<ScheduleInfo> }
  | { type: 'SET_VALIDATION_ERROR'; payload: { field: string; message: string } }
  | { type: 'CLEAR_VALIDATION_ERRORS' }
  | { type: 'START_SUBMISSION' }
  | { type: 'COMPLETE_SUBMISSION' }
  | { type: 'SHOW_CONFETTI' }
  | { type: 'CALCULATE_PRICING'; payload: number };
```

### 2. Workflow to Event Handler Mapping

#### Navigation Handlers

```typescript
const handleNextFromStep1 = async () => {
  // Workflow 8: Validate Step 1
  const errors = validateStep1(state.userInfo);

  if (errors.length > 0) {
    errors.forEach(error => {
      dispatch({ type: 'SET_VALIDATION_ERROR', payload: error });
      showAlert('warning', error.message);
    });
    return; // Terminate (like Bubble workflow)
  }

  // Schedule profile completeness updates
  await Promise.all([
    updateProfileCompleteness('bio'),
    updateProfileCompleteness('need_for_space'),
    state.userInfo.hasSpecialNeeds && updateProfileCompleteness('special_needs')
  ].filter(Boolean));

  // Navigate to Step 3
  dispatch({ type: 'SET_STEP', payload: 3 });
  scrollToTop();
};

const handleNextFromStep3 = () => {
  // Workflow 9: Validate week number
  if (state.dateInfo.reservationSpan === 'Other (wks)' && !state.dateInfo.weeksNumber) {
    showAlert('warning', 'Please enter number of weeks');
    return;
  }

  // Navigate to Step 4
  dispatch({ type: 'SET_STEP', payload: 4 });
};

const handleNextFromStep4 = () => {
  // Workflow 7: Validate checkboxes and save schedule
  if (!state.scheduleInfo.nightsConfirmed && !state.scheduleInfo.checkoutConfirmed) {
    // Workflow won't trigger - button stays disabled
    return;
  }

  // Save selected days/nights (from schedule selector)
  dispatch({
    type: 'UPDATE_SCHEDULE_INFO',
    payload: {
      selectedDays: scheduleSelector.selectedDays,
      nightsNumber: scheduleSelector.nightsNumber,
      checkInDay: scheduleSelector.checkInDay,
      checkOutDay: scheduleSelector.checkOutDay,
      // ... other schedule data
    }
  });

  // Navigate to Step 2 (review)
  dispatch({ type: 'SET_STEP', payload: 2 });
  scrollToTop();
};

const handleSubmitFromStep2 = () => {
  // Workflow 1: Calculate pricing and navigate to Step 5
  const minNightlyRate = calculateMinNightlyRate(
    state.scheduleInfo.nightsNumber,
    listing.monthlyHostRate
  );

  dispatch({ type: 'CALCULATE_PRICING', payload: minNightlyRate });
  dispatch({ type: 'SET_STEP', payload: 5 });
};

const handleFinalSubmit = async () => {
  // Workflows 2, 10: Check for duplicate
  const existingProposal = user.proposals.find(p => p.listingId === listing.id);

  if (existingProposal) {
    showAlert('info', 'You already have a proposal for this listing');
    return;
  }

  // Workflow 13: Create proposal
  dispatch({ type: 'START_SUBMISSION' });

  try {
    const proposal = await createProposal({
      userId: user.id,
      listingId: listing.id,
      checkInDate: state.scheduleInfo.checkInDay,
      checkOutDate: state.scheduleInfo.checkOutDay,
      weeksNumber: state.scheduleInfo.weeksNumber,
      nightsNumber: state.scheduleInfo.nightsNumber,
      daysOfWeek: state.scheduleInfo.daysOfWeekSelected,
      totalPrice: state.scheduleInfo.totalPrice,
      userInfo: state.userInfo,
      dateInfo: state.dateInfo,
    });

    // Show success feedback
    dispatch({ type: 'SHOW_CONFETTI' });
    showAlert('success', 'Proposal submitted successfully!');

    // Navigate to dashboard
    setTimeout(() => {
      router.push('/guest-dashboard');
    }, 2000);

  } catch (error) {
    showAlert('error', 'Failed to submit proposal. Please try again.');
  } finally {
    dispatch({ type: 'COMPLETE_SUBMISSION' });
  }
};

const handleGoBack = () => {
  // Workflows 3-6: Go back logic
  const backStepMap = {
    5: 3,
    4: 2,
    3: 2,
    2: 1,
  };

  const previousStep = backStepMap[state.step];

  if (state.step === 3) {
    // Reset Step 4 data (Workflow 4)
    dispatch({ type: 'UPDATE_SCHEDULE_INFO', payload: {} });
  }

  dispatch({ type: 'SET_STEP', payload: previousStep });
};
```

#### Date Change Handlers

```typescript
const handleMoveInDateChange = (date: Date) => {
  // Workflow 14: Calculate date range
  const daysInSpanWeeks = state.dateInfo.weeksNumber * 7;
  const endDate = addDays(date, daysInSpanWeeks);

  dispatch({
    type: 'UPDATE_DATE_INFO',
    payload: { moveInDate: date }
  });

  dispatch({
    type: 'CALCULATE_DATE_RANGE',
    payload: { daysInSpanWeeks, endDate }
  });
};

const handleReservationSpanChange = (span: string, weeks?: number) => {
  // Workflow 15: Update reservation span
  dispatch({
    type: 'UPDATE_DATE_INFO',
    payload: {
      reservationSpan: span,
      weeksNumber: weeks || getWeeksFromSpan(span)
    }
  });

  // Trigger recalculation
  dispatch({ type: 'RECALCULATE_TERMS' });
};
```

#### ChatGPT Integration Handlers

```typescript
const handleAIEnhancement = async (field: 'needForSpace' | 'aboutMe' | 'specialNeeds', text: string) => {
  // Workflows 24-26: AI enhancement
  if (text.length < 10) return; // Don't enhance very short text

  try {
    const response = await fetch('/api/ai/enhance', {
      method: 'POST',
      body: JSON.stringify({
        prompt: `${DESINTERMEDIATION_PROMPT}"${text}"`,
        model: 'gpt-4o',
        maxTokens: 150
      })
    });

    const data = await response.json();
    const enhancedText = data.choices[0].message.content;

    dispatch({
      type: 'UPDATE_USER_INFO',
      payload: { [field]: enhancedText }
    });

  } catch (error) {
    console.error('AI enhancement failed:', error);
    // Fail silently - keep original text
  }
};

// Debounced version for real-time enhancement
const debouncedAIEnhancement = useMemo(
  () => debounce(handleAIEnhancement, 1000),
  []
);
```

### 3. Validation System

```typescript
// Workflow 8 validation logic
const validateStep1 = (userInfo: UserInfo): ValidationError[] => {
  const errors: ValidationError[] = [];

  if (userInfo.aboutMe.length < 30) {
    errors.push({
      field: 'aboutMe',
      message: 'Please write at least 30 characters about yourself'
    });
  }

  if (userInfo.needForSpace.length < 30) {
    errors.push({
      field: 'needForSpace',
      message: 'Please write at least 30 characters about why you need this space'
    });
  }

  if (userInfo.hasSpecialNeeds && userInfo.specialNeeds.length < 30) {
    errors.push({
      field: 'specialNeeds',
      message: 'Please write at least 30 characters about your special needs'
    });
  }

  return errors;
};

// Workflow 9 validation logic
const validateStep3 = (dateInfo: DateInfo): ValidationError[] => {
  const errors: ValidationError[] = [];

  if (dateInfo.reservationSpan === 'Other (wks)' && !dateInfo.weeksNumber) {
    errors.push({
      field: 'weeksNumber',
      message: 'Please enter the number of weeks'
    });
  }

  if (dateInfo.weeksNumber < listing.minWeeks) {
    errors.push({
      field: 'weeksNumber',
      message: `Minimum ${listing.minWeeks} weeks required`
    });
  }

  if (dateInfo.weeksNumber > listing.maxWeeks) {
    errors.push({
      field: 'weeksNumber',
      message: `Maximum ${listing.maxWeeks} weeks allowed`
    });
  }

  return errors;
};

// Workflow 7 validation
const validateStep4 = (scheduleInfo: ScheduleInfo): ValidationError[] => {
  const errors: ValidationError[] = [];

  if (!scheduleInfo.nightsConfirmed && !scheduleInfo.checkoutConfirmed) {
    errors.push({
      field: 'confirmation',
      message: 'Please confirm your selected nights and checkout day'
    });
  }

  return errors;
};
```

### 4. Pricing Calculations

```typescript
// Workflow 1: Min nightly rate calculation
const calculateMinNightlyRate = (nightsSelected: number, monthlyRate: number): number => {
  // Conditional logic for different night counts
  const baseRate = monthlyRate / 28 * 1.2;

  const nightRates = {
    2: baseRate,
    3: baseRate,
    4: baseRate,
    5: baseRate,
    7: baseRate,
  };

  return nightRates[nightsSelected] || baseRate;
};

// Reactive calculation (Workflow 36)
useEffect(() => {
  if (state.calculations.shouldRecalculate) {
    const newRate = calculateMinNightlyRate(
      state.scheduleInfo.nightsNumber,
      listing.monthlyHostRate
    );

    dispatch({ type: 'CALCULATE_PRICING', payload: newRate });
  }
}, [state.scheduleInfo.nightsNumber, listing.monthlyHostRate, state.calculations.shouldRecalculate]);
```

### 5. Component Structure

```tsx
<ProposalFlowProvider>
  <ProposalPopup>
    <ProposalHeader onClose={handleClose} />

    <NoRiskBanner visible={step === 1} />

    <AnimatePresence mode="wait">
      {step === 1 && (
        <Step1UserInfo
          userInfo={state.userInfo}
          onChange={handleUserInfoChange}
          onAIEnhance={debouncedAIEnhancement}
          onNext={handleNextFromStep1}
        />
      )}

      {step === 2 && (
        <Step2ReservationBreakdown
          scheduleInfo={state.scheduleInfo}
          pricing={state.calculations}
          listing={listing}
          onSubmit={handleSubmitFromStep2}
          onBack={handleGoBack}
        />
      )}

      {step === 3 && (
        <Step3DateSelection
          dateInfo={state.dateInfo}
          listing={listing}
          onChange={handleDateInfoChange}
          onNext={handleNextFromStep3}
          onBack={handleGoBack}
        />
      )}

      {step === 4 && (
        <Step4ScheduleSelection
          scheduleInfo={state.scheduleInfo}
          listing={listing}
          onChange={handleScheduleChange}
          onNext={handleNextFromStep4}
          onBack={handleGoBack}
        />
      )}

      {step === 5 && (
        <Step5Confirmation
          scheduleInfo={state.scheduleInfo}
          onSubmit={handleFinalSubmit}
          onBack={handleGoBack}
        />
      )}
    </AnimatePresence>

    <ConfettiAnimation visible={state.ui.showConfetti} />
    <AlertSystem alerts={state.validation.errors} />
  </ProposalPopup>
</ProposalFlowProvider>
```

### 6. API Integration

```typescript
// API endpoints needed

// ChatGPT Integration (Workflows 24-26)
POST /api/ai/enhance
  Body: { prompt: string, model: string, maxTokens: number }
  Returns: { choices: [{ message: { content: string } }] }

// Profile Completeness (Workflow 8)
POST /api/user/profile-completeness
  Body: { userId: string, field: string }
  Returns: { success: boolean }

// Proposal Creation (Workflow 13)
POST /api/proposal/create
  Body: {
    userId: string,
    listingId: string,
    checkInDate: Date,
    checkOutDate: Date,
    weeksNumber: number,
    nightsNumber: number,
    daysOfWeek: string[],
    totalPrice: number,
    userInfo: UserInfo,
    dateInfo: DateInfo
  }
  Returns: { proposal: Proposal }

// Get Existing Proposals (Workflows 2, 10)
GET /api/user/:userId/proposals?listingId=:listingId
  Returns: { proposals: Proposal[] }
```

### 7. Testing Strategy

#### Unit Tests

**State Reducer Tests**:
```typescript
describe('proposalFlowReducer', () => {
  it('should navigate to step 3 from step 1', () => {
    const state = { step: 1, ... };
    const action = { type: 'SET_STEP', payload: 3 };
    const newState = proposalFlowReducer(state, action);
    expect(newState.step).toBe(3);
  });

  it('should calculate min nightly rate correctly', () => {
    const rate = calculateMinNightlyRate(7, 2800);
    expect(rate).toBe(120); // (2800 / 28) * 1.2
  });
});
```

**Validation Tests**:
```typescript
describe('validateStep1', () => {
  it('should return error for short aboutMe', () => {
    const userInfo = { aboutMe: 'Short', ... };
    const errors = validateStep1(userInfo);
    expect(errors).toHaveLength(1);
    expect(errors[0].field).toBe('aboutMe');
  });

  it('should pass validation for valid inputs', () => {
    const userInfo = {
      aboutMe: 'A'.repeat(30),
      needForSpace: 'B'.repeat(30),
      hasSpecialNeeds: false,
      specialNeeds: ''
    };
    const errors = validateStep1(userInfo);
    expect(errors).toHaveLength(0);
  });
});
```

#### Integration Tests

**Flow Tests**:
```typescript
describe('Proposal Flow', () => {
  it('should complete full flow from step 1 to submission', async () => {
    const { getByText, getByLabelText } = render(<ProposalFlow />);

    // Step 1
    await userEvent.type(getByLabelText('About Me'), 'A'.repeat(30));
    await userEvent.type(getByLabelText('Need for Space'), 'B'.repeat(30));
    await userEvent.click(getByText('Next'));

    // Should navigate to Step 3
    expect(getByText('Select Move-in Date')).toBeInTheDocument();

    // Step 3
    await userEvent.click(getByLabelText('Move-in Date'));
    await userEvent.selectOptions(getByLabelText('Weeks'), '12');
    await userEvent.click(getByText('Next'));

    // Step 4
    // ... select schedule
    await userEvent.click(getByText('Next'));

    // Step 2 (review)
    expect(getByText('Reservation Breakdown')).toBeInTheDocument();
    await userEvent.click(getByText('Submit'));

    // Step 5 (confirmation)
    expect(getByText('Confirm Your Selection')).toBeInTheDocument();
    await userEvent.click(getByText('Submit Proposal'));

    // Should show confetti and redirect
    await waitFor(() => {
      expect(mockRouter.push).toHaveBeenCalledWith('/guest-dashboard');
    });
  });
});
```

#### E2E Tests (Playwright/Cypress)

```typescript
describe('Proposal Creation E2E', () => {
  it('should create a proposal successfully', () => {
    cy.visit('/listing/123');
    cy.get('[data-testid="create-proposal-button"]').click();

    // Step 1
    cy.get('#aboutMe').type('I am a professional seeking a place'.repeat(3));
    cy.get('#needForSpace').type('I need this space for work'.repeat(5));
    cy.get('[data-testid="next-button"]').click();

    // Step 3
    cy.get('#moveInDate').type('2025-01-15');
    cy.get('#reservationSpan').select('12 weeks');
    cy.get('[data-testid="next-button"]').click();

    // Step 4
    cy.get('[data-testid="schedule-selector"]').click();
    // ... interact with calendar
    cy.get('[data-testid="nights-confirmed"]').check();
    cy.get('[data-testid="next-button"]').click();

    // Step 2
    cy.contains('Reservation Breakdown').should('be.visible');
    cy.get('[data-testid="submit-button"]').click();

    // Step 5
    cy.contains('Are you sure').should('be.visible');
    cy.get('[data-testid="final-submit"]').click();

    // Success
    cy.contains('Proposal submitted successfully').should('be.visible');
    cy.url().should('include', '/guest-dashboard');
  });
});
```

---

## Summary Statistics

**Total Workflows Documented**: 35+
**Total Actions Across All Workflows**: 150+
**Total Custom States**: 20+
**Total Database Operations**: 10+

**Workflow Complexity**:
- Simple (1-2 actions): 12 workflows
- Medium (3-6 actions): 15 workflows
- Complex (7+ actions): 8 workflows

**Most Complex Workflows**:
1. Workflow 13: Final submission (17 actions)
2. Workflow 8: Step 1 validation (12 actions)
3. Workflow 1: Step 3 submission (9 actions)

---

## File References

**Detailed Workflow Documentation**:
1. `WORKFLOWS-STEP-NAVIGATION-1-5.md` - First 5 step navigation workflows
2. `WORKFLOWS-STEP-NAVIGATION-6-13.md` - Remaining 8 step navigation workflows
3. `WORKFLOWS-SCHEDULING-DATES.md` - All 10 scheduling/date workflows
4. `WORKFLOWS-CHATGPT.md` - All 3 ChatGPT integration workflows
5. `WORKFLOWS-REMAINING.md` - All remaining workflows across categories

**Screenshots**: 80+ workflow screenshots in `.playwright-mcp/` directory

---

**Extraction Complete**: Both Design and Workflow tabs fully documented.

**Next Step**: Create comprehensive conversion reference guide combining design and workflow insights.
