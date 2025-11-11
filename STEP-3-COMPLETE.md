# G: Step 3 - Complete Documentation

## Overview
**Element Name:** G: Step 3
**Element Type:** Group (Container)
**Parent:** G: Create proposal flow
**Purpose:** Third step of the proposal creation flow - collects move-in date, reservation length, and blocked dates information

---

## Main Container Properties

### Type & Data Source
- **Type of content:** Listing
- **Data source:** ♻️💥create-proposal-flow's listing

### Appearance

#### Style
- **Style:** None (Custom)
- **Opacity:** 100%

#### Background
- **Background style:** None

#### Border
- **Border style:** Dotted (all borders)
- **Border width:** 1px
- **Border color:** #6B6B6B
- **Roundness:** 0px

#### Shadow
- **Shadow style:** None

#### Dimensions
- **Width:** 96%
- **Height:** 0px - inf (flexible height)

### Layout

#### Container Settings
- **Container layout:** Column
- **Container alignment:** Top-aligned (default)
- **Gap spacing:** Not applied
- **Element visibility:** This element is visible on page load ✓
- **Collapse when hidden:** ✓ (checked)
- **Animate collapse:** Not checked

#### Parent Container
- **Parent type:** Column
- **Horizontal alignment:** Left-aligned (default)

#### Sizing
- **Fixed-width:** ✓ (checked)
- **Width:** 96%
- **Fixed-height:** Not checked
- **Min height:** 0px
- **Max height:** inf
- **Fit height to content:** ✓ (checked)
- **Allow vertical scrolling:** ✓ (checked when content overflows)

#### Spacing
**Margins:**
- Top: 0px
- Bottom: 0px
- Left: 0px
- Right: 0px

**Padding:**
- Top: 0px
- Bottom: 0px
- Left: 0px
- Right: 0px

### Conditionals

#### Conditional 1 - Visibility Control
- **Status:** OFF
- **When:** `G: Create proposal flow's step is not 3`
- **Then:** This element is visible (unchecked - element becomes hidden)

#### Conditional 2 - Border Removal
- **Status:** OFF
- **When:** `This Group is visible`
- **Then:** Border style - all borders = None

---

## Child Elements

### 1. G: Start Date

**Element Type:** Group (Container)
**Purpose:** Contains the move-in date selection interface

#### Appearance
- **Type of content:** (None specified)
- **Data source:** Click
- **Style:** None (Custom)
- **Opacity:** 100%
- **Background style:** None

#### Border
- **Border style:** Solid (all borders)
- **Border width:** 2px
- **Border color:** Text (#4D4D4D)
- **Roundness:** 10px

#### Shadow
- **Shadow style:** None

#### Dimensions
- **Width:** 98%
- **Height:** 0px - 200px

#### ID Attribute
- **ID:** MoveInProposalMobile

#### Child Elements
The following elements are nested within "G: Start Date":
1. **T: Approx Move In** - Text element displaying "Approx Move-in" label
2. **H: HTML pulse move in** - HTML element with pulse animation
3. **G: move in texts** - Group containing informational text about move-in flexibility
4. **Group K** - Additional container for move-in date input components

#### Content Display
The visual interface shows:
- **Label:** "Approx Move-in"
- **Info text:** "Your move in date depends on this listing's availability. Let us know if you have any move-in flexibility"
- **Input field:** "Move-in From" (date picker)
- **Additional info:** "Move-in Range" (displayed in iframe/plugin)

---

### 2. G: Reservation span

**Element Type:** Group (Container)
**Purpose:** Contains reservation length selection (weeks)

#### Appearance
- **Type of content:** (None specified)
- **Data source:** Click
- **Style:** None (Custom)
- **Opacity:** 100%
- **Background style:** None

#### Border
- **Border style:** Solid (all borders)
- **Border width:** 2px
- **Border color:** Text (#4D4D4D)
- **Roundness:** 10px

#### Shadow
- **Shadow style:** None

#### Dimensions
- **Width:** 98%
- **Height:** 120px - 200px

#### Content Display
The visual interface shows:
- **Label:** "Reservation Length"
- **Dropdown:** "Reservation Span" selector
- **Input field:** "Enter # Weeks" textbox

---

### 3. G: Weeks Warning

**Element Type:** Group (Container)
**Purpose:** Displays warning when selected weeks exceed host preferences

#### Appearance
- **Type of content:** Listing
- **Data source:** ♻️💥create-proposal-flow's listing
- **Style:** None (Custom)
- **Opacity:** 100%
- **Background style:** None

#### Border
- **Border style:** Dotted (all borders)
- **Border width:** 1px
- **Border color:** #6B6B6B
- **Roundness:** 0px

#### Shadow
- **Shadow style:** None

#### Dimensions
- **Width:** 100%
- **Height:** 0px - 49px

#### Conditionals

##### Conditional 1 - Visibility Based on Week Selection
- **Status:** OFF
- **When:**
  - `G: Proposed Weeks proposal flow's number <= Parent group's Listing's Maximum Weeks`
  - AND
  - `G: Proposed Weeks proposal flow's number >= Parent group's Listing's Minimum Weeks`
- **Then:** This element is visible (unchecked - element becomes hidden when weeks are within acceptable range)

##### Conditional 2 - Border Removal When Visible
- **Status:** OFF
- **When:** `This Group is visible`
- **Then:** Border style - all borders = None

#### Content Display
The warning message shows:
> "Note: You have selected more weeks than the host would like, lowering your chances of the proposal being accepted."

---

### 4. G: blocked dates inside proposal flow

**Element Type:** Group (Container)
**Purpose:** Displays information about nights restricted by the host

#### Appearance
- **Type of content:** Listing
- **Data source:** Parent group's Listing
- **Style:** None (Custom)
- **Opacity:** 100%
- **Background style:** None

#### Border
- **Border style:** Solid (all borders)
- **Border width:** 2px
- **Border color:** Text (#4D4D4D)
- **Roundness:** 10px

#### Shadow
- **Shadow style:** None

#### Dimensions
- **Width:** 98%
- **Height:** 0px - inf (flexible)

#### Conditionals

##### Conditional 1 - Hide When No Blocked Dates
- **Status:** OFF
- **When:** `Parent group's Listing's Dates - Blocked:filtered:count is 0`
- **Then:** This element is visible (unchecked - element becomes hidden when there are no blocked dates)

#### Content Display
The interface shows:
- **Heading:** "Desired Nights Restricted by Host"
- **Dynamic text:** `Parent group's Listing's Dates - Blocked:filtered:format as text`
- **Warning message (in red):** "You will have the option to either accept these restrictions or request these restrictions being removed during negotiations."

---

## Data Flow & User Interaction

### What Data is Collected in Step 3?

1. **Move-in Date:**
   - Approximate move-in date selection
   - Move-in flexibility indication
   - Data binding: Uses date picker input field

2. **Reservation Length:**
   - Number of weeks for the reservation
   - Dropdown for "Reservation Span"
   - Text input for entering number of weeks
   - Validation against host's minimum/maximum weeks preferences

3. **Blocked Dates Awareness:**
   - Displays dates that are restricted by the host
   - Shows count of blocked dates
   - Informs user about negotiation options

### Input Fields & Components

1. **Date Picker:**
   - Field: "Move-in From"
   - Type: Date selection
   - Purpose: Set approximate move-in date

2. **Dropdown:**
   - Field: "Reservation Span"
   - Type: Combobox/Dropdown
   - Purpose: Select reservation duration type

3. **Text Input:**
   - Field: "Enter # Weeks"
   - Type: Number input
   - Purpose: Specify exact number of weeks

### Validation Rules

1. **Week Range Validation:**
   - Compares: `G: Proposed Weeks proposal flow's number`
   - Against: `Parent group's Listing's Maximum Weeks` and `Minimum Weeks`
   - Action: Shows warning if outside acceptable range

2. **Blocked Dates Check:**
   - Checks: `Parent group's Listing's Dates - Blocked:filtered:count`
   - Action: Hides blocked dates section if count is 0

### Conditional Visibility Logic

#### G: Step 3 Main Container
- **Shows when:** `G: Create proposal flow's step = 3`
- **Hides when:** Step is not 3
- **Border removal:** When the group is visible, removes dotted border

#### G: Weeks Warning
- **Shows when:** Selected weeks are OUTSIDE the host's acceptable range
- **Hides when:** Selected weeks are within `Minimum Weeks` to `Maximum Weeks`

#### G: blocked dates inside proposal flow
- **Shows when:** There are blocked dates (`count > 0`)
- **Hides when:** No blocked dates exist (`count = 0`)

---

## Design Patterns

### Consistent Border Styling
All input containers use:
- 2px solid border
- Text color (#4D4D4D)
- 10px border radius
- 98% width

### Warning/Info Styling
Warning containers use:
- Dotted border (1px)
- Gray color (#6B6B6B)
- 0px border radius
- Full width (100%)

### Spacing & Layout
- All elements use Column layout
- 0px margins and padding (tight spacing)
- Top-aligned content
- Flexible heights with min/max constraints

---

## Screenshots Reference

The following screenshots were captured during the documentation process:

1. **step3-appearance.png** - Main G: Step 3 Appearance properties
2. **step3-layout.png** - Main G: Step 3 Layout properties
3. **step3-conditionals.png** - Main G: Step 3 Conditional rules
4. **step3-full-tree-expanded.png** - Complete element tree structure
5. **step3-child-start-date-appearance.png** - G: Start Date properties
6. **step3-child-reservation-span.png** - G: Reservation span properties
7. **step3-child-weeks-warning.png** - G: Weeks Warning appearance
8. **step3-child-weeks-warning-conditionals.png** - G: Weeks Warning conditionals
9. **step3-child-blocked-dates-appearance.png** - G: blocked dates appearance
10. **step3-child-blocked-dates-conditionals.png** - G: blocked dates conditionals

---

## Summary

**G: Step 3** is a critical step in the proposal creation flow that collects:
- Move-in date preferences and flexibility
- Reservation duration in weeks
- Awareness of host-imposed restrictions (blocked dates and week limits)

The step provides real-time validation feedback through conditional warnings and adapts its display based on the listing's specific constraints. All data collected feeds into the proposal negotiation process that follows in subsequent steps.

**Key Features:**
- Dynamic visibility based on step progression
- Intelligent warnings for out-of-range selections
- Conditional display of blocked dates information
- Consistent visual design with border-based containers
- Flexible height containers that adapt to content
- Mobile-optimized with ID "MoveInProposalMobile" on the date section
