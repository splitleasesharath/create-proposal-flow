# G: Step 2 - Complete Documentation

## Overview
"G: Step 2" is the second step in the create-proposal-flow, responsible for displaying the reservation details breakdown during the proposal creation process.

---

## G: Step 2 (Parent Container)

### Element Type
Group

### Data Source
- **Type of content**: (Empty)
- **Data source**: Click

### Appearance Properties

#### Style
- **Style**: None (Custom)
- **Opacity**: 100%

#### Background
- **Background style**: None

#### Border
- **Define each border independently**: No
- **Border style - all borders**: Dotted
- **Roundness**: 0
- **Width**: 1px
- **Color**: #6B6B6B

#### Shadow
- **Shadow style**: None

#### Dimensions
- **Width**: 96%
- **Height**: 0px - 655px (Min: 0px, Max: 655px)

### Layout Properties

#### Container Layout
- **Container layout**: Align to parent
- **This element is visible on page load**: Checked
- **Collapse when hidden**: Checked
- **Animate the collapse operation**: Not checked

#### Parent Container
- **Parent container type**: Column (edit)
- **Horizontal alignment**: (alignment options available)

#### Element Positioning
- **Make first**: Available
- **Previous**: Available
- **Next**: Available
- **Make last**: Available

#### Dimensions
- **Make this element fixed-width**: Checked
- **Width**: 96%
- **Make this element fixed-height**: Not checked
- **Min height**: 0px
- **Max height**: 655px
- **Fit height to content**: Checked
- **Allow vertical scrolling when content overflows**: Not checked

#### Margins
- **Top**: 0px
- **Bottom**: 0px
- **Left**: 0px
- **Right**: 0px

#### Padding
- **Top**: 0px
- **Bottom**: 0px
- **Left**: 0px
- **Right**: 0px

### Conditional Properties (2 conditions)

#### Condition 1
- **Status**: OFF
- **When**: `G: Create proposal flow's step is not 2` **or** `G: Create proposal flow's isProposal is no`
- **Property Changed**: This element is visible (unchecked - element becomes invisible)
- **Actions**: move down, delete available

#### Condition 2
- **Status**: OFF
- **When**: This Group is visible
- **Property Changed**: Border style - all borders = None
- **Actions**: move up, move down, delete available

### Element Properties
- **This element isn't clickable**: True
- **Add workflow**: Available
- **Transitions**: Select a property to define a new transition

### Actions Available
- Replace
- Delete
- Select parent/child
- Reveal in the Elements tree
- Lock this element (not draggable in editor)

### ID Attribute
- Available for configuration

---

## Child Elements

### G: Reservation Details Breakdown

#### Element Type
Group

#### Data Source
- **Type of content**: Listing
- **Data source**: ♻️💥create-proposal-flow's listing

#### Appearance Properties

##### Style
- **Style**: None (Custom)
- **Opacity**: 100%

##### Background
- **Background style**: Flat color
- **Background color**: Primary contrast (#FFFFFF)

##### Border
- **Define each border independently**: No
- **Border style - all borders**: Solid
- **Roundness**: 10
- **Width**: 1px
- **Color**: #6B6B6B

##### Shadow
- **Shadow style**: None

##### Dimensions
- **Width**: 98%
- **Height**: 50px - 634px (Min: 50px, Max: 634px)

#### Layout Properties

##### Container Layout
- **Container layout**: Column
- **Container alignment**: Options available (Top-aligned, Centered, Bottom-aligned, Space around, Space between)
- **Apply gap spacing between elements**: Not checked

##### Visibility
- **This element is visible on page load**: Checked
- **Collapse when hidden**: Checked
- **Animate the collapse operation**: Not checked

##### Parent Container
- **Parent container type**: Align to parent (edit)
- **Alignment options**: 9 alignment positions available (grid layout)

##### Dimensions
- **Make this element fixed-width**: Checked
- **Width**: 98%
- **Make this element fixed-height**: Not checked
- **Min height**: 50px
- **Max height**: 634px
- **Fit height to content**: Checked
- **Allow vertical scrolling when content overflows**: Not checked

##### Margins
- **Top**: 5px
- **Bottom**: 5px
- **Left**: 5px
- **Right**: 5px

##### Padding
- **Top**: 0px
- **Bottom**: 0px
- **Left**: 0px
- **Right**: 0px

#### Conditional Properties (1 condition)

##### Condition 1
- **Status**: OFF
- **When**: This Group is visible
- **Property Changed**: Border style - all borders = None
- **Actions**: delete available

#### Element Properties
- **This element isn't clickable**: True
- **Add workflow**: Available
- **Transitions**: Select a property to define a new transition

#### Actions Available
- Replace
- Delete
- Select parent/child
- Reveal in the Elements tree
- Lock this element (not draggable in editor)

#### ID Attribute
- Available for configuration

#### Display Content
This group displays the reservation price breakdown with the following fields (based on visual inspection):

1. **Approx Move-in**: D: Move-in bid date value (formatted as date)
2. **Check-in**: clone2-listing schedule selector for Step4's Selected Check In Day (days)'s Display
3. **Check-out**: clone2-listing schedule selector for Step4's Selected Check Out Day (days)'s Display
4. **Reservation span (weeks)**: ♻️💥create-proposal-flow's other reservation span weeks number
5. **Weekly Pattern**: Parent group's Listing's Weeks offered's Display
6. **Actual Weeks Used**: clone2-listing schedule selector for Step4's Actual Weeks During Reservation Span:ceiling weeks
7. **Price per night**: G: Proposal process - nightly price's number:formatted as currency
8. **Number of reserved nights**: Calculated value (x weeks / period * selected nights)
9. **Total price for reservation**: clone2-listing schedule selector for Step4's Total Reservation Price:formatted as currency (excluding Maintenance Fee and Damage Deposit)
10. **Price per 4 weeks**: clone2-listing schedule selector for Step4's 4 Week Rent:formatted as currency
11. **Refundable Damage Deposit**: + Parent group's Listing's Damage Deposit:formatted as currency (*see terms of use)
12. **Maintenance Fee / 4 wks**: + Parent group's Listing's Cleaning Cost / Maintenance Fee:formatted as currency
13. **Price for the 1st 4 weeks incl. Damage Deposit + Maintenance Fees**: Total initial payment calculation with note "and then only [4 Week Rent amount] every 4 weeks"

---

## Purpose and Functionality

### Step 2's Role
G: Step 2 serves as the container for displaying detailed reservation breakdown information in the proposal creation flow. It becomes visible only when:
- The current step is 2 (G: Create proposal flow's step is 2)
- AND the flow is in proposal mode (G: Create proposal flow's isProposal is yes)

### Data Collection
Unlike Step 1 which collects user input, Step 2 is primarily a **display step** that shows:
- Move-in date information
- Reservation dates and schedule
- Price breakdown and calculations
- Damage deposit and maintenance fees
- Total costs and payment structure

### Key Features
1. **Price Transparency**: Shows detailed breakdown of all costs
2. **Date Confirmation**: Displays selected move-in, check-in, and check-out dates
3. **Reservation Summary**: Shows weeks, nights, and weekly pattern
4. **Cost Structure**: Explains initial payment vs. ongoing costs

### Differences from Step 1
- **Step 1**: Collects user information (why they want space, about themselves, unique requirements)
- **Step 2**: Displays calculated reservation details and pricing breakdown
- **Step 1**: Uses input fields, textareas, checkboxes
- **Step 2**: Uses text displays and formatted data from previous steps

### Special Validation/Logic
- Conditionally visible based on step number and proposal mode
- Border styling changes dynamically based on visibility
- Height adjusts to content (50px minimum, 634px maximum)
- All pricing displays use formatted currency values
- References data from "clone2-listing schedule selector for Step4" for calculations

---

## Visual Hierarchy

```
G: Step 2 (Container)
└── G: Reservation Details Breakdown
    ├── Approx Move-in (display field)
    ├── Check-in (display field)
    ├── Check-out (display field)
    ├── Reservation span (display field)
    ├── Weekly Pattern (display field)
    ├── Actual Weeks Used (display field)
    ├── Price per night (display field)
    ├── Number of reserved nights (calculated field)
    ├── [Divider image]
    ├── Total price for reservation (display field)
    ├── Price per 4 weeks (display field)
    ├── Refundable Damage Deposit (display field)
    ├── Maintenance Fee (display field)
    └── Price for 1st 4 weeks (total calculation with note)
```

---

## Screenshots Reference

All screenshots are saved in: `.playwright-mcp/`

### G: Step 2 Screenshots
1. `step2-appearance-tab.png` - Appearance properties
2. `step2-layout-tab.png` - Layout properties
3. `step2-conditional-tab.png` - Conditional logic
4. `step2-expanded-children.png` - Elements tree with children visible

### G: Reservation Details Breakdown Screenshots
1. `reservation-details-appearance.png` - Appearance properties
2. `reservation-details-layout.png` - Layout properties
3. `reservation-details-conditional.png` - Conditional logic

---

## Implementation Notes

### Critical Conditional Logic
The "When step is not 2 or isProposal is no" condition is crucial for controlling when Step 2 appears in the flow. This ensures the reservation breakdown only shows at the appropriate time in the proposal process.

### Data Dependencies
This step heavily depends on:
- `♻️💥create-proposal-flow` reusable element for listing data and step control
- `clone2-listing schedule selector for Step4` for date and schedule selections
- `G: Proposal process` elements for pricing calculations
- Parent group's Listing data for property-specific costs

### Responsive Considerations
- Width is percentage-based (96% and 98%) for responsive behavior
- Height adjusts to content with reasonable min/max constraints
- Margins and padding are minimal to maximize content space
- Border and background provide visual separation from other steps

---

## Summary

G: Step 2 is a display-focused step that provides users with a comprehensive breakdown of their reservation details and associated costs. It serves as a review/confirmation step before proceeding further in the proposal flow. The step contains one main child element (G: Reservation Details Breakdown) which displays all the calculated pricing and reservation information in an organized, easy-to-read format.

The step uses conditional visibility to only appear when appropriate in the flow, and dynamically adjusts its styling based on visibility state. All data displayed is pulled from previous user selections and listing information, with no new data collection occurring in this step.
