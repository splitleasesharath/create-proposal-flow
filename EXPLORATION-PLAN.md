# Detailed Exploration Plan for create-proposal-flow Reusable Element

## Overview
Based on initial reconnaissance, this Bubble.io reusable element is a multi-step proposal creation flow with:
- **10+ main element groups** (overlays + layers)
- **5 step groups** (Step 1-5) with conditional visibility
- **37 workflows** across 10 categories
- **Complex conditional logic** for UI state management
- **Heavy data binding** to User and Listing objects

## Phase 1: Design Tab - Element Tree Documentation

### 1.1 Root Element Properties
**Target**: ♻️💥create-proposal-flow (Popup)
- [ ] Document all Appearance properties
- [ ] Document all Layout properties
- [ ] Document all Conditional rules (if any)
- [ ] Identify custom properties exposed by reusable element
- [ ] Document data sources and type

### 1.2 Overlays Section
**Elements to document:**
1. [ ] ⚛️ Informational text
2. [ ] GF: Move in range inside proposal flow
3. [ ] P: Less than 3 proposals created
4. [ ] GF: Lottie animation Confetti
5. [ ] GF: Advise to Change

**For each element:**
- Expand element (if group)
- Screenshot property panel (all tabs)
- Extract all Appearance properties
- Extract all Layout properties
- Extract all Conditional rules
- Note any child elements
- Document data bindings

### 1.3 Main Container
**Target**: G: Create proposal flow

**Sub-elements to document (in order):**
1. [ ] G: create proposal header and x icon
   - Expand and document all children
   - Note click handlers, custom states
2. [ ] G: No risk to propose
   - Document messaging/content elements
3. [ ] **G: Step 1** ⭐ PRIORITY
   - Expand fully
   - Document all child elements
   - Document conditional visibility logic
   - Document all form inputs/controls
   - Note data collection patterns
4. [ ] **G: Step 2** ⭐ PRIORITY
   - Same as Step 1
5. [ ] **G: Step 3** ⭐ PRIORITY
   - Same as Step 1
6. [ ] **G: step 4** ⭐ PRIORITY
   - Same as Step 1
   - Special attention to "clone2-listing schedule selector for Step4"
7. [ ] **G: step 5** ⭐ PRIORITY
   - Same as Step 1
   - Likely contains submission/review elements
8. [ ] Group Listing
   - Document listing data display
9. [ ] G: Information about need to check checkboxes
   - Document validation messaging
10. [ ] G: Collapse Mobile and CONFIG
    - Document responsive behavior
    - Document configuration options

### 1.4 Documentation Format for Each Element

```markdown
## Element: [Name]
- **Type**: [Group/Text/Input/etc]
- **Location**: [Parent path]
- **Visible by default**: [Yes/No]

### Appearance
- Style: [value]
- Background: [value]
- Border: [value]
- Opacity: [value]
- Other: [any other properties]

### Layout
- Container layout: [value]
- Width: [min/max/default]
- Height: [min/max/default]
- Padding: [T/B/L/R values]

### Conditionals
1. **Condition [#]**:
   - **When**: [condition expression]
   - **Effect**: [property changes]
   - **Status**: [ON/OFF]

### Data Bindings
- [Property]: [Data source expression]

### Child Elements
- [List of children, to be documented separately]

### Notes
[Any special observations, interactions, or complexities]
```

## Phase 2: Workflow Tab - Comprehensive Documentation

### 2.1 Workflow Categories (Document in this order)

#### Priority 1: Core Flow Logic (13 workflows)
**Category**: Proposal Step Navigations/Actions

1. [ ] Workflow 1: [Name]
   - Event trigger
   - All actions (in sequence)
   - Conditions per action
   - State changes
2. [ ] Workflow 2-13: [Continue...]

#### Priority 2: Scheduling Logic (10 workflows)
**Category**: Scheduling & dates

1. [ ] Workflow 1: [Name]
2. [ ] Workflow 2-10: [Continue...]

#### Priority 3: Other Categories
- [ ] Custom Events (3)
- [ ] Navigation (2)
- [ ] Send Message to ChatGPT (3)
- [ ] Apply Rental (2)
- [ ] Uncategorized (2)
- [ ] Do When Condition (1)
- [ ] Hide Element (1)
- [ ] Page is Loaded (1)
- [ ] Submit Proposal (1)

### 2.2 Workflow Documentation Format

```markdown
## Workflow: [Name]
- **Category**: [Category]
- **Order in category**: [#]

### Trigger Event
- **Type**: [Click/Page Load/Custom Event/etc]
- **Target**: [Element or condition]
- **Conditions**: [Any "Only when" conditions]

### Actions (Sequential)

#### Action 1: [Action type]
- **Target**: [What element/data]
- **Operation**: [What it does]
- **Parameters**:
  - Param 1: [value/expression]
  - Param 2: [value/expression]
- **Conditions**: [Any "Only when" conditions]

#### Action 2: [Continue...]

### State Changes
- [State name]: [How it changes]

### Data Modifications
- [What data is created/updated/deleted]

### Notes
[Complex logic, dependencies, special cases]
```

## Phase 3: Data Flow Mapping

### 3.1 Custom States to Identify
- [ ] G: Create proposal flow's step
- [ ] [Other custom states - TBD during extraction]

### 3.2 Data Sources to Map
- [ ] Parent User references
  - need for Space
  - About Me / Bio
  - [Others - TBD]
- [ ] Parent group's Listing references
  - Weeks offered
  - [Others - TBD]
- [ ] Cross-element references
  - clone2-listing schedule selector for Step4's Selected Days
  - [Others - TBD]

### 3.3 Create Data Flow Diagram
- [ ] Map state transitions (step 1 → 2 → 3 → 4 → 5)
- [ ] Map data collection points
- [ ] Map validation points
- [ ] Map submission flow

## Phase 4: Integration Dependencies

### 4.1 Reusable Elements Used
- [ ] clone2-listing schedule selector for Step4
- [ ] [Others - TBD]

### 4.2 Plugins/External Components
- [ ] LottieFiles (Confetti animation)
- [ ] [Others - TBD]

### 4.3 Backend Workflows
- [ ] Identify all "Schedule API Workflow" actions
- [ ] Document parameters and timing

## Phase 5: React Conversion Strategy

### 5.1 Component Architecture
Based on findings, design:
- [ ] Component hierarchy
- [ ] State management approach
- [ ] Conditional rendering strategy
- [ ] Form validation approach
- [ ] Data flow architecture

### 5.2 Key Challenges to Address
- [ ] Multi-step form navigation
- [ ] Complex conditional visibility
- [ ] State persistence between steps
- [ ] Data validation patterns
- [ ] Responsive layout conversion
- [ ] Animation integration

## Execution Strategy

### Session 1: Design Tab Deep Dive (Current)
1. Open new Playwright session
2. Navigate to Design URL
3. Systematically document all elements (Phases 1.1-1.4)
4. Save findings to DESIGN-CONTEXT.md
5. Close session

### Session 2: Workflow Tab Deep Dive
1. Open new Playwright session
2. Navigate to Workflow URL
3. Expand all workflow folders
4. Document all workflows chronologically (Phase 2)
5. Save findings to WORKFLOW-CONTEXT.md
6. Close session

### Session 3: Analysis and Planning
1. Analyze all extracted data
2. Complete data flow mapping (Phase 3)
3. Identify integration dependencies (Phase 4)
4. Create React conversion strategy (Phase 5)
5. Generate final CONVERSION-GUIDE.md

## Notes from Reconnaissance

### Key Observations:
1. **Step-based navigation**: Uses custom state "step" to control visibility
2. **Heavy conditionals**: Most groups use conditional visibility
3. **Data binding patterns**: Consistent Parent User / Parent group patterns
4. **Validation approach**: Uses groups to show/hide validation messages
5. **Mobile responsive**: Has dedicated mobile/desktop configurations

### Technical Debt to Note:
- Element naming inconsistency (some use "G:" prefix, some don't)
- Mix of "step" and "Step" casing
- Some workflows in "Uncategorized"

### Screenshots Location:
`.playwright-mcp/` directory - 10 screenshots from reconnaissance

## Estimated Completion Time
- Session 1 (Design): 2-3 hours of extraction
- Session 2 (Workflows): 2-3 hours of extraction
- Session 3 (Analysis): 1-2 hours
- **Total**: 5-8 hours of detailed work
