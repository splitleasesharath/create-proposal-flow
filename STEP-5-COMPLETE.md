# G: step 5 - Complete Documentation

## Overview
"G: step 5" is the final confirmation step in the create-proposal-flow. This step displays a confirmation message asking the user to verify their night selection and checkout day before proceeding.

**Location in Flow**: Final step (Step 5) of the proposal creation process

## Element Properties

### Basic Information
- **Element Name**: G: step 5
- **Element Type**: Group
- **Parent**: G: Create proposal flow

### Appearance Properties

#### Style
- Style: None (Custom)
- Opacity: 100%

#### Background
- Background style: None

#### Border
- Border style (all borders): Dotted
- Border width: 1px
- Border color: #6B6B6B
- Border roundness: 0

#### Shadow
- Shadow style: None

#### Dimensions
- Width: 96%
- Height: 0px - 81px (Min: 0px, Max: 81px)

### Layout Properties

#### Container Layout
- Container layout: Align to parent
- Parent container type: Column (edit)

#### Visibility
- This element is visible on page load: ✓ (checked)
- Collapse when hidden: ✓ (checked)
- Animate the collapse operation: (unchecked)

#### Alignment
- Horizontal alignment: Centered

#### Dimensions
- Make this element fixed-width: ✓ (checked)
- Width: 96%
- Make this element fixed-height: (unchecked)
- Min height: 0px
- Max height: 81px
- Fit height to content: ✓ (checked)
- Allow vertical scrolling when content overflows: (unchecked)

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

### Conditional Logic

**Total Conditions**: 2

#### Condition 1
- **Status**: OFF
- **When**: This Group is visible
- **Then**: Border style - all borders: None

#### Condition 2
- **Status**: OFF
- **When**: G: Create proposal flow's step is not 5
- **Then**: This element is visible (unchecked)

**Purpose**: This condition hides step 5 when the flow is not on step 5.

## Child Elements

### T: Days selected confirmation

#### Basic Information
- **Element Type**: Text
- **Parent**: G: step 5

#### Content
The text displays a dynamic confirmation message:
```
Are you sure you want [nights_per_week] nights per week and to check out on [checkout_day]?
```

Where:
- `[nights_per_week]` = clone2-listing schedule selector for Step4's Nights Number (num) nights per week
- `[checkout_day]` = clone2-listing schedule selector for Step4's Selected Check Out Day (days)'s Display

#### Example Text
"Are you sure you want clone2-listing schedule selector for Step4's Nights Number (num) nights per week and to check out on clone2-listing schedule selector for Step4's Selected Check Out Day (days)'s Display?"

#### Conditional Logic
- Has conditional formatting (1 condition)
- Condition details not fully expanded in extraction

## Functional Purpose

### User Experience Flow
1. User reaches Step 5 after completing Step 4 (schedule selection)
2. System displays confirmation message with:
   - Number of nights selected per week
   - Selected checkout day
3. User can:
   - Review the confirmation
   - Click "Go back" to revise their selection
   - Click "Next" to proceed with the proposal submission

### Key Features
- **Dynamic Content**: Displays user's actual selections from Step 4
- **Confirmation Pattern**: Follows standard UX pattern of confirming important selections
- **Visual Separation**: Dotted border distinguishes this confirmation section
- **Collapsible**: Can collapse when hidden to save space

## Visual Design

### Layout Characteristics
- Centered alignment within parent column
- Fixed width at 96% of parent container
- Flexible height (0-81px) that fits to content
- Dotted border provides visual distinction

### Responsive Behavior
- Width is percentage-based (96%) for responsive scaling
- Height adjusts to content with min/max constraints
- Collapses when hidden (step changes)

## Data Dependencies

### Input Data Sources
From **clone2-listing schedule selector for Step4**:
1. **Nights Number (num)**: Number of nights selected per week
2. **Selected Check Out Day (days)**: The checkout day selected by user

### Data Flow
```
Step 4 (Schedule Selection)
    ↓
clone2-listing schedule selector for Step4
    ↓
Step 5 (Confirmation)
    ↓
Display confirmation with user's selections
```

## Integration Notes

### Relationship to Other Steps
- **Depends on Step 4**: All displayed data comes from Step 4's schedule selector
- **Precedes Final Submission**: This is the last confirmation before proposal is submitted
- **Part of Multi-Step Flow**: Controlled by G: Create proposal flow's step state

### State Management
- Visibility controlled by step number in parent flow
- Content dynamically populated from Step 4 selections
- No direct user interaction within this step (read-only confirmation)

## Technical Notes

### Element Structure
```
G: step 5 (Group)
└── T: Days selected confirmation (Text)
```

**Note**: The price breakdown section visible in the UI (showing "Approx Move-in", "Check-in", "Check-out", etc.) is NOT part of "G: step 5". It appears to be part of the parent container or a sibling element that remains visible across multiple steps.

### Styling Approach
- Custom styling (no predefined style applied)
- Simple dotted border for visual separation
- Minimal padding/margins for compact display

### Performance Considerations
- Lightweight element (just a text field)
- Conditional visibility prevents unnecessary rendering
- Collapse animation can be enabled if needed

## Screenshots

### Step 5 Selected View
![Step 5 Selected](.playwright-mcp/step5-selected.png)

### Layout Properties
![Step 5 Layout](.playwright-mcp/step5-layout.png)

### Conditional Properties
![Step 5 Conditional](.playwright-mcp/step5-conditional.png)

### Child Element - Days Confirmation
![Days Selected Confirmation](.playwright-mcp/step5-child-days-confirmation.png)

### Full View in Context
![Step 5 Full View](.playwright-mcp/step5-full-view.png)

## Implementation Recommendations

### Best Practices
1. **Confirmation Pattern**: This step follows best UX practices by confirming critical user selections
2. **Clear Communication**: The message clearly states what the user is confirming
3. **Easy Navigation**: "Go back" button allows easy correction

### Potential Enhancements
1. **Visual Emphasis**: Consider making key numbers (nights per week, checkout day) visually distinct
2. **Additional Validation**: Could add inline validation warnings if selections seem unusual
3. **Summary Display**: Could show a complete summary of all steps in this confirmation
4. **Animation**: Enable collapse animation for smoother transitions

### Accessibility Considerations
1. Ensure text contrast meets WCAG standards
2. Add ARIA labels for screen readers
3. Ensure keyboard navigation works properly
4. Consider adding focus indicators

## Testing Checklist

- [ ] Verify confirmation text displays correct data from Step 4
- [ ] Test "Go back" button returns to Step 4
- [ ] Test "Next" button proceeds to submission
- [ ] Verify visibility toggles correctly when step changes
- [ ] Test with various night/day selections from Step 4
- [ ] Verify responsive behavior on different screen sizes
- [ ] Test collapse behavior when step changes
- [ ] Verify conditional formatting works as expected

## Revision History

- **2025-11-11**: Initial comprehensive documentation extracted via Playwright MCP
- **Source**: Live production environment (bubble.io)
- **URL**: https://bubble.io/page?id=upgradefromstr&tab=Design&name=♻️💥create-proposal-flow&version=live&type=custom

---

**Note**: This documentation represents the final step (Step 5) of the proposal flow. This is a confirmation-only step with no user input required beyond navigation buttons. The actual submission logic likely occurs when "Next" is clicked from this step.
