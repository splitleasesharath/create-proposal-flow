# Overlay Elements Documentation (2-5)
## create-proposal-flow Reusable Element

This document covers overlay elements 2-5 from the create-proposal-flow reusable element.

---

## 2. GF: Move in range inside proposal flow

**Element Type:** Group Focus

### Appearance Properties

**Reference Element:**
- T: Move-In Range

**Positioning:**
- Offset top: 0
- Offset left: 0

**Content:**
- Type of content: (not specified)
- Data source: Click

**Style:**
- Style: None (Custom)

**Background:**
- Background style: Flat color
- Background color: Primary contrast (#FFFFFF)

**Borders:**
- Define each border independently: No
- Border style - all borders: Solid
- Roundness: 10
- Width: 1
- Color: #6B6B6B

**Shadow:**
- Shadow style: None

**Dimensions:**
- Width: 343px
- Height: 66px

### Layout Properties

**Container:**
- Container layout: Fixed

**Dimensions:**
- Width: 343
- Height: 66

### Conditional Rules

**No conditional rules defined**

### Children

No child elements

---

## 3. P: Less than 3 proposals created

**Element Type:** Popup

### Appearance Properties

**Content:**
- Type of content: (not specified)
- Data source: Click

**Clickable:**
- This element isn't clickable

**Style:**
- Style: None (Custom)

**Opacity:**
- Opacity: 100%

**Background:**
- Background style: Flat color
- Background color: #FFFFFF

**Popup Settings:**
- This popup can't be closed by pressing 'Esc': Yes
- Grayout color: #ABA9A9
- Grayout blur: 0

**Borders:**
- Define each border independently: No
- Border style - all borders: None
- Roundness: 10

**Shadow:**
- Shadow style: Outset
- Horizontal offset: 0
- Vertical offset: 50
- Blur radius: 80
- Spread radius: 0
- Boxshadow color: #000000

**Dimensions:**
- Width: 30%
- Height: 0px - 90%

### Layout Properties

**Container:**
- Container layout: Column
- Container alignment: Space between (selected)
- Apply gap spacing between elements: Yes (checked)
- Row gap (px): 0

**Dimensions:**
- Make this element fixed-width: Yes (checked)
- Width: 30%
- Make this element fixed-height: No
- Min height: 0 px
- Max height: 90%
- Fit height to content: Yes (checked)

**Padding:**
- Top: 5 px
- Bottom: 5 px
- Left: 5 px
- Right: 5 px

### Conditional Rules

**Condition 1:**
- Status: OFF
- When: Current page width < 900
- Effect: Width = 90%

### Children

No child elements visible

---

## 4. GF: Lottie animation Confetti

**Element Type:** Group Focus

### Appearance Properties

**Reference Element:**
- T: Create Proposal

**Positioning:**
- Offset top: 0
- Offset left: -40

**Content:**
- Type of content: (not specified)
- Data source: Click

**Style:**
- Style: None (Custom)

**Background:**
- Background style: None

**Borders:**
- Define each border independently: No
- Border style - all borders: None
- Roundness: 0

**Shadow:**
- Shadow style: None

**Dimensions:**
- Width: 450px
- Height: 300px - inf

### Layout Properties

**Container:**
- Container layout: Align to parent

**Dimensions:**
- Make this element fixed-width: Yes (checked)
- Width: 450 px
- Make this element fixed-height: No
- Min height: 300 px
- Max height: inf
- Fit height to content: Yes (checked)

**Padding:**
- Top: 0 px
- Bottom: 0 px
- Left: 0 px
- Right: 0 px

### Conditional Rules

**No conditional rules defined**

### Children

No child elements visible

---

## 5. GF: Advise to Change

**Element Type:** Group Focus

### Appearance Properties

**Reference Element:**
- T: edit check in

**Positioning:**
- Offset top: 0
- Offset left: -250

**Content:**
- Type of content: (not specified)
- Data source: Click

**Style:**
- Style: None (Custom)

**Background:**
- Background style: Flat color
- Background color: #FFFFFF

**Borders:**
- Define each border independently: No
- Border style - all borders: None
- Roundness: 15

**Shadow:**
- Shadow style: None

**Dimensions:**
- Width: 285px
- Height: 167px - inf

### Layout Properties

**Container:**
- Container layout: Align to parent

**Dimensions:**
- Make this element fixed-width: Yes (checked)
- Width: 285 px
- Make this element fixed-height: No
- Min height: 167 px
- Max height: inf
- Fit height to content: Yes (checked)

**Padding:**
- Top: 0 px
- Bottom: 0 px
- Left: 0 px
- Right: 0 px

### Conditional Rules

**Condition 1:**
- Status: OFF
- When: clone2-listing schedule selector for Step4's Selected Check In Day (days)'s First 3 letters is not D: Move-in bid date 1's value:formatted as Tue AND clone2-listing schedule selector for Step4's Selected Days (days):count is not 7
- Effect: (no property changes defined)

**Condition 2:**
- Status: OFF
- When: This GroupFocus's already closed? is yes
- Effect: (no property changes defined)

**Condition 3:**
- Status: OFF
- When: clone2-listing schedule selector for Step4's Selected Nights (nights):count is 7 OR clone2-listing schedule selector for Step4's Selected Days (days):count is 7
- Effect: (no property changes defined)

**Condition 4:**
- Status: OFF
- When: clone2-listing schedule selector for Step4's Selected Check In Day (days)'s First 3 letters is D: Move-in bid date 1's value:formatted as Tue
- Effect: (no property changes defined)

### Children

No child elements visible

---

## Summary

All overlay elements (2-5) have been documented with their complete appearance, layout, and conditional properties. Screenshots have been captured and saved to the .playwright-mcp directory.

### Element Types:
- 1 Group Focus (GF: Move in range inside proposal flow)
- 1 Popup (P: Less than 3 proposals created)
- 1 Group Focus (GF: Lottie animation Confetti)
- 1 Group Focus (GF: Advise to Change)

### Conditional Rules:
- GF: Move in range inside proposal flow: 0 rules
- P: Less than 3 proposals created: 1 rule (responsive width adjustment)
- GF: Lottie animation Confetti: 0 rules
- GF: Advise to Change: 4 rules (schedule-based display logic)
