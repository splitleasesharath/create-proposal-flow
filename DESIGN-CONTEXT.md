# Design Tab - Complete Context Extraction
## create-proposal-flow Reusable Element

---

## Table of Contents
1. [Overview](#overview)
2. [Element Hierarchy](#element-hierarchy)
3. [Root Element](#root-element)
4. [Overlays Section](#overlays-section)
5. [Main Container](#main-container)
6. [Step-by-Step Breakdown](#step-by-step-breakdown)
7. [Supporting Sections](#supporting-sections)
8. [Key Patterns & Conventions](#key-patterns--conventions)
9. [Data Bindings Summary](#data-bindings-summary)
10. [Conditional Logic Summary](#conditional-logic-summary)
11. [React Conversion Considerations](#react-conversion-considerations)

---

## Overview

**Element Name**: ♻️💥create-proposal-flow
**Element Type**: Popup (Reusable Element)
**Purpose**: Multi-step proposal creation flow for guests to create rental proposals
**Total Steps**: 5 steps with conditional visibility
**Total Elements Documented**: 50+ individual elements across all sections

### Flow Summary
1. **Step 1**: User information collection (why, about me, special needs)
2. **Step 2**: Reservation details display (pricing breakdown)
3. **Step 3**: Date and duration selection (move-in date, weeks)
4. **Step 4**: Schedule selection (calendar/weekly pattern)
5. **Step 5**: Final confirmation (verify selections)

---

## Element Hierarchy

```
♻️💥create-proposal-flow (Popup)
├── OVERLAYS SECTION
│   ├── ⚛️ Informational text
│   ├── GF: Move in range inside proposal flow
│   ├── P: Less than 3 proposals created
│   ├── GF: Lottie animation Confetti
│   └── GF: Advise to Change
│
└── LAYERS SECTION
    └── G: Create proposal flow (Main Container)
        ├── G: create proposal header and x icon
        │   ├── I: X icon
        │   ├── I: Back arrow
        │   └── T: Create Proposal
        │
        ├── G: No risk to propose
        │   ├── G: Risk Free Image
        │   └── T: Risk-free! Even afte
        │
        ├── G: Step 1 (User Information)
        │   ├── G: Why do you want this space?
        │   │   ├── T: Why do you want this space?
        │   │   ├── M: need for Space (Multiline Input)
        │   │   └── T: 10 words minimum
        │   ├── G: aboutMe
        │   │   ├── T: About Me
        │   │   ├── M: About Me / Bio (Multiline Input)
        │   │   └── T: 10 words minimum
        │   ├── C: special needs (Checkbox)
        │   └── G: Special Needs
        │       ├── T: Special Needs
        │       ├── M: special needs (Multiline Input)
        │       └── T: 10 words minimum
        │
        ├── G: Step 2 (Reservation Display)
        │   └── G: Reservation Details Breakdown
        │       └── [13 data display fields for pricing/dates]
        │
        ├── G: Step 3 (Date Selection)
        │   ├── G: Start Date
        │   ├── G: Reservation span
        │   ├── G: Weeks Warning
        │   └── G: blocked dates inside proposal flow
        │
        ├── G: step 4 (Schedule Selection)
        │   ├── Group J (calculations)
        │   └── G: Listing Schedule Selector
        │       ├── G: Icon and night selector
        │       ├── G: Week needed
        │       ├── G: checkboxes confirmation
        │       ├── T: Price per Night: Bid
        │       └── clone2-listing schedule selector for Step4 ⭐
        │
        ├── G: step 5 (Final Confirmation)
        │   └── T: Days selected confirmation
        │
        ├── Group Listing
        │   ├── B: Go back a step
        │   └── B: Submit Proposal
        │
        ├── G: Information about need to check checkboxes
        │   └── T: information about need to check checkboxes
        │
        └── G: Collapse Mobile and CONFIG
            └── G: Host Display Price
```

---

## Root Element

**Reference**: `ROOT-ELEMENT-PROPERTIES.md`

### Properties
- **Type**: Popup
- **Style**: None (Custom)
- **Opacity**: 100%
- **Background**: None
- **Border**: None
- **Roundness**: 5px
- **Shadow**: None

### Layout
- **Container**: Align to parent
- **Width**: 490px (default builder), 0px-∞ (min-max)
- **Height**: 0px-∞ (min-max)
- **Padding**: 0px (all sides)

### Conditionals
- None (root element has no conditional logic)

### Notes
- Minimal styling at root level - appearance comes from child elements
- Fixed desktop width of 490px
- Flexible height based on content

---

## Overlays Section

### 1. ⚛️ Informational text

**Reference**: `INFORMATIONAL-TEXT-DOCUMENTATION.md`

**Purpose**: Display informational messages to users

**Key Properties**:
- Data source: `Parent group's Informational Texts`
- Background: White (#FFFFFF)
- Border: 1px solid black, 25px roundness
- Shadow: Outset with 2px vertical offset, 4px blur
- Width: 0-404px (fits to content)
- Layout: Column, centered

**Conditionals** (3 rules - all OFF):
1. When `Informational text's is visible? is no` → Element is visible
2. When `This Group is visible` → (not configured)
3. When `Current page width < 1000` → Max width 85%, Min width 70%

---

### 2. GF: Move in range inside proposal flow

**Reference**: `OVERLAY-ELEMENTS-2-5.md`

**Purpose**: Group Focus element for move-in range messaging

**Key Properties**:
- Fixed dimensions: 343px × 66px
- White background (#FFFFFF)
- Border: 1px solid #CCCCCC, 5px roundness
- References: "T: Create Proposal" element

**Conditionals**: None

---

### 3. P: Less than 3 proposals created

**Reference**: `OVERLAY-ELEMENTS-2-5.md`

**Purpose**: Popup shown when user has created fewer than 3 proposals

**Key Properties**:
- Width: 30% (responsive to 90% on mobile)
- Layout: Column with space-between alignment
- Box shadow: 3px offset, 4px blur

**Conditionals** (1 rule):
- When `Current page width < 1000` → Min width 90%, Max width 90%

---

### 4. GF: Lottie animation Confetti

**Reference**: `OVERLAY-ELEMENTS-2-5.md`

**Purpose**: Celebration animation (likely on successful submission)

**Key Properties**:
- Fixed width: 450px
- Min height: 300px
- No background or borders
- References: "T: Create Proposal" element

**Conditionals**: None

---

### 5. GF: Advise to Change

**Reference**: `OVERLAY-ELEMENTS-2-5.md`

**Purpose**: Advisory message for schedule changes

**Key Properties**:
- Fixed width: 285px
- Min height: 167px
- White background, 15px roundness
- References: "T: edit check in" element

**Conditionals** (4 rules - based on schedule selection logic)

---

## Main Container

**Reference**: `MAIN-CONTAINER-AND-HEADER.md`

### G: Create proposal flow

**Key Properties**:
- **Type**: Group
- **Data Source**: `♻️💥create-proposal-flow's listing`
- **Layout**: Column, 95% width
- **Height**: 0px - 2260px (flexible)
- **Scrolling**: Vertical scrolling enabled
- **Margins**: 15px top/bottom, 0px left/right

**Conditionals**: None (always visible within popup)

**Children**: 10 main sections

---

### Header: G: create proposal header and x icon

**Key Properties**:
- **Data Source**: `Parent group's Listing`
- **Border**: Bottom border only (1px solid #6B6B6B)
- **Layout**: Align to parent, fits height to content
- **Min dimensions**: 40px × 40px

**Children**:
- I: X icon (close button)
- I: Back arrow (navigation)
- T: Create Proposal (title text)

**Conditionals**: None

**Purpose**: Navigation header with close and back functionality

---

## Step-by-Step Breakdown

### Step 1: User Information Collection

**Reference**: `STEP-1-COMPLETE.md`
**Total Elements**: 17 (1 parent + 4 children + 12 nested children)

#### Parent Group: G: Step 1

**Visibility Logic**:
- **Condition 1**: `G: Create proposal flow's step is not 1` → Hide element
- **Condition 2**: `This Group is visible` → Border: None

**Key Properties**:
- Width: 96%
- Height: 50px - ∞
- Border: Dotted, 2px, #4D4D4D, 10px roundness
- Layout: Column, centered

#### Data Collection Fields

**1. Why do you want this space?**
- Field: `need for Space` (Multiline Input)
- Data source: `♻️💥create-proposal-flow's guest user`
- Validation: 10 words minimum, 500 characters max, required
- Auto-binding: Yes (to User data type)

**2. About Me / Bio**
- Field: `About Me / Bio` (Multiline Input)
- Data source: `♻️💥create-proposal-flow's guest user`
- Validation: 10 words minimum, 500 characters max, required
- Auto-binding: Yes (to User data type)

**3. Special Needs** (Conditional)
- Checkbox: `C: special needs`
- Field: `special needs` (Multiline Input)
- Conditional visibility: Only shows when checkbox is checked
- Validation: 10 words minimum, 500 characters max, required
- Auto-binding: Yes (to User data type)

#### Implementation Notes
- All inputs use consistent styling (2px solid border, 10px radius, #4D4D4D)
- "10 words minimum" helper text appears below each input
- Step 1 collects qualitative user information
- All fields auto-bind to the User data type

---

### Step 2: Reservation Details Display

**Reference**: `STEP-2-COMPLETE.md`
**Purpose**: Display-only step showing pricing breakdown

#### Parent Group: G: Step 2

**Visibility Logic**:
- **Condition 1**: `G: Create proposal flow's step is not 2` OR `G: Create proposal flow's isProposal is no` → Hide element
- **Condition 2**: `This Group is visible` → Border: None

**Key Properties**:
- Width: 96%
- Height: 0px - 655px (flexible)
- Border: Dotted, 2px, #4D4D4D (conditionally None)

#### Child: G: Reservation Details Breakdown

**13 Data Display Fields**:

1. **Approx Move-in date**
   - Source: `clone2-listing schedule selector for Step4's Check-in Day:formatted as Dec 25`

2. **Check-in day**
   - Source: `clone2-listing schedule selector for Step4's Check-in Day:formatted as Mon`

3. **Check-out day**
   - Source: `clone2-listing schedule selector for Step4's Checkout Day:formatted as Fri`

4. **Reservation span (weeks)**
   - Source: `clone2-listing schedule selector for Step4's Weeks Number:formatted as 12`

5. **Weekly Pattern**
   - Source: `clone2-listing schedule selector for Step4's Days of Week Selected:join with ,`

6. **Actual Weeks Used**
   - Source: `clone2-listing schedule selector for Step4's Weeks Number:formatted as 12`

7. **Price per night**
   - Source: `Parent group's Listing's Price PER NIGHT:formatted as $1,028.58`

8. **Number of reserved nights**
   - Source: `clone2-listing schedule selector for Step4's Nights Number:formatted as 60`

9. **Total price for reservation**
   - Source: `clone2-listing schedule selector for Step4's Total Price:formatted as $61,715`

10. **Price per 4 weeks**
    - Source: `(clone2-listing schedule selector for Step4's Total Price / clone2-listing schedule selector for Step4's Weeks Number * 4):formatted as $20,572`

11. **Refundable Damage Deposit**
    - Source: `Parent group's Listing's Property Requirements's Refundable Damage Deposit:formatted as $1,500`

12. **Maintenance Fee**
    - Source: `Parent group's Listing's Actual weekly Maintenance fee:formatted as $100`

13. **Initial payment total**
    - Source: Complex calculation including deposit, first month, maintenance
    - Note: "ongoing cost for duration of stay at [price]"

#### Implementation Notes
- Step 2 is READ-ONLY (no user input)
- All pricing calculations use the schedule selector's values
- Formatted outputs for currency and dates
- Shows comprehensive cost breakdown
- Critical for transparency before final commitment

---

### Step 3: Date and Duration Selection

**Reference**: `STEP-3-COMPLETE.md`
**Total Elements**: 10+ across 4 main groups

#### Parent Group: G: Step 3

**Visibility Logic**:
- **Condition 1**: `G: Create proposal flow's step is not 3` → Hide element
- **Condition 2**: `This Group is visible` → Border: None

**Key Properties**:
- Width: 96%
- Height: 50px - ∞
- Border: Dotted, 2px, #4D4D4D, 10px roundness

#### Child Groups

**1. G: Start Date (Move-in Date Selection)**
- Contains date picker: `MoveInProposalMobile`
- Collects approximate move-in date
- Shows flexibility indication

**2. G: Reservation span**
- Number input: Weeks selection
- Dropdown: Reservation span type
- Validates against host's min/max weeks

**3. G: Weeks Warning (Conditional Validation)**
- Visibility: Shows when selected weeks outside acceptable range
- Message: Explains host's week limits
- Suggests negotiation options

**4. G: blocked dates inside proposal flow**
- Visibility: `Parent group's Listing's Dates - Blocked:filtered:count > 0`
- Displays host's blocked dates
- Warns about unavailability

#### Implementation Notes
- Step 3 collects temporal parameters
- Real-time validation against host constraints
- Conditional warnings for out-of-range selections
- Date picker for move-in date
- Number input for duration (weeks)

---

### Step 4: Schedule Selection (Calendar)

**Reference**: `STEP-4-COMPLETE.md`
**Total Elements**: 15+ including reusable element

#### Parent Group: G: step 4

**Visibility Logic**:
- **Condition 1**: `G: Create proposal flow's step is not 4` → Hide element
- **Condition 2**: `This Group is visible` → Border: None

**Key Properties**:
- Width: 96%
- Height: 0px - ∞ (flexible)
- Border: Dotted, 2px, #4D4D4D, 10px roundness
- Layout: Column

#### Critical Component: clone2-listing schedule selector for Step4 ⭐

**Type**: Reusable Element
**Purpose**: Weekly schedule/calendar selection interface

**Exposed States** (accessible via element references):
1. **Selected Days** - Array of selected days
2. **Nights Number** - Total nights selected
3. **Check-in Day** - Selected check-in day
4. **Checkout Day** - Selected checkout day
5. **Weeks Number** - Number of weeks
6. **Days of Week Selected** - Weekly pattern
7. **Total Price** - Calculated total price

**Data Source**: `Parent group's Listing's Weeks offered`

**Dimensions**:
- Width: 0px - ∞ (flexible)
- Height: Fits content

#### Supporting Elements

**Group J** - Calculation helpers (hidden group for logic)

**G: Listing Schedule Selector** - Container with:
- **G: Icon and night selector** - Night count display
- **G: Week needed** - Week requirement messaging
- **G: checkboxes confirmation** - Confirmation checkboxes
- **T: Price per Night: Bid** - Dynamic price display

#### Dynamic Expressions (Examples)

```
clone2-listing schedule selector for Step4's Selected Days (days):count days
clone2-listing schedule selector for Step4's Nights Number
clone2-listing schedule selector for Step4's Check-in Day:formatted as Dec 25
clone2-listing schedule selector for Step4's Checkout Day:formatted as Fri
clone2-listing schedule selector for Step4's Weeks Number
clone2-listing schedule selector for Step4's Days of Week Selected:join with ,
clone2-listing schedule selector for Step4's Total Price:formatted as $61,715
```

#### Implementation Notes
- Most complex step with calendar interface
- Reusable schedule selector component is the core
- Multiple calculated fields based on selections
- Confirmation checkboxes required before proceeding
- Real-time price calculations
- Weekly pattern selection (which days of week)

---

### Step 5: Final Confirmation

**Reference**: `STEP-5-COMPLETE.md`
**Total Elements**: 2 (parent + 1 child)

#### Parent Group: G: step 5

**Visibility Logic**:
- **Condition 1**: `This Group is visible` → Border: None (OFF)
- **Condition 2**: `G: Create proposal flow's step is not 5` → Hide element (OFF)

**Key Properties**:
- Width: 96%
- Height: 0px - 81px (flexible)
- Border: Dotted, 1px, #6B6B6B
- Layout: Column, centered
- Visible on page load, collapses when hidden

#### Child: T: Days selected confirmation

**Content**:
```
Are you sure you want [nights_per_week] nights per week and to check out on [checkout_day]?
```

**Dynamic Values**:
- `[nights_per_week]`: From Step 4 selections
- `[checkout_day]`: From Step 4 selections

#### Implementation Notes
- Step 5 is the simplest step
- Read-only confirmation text
- Verifies key selections from Step 4
- No user input required
- "Next" button from this step triggers submission workflow
- Price breakdown visible (from parent container, not part of Step 5)

---

## Supporting Sections

### Group Listing (Navigation Buttons)

**Reference**: `REMAINING-SECTIONS.md`

**Purpose**: Houses the main navigation buttons for the flow

**Children**:
1. **B: Go back a step** - Navigation button to previous step
2. **B: Submit Proposal** - Final submission button

**Properties**:
- Layout: Row layout for horizontal button arrangement
- Always visible (no conditionals on parent)
- Button states likely controlled by workflow logic

---

### G: Information about need to check checkboxes

**Reference**: `REMAINING-SECTIONS.md`

**Purpose**: Validation messaging for checkbox requirements

**Key Properties**:
- Fixed width: 283px
- Border: Dotted, 1px, #6B6B6B, 10px roundness

**Conditionals** (1 rule):
- When visible: Border style changes to None

**Child**: T: information about need to check checkboxes

**Purpose**: Displays validation message when required checkboxes aren't checked

---

### G: Collapse Mobile and CONFIG

**Reference**: `REMAINING-SECTIONS.md`

**Purpose**: Responsive behavior and development configuration

**Key Properties**:
- Width: Responsive (96% default)
- Height: 0px - ∞ (flexible)

**Conditionals** (4 rules):
1. **Responsive**: `Current page width < 1200` → Element becomes visible
2. **Visibility Control**: Based on configuration flags
3. **Border Styling**: Conditional border changes
4. **Configuration Flags**: For development/testing

**Child**: G: Host Display Price - Price display for host view

**Purpose**:
- Mobile-specific display configurations
- Development/testing toggles
- Conditional UI elements for different screen sizes

---

## Key Patterns & Conventions

### Naming Conventions

**Prefixes**:
- `G:` - Group element
- `T:` - Text element
- `I:` - Icon element
- `M:` - Multiline input element
- `C:` - Checkbox element
- `B:` - Button element
- `GF:` - Group Focus element
- `P:` - Popup element

**Step Naming**: Inconsistent casing
- Steps 1-3: `G: Step [N]` (capitalized)
- Steps 4-5: `G: step [n]` (lowercase)

### Style Patterns

**Borders**:
- Step containers: Dotted, 2px, #4D4D4D, 10px roundness
- Input fields: Solid, 2px, #4D4D4D, 10px roundness
- Validation messages: Dotted, 1px, #6B6B6B, 10px roundness

**Colors**:
- Primary text: #343A40
- Border gray: #6B6B6B
- Darker border: #4D4D4D
- White backgrounds: #FFFFFF
- Light gray: #CCCCCC

**Dimensions**:
- Container width: Typically 96% for responsiveness
- Fixed desktop popup: 490px
- Flexible heights: 0px - ∞ (fits content)

**Spacing**:
- Consistent 10px padding/margins for related elements
- 15px margins for major sections
- Column layouts with centered alignment

### Conditional Patterns

**Step Visibility**:
```
G: Create proposal flow's step is not [N] → Hide element
```

**Border Removal**:
```
This Group is visible → Border style: None
```

**Responsive**:
```
Current page width < [threshold] → Apply mobile styles
```

### Layout Patterns

**Container Types**:
- **Column**: Vertical stacking (most common)
- **Row**: Horizontal arrangement (buttons, inline elements)
- **Align to parent**: Full-width responsive containers

**Sizing Strategy**:
- Width: Percentage-based (96%, 95%) for responsiveness
- Height: Content-based (0-∞) for flexibility
- Fixed dimensions only for specific UI elements (icons, images)

---

## Data Bindings Summary

### User Data References

**Pattern**: `♻️💥create-proposal-flow's guest user's [field]`

**Fields**:
- `need for Space` (Step 1)
- `About Me / Bio` (Step 1)
- `special needs` (Step 1, conditional)

### Listing Data References

**Pattern**: `Parent group's Listing's [field]`

**Fields**:
- `Weeks offered` (Step 4 - schedule selector data source)
- `Price PER NIGHT` (Step 2 - pricing display)
- `Property Requirements's Refundable Damage Deposit` (Step 2)
- `Actual weekly Maintenance fee` (Step 2)
- `Dates - Blocked` (Step 3 - blocked dates warning)

### Cross-Element References

**Pattern**: `clone2-listing schedule selector for Step4's [state]`

**States** (from reusable element):
- `Selected Days` (days array)
- `Nights Number` (integer)
- `Check-in Day` (date)
- `Checkout Day` (date)
- `Weeks Number` (integer)
- `Days of Week Selected` (text array)
- `Total Price` (number)

### Custom State References

**Pattern**: `G: Create proposal flow's [state]`

**States**:
- `step` (integer: 1-5) - Controls which step is visible
- `isProposal` (boolean) - Determines if in proposal mode

---

## Conditional Logic Summary

### Step Navigation Logic

Each step uses a consistent pattern for visibility:

```
Step 1: Visible when G: Create proposal flow's step = 1
Step 2: Visible when G: Create proposal flow's step = 2 AND isProposal = yes
Step 3: Visible when G: Create proposal flow's step = 3
Step 4: Visible when G: Create proposal flow's step = 4
Step 5: Visible when G: Create proposal flow's step = 5
```

### Validation Logic

**Step 1**: Special Needs section
```
Visible when C: special needs is checked
```

**Step 3**: Weeks Warning
```
Visible when selected weeks < host min OR > host max
```

**Step 3**: Blocked Dates Warning
```
Visible when Parent group's Listing's Dates - Blocked:filtered:count > 0
```

**Step 4**: Confirmation checkboxes
```
Required before proceeding (enforced by workflow)
```

### Responsive Logic

**Mobile breakpoint**: 1000px - 1200px

```
Current page width < 1000:
  - Adjust widths (30% → 90%)
  - Hide certain elements
  - Adjust padding/margins

Current page width < 1200:
  - Show mobile-specific configurations
  - Adjust layout arrangements
```

### Border Styling Pattern

Common pattern across multiple groups:
```
When This Group is visible → Border style: None
```

**Purpose**: Remove dotted placeholder borders once content loads

---

## React Conversion Considerations

### Component Architecture

**Proposed Structure**:
```
<CreateProposalPopup>
  <ProposalHeader />
  <NoRiskBanner />

  <StepContainer currentStep={step}>
    <Step1UserInfo />      // Conditional: step === 1
    <Step2Breakdown />     // Conditional: step === 2 && isProposal
    <Step3DateTime />      // Conditional: step === 3
    <Step4Schedule />      // Conditional: step === 4
    <Step5Confirmation />  // Conditional: step === 5
  </StepContainer>

  <ListingInfo />
  <ValidationMessages />
  <NavigationButtons />

  <OverlayMessages>
    <InfoMessage />
    <MoveInRangeMessage />
    <ProposalLimitMessage />
    <ConfettiAnimation />
    <AdviseToChange />
  </OverlayMessages>
</CreateProposalPopup>
```

### State Management

**Core State**:
```typescript
interface ProposalFlowState {
  // Navigation
  step: 1 | 2 | 3 | 4 | 5;
  isProposal: boolean;

  // Step 1: User Info
  needForSpace: string;
  aboutMe: string;
  hasSpecialNeeds: boolean;
  specialNeeds?: string;

  // Step 3: Date/Duration
  moveInDate: Date;
  moveInFlexible: boolean;
  weeks: number;
  reservationSpanType: string;

  // Step 4: Schedule
  selectedDays: Date[];
  nightsPerWeek: number;
  checkInDay: string;
  checkOutDay: string;
  weeksNumber: number;
  daysOfWeekSelected: string[];
  totalPrice: number;

  // Validation
  errors: Record<string, string>;
  warnings: string[];
}
```

**Actions**:
- `setStep(step: number)`
- `updateUserInfo(field: string, value: any)`
- `updateDateDuration(field: string, value: any)`
- `updateSchedule(scheduleData: ScheduleData)`
- `submitProposal()`
- `goBack()`

### Form Validation

**Step 1 Rules**:
- All fields required
- Minimum 10 words per text field
- Maximum 500 characters per field
- Special needs only required if checkbox checked

**Step 3 Rules**:
- Move-in date required
- Weeks must be >= host minimum
- Weeks must be <= host maximum
- Show warning if out of range

**Step 4 Rules**:
- At least one day must be selected
- Confirmation checkboxes must be checked
- Selected dates cannot overlap with blocked dates

### Conditional Rendering

**Pattern**:
```jsx
{step === 1 && <Step1UserInfo />}
{step === 2 && isProposal && <Step2Breakdown />}
{step === 3 && <Step3DateTime />}
{step === 4 && <Step4Schedule />}
{step === 5 && <Step5Confirmation />}
```

### Styling Strategy

**Approach**: CSS-in-JS or CSS Modules

**Key Classes**:
```css
.step-container {
  width: 96%;
  border: 2px dotted #4D4D4D;
  border-radius: 10px;
}

.step-container--visible {
  border-style: solid; /* or none */
}

.input-field {
  border: 2px solid #4D4D4D;
  border-radius: 10px;
  padding: 10px;
}

.validation-message {
  color: #D9534F; /* error red */
  border: 1px dotted #6B6B6B;
  border-radius: 10px;
  padding: 10px;
}
```

### Data Fetching

**Required Data**:
- User profile (for Step 1 pre-fill)
- Listing details (for all steps)
- Listing availability (for Step 3 blocked dates)
- Pricing calculations (for Step 2, Step 4)

**API Endpoints Needed**:
```
GET /api/user/profile
GET /api/listing/:id
GET /api/listing/:id/availability
GET /api/listing/:id/pricing
POST /api/proposal/create
```

### Integration Points

**Schedule Selector Component**:
- Must replicate "clone2-listing schedule selector for Step4"
- Or create new calendar component with same functionality
- Expose same state values for other components to consume

**ChatGPT Integration**:
- Step 1 may use AI assistance for text fields
- Workflow likely includes "Send Message to ChatGPT" actions

**LottieFiles Animation**:
- Confetti animation on successful submission
- Requires Lottie library integration

### Responsive Breakpoints

**Tablet/Mobile**: < 1200px
- Adjust container widths
- Stack elements vertically
- Adjust padding/margins

**Mobile**: < 1000px
- Reduce widths further (90%)
- Hide certain elements
- Simplify layouts

### Accessibility Considerations

**Keyboard Navigation**:
- Tab order should follow step sequence
- Focus management between steps

**Screen Readers**:
- Announce step changes
- Label all form fields
- Describe validation errors

**ARIA**:
```jsx
<div role="dialog" aria-labelledby="proposal-title">
  <div role="tabpanel" aria-labelledby={`step-${step}-label`}>
    {/* Step content */}
  </div>
</div>
```

### Performance Optimizations

**Code Splitting**:
- Lazy load each step component
- Only load schedule selector when Step 4 is reached

**Memoization**:
- Memo expensive calculations (pricing, date formatting)
- Memo step components that don't change

**Debouncing**:
- Debounce text input validation
- Debounce auto-save operations

### Testing Strategy

**Unit Tests**:
- Validation logic
- State transitions
- Data formatting functions

**Integration Tests**:
- Step navigation
- Form submission
- Data persistence

**E2E Tests**:
- Complete proposal flow (all 5 steps)
- Error handling and validation
- Responsive behavior

---

## Summary Statistics

**Total Elements Documented**: 50+
**Total Conditionals**: 30+
**Total Data Bindings**: 25+
**Total Screenshots**: 60+

**Extraction Time**: ~4 hours
**Documentation Files Created**: 15+

---

## File References

All detailed documentation files:

1. `ROOT-ELEMENT-PROPERTIES.md` - Root popup element
2. `INFORMATIONAL-TEXT-DOCUMENTATION.md` - Overlay 1
3. `OVERLAY-ELEMENTS-2-5.md` - Overlays 2-5
4. `MAIN-CONTAINER-AND-HEADER.md` - Main container + header
5. `NO-RISK-TO-PROPOSE.md` - Risk-free messaging section
6. `STEP-1-COMPLETE.md` - User information step (17 elements)
7. `STEP-2-COMPLETE.md` - Reservation display step (13 fields)
8. `STEP-3-COMPLETE.md` - Date/duration selection step (10 elements)
9. `STEP-4-COMPLETE.md` - Schedule selection step (15+ elements)
10. `STEP-5-COMPLETE.md` - Final confirmation step (2 elements)
11. `REMAINING-SECTIONS.md` - Supporting sections (navigation, validation, mobile)

All screenshots available in: `.playwright-mcp/` directory

---

**Next Step**: Workflow Tab Extraction

The Design tab extraction is complete. Next phase will document all 37 workflows to understand the behavioral logic that drives this UI.
