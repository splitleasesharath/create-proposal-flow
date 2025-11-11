# Create Proposal Popup - Comprehensive Documentation

## Overview
The "Create Proposal" popup is a multi-step modal dialog that allows guests to submit a rental proposal to property hosts on the Split Lease platform. The modal appears when clicking the "Create Proposal at $[price]/night" button on a property listing page.

**Exploration Date:** 2025-11-11
**URL Tested:** https://app.split.lease/view-split-lease/1701098422128x952084668440117200

---

## Modal Structure

### Technical Details
- **Modal Type:** Fixed position overlay with dark background (rgba(0, 0, 0, 0.7))
- **Z-Index:** 2002
- **CSS Classes:** `greyout ctmaYaT0`
- **Display:** Block (when active)
- **Position:** Fixed, full screen (top: 0, left: 0, width: 100%, height: 100%)

### Visual Design
- White modal card centered on screen
- Document icon in header
- Close button (X) in top-right corner
- Purple accent color for primary actions
- Rounded corners and shadow effect

---

## Multi-Step Flow

The modal consists of **2 main steps** with an optional adjustment screen:

### Step 1: Create Proposal (Initial Information Gathering)
### Step 2: Confirm Proposal (Review and Submit)
### Step 2a: Adjust Proposal (Edit Mode - accessible via "edit" links)

---

## Step 1: Create Proposal

### Header
- **Title:** "Create Proposal"
- **Icon:** Document/paper icon
- **Close Button:** X button in top-right corner

### Informational Text
```
Start the conversation! After submitting a proposal, you'll begin a negotiation
process with the host to finalize the details of your booking.
```
- Icon: Handshake/negotiation icon
- Color: Informational blue

### Form Fields

#### 1. Why do you want this space?
- **Field Type:** Textarea
- **Element ID:** `102`
- **Placeholder:** "How will you use the space? (minimum of 10 words)"
- **Required:** Yes (minimum 10 words)
- **Validation:** Client-side minimum word count
- **Purpose:** Guest explains their reason for wanting the rental

#### 2. Tell us about yourself
- **Field Type:** Textarea
- **Element ID:** `103`
- **Placeholder:** "Please take a moment to share some details about yourself, such as your interests, travel preferences, etc. (minimum of 10 words)"
- **Required:** Yes (minimum 10 words)
- **Validation:** Client-side minimum word count
- **Purpose:** Guest provides personal background information

#### 3. Do you have any unique requirements?
- **Field Type:** Checkbox
- **Element ID:** `1762858213215x33720`
- **Label:** "Do you have any unique requirements?"
- **Default State:** Unchecked
- **Dynamic Behavior:** When checked, reveals additional textarea field

#### 3a. Write your unique requirements (Conditional Field)
- **Field Type:** Textarea
- **Element ID:** `104`
- **Visibility:** Only visible when checkbox "Do you have any unique requirements?" is checked
- **Placeholder:** "Any special needs, personal preference or specific requirements you may have (minimum of 10 words)"
- **Required:** Yes (when visible, minimum 10 words)
- **Purpose:** Guest specifies special needs or preferences

### Action Buttons

#### Next Button
- **Button ID:** `button2`
- **CSS Classes:** `clickable-element bubble-element Button cossaG`
- **Label:** "Next"
- **Color:** Purple (brand color)
- **Style:** Rounded, full-width button
- **Action:** Validates form and proceeds to Step 2

---

## Step 2: Confirm Proposal

### Header
- **Title:** "Confirm Proposal"
- **Icon:** Document/paper icon
- **Close Button:** X button in top-right corner

### Booking Summary - Read-Only Display

#### Approx Move-in
- **Label:** "Approx Move-in"
- **Value Format:** "Mon, Nov 24, 2025" (Day of week, Month Day, Year)
- **Edit Link:** "edit" (clickable, opens adjustment modal)

#### Check-in
- **Label:** "Check-in"
- **Value Format:** "Monday" (Day of week)
- **Edit Link:** "edit" (clickable)

#### Check-out
- **Label:** "Check-out"
- **Value Format:** "Thursday" (Day of week)
- **Edit Link:** "edit" (clickable)

#### Reservation span (weeks)
- **Label:** "Reservation span (weeks)"
- **Value Format:** "13" (numeric)
- **Edit Link:** "edit" (clickable)

### Pricing Breakdown

#### Price per night
- **Label:** "Price per night"
- **Value Format:** "$440.72"
- **Style:** Standard text, no edit option

#### Number of reserved nights
- **Label:** "Number of reserved nights"
- **Value Format:** "x 39" (multiplication notation)
- **Calculation:** Based on check-in days × weeks

#### Separator
- **Visual Element:** Horizontal line/divider image

#### Total price for reservation
- **Label:** "Total price for reservation *excluding Maintenance Fee and Damage Deposit"
- **Value Format:** "$17,188.25"
- **Note:** Asterisk indicates exclusions
- **Font Weight:** Regular

#### Price per 4 weeks
- **Label:** "Price per 4 weeks"
- **Value Format:** "$5,288.69"

#### Refundable Damage Deposit
- **Label:** "Refundable* Damage Deposit"
- **Sub-label:** "*see terms of use" (smaller font, linked)
- **Value Format:** "+ $900.00"
- **Style:** Plus sign indicates addition

#### Maintenance Fee / 4 wks
- **Label:** "Maintenance Fee / 4 wks"
- **Value Format:** "+ $200.00"
- **Style:** Plus sign indicates addition

#### Price for the 1st 4 weeks
- **Label:** "Price for the 1st 4 weeks incl. Damage Deposit + Maintenance Fees"
- **Value Format:** "$6,388.69"
- **Font Weight:** Bold (strong tag)
- **Style:** Final total, most prominent

### Action Buttons

#### Go back Button
- **Button ID:** `button1`
- **CSS Classes:** `clickable-element bubble-element Button cosuj`
- **Label:** "Go back"
- **Style:** White background, outlined
- **Position:** Left side
- **Action:** Returns to Step 1 (preserves entered data)

#### Submit Proposal Button
- **Button ID:** `button2` (or `button3` depending on state)
- **CSS Classes:** `clickable-element bubble-element Button cossaG` (with active state)
- **Label:** "Submit Proposal"
- **Color:** Purple (brand color)
- **Style:** Rounded, solid fill
- **Position:** Right side
- **Action:** Submits the proposal to the host
- **State:** Can show "active" state attribute

---

## Step 2a: Adjust Proposal (Edit Mode)

Accessible by clicking any "edit" link on the Confirm Proposal screen.

### Header
- **Title:** "Adjust Proposal"
- **Icon:** Document/paper icon
- **Close Button:** X button in top-right corner

### Editable Fields

#### Approx Move-in Section
- **Label:** "Approx Move-in"
- **Info Text:** "Your move in date depends on this listing's availability. Let us know if you have any move-in flexibility"
- **Info Icon:** Question mark icon (clickable for tooltip)

##### Move-in From (Date Picker)
- **Field Type:** Date input with picker
- **Display Format:** "11/24/25" (MM/DD/YY)
- **Picker Type:** Calendar grid picker
- **Features:**
  - Month/Year navigation arrows
  - Day grid with disabled past dates
  - "Today" button
  - "Clear" button
  - "× Close" button
  - Weekday headers (Sun-Sat)

##### Move-in Range
- **Field Type:** Text input
- **Placeholder:** " " (empty space)
- **Label:** "Move-in Range" (floating label)
- **Purpose:** Specify flexibility window for move-in date

#### Reservation Length Section
- **Label:** "Reservation Length"
- **Field Type:** Dropdown/Combobox
- **Element Type:** `<select>` with `<option>` elements
- **Current Selection:** "13 weeks (3 months)"

**Available Options:**
- 6 weeks
- 7 weeks
- 8 weeks
- 9 weeks (~2 months)
- 10 weeks
- 12 weeks
- 13 weeks (3 months)
- 16 weeks
- 17 weeks (~4 months)
- 20 weeks
- 22 weeks (~5 months)
- 26 weeks (6 months)
- Other (wks)

### Action Buttons

#### Go back Button
- **Label:** "Go back"
- **Style:** White background, outlined
- **Action:** Returns to Confirm Proposal without saving changes

#### Yes, Continue Button
- **Label:** "Yes, Continue"
- **Color:** Purple (brand color)
- **Style:** Rounded, solid fill
- **Action:** Saves changes and returns to Confirm Proposal screen

---

## Form Fields Summary Table

| Step | Field Name | Type | ID | Required | Min Length | Conditional |
|------|-----------|------|-----|----------|-----------|-------------|
| 1 | Why do you want this space? | Textarea | 102 | Yes | 10 words | No |
| 1 | Tell us about yourself | Textarea | 103 | Yes | 10 words | No |
| 1 | Do you have any unique requirements? | Checkbox | 1762858213215x33720 | No | N/A | No |
| 1 | Write your unique requirements | Textarea | 104 | Yes* | 10 words | Yes** |
| 2a | Move-in From | Date | N/A | Yes | N/A | No |
| 2a | Move-in Range | Text | N/A | No | N/A | No |
| 2a | Reservation Length | Select | N/A | Yes | N/A | No |

*Required only when parent checkbox is checked
**Only visible when "Do you have any unique requirements?" is checked

---

## Button Summary Table

| Step | Button Text | ID | Style | Position | Action |
|------|------------|-----|-------|----------|--------|
| 1 | Next | button2 | Purple, filled | Bottom center | Proceed to Step 2 |
| 2 | Go back | button1 | White, outlined | Bottom left | Return to Step 1 |
| 2 | Submit Proposal | button2/button3 | Purple, filled | Bottom right | Submit proposal |
| 2a | Go back | N/A | White, outlined | Bottom left | Cancel edit |
| 2a | Yes, Continue | N/A | Purple, filled | Bottom right | Save edits |

---

## User Flow

### Standard Flow (Happy Path)
1. User views property listing
2. User configures booking parameters (dates, days, duration) on main page
3. User clicks "Create Proposal at $[price]/night" button
4. **Modal Opens - Step 1:** User fills in all required text fields
5. (Optional) User checks "unique requirements" and fills additional field
6. User clicks "Next"
7. **Modal Shows - Step 2:** User reviews booking summary and pricing
8. (Optional) User clicks "edit" to adjust dates or duration
9. User clicks "Submit Proposal"
10. **Proposal Submitted** (modal closes, likely shows success message)

### Edit Flow
1. From Step 2 (Confirm Proposal)
2. User clicks any "edit" link
3. **Modal Shows - Step 2a:** Adjust Proposal screen appears
4. User modifies move-in date or reservation length
5. User clicks "Yes, Continue"
6. **Returns to Step 2** with updated values
7. User reviews changes
8. User clicks "Submit Proposal"

### Back Navigation Flow
1. From Step 2 (Confirm Proposal)
2. User clicks "Go back"
3. **Returns to Step 1** with all previously entered data preserved
4. User can modify responses
5. User clicks "Next" again
6. **Returns to Step 2** with updated information

---

## Dynamic Behaviors

### 1. Conditional Field Display
- **Trigger:** Checking "Do you have any unique requirements?" checkbox
- **Effect:** Reveals "Write your unique requirements" textarea
- **Reverse:** Unchecking hides the textarea (data may be lost)

### 2. Form Validation
- Minimum 10 words required for all textarea fields
- Validation likely occurs on "Next" button click
- Invalid submissions probably show error messages (not captured in exploration)

### 3. Date Picker
- Past dates are disabled (grayed out)
- Calendar auto-updates to show current month
- Selection updates the displayed date value immediately

### 4. Edit Links
- Each editable field in Step 2 has an "edit" link
- Clicking opens Step 2a with focused editing capability
- Changes can be saved or canceled

### 5. Price Calculations
- Prices update based on selected dates and duration
- Nightly rate × number of nights = subtotal
- Additional fees (maintenance, deposit) added separately
- 4-week pricing shown for reference

---

## UI/UX Design Patterns

### 1. Progressive Disclosure
- Multi-step wizard reduces cognitive load
- Conditional fields appear only when needed
- Edit mode focuses on specific changeable items

### 2. Inline Editing
- Edit links allow quick modifications without starting over
- Preview-then-edit pattern for dates and duration

### 3. Clear Information Hierarchy
- Bold text for final prices
- Labels clearly separated from values
- Grouped related information (dates, pricing)

### 4. Validation Feedback
- Minimum word requirements stated in placeholders
- Required fields clearly marked

### 5. Confirmation Pattern
- Review step before final submission
- Ability to go back and make changes
- Clear final action button ("Submit Proposal")

---

## CSS Classes Used

### Modal Container
- `greyout ctmaYaT0` - Full-screen overlay

### Buttons
- `clickable-element` - Base clickable styling
- `bubble-element` - Bubble.io framework class
- `Button` - Button component class
- `cossaG` - Purple primary button style
- `cosuj` - Secondary/outlined button style
- `ctmaQb0` - Alternative button style

---

## Data Integration Points

### Input Data (from parent page)
- Move-in date (from date picker on listing page)
- Weekly schedule (selected days)
- Reservation span (duration in weeks)
- Price per night (calculated from listing)
- Number of nights (calculated from schedule × weeks)

### Output Data (on submission)
- Guest message (why they want the space)
- Guest bio (about themselves)
- Special requirements (if any)
- Confirmed move-in date
- Confirmed check-in/check-out days
- Confirmed reservation length
- Accepted pricing structure

### Backend Integration
- Likely sends proposal data via API call on "Submit Proposal"
- May create notification for host
- Probably creates conversation thread
- Could trigger email notifications

---

## Accessibility Considerations

### Observed Features
- Semantic button elements
- Input labels properly associated
- Placeholder text provides guidance
- Checkbox with text label

### Potential Improvements Needed
- Modal should have `role="dialog"`
- Focus management when modal opens/closes
- Keyboard navigation support (Esc to close)
- Screen reader announcements for step changes
- ARIA labels for icon-only buttons (X close button)

---

## Technical Implementation Notes

### Framework
- Built with Bubble.io (evident from CSS class naming)
- Uses Bubble's element system (`bubble-element`)
- Custom IDs appear to be auto-generated or timestamp-based

### Form Elements
- Standard HTML form elements (textarea, input, select)
- No custom input components for basic fields
- Date picker appears to be a third-party widget
- Validation likely client-side JavaScript

### State Management
- Form data persists when navigating between steps
- Edit mode preserves original values until saved
- Parent page state (dates, pricing) carries into modal

---

## Browser Compatibility Notes

- Date picker uses standard calendar widget
- Modal overlay uses modern CSS (flexbox/positioning)
- No obvious browser-specific features observed

---

## Screenshots Reference

All screenshots saved to: `.playwright-mcp/`

1. **01-initial-page-load.png** - Property listing page before modal opens
2. **02-modal-opened-step1.png** - Initial modal state (Step 1)
3. **03-modal-checkbox-checked.png** - Step 1 with conditional field visible
4. **04-modal-step1-filled.png** - Step 1 with all fields filled
5. **05-modal-step2-confirmation.png** - Step 2 confirmation screen
6. **06-modal-edit-mode.png** - Step 2a adjustment screen
7. **07-modal-final-confirmation.png** - Final confirmation view

---

## Recommendations for Implementation

### For Developers
1. Implement proper modal focus trapping
2. Add ARIA labels for accessibility
3. Ensure keyboard navigation works throughout
4. Add loading states for submission
5. Implement error handling and display
6. Add success confirmation after submission

### For Designers
1. Consider adding step indicators (1 of 2, 2 of 2)
2. Add visual validation feedback (checkmarks, error states)
3. Consider progress preservation (save draft)
4. Add tooltips for pricing calculations
5. Consider mobile responsive design adjustments

### For Product
1. A/B test field requirements (10 word minimum)
2. Consider adding character count indicators
3. Test conversion rates with/without "unique requirements"
4. Add proposal templates or suggestions
5. Consider adding attachment capability for documents

---

## Conclusion

The Create Proposal popup is a well-structured, two-step modal that efficiently collects guest information while providing transparency on pricing and booking details. The design follows standard e-commerce patterns with progressive disclosure and clear calls-to-action.

**Key Strengths:**
- Clear multi-step flow
- Transparent pricing breakdown
- Ability to review and edit before submission
- Conditional fields reduce clutter

**Areas for Enhancement:**
- Accessibility features
- Visual validation feedback
- Progress indicators
- Mobile optimization testing

---

**Document Version:** 1.0
**Last Updated:** 2025-11-11
**Explored By:** Claude Code (Automated Browser Exploration)
