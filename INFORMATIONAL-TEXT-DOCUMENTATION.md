# Element Documentation: Informational text (Reusable Element)

## Overview
**Element Name:** Informational text
**Element Type:** Reusable Element (Group)
**Location:** Overlays section
**Internal Name:** `G: data source of the informational text`
**ID Attribute:** `your-tooltip-id`

---

## APPEARANCE TAB PROPERTIES

### Data Configuration
- **Type of content:** Informational Texts
- **Data source:** `Parent group's Informational Texts`

### Interaction
- **Clickable:** No (This element isn't clickable)
- **Workflow:** None configured (Add workflow button available)

### Styling
- **Style:** None (Custom)
- **Opacity:** 100%

### Background
- **Background style:** Flat color
- **Background color:** #FFFFFF (White)

### Border
- **Define each border independently:** No (unchecked)
- **Border style - all borders:** Solid
- **Roundness:** 25px
- **Width:** 1px
- **Color:** #000000 (Black)

### Shadow
- **Shadow style:** Outset
- **Horizontal offset:** 0px
- **Vertical offset:** 2px
- **Blur radius:** 4px
- **Spread radius:** 0px
- **Boxshadow color:** #000000 Heading Color (#000000)

### Dimensions
- **Width:** 0px - 404px (responsive range)
- **Height:** 0px - inf (no maximum height limit)

### Transitions
- **Transitions:** Select a property to define a new transition (none currently defined)

---

## LAYOUT TAB PROPERTIES

### Container Layout
- **Container layout:** Column
- **Container alignment:** Centered (middle alignment selected)
- **Apply gap spacing between elements:** No (unchecked)

### Visibility
- **This element is visible on page load:** Yes (checked)
- **Collapse when hidden:** Yes (checked)
- **Animate the collapse operation:** No (unchecked)

### Positioning
- **Parent container type:** Align to parent (edit)
- **Alignment:** Center-center (middle button in 3x3 grid selected)

### Width Settings
- **Make this element fixed-width:** No (unchecked)
- **Min width:** 0px
- **Max width:** 404px
- **Fit width to content:** Yes (checked)

### Height Settings
- **Make this element fixed-height:** No (unchecked)
- **Min height:** 0px
- **Max height:** inf (no limit)
- **Fit height to content:** Yes (checked)
- **Allow vertical scrolling when content overflows:** No (unchecked)

### Margins
- **Top:** 0px
- **Bottom:** 0px
- **Left:** 0px
- **Right:** 0px

### Padding
- **Top:** 10px
- **Bottom:** 10px
- **Left:** 10px
- **Right:** 10px

---

## CONDITIONAL TAB PROPERTIES

### Conditional Rule 1
**Status:** OFF
**Condition:** `When Informational text's is visible? is no`
**Action:**
- This element is visible: Yes (checked)
- No additional properties configured

### Conditional Rule 2
**Status:** OFF
**Condition:** `When This Group is visible`
**Action:**
- Select a property to change when true (not yet configured)

### Conditional Rule 3
**Status:** OFF
**Condition:** `When Current page width < 1000`
**Actions:**
- **Max width:** 85% (percentage-based)
- **Min width:** 70% (percentage-based)
- Additional properties can be configured

---

## ELEMENT STRUCTURE

The reusable element appears to contain the following child elements based on the visual preview:
1. **ℹ️ Information** - Icon/header element
2. **Desktop copy text** - Main informational text (with find & replace operations applied)
3. **Extra text to show** - Additional text content
4. **Link** - Hyperlink element
5. **Show more** - Expandable content trigger
6. **HTML element** - Custom HTML content area

---

## SCREENSHOTS

All property screenshots have been saved to:
- `C:\Users\Split Lease\My Drive (splitleaseteam@gmail.com)\!Agent Context and Tools\SL16\components\create-proposal-popup\.playwright-mcp\`

Files:
1. `appearance-tab-screenshot.png` - Initial Appearance tab view
2. `appearance-tab-complete.png` - Complete Appearance tab properties
3. `layout-tab-screenshot.png` - Layout tab properties
4. `conditional-tab-screenshot.png` - Conditional tab with all 3 rules

---

## NOTES

1. The element is a reusable component designed to display informational text with responsive behavior.
2. All three conditional rules are currently turned OFF but remain configured for future use.
3. The element uses responsive width settings with conditional adjustments for screens under 1000px wide.
4. The border radius of 25px gives the element rounded corners for a modern appearance.
5. The box shadow creates a subtle depth effect (2px vertical offset with 4px blur).
6. Padding of 10px on all sides provides internal spacing for content.
7. The element automatically fits its width and height to content while respecting maximum constraints.

---

## USAGE CONTEXT

This reusable element is used in the "create-proposal-flow" page to display contextual information to users. The data source is populated from the parent group's "Informational Texts" field, making it dynamically configurable.

---

**Documentation Generated:** 2025-11-11
**Source:** Bubble.io IDE - Live Version
**Page:** ♻️💥create-proposal-flow
