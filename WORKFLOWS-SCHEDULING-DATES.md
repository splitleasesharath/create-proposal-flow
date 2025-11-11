# Scheduling & Dates Workflows

**Source**: Bubble.io - create-proposal-flow page
**Category**: Scheduling & dates (10 workflows)
**Extracted**: 2025-11-11

---

## Workflow 1: D: Move-in bid date 1 value changed

### Trigger
- **Type**: Element Event
- **Event**: "D: Move-in bid date 1's value is changed"
- **Element**: D: Move-in bid date 1
- **Condition**: Only when Click

### Actions

#### Step 1: Set states days-in-span-weeks
- **Action**: Set State
- **Element**: G: blocked dates inside proposal flow
- **Custom state**: days-in-span-weeks
- **Value**: `G: Proposed Weeks proposal flow's number * 7`

#### Step 2: Set states end-date
- **Action**: Set State
- **Element**: G: blocked dates inside proposal flow
- **Custom state**: end-date
- **Value**: `This Date/TimePicker's value+ days: G: blocked dates inside proposal flow's days-in-span-weeks`

#### Step 3: Set states already closed?
- **Action**: Set State
- **Element**: GF: Advise to Change
- **Custom state**: already closed?
- **Value**: [Details to be extracted]

#### Step 4: Set states move-in date selected
- **Action**: Set State
- **Element**: ♻️💥create-proposal-flow
- **Custom state**: move-in date selected
- **Value**: [Details to be extracted]

### Screenshots
- workflow-01-move-in-bid-date-1-value-changed.png
- workflow-01-full-page.png
- workflow-01-step-02.png

---

## Workflow 2: D: Reservation Span proposal flow value changed

### Trigger
- **Type**: Element Event
- **Event**: "D: Reservation Span proposal flow's value is changed"
- **Element**: D: Reservation Span proposal flow
- **Condition**: Only when Click

### Actions

#### Step 1: Make changes to GUEST User
- **Action**: Make changes to a thing
- **Thing**: GUEST User of this REUSABLE ELEMENT

#### Step 2: Set reservation span in weeks
- **Action**: Set reservation span in weeks for the listing selector from the user's selection

#### Step 3: Set other reservation span value
- **Action**: Set other reservation span value from input
- **Condition**: Only when D: Reservation Span proposal flow's value is "Other (wks)"

#### Step 4: Trigger recalc
- **Action**: Trigger recalc

#### Step 5: Set states days-in-span-weeks
- **Action**: Set State
- **Element**: G: blocked dates inside proposal flow
- **Custom state**: days-in-span-weeks

#### Step 6: Set states end-date
- **Action**: Set State
- **Element**: G: blocked dates inside proposal flow
- **Custom state**: end-date

### Screenshots
- workflow-02-reservation-span.png

---

## Workflow 3: I: Movein 1 is clicked

### Trigger
- **Type**: Element Event
- **Event**: "I: Movein 1 is clicked"
- **Element**: I: Movein 1
- **Condition**: Only when Click

### Actions

#### Step 1: Set focus
- **Action**: Set focus to D: Move-in bid date 1

### Screenshots
- workflow-03-movein-1-clicked.png

---

## Workflow 4: I: Reservation Span is clicked

### Trigger
- **Type**: Element Event
- **Event**: "I: Reservation Span is clicked"
- **Element**: I: Reservation Span
- **Condition**: Only when Click

### Actions

#### Step 1: Set focus
- **Action**: Set focus to D: Reservation Span proposal flow

---

## Workflow 5: IN: Enter # Weeks submit proposal flow value changed

### Trigger
- **Type**: Element Event
- **Event**: "IN: Enter # Weeks submit proposal flow's value is changed"
- **Element**: IN: Enter # Weeks submit proposal flow
- **Condition**: Only when Click

### Actions

#### Step 1: Set other reservation span value
- **Action**: Set other reservation span value from input in proposal selector
- **Condition**: Only when D: Reservation Span proposal flow's value is "Other (wks)"

#### Step 2: Trigger recalc
- **Action**: Trigger recalc on proposal selector

#### Step 3: Set states days-in-span-weeks
- **Action**: Set State
- **Element**: G: blocked dates inside proposal flow
- **Custom state**: days-in-span-weeks

#### Step 4: Set states end-date
- **Action**: Set State
- **Element**: G: blocked dates inside proposal flow
- **Custom state**: end-date

#### Step 5: Set state other reservation span weeks
- **Action**: Set state other reservation span weeks number of ♻️💥create-proposal-flow

---

## Workflow 6: T: edit check in is clicked

### Trigger
- **Type**: Element Event
- **Event**: "T: edit check in is clicked"
- **Element**: T: edit check in
- **Condition**: Only when Click

### Actions

#### Step 1: Go to schedule selector
- **Action**: Go to schedule selector

#### Step 2: Set states Recalculate States
- **Action**: Set State
- **Element**: clone2-listing schedule selector for Step4
- **Custom state**: Recalculate States

---

## Workflow 7: T: edit check out is clicked

### Trigger
- **Type**: Element Event
- **Event**: "T: edit check out is clicked"
- **Element**: T: edit check out
- **Condition**: Only when Click

### Actions

#### Step 1: Go to schedule selector
- **Action**: Got to schedule selector (navigation)

#### Step 2: Set states Recalculate States
- **Action**: Set State
- **Element**: clone2-listing schedule selector for Step4
- **Custom state**: Recalculate States

---

## Workflow 8: T: edit move in is clicked

### Trigger
- **Type**: Element Event
- **Event**: "T: edit move in is clicked"
- **Element**: T: edit move in
- **Condition**: Only when Click

### Actions

#### Step 1: Go to move in and reservation span
- **Action**: Go to move in and reservation span (navigation)

---

## Workflow 9: T: edit move in is clicked (with Check In Day condition)

### Trigger
- **Type**: Element Event
- **Event**: "T: edit move in is clicked"
- **Element**: T: edit move in
- **Condition**: Only when
  - clone2-listing schedule selector for Step4's Selected Check In Day (days)'s First 3 letters is not D: Move-in bid date 1's value:formatted as Tue
  - AND clone2-listing schedule selector for Step4's Selected Days (days):count is not 7

### Actions

#### Step 1: Go to move in and reservation span
- **Action**: Go to move in and reservation span (navigation)

#### Step 2: Set state move-in date selected
- **Action**: Set State
- **Element**: ♻️💥create-proposal-flow
- **Custom state**: move-in date selected

#### Step 3: Schedule turn off pulsing effect
- **Action**: Schedule turn off pulsing effect after 2.5 seconds

### Screenshots
- workflow-09-edit-move-in-with-condition.png

---

## Workflow 10: T: edit reservation span is clicked

### Trigger
- **Type**: Element Event
- **Event**: "T: edit reservation span is clicked"
- **Element**: T: edit reservation span
- **Condition**: Only when Click

### Actions

#### Step 1: Go to span and move in
- **Action**: Go to span and move in (navigation)

### Screenshots
- workflow-10-edit-reservation-span.png

---

## Notes

- These workflows handle date selection and scheduling logic for Steps 3 and 4 of the proposal flow
- Date formatting and calculations are critical for accurate scheduling
- Multiple workflows handle different user interactions (date input changes, clicks on date selectors)
- Some workflows have complex conditions based on selected days and date formats
