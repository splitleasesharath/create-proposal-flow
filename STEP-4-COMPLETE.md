# G: step 4 - Complete Documentation

## Overview
Step 4 is the schedule/calendar selection step in the create-proposal-flow. This is where users confirm their typical weekly schedule by selecting which days they want to stay and viewing pricing information.

**Element Name:** `G: step 4`
**Type:** Group (Container)
**Purpose:** Schedule confirmation and weekly pattern selection with calendar functionality

---

## Appearance Properties

### Style
- **Style:** None (Custom)
- **Opacity:** 100%
- **Background style:** None
- **Border style (all borders):** Dotted
- **Border roundness:** 0
- **Border width:** 1px
- **Border color:** #6B6B6B
- **Shadow style:** None

### Dimensions
- **Width:** 96%
- **Height:** 0px - inf (flexible height, fits content)

### Data & Behavior
- **Type of content:** (No specific type defined)
- **Data source:** Click
- **This element isn't clickable:** Enabled
- **Transitions:** None defined

---

## Layout Properties

### Container Settings
- **Container layout:** Column
- **Container alignment:** Top-aligned (default)
- **Gap spacing:** Not applied

### Visibility & Collapse
- **Visible on page load:** Yes (checked)
- **Collapse when hidden:** Yes (checked)
- **Animate collapse:** Not enabled

### Parent Container Settings
- **Parent container type:** Column
- **Horizontal alignment:** Centered

### Sizing
- **Make this element fixed-width:** Yes (checked)
- **Width:** 96%
- **Make this element fixed-height:** Not enabled
- **Min height:** 0px
- **Max height:** inf
- **Fit height to content:** Yes (checked)
- **Allow vertical scrolling:** Yes (checked)

### Margins (all 0px)
- **Top:** 0px
- **Bottom:** 0px
- **Left:** 0px
- **Right:** 0px

### Padding (all 0px)
- **Top:** 0px
- **Bottom:** 0px
- **Left:** 0px
- **Right:** 0px

---

## Conditional Rules (2)

### Conditional Rule 1 - Visibility Control
- **Status:** OFF
- **When:** `G: Create proposal flow's step is not 4`
- **Then:** This element is visible (unchecked - meaning it's HIDDEN when step is not 4)
- **Additional properties:** None selected

### Conditional Rule 2 - Border Style
- **Status:** OFF
- **When:** `This Group is visible`
- **Then:** Border style - all borders = None
- **Additional properties:** None selected

---

## Child Elements

### 1. Group J
**Purpose:** Contains helper elements for calculations and data management

**Children:**
- **T: Move out date** - Text element displaying move-out date
- **G: Listing to save 4 week compensation** - Group for 4-week calculation logic
- **G: Proposal process - nightly price** - Group containing nightly price calculations

---

### 2. G: Listing Schedule Selector
**Purpose:** Main container for the schedule selection interface

**Children:**

#### 2.1. G: Icon and night selector
**Purpose:** Container for calendar icon and night selection UI
**Conditional:** 1 rule - Border style changes when visible

**Children:**
- **IM: Calendar-Desktop 2 listing** - Image element showing calendar icon
- **clone2-listing schedule selector for Step4** - REUSABLE ELEMENT (see detailed section below)

#### 2.2. G: Week needed
**Purpose:** Displays weeks available information

#### 2.3. G: checkboxes confirmation
**Purpose:** Contains confirmation checkboxes for:
- Selected days count and nights number
- Check-out day confirmation

#### 2.4. T: Price per Night: Bid
**Purpose:** Displays the calculated price per night

---

## KEY COMPONENT: clone2-listing schedule selector for Step4

### Overview
This is a **REUSABLE ELEMENT** that handles the core schedule selection functionality. It's the calendar/weekly pattern selector component.

### Properties
- **Type:** Reusable Element
- **Data source:** `♻️💥create-proposal-flow's listing`
- **Dimensions:**
  - Width: 264px
  - Height: 42px - inf

### Key States/Custom States Referenced

Based on the visible text references in the UI, this component exposes the following states:

1. **Selected Days (days)** - List of days selected by user
2. **Nights Number (num)** - Number of nights selected
3. **Selected Check In Day (days)** - Check-in day
4. **Selected Check Out Day (days)** - Check-out day
5. **Total Reservation Price** - Calculated total price
6. **4 Week Rent** - Four-week rental amount
7. **Actual Weeks During Reservation Span** - Calculated weeks
8. **Initial Reservation Payment** - First payment amount

### Data References Used
The reusable element references:
- `Parent group's Listing` - The listing being proposed for
- `Parent group's Listing's Weeks offered` - Available weekly patterns
- `Parent group's Listing's Dates - Blocked` - Blocked dates
- `Parent group's Days` - Days of the week data
- `♻️💥create-proposal-flow's other reservation span weeks number` - Reservation length

---

## Visual Content & User Experience

### Header
**Text:** "Please confirm your typical weekly schedule"

### Calendar Icon Section
- Calendar/date icon (IM: Calendar-Desktop 2 listing)
- Visual representation of the weekly pattern selector

### Weekly Pattern Selector
Shows 7-day week representation with selectable days:
- Displays: `Parent group's Days's Single Letter` (S M T W T F S format)
- Users can select/deselect days

### Information Display

**Weeks Available:**
`Weeks Available: Parent group's Listing's Weeks offered's Display`

### Confirmation Checkboxes

**Checkbox 1:**
`*clone2-listing schedule selector for Step4's Selected Days (days):count days, clone2-listing schedule selector for Step4's Nights Number (num) nights selected`

**Checkbox 2:**
`*Check out day is clone2-listing schedule selector for Step4's Selected Check Out Day (days) 's Display`

### Price Display
**Text:** `Price per Night: G: Proposal process - nightly price's number:formatted as $1,028.58`

---

## Dynamic Text References

Throughout Step 4, the following dynamic text expressions are used:

1. **Weeks Available Display:**
   ```
   Parent group's Listing's Weeks offered's Display
   ```

2. **Selected Days Count:**
   ```
   clone2-listing schedule selector for Step4's Selected Days (days):count days
   ```

3. **Nights Number:**
   ```
   clone2-listing schedule selector for Step4's Nights Number (num) nights selected
   ```

4. **Check-out Day:**
   ```
   clone2-listing schedule selector for Step4's Selected Check Out Day (days) 's Display
   ```

5. **Check-in Day:**
   ```
   clone2-listing schedule selector for Step4's Selected Check In Day (days)'s Display
   ```

6. **Total Reservation Price:**
   ```
   clone2-listing schedule selector for Step4's Total Reservation Price:formatted as $1,028.58
   ```

7. **4 Week Rent:**
   ```
   clone2-listing schedule selector for Step4's 4 Week Rent:formatted as $1,028.58
   ```

8. **Actual Weeks Used:**
   ```
   clone2-listing schedule selector for Step4's Actual Weeks During Reservation Span:ceiling weeks
   ```

9. **Number of Reserved Nights Calculation:**
   ```
   ♻️💥create-proposal-flow's other reservation span weeks number / Parent group's Listing's Weeks offered's period:ceiling * clone2-listing schedule selector for Step4's Selected Nights (nights):count
   ```

10. **Initial Payment:**
    ```
    clone2-listing schedule selector for Step4's Initial Reservation Payment:formatted as $1,028.58
    ```

---

## Confirmation Message Display

**Confirmation Prompt:**
```
Are you sure you want [clone2-listing schedule selector for Step4's Nights Number (num)] nights per week and to check out on [clone2-listing schedule selector for Step4's Selected Check Out Day (days) 's Display]?
```

---

## Price Breakdown Section

The price summary displays:

1. **Approx Move-in:** `D: Move-in bid date 1's value:formatted as Tue, Nov 11, 2025`
2. **Check-in:** `clone2-listing schedule selector for Step4's Selected Check In Day (days)'s Display`
3. **Check-out:** `clone2-listing schedule selector for Step4's Selected Check Out Day (days) 's Display`
4. **Reservation span (weeks):** `♻️💥create-proposal-flow's other reservation span weeks number`
5. **Weekly Pattern:** `Parent group's Listing's Weeks offered's Display`
6. **Actual Weeks Used:** `clone2-listing schedule selector for Step4's Actual Weeks During Reservation Span:ceiling weeks`
7. **Price per night:** `G: Proposal process - nightly price's number:formatted as $1,028.58`
8. **Number of reserved nights:** Calculated value
9. **Total price for reservation:** *excluding Maintenance Fee and Damage Deposit
10. **Price per 4 weeks:** `clone2-listing schedule selector for Step4's 4 Week Rent:formatted as $1,028.58`
11. **Refundable* Damage Deposit:** `+ Parent group's Listing's 💰Damage Deposit:formatted as $1,028.58`
12. **Maintenance Fee / 4 wks:** `+ Parent group's Listing's 💰Cleaning Cost / Maintenance Fee:formatted as $1,028.58`
13. **Price for the 1st 4 weeks:** `clone2-listing schedule selector for Step4's Initial Reservation Payment:formatted as $1,028.58`

---

## Navigation
- **Go back button** - Returns to previous step
- **Next button** - Proceeds to next step

---

## Integration Points

### Data Flow IN:
- Listing data from `♻️💥create-proposal-flow's listing`
- Reservation span from `♻️💥create-proposal-flow's other reservation span weeks number`
- Available weeks from `Parent group's Listing's Weeks offered`
- Blocked dates from `Parent group's Listing's Dates - Blocked`
- Nightly price from `G: Proposal process - nightly price`
- Move-in date from earlier steps

### Data Flow OUT:
- Selected days pattern
- Selected check-in/check-out days
- Nights number per week
- Total reservation price
- 4-week rent amount
- Actual weeks during reservation
- Initial payment amount

---

## Key Features

1. **Calendar/Weekly Pattern Selection** - Visual selection of days per week
2. **Dynamic Pricing Calculation** - Real-time price updates based on selection
3. **Validation Checkboxes** - User confirmation of selected pattern
4. **Price Breakdown Display** - Detailed cost information
5. **Flexible Schedule** - Supports various weekly patterns
6. **Blocked Dates Display** - Shows host-restricted dates

---

## Technical Notes

- Uses a reusable element (`clone2-listing schedule selector for Step4`) for the core functionality
- Visibility is controlled by step number (conditional: when step is not 4, element is hidden)
- Border style changes when visible (conditional rule 2)
- Heavy use of dynamic expressions for pricing and date calculations
- Multiple plugin iframes for advanced functionality (JS2Bubble for custom JavaScript integration)

---

## Screenshots Reference

See captured screenshots:
1. `step4-appearance.png` - Appearance tab properties
2. `step4-layout.png` - Layout tab properties
3. `step4-conditional.png` - Conditional rules
4. `step4-clone2-reusable-appearance.png` - Clone2 reusable element properties
5. `step4-complete-overview.png` - Full step 4 overview

---

## Related Elements

- **Parent:** `G: Create proposal flow`
- **Siblings:** G: Step 1, G: Step 2, G: Step 3, G: step 5
- **Key Dependency:** `clone2-listing schedule selector for Step4` (reusable element)

---

*Documentation extracted: 2025-11-11*
*Source: Bubble.io Editor - create-proposal-flow element*
