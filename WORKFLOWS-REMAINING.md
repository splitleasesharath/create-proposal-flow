# Workflows - Remaining Categories

## Overview
This document contains the extracted workflows from the ♻️💥create-proposal-flow page across various categories including Uncategorized, Apply Rental, Custom Events, Do When Condition, Hide Element, and Navigation.

**Total Workflows Extracted**: 11
**Page**: ♻️💥create-proposal-flow
**URL**: https://bubble.io/page?id=upgradefromstr&tab=Workflow&name=%E2%99%BB%EF%B8%8F%F0%9F%92%A5create-proposal-flow&version=live&type=custom

---

## 1. Uncategorized (2 workflows)

### 1.1 G: Create proposal flow opening

**Trigger**: Element Event
- **Element**: G: Create proposal flow
- **Event**: is opened
- **Condition**: Click

**Actions**:
1. **Step 1**: Set states check for contiguous... of clone2-listing schedule selector for Step4
   - **Action Type**: Set State
   - **Element**: clone2-listing schedule selector for Step4
   - **Custom state**: check for contiguous
   - **Value**: "yes"
   - **Condition**: Click

**Screenshot**: `03-workflow-create-proposal-flow-opening.png`, `04-workflow-action-set-state.png`

---

### 1.2 G: move in texts is clicked

**Trigger**: Element Event
- **Element**: G: move in texts
- **Event**: is clicked
- **Condition**: Click

**Actions**:
1. **Step 1**: Set states pulse movein?... of ♻️💥create-proposal-flow
   - **Action Type**: Set State
   - **Element**: ♻️💥create-proposal-flow
   - **Custom state**: pulse movein?
   - **Value**: "no"
   - **Condition**: ♻️💥create-proposal-flow's pulse movein? is yes

2. **Step 2**: Trigger Display-Informational-Texts (copy) inside of popups from ⚛️ Informational text
   - **Action Type**: Trigger Custom Event
   - **Reusable element**: ⚛️ Informational text
   - **Custom event**: Display-Informational-Texts (copy) inside of popups
   - **Parameters**:
     - id of the element: MoveInProposal
     - tag title for search: move-in flexibility
     - id of the RE: InformationalTextProposal
     - id of popup: popupeffect
     - id of the group: MoveInProposalMobile
     - button1id: Click
     - button2id: Click
   - **Condition**: Click

**Screenshot**: `05-workflow-move-in-texts-clicked.png`, `06-workflow-step1-details.png`, `07-workflow-step2-details.png`

---

## 2. Apply Rental (2 workflows)

### 2.1 B: Apply rental application is clicked

**Trigger**: Element Event
- **Element**: B: Apply rental application
- **Event**: is clicked
- **Condition**: Click

**Actions**:
1. **Step 1**: Hide P: Less than 3 proposals created
   - **Action Type**: Hide Element

2. **Step 2**: Go to page rental-app-new-design
   - **Action Type**: Navigation
   - **Destination**: rental-app-new-design
   - **Condition**: ♻️💥create-proposal-flow's guest user's Rental Application's submitted is no

**Screenshot**: `08-workflow-apply-rental-application.png`

---

### 2.2 T: X to close is clicked

**Trigger**: Element Event
- **Element**: T: X to close
- **Event**: is clicked
- **Condition**: Click

**Actions**:
1. **Step 1**: Animate GF: Advise to Change
   - **Action Type**: Animation

2. **Step 2**: Hide GF: Advise to Change
   - **Action Type**: Hide Element

3. **Step 3**: Set states already closed?... of GF: Advise to Change
   - **Action Type**: Set State
   - **Element**: GF: Advise to Change
   - **Custom state**: already closed?

**Screenshot**: `09-workflow-x-to-close.png`

---

## 3. Custom Events (3 workflows)

### 3.1 Alerts general

**Trigger**: Custom Event
- **Event Name**: Alerts general
- **Triggers**: 8 triggers

**Parameters**:
- title: text (required)
- content: text (optional)
- time (ms): number (optional)
- alert type: Alert Type (optional)
- Show on Live?: yes / no (optional)

**Actions**:
1. **Step 1**: Custom Toast ERROR
   - **Action Type**: Show Toast
   - **Condition**: alert type is error and Show on Live? is yes

2. **Step 2**: Custom Toast INFORMATION
   - **Action Type**: Show Toast
   - **Condition**: alert type is information and Show on Live? is yes

3. **Step 3**: Custom Toast WARNING
   - **Action Type**: Show Toast
   - **Condition**: alert type is warning and Show on Live? is yes

4. **Step 4**: Custom Toast SUCCESS
   - **Action Type**: Show Toast
   - **Condition**: alert type is success and Show on Live? is yes

5. **Step 5**: Custom Toast EMPTY ALERT TYPE
   - **Action Type**: Show Toast
   - **Condition**: alert type is empty and Show on Live? is yes

6. **Step 6**: Custom Toast Version-Test ONLY
   - **Action Type**: Show Toast
   - **Condition**: Isn't live version is yes and Show on Live?:formatted as number is 0

**Screenshot**: `10-workflow-alerts-general.png`

---

### 3.2 go to guest dashboard

**Trigger**: Custom Event
- **Event Name**: go to guest dashboard
- **Triggers**: 4 triggers

**Parameters**:
- proposal: Proposal (optional)

**Actions**:
1. **Step 1**: Trigger Alerts general INFORMATION
   - **Action Type**: Trigger Custom Event
   - **Condition**: ♻️💥create-proposal-flow's guest user's Proposals List:count < 4

2. **Step 2**: Go to page guest-proposals
   - **Action Type**: Navigation
   - **Destination**: guest-proposals

**Screenshot**: `11-workflow-go-to-guest-dashboard.png`

---

### 3.3 turn off pulsing effect

**Trigger**: Custom Event
- **Event Name**: turn off pulsing effect
- **Triggers**: 1 trigger

**Parameters**: None

**Actions**:
1. **Step 1**: Set states pulse movein?... of ♻️💥create-proposal-flow
   - **Action Type**: Set State
   - **Element**: ♻️💥create-proposal-flow
   - **Custom state**: pulse movein?

**Screenshot**: `12-workflow-turn-off-pulsing-effect.png`

---

## 4. Do When Condition (1 workflow)

### 4.1 Every time condition: ♻️💥create-proposal-flow's calculate new terms is yes

**Trigger**: Condition Event
- **Run this**: Every time
- **Condition**: ♻️💥create-proposal-flow's calculate new terms is yes

**Actions**:
1. **Step 1**: Set state Selected Nights (nights) of clone2-listing schedule selector for Step4
   - **Action Type**: Set State
   - **Element**: clone2-listing schedule selector for Step4
   - **Custom state**: Selected Nights (nights)

2. **Step 2**: Set state days-in-span-weeks of G: blocked dates inside proposal flow
   - **Action Type**: Set State
   - **Element**: G: blocked dates inside proposal flow
   - **Custom state**: days-in-span-weeks

3. **Step 3**: Set states Recalculate States... of clone2-listing schedule selector for Step4
   - **Action Type**: Set State
   - **Element**: clone2-listing schedule selector for Step4
   - **Custom state**: Recalculate States

4. **Step 4**: Set states step... of G: Create proposal flow
   - **Action Type**: Set State
   - **Element**: G: Create proposal flow
   - **Custom state**: step
   - **Condition**: ♻️💥create-proposal-flow's step is not empty

5. **Step 5**: Take recalculation back to no
   - **Action Type**: Set State

**Screenshot**: `13-workflow-do-when-condition.png`

---

## 5. Hide Element (1 workflow)

### 5.1 Hide bid for this place popup

**Trigger**: Element Event
- **Element**: I: ion-close-round
- **Event**: is clicked
- **Condition**: Click

**Actions**:
1. **Step 1**: Reset G: Create proposal flow
   - **Action Type**: Reset Element

2. **Step 2**: Hide ♻️💥create-proposal-flow
   - **Action Type**: Hide Element

3. **Step 3**: Resetting states to be empty REUSABLE element
   - **Action Type**: Set State

4. **Step 4**: Resetting states to be empty SELECTOR element
   - **Action Type**: Set State

**Screenshot**: `14-workflow-hide-bid-popup.png`

---

## 6. Navigation (2 workflows)

### 6.1 I: ion-close-round is clicked

**Note**: This workflow is the same as "Hide bid for this place popup" workflow in the Hide Element category.

**Trigger**: Element Event
- **Element**: I: ion-close-round
- **Event**: is clicked
- **Condition**: Click

**Actions**: Same as workflow 5.1 above

---

### 6.2 T: Refundable Damage Deposit is clicked

**Trigger**: Element Event
- **Element**: T: Refundable Damage Deposit
- **Event**: is clicked
- **Condition**: Click

**Actions**:
1. **Step 1**: Go to page policies
   - **Action Type**: Navigation
   - **Destination**: policies

**Screenshot**: `15-workflow-refundable-damage-deposit.png`

---

## 7. Page is Loaded

**Status**: Category exists but no specific workflow was accessible during extraction. This may be a category header without child workflows, or the workflow may require additional navigation to access.

---

## 8. Submit Proposal

**Status**: Category exists but no specific workflow was accessible during extraction. This may be a category header without child workflows, or the workflow may require additional navigation to access.

---

## Summary

### Successfully Extracted Workflows: 9 unique workflows (11 including duplicates)

**By Category**:
- Uncategorized: 2 workflows
- Apply Rental: 2 workflows
- Custom Events: 3 workflows
- Do When Condition: 1 workflow
- Hide Element: 1 workflow
- Navigation: 2 workflows (1 duplicate)
- Page is Loaded: Not accessible
- Submit Proposal: Not accessible

### Common Patterns Identified:

1. **State Management**: Heavy use of custom states for managing UI flow and data
2. **Custom Events**: Reusable event handlers for common operations (alerts, navigation)
3. **Conditional Logic**: Most actions include conditions based on element states
4. **Element Manipulation**: Show/hide elements, animations, and resets
5. **Navigation**: Page redirects based on user state and conditions

### Key Elements Referenced:
- ♻️💥create-proposal-flow (main reusable element)
- clone2-listing schedule selector for Step4
- G: Create proposal flow
- ⚛️ Informational text
- Various UI elements (buttons, text fields, icons)

---

## Screenshots Reference

All screenshots are stored in the `.playwright-mcp` directory:
- 01-initial-page.png
- 02-workflow-list.png
- 03-workflow-create-proposal-flow-opening.png
- 04-workflow-action-set-state.png
- 05-workflow-move-in-texts-clicked.png
- 06-workflow-step1-details.png
- 07-workflow-step2-details.png
- 08-workflow-apply-rental-application.png
- 09-workflow-x-to-close.png
- 10-workflow-alerts-general.png
- 11-workflow-go-to-guest-dashboard.png
- 12-workflow-turn-off-pulsing-effect.png
- 13-workflow-do-when-condition.png
- 14-workflow-hide-bid-popup.png
- 15-workflow-refundable-damage-deposit.png
- 16-page-is-loaded-category.png
- 17-current-state.png
- 18-submit-proposal-expanded.png
- 19-final-state.png

---

**Extraction Date**: 2025-11-11
**Page Version**: Live
**Total Workflows on Page**: 37 (as indicated in the workflow list header)
