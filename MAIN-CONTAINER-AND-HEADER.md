# Create Proposal Flow - Main Container and Header Documentation

## Part 1: Main Container - "G: Create proposal flow"

### Element Type
Group

### Data Source
- **Type of content**: Listing
- **Data source**: ♻️💥create-proposal-flow's listing

### Appearance Properties

#### Style
- **Style**: None (Custom)
- **Opacity**: 100%

#### Background
- **Background style**: Flat color
- **Background color**: Primary contrast (#FFFFFF)

#### Border
- **Define each border independently**: No
- **Border style - all borders**: None
- **Roundness**: 10

#### Shadow
- **Shadow style**: None

#### Dimensions
- **Width**: 95%
- **Height**: 0px - 2260px

### Layout Properties

#### Container Layout
- **Container layout**: Column
- **Container alignment**: Top-aligned (first icon)

#### Spacing
- **Apply gap spacing between elements**: No

#### Visibility
- **This element is visible on page load**: Yes (checked)
- **Collapse when hidden**: Yes (checked)
- **Animate the collapse operation**: No

#### Positioning
- **Parent container type**: Align to parent (edit)
- **Horizontal alignment**: Centered (middle icon selected)

#### Width Settings
- **Make this element fixed-width**: Yes (checked)
- **Width**: 95%

#### Height Settings
- **Make this element fixed-height**: No
- **Min height**: 0 px
- **Max height**: 2260 px
- **Fit height to content**: No
- **Allow vertical scrolling when content overflows**: Yes (checked)

#### Margins
- **Top**: 15 px
- **Bottom**: 15 px
- **Left**: 0 px
- **Right**: 0 px

#### Padding
- **Top**: 0 px
- **Bottom**: 0 px
- **Left**: 0 px
- **Right**: 0 px

### Conditional Rules
No conditional rules defined.

### Child Elements (Listed in Order)
1. G: create proposal header and x icon
2. G: No risk to propose
3. G: Step 1
4. G: Step 3
5. G: step 4
6. G: step 5
7. G: Step 2
8. Group Listing
9. G: Information about need to check checkboxes
10. G: Collapse Mobile and CONFIG

---

## Part 2: Header - "G: create proposal header and x icon"

### Element Type
Group

### Data Source
- **Type of content**: Listing
- **Data source**: Parent group's Listing

### Appearance Properties

#### Style
- **Style**: None (Custom)
- **Opacity**: 100%

#### Background
- **Background style**: Flat color
- **Background color**: #FFFFFF

#### Border
- **Define each border independently**: Yes (checked)

##### Individual Border Settings
- **Border style - top**: None
  - **Top-left**: 0
- **Border style - right**: None
  - **Top-right**: 0
- **Border style - bottom**: Solid
  - **Width**: 1
  - **Color**: #6B6B6B
  - **Bottom-right**: 0
- **Border style - left**: None
  - **Bottom-left**: 0

#### Shadow
- **Shadow style**: None

#### Dimensions
- **Width**: 40px - inf
- **Height**: 40px - inf

### Layout Properties

#### Container Layout
- **Container layout**: Align to parent

#### Visibility
- **This element is visible on page load**: Yes (checked)
- **Collapse when hidden**: Yes (checked)
- **Animate the collapse operation**: No

#### Positioning
- **Parent container type**: Column (edit)
- **Horizontal alignment**: Centered (+ icon selected)

#### Element Order Controls
- Make first (disabled/grayed out)
- Previous (disabled/grayed out)
- Next (enabled)
- Make last (enabled)

#### Width Settings
- **Make this element fixed-width**: No
- **Min width**: 40 px
- **Max width**: inf px
- **Fit width to content**: No

#### Height Settings
- **Make this element fixed-height**: No
- **Min height**: 40 px
- **Max height**: inf px
- **Fit height to content**: Yes (checked)
- **Allow vertical scrolling when content overflows**: No

#### Margins
- **Top**: 0 px
- **Bottom**: 0 px
- **Left**: 0 px
- **Right**: 0 px

#### Padding
- **Top**: 0 px
- **Bottom**: 0 px
- **Left**: 0 px
- **Right**: 0 px

### Conditional Rules
No conditional rules defined.

### Child Elements (Listed in Order)
1. I: Edit Pencil square (Icon)
2. I: ion-close-round (Icon)
3. T: Create Proposal (Text)

---

## Screenshots Reference

### Main Container Screenshots
- `create-proposal-flow-appearance.png` - Appearance properties
- `create-proposal-flow-layout.png` - Layout properties (part 1)
- `create-proposal-flow-layout-padding.png` - Layout padding section
- `create-proposal-flow-conditional.png` - Conditional tab (empty)

### Header Screenshots
- `header-appearance.png` - Appearance properties (part 1)
- `header-appearance-border.png` - Border settings detail
- `header-layout.png` - Layout properties
- `header-conditional.png` - Conditional tab (empty)

---

## Notes
- Both elements are Groups that use the Listing data type
- The main container has a width of 95% with vertical scrolling enabled
- The header has a distinctive bottom border (1px solid #6B6B6B)
- The header is set to fit height to content
- Neither element has conditional rules defined
- The main container contains 10 child elements including the header
- The header contains 3 child elements (2 icons and 1 text element)
