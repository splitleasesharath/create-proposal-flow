# G: No risk to propose

## Element Type
Group (Container)

## Parent Element
G: Create proposal flow

## Overview
This is a container group that displays a "risk-free" message to users during the proposal creation flow. It contains informational content to reassure users about submitting proposals.

---

## Appearance Properties

### Type of Content
- **Type**: (None specified - standard group)
- **Data source**: Click

### Style
- **Style**: None (Custom)
- **Opacity**: 100%

### Background
- **Background style**: None

### Border
- **Define each border independently**: Unchecked
- **Border style - all borders**: Dotted
- **Roundness**: 0
- **Width**: 1
- **Color**: #6B6B6B

### Shadow
- **Shadow style**: None

### Dimensions
- **Width**: 96%
- **Height**: 50px - inf (minimum 50px, no maximum)

---

## Layout Properties

### Container Layout
- **Container layout**: Row
- **Container alignment**: Left-aligned (default)
- **Apply gap spacing between elements**: Unchecked

### Visibility
- **This element is visible on page load**: Checked
- **Collapse when hidden**: Checked
- **Animate the collapse operation**: Unchecked

### Parent Container Alignment
- **Parent container type**: Column (edit)
- **Horizontal alignment**: Centered

### Position Controls
- **Make first**: Available
- **Previous**: Available
- **Next**: Available
- **Make last**: Available

### Width Settings
- **Make this element fixed-width**: Checked
- **Width**: 96% (percentage-based)

### Height Settings
- **Make this element fixed-height**: Unchecked
- **Min height**: 50px
- **Max height**: inf (infinite/no limit)
- **Fit height to content**: Checked
- **Allow vertical scrolling when content overflows**: Unchecked

### Margins
- **Top**: 10px
- **Bottom**: 10px
- **Left**: 10px
- **Right**: 10px

### Padding
- **Top**: 0px
- **Bottom**: 0px
- **Left**: 0px
- **Right**: 0px

---

## Conditional Rules

### Conditional 1
- **Status**: OFF
- **When**: G: Create proposal flow's step is not 1
- **Action**: This element is visible (unchecked - meaning it will be HIDDEN when condition is true)

### Conditional 2
- **Status**: OFF
- **When**: G: Create proposal flow's isProposal is no
- **Action**: This element is visible (unchecked - meaning it will be HIDDEN when condition is true)

### Conditional 3
- **Status**: OFF
- **When**: This Group is visible
- **Action**: Border style - all borders = None

### Conditional 4
- **Status**: OFF
- **When**: Current page width < iPad's Resolution min (pxl)
- **Action**: This element is visible (unchecked - meaning it will be HIDDEN when condition is true)

---

## Child Elements

### 1. G: Risk Free Image

**Element Type**: Group (Container)

#### Appearance Properties
- **Type of content**: Listing
- **Data source**: Click
- **This element isn't clickable**: Checked
- **Style**: None (Custom)
- **Opacity**: 100%
- **Background style**: None
- **Border style - all borders**: None
- **Roundness**: 0
- **Shadow style**: None
- **Width**: 45px (fixed)
- **Height**: 45px (fixed)

#### Conditional Rules
- **Conditional 1**:
  - **Status**: OFF
  - **When**: Current page width ≤ 392.67123287671234
  - **Action**: This element is visible (unchecked - meaning HIDDEN on small screens)

#### Child Elements
**I: -Calendar-Desktop 2** (Image element - contains the risk-free icon/image)

---

### 2. T: Risk-free! Even afte

**Element Type**: Text

#### Content
```
Start the conversation! After submitting a proposal, you'll begin a negotiation process with the host to finalize the details of your booking.
```

#### Appearance Properties

**Text Content**:
- **Do not apply bb-code**: Unchecked
- **Recognize links and emails**: Checked
- **Link color**: (Not specified)
- **Mark the links as nofollow**: Unchecked
- **HTML tag for this element (SEO)**: normal

**Style**:
- **Style**: None (Custom)
- **Opacity**: 100%

**Typography**:
- **Font**: Inter
- **Font weight**: 500 (Medium)
- **Font size**: 18px
- **Text decoration**: None (no bold, italic, underline)
- **Font color**: #343A40 (dark gray)
- **Word spacing**: 0
- **Line spacing**: 1.3
- **Letter spacing**: 0

**Layout**:
- **Center the text vertically**: Unchecked

**Background & Border**:
- **Background style**: None
- **Define each border independently**: Unchecked
- **Border style - all borders**: None
- **Roundness**: 0

**Shadow**:
- **Show text shadow**: Unchecked
- **Shadow style**: None

**Other**:
- **Tooltip text (on hover)**: Empty
- **Rotation angle**: 0

**Dimensions**:
- **Width**: 0px - inf (flexible width)
- **Height**: 40px - inf (minimum 40px)

#### Conditional Rules
- **No conditionals defined**

---

## Workflow
- **This element isn't clickable**: Unchecked (for parent group)
- **No workflows defined**

---

## Purpose and Usage

This element serves as an informational banner that:
1. Displays a risk-free message icon (calendar image)
2. Provides reassuring text about the proposal submission process
3. Appears only during specific steps of the proposal flow (step 1, when isProposal is "yes")
4. Hides the dotted border when the group itself becomes visible
5. Adapts to different screen sizes (hides the icon on very small screens)

The element uses a row layout with the icon on the left and text on the right, creating a visual callout to reduce user anxiety about submitting proposals.

---

## Screenshots

### Appearance Tab
![Appearance Properties](C:\Users\Split Lease\My Drive (splitleaseteam@gmail.com)\!Agent Context and Tools\SL16\components\create-proposal-popup\.playwright-mcp\no-risk-to-propose-appearance.png)

### Layout Tab
![Layout Properties](C:\Users\Split Lease\My Drive (splitleaseteam@gmail.com)\!Agent Context and Tools\SL16\components\create-proposal-popup\.playwright-mcp\no-risk-to-propose-layout.png)

### Conditional Tab
![Conditional Rules](C:\Users\Split Lease\My Drive (splitleaseteam@gmail.com)\!Agent Context and Tools\SL16\components\create-proposal-popup\.playwright-mcp\no-risk-to-propose-conditional.png)

### Child Element - G: Risk Free Image
![Risk Free Image Appearance](C:\Users\Split Lease\My Drive (splitleaseteam@gmail.com)\!Agent Context and Tools\SL16\components\create-proposal-popup\.playwright-mcp\risk-free-image-appearance.png)

---

## Notes
- The element has a distinctive dotted border (#6B6B6B, 1px width) that disappears when the group becomes visible
- The border acts as a placeholder/design element during the editing phase
- All conditionals are currently set to "OFF" status
- The text content is static (not dynamic/data-bound)
- The element uses flexible height (min 50px) to accommodate content changes
- Fixed 96% width maintains consistent sizing relative to parent
- 10px margins on all sides provide breathing room from surrounding elements
