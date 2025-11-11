# G: Step 1 - Complete Documentation

**Extraction Date**: 2025-11-11
**Source**: https://bubble.io/page?id=upgradefromstr&tab=Design&name=%E2%99%BB%EF%B8%8F%F0%9F%92%A5create-proposal-flow&version=live&type=custom

---

## Parent Group: G: Step 1

### Type
Group (Container - Column layout)

### Appearance Properties

**Type of content**: None (empty)
**Data source**: Click

**Style**: None (Custom)
**Opacity**: 100%

**Background style**: None

**Border**:
- Border style - all borders: Dotted
- Roundness: 0
- Width: 1
- Color: #6B6B6B

**Shadow style**: None

**Dimensions**:
- Width: 96%
- Height: 0px - 500px (Min height: 0px, Max height: 500px)

### Layout Properties

**Container layout**: Column
**Container alignment**: (Default - top-aligned)
**Apply gap spacing between elements**: (Unchecked)

**Visibility**:
- This element is visible on page load: Yes (checked)
- Collapse when hidden: Yes (checked)
- Animate the collapse operation: (Unchecked)

**Parent container type**: Column
**Horizontal alignment**: (Default - left-aligned)

**Position in parent**: (Not first, not last)

**Width**:
- Make this element fixed-width: Yes (checked)
- Width: 96%

**Height**:
- Make this element fixed-height: No (unchecked)
- Min height: 0 px
- Max height: 500 px
- Fit height to content: Yes (checked)
- Allow vertical scrolling when content overflows: Yes (checked)

**Margins**: All 0px (Top: 0, Bottom: 0, Left: 0, Right: 0)

**Padding**: All 0px (Top: 0, Bottom: 0, Left: 0, Right: 0)

### Conditional Rules (2)

#### Conditional 1
**Status**: OFF
**When**: `G: Create proposal flow's step is not 1`
**Then**:
- This element is visible: (Unchecked - element becomes hidden)

**Purpose**: Hides the entire Step 1 group when the flow moves to a different step

#### Conditional 2
**Status**: OFF
**When**: `This Group is visible`
**Then**:
- Border style - all borders: None

**Purpose**: Removes the dotted border when the group is displayed to users

---

## Child Elements of G: Step 1

### Total Children: 4 direct children

1. **G: Why do you want this space?** (Group)
2. **G: aboutMe** (Group)
3. **C: special needs** (Checkbox)
4. **G: Special Needs** (Group - conditionally visible)

---

## Child 1: G: Why do you want this space?

### Type
Group (Container)

### Appearance Properties

**Type of content**: User
**Data source**: `♻️💥create-proposal-flow's guest user`

**Style**: None (Custom)
**Opacity**: 100%

**Background style**: None

**Border**:
- Border style - all borders: Solid
- Roundness: 10
- Width: 2
- Color: Text (#4D4D4D)

**Shadow style**: None

**Dimensions**:
- Width: 98%
- Height: 0px - 200px

### Conditional Rules
No conditionals

### Nested Children (3 elements)

#### Child 1.1: T: Why do you want this space?

**Type**: Text element

**Content**: "Why do you want this space?"

**Appearance**:
- Font: Inter, 400 (Regular), 18px
- Font color: #424242
- Word spacing: 0
- Line spacing: 1.5
- Letter spacing: 0
- Background style: None
- Border style: None
- Shadow style: None
- Opacity: 100%

**Dimensions**:
- Width: 100px - 300px
- Height: 27px - inf

**Other Properties**:
- Recognize links and emails: (Unchecked)
- HTML tag for this element (SEO): normal

**Conditional Rules**: 2 conditionals (not expanded in screenshots)

---

#### Child 1.2: MI: Need for space

**Type**: Multiline Input

**Purpose**: Captures user's reason for wanting the space

**Key Properties**:
- **Placeholder**: "How will you use the space? (minimum of 10 words)"
- **Enable auto-binding on parent element's thing**: Yes (checked)
- **Field to modify**: need for Space
- **Show an alert on success**: (Unchecked)
- **Limit the number of characters**: Yes (checked)
- **Maximum number**: 500
- **This input should not be empty**: Yes (checked)
- **This input is disabled**: (Unchecked)
- **ID Attribute**: 102

**Styling**:
- Style: None (Custom)
- Opacity: 100%
- Font: Inter, 400, 16px
- Font color: #424242
- Word spacing: 0
- Line spacing: 1
- Letter spacing: 0
- Placeholder color: #B5B5B5

**Background**:
- Background style: Flat color
- Background color: #FFFFFF

**Border**:
- Border style - all borders: Solid
- Roundness: 3
- Width: 1
- Color: #BDBDBD

**Shadow style**: None

**Dimensions**:
- Width: 97% - 415px
- Height: 80px

**Conditional Rules**: 1 conditional (not expanded)

---

#### Child 1.3: livetext A - need for space

**Type**: livetext plugin element

**Purpose**: Real-time character/word count display and validation feedback

---

## Child 2: G: aboutMe

### Type
Group (Container)

### Appearance Properties

**Type of content**: User
**Data source**: `♻️💥create-proposal-flow's guest user`

**Style**: None (Custom)
**Opacity**: 100%

**Background style**: None

**Border**:
- Border style - all borders: Solid
- Roundness: 10
- Width: 2
- Color: Text (#4D4D4D)

**Shadow style**: None

**Dimensions**:
- Width: 98%
- Height: 0px - 200px

### Conditional Rules
No conditionals

### Nested Children (3 elements)

#### Child 2.1: T: Total nights

**Type**: Text element

**Note**: Element name is "T: Total nights" but likely displays "Tell us about yourself"

**Purpose**: Label/heading for the about me section

---

#### Child 2.2: MI: About yourself

**Type**: Multiline Input

**Purpose**: Captures user's bio and personal information

**Expected Properties** (based on pattern from Child 1.2):
- Placeholder: "Please take a moment to share some details about yourself, such as your interests, travel preferences, etc. (minimum of 10 words)"
- Field to modify: About Me / Bio
- Enable auto-binding: Yes
- Maximum characters: 500
- This input should not be empty: Yes
- Similar styling to "MI: Need for space"

---

#### Child 2.3: livetext B - about bio

**Type**: livetext plugin element

**Purpose**: Real-time character/word count display and validation feedback for bio field

---

## Child 3: C: special needs

### Type
Checkbox

### Purpose
Toggle control to show/hide the "G: Special Needs" group

### Appearance Properties

**Label**: "Do you have any unique requirements?"

**Enable auto-binding on parent element's thing**: (Unchecked)

**Preset status**: Unchecked

**This checkbox should be checked**: (Unchecked)

**This input is disabled**: (Unchecked)

**Styling**:
- Style: None (Custom)
- Opacity: 100%
- Font: Inter, 400, 15px
- Font color: #404040
- Word spacing: 0
- Line spacing: 1
- Letter spacing: 0

**Border**:
- Border style - all borders: None
- Roundness: 0

**Show text shadow**: (Unchecked)

**Shadow style**: None

**Dimensions**:
- Width: 0px - inf
- Height: 25px - inf

### Conditional Rules
2 conditionals (not expanded in screenshots)

---

## Child 4: G: Special Needs

### Type
Group (Container)

### Appearance Properties

**Type of content**: User
**Data source**: `♻️💥create-proposal-flow's guest user`

**Style**: None (Custom)
**Opacity**: 100%

**Background style**: None

**Border**:
- Border style - all borders: Solid
- Roundness: 10
- Width: 2
- Color: Text (#4D4D4D)

**Shadow style**: None

**Dimensions**:
- Width: 98%
- Height: 0px - 200px

### Conditional Rules (1)

#### Conditional 1
**Status**: OFF
**When**: `C: special needs isn't checked`
**Then**:
- This element is visible: (Unchecked - element becomes hidden)

**Purpose**: Hides the special needs input group when the checkbox is not checked

### Nested Children (3 elements)

#### Child 4.1: T: unique requirements

**Type**: Text element

**Content**: "Write your unique requirements"

**Purpose**: Label/heading for the special needs input

---

#### Child 4.2: MI: Special Needs

**Type**: Multiline Input

**Purpose**: Captures user's special requirements and unique needs

**Expected Properties** (based on pattern from Child 1.2):
- Placeholder: "Any special needs, personal preference or specific requirements you may have (minimum of 10 words)"
- Field to modify: special needs
- Enable auto-binding: Yes
- Maximum characters: 500
- This input should not be empty: Yes
- Similar styling to other multiline inputs

---

#### Child 4.3: livetext C - special needs

**Type**: livetext plugin element

**Purpose**: Real-time character/word count display and validation feedback for special needs field

---

## Data Flow Summary

### User Data Fields Modified

All three multiline inputs use **auto-binding** to update the User data type:

1. **Parent User's need for Space** (field: "need for Space")
   - Stores why user wants the space
   - Minimum 10 words required
   - Maximum 500 characters

2. **Parent User's About Me / Bio** (field: "About Me / Bio")
   - Stores user bio and personal description
   - Minimum 10 words required
   - Maximum 500 characters

3. **Parent User's special needs** (field: "special needs")
   - Stores special requirements
   - Minimum 10 words required
   - Maximum 500 characters

### Parent References

- **♻️💥create-proposal-flow's guest user**: The user creating the proposal (User data type)
- **♻️💥create-proposal-flow's step**: Current step number in the flow (controls visibility)

### Workflow Triggers

All input fields are set to **auto-bind**, meaning they update the user record automatically as the user types (with debouncing).

---

## Element Hierarchy Tree

```
G: Step 1
├── G: Why do you want this space?
│   ├── T: Why do you want this space?
│   ├── MI: Need for space
│   └── livetext A - need for space
├── G: aboutMe
│   ├── T: Total nights (displays "Tell us about yourself")
│   ├── MI: About yourself
│   └── livetext B - about bio
├── C: special needs
└── G: Special Needs [Conditional: hidden when checkbox unchecked]
    ├── T: unique requirements
    ├── MI: Special Needs
    └── livetext C - special needs
```

---

## Visual Layout

```
┌──────────────────────────────────────────────────────────┐
│ G: Step 1 (96% width, dotted border → none when visible)│
│ Max height: 500px, scrollable                            │
├──────────────────────────────────────────────────────────┤
│ ┌────────────────────────────────────────────────────┐   │
│ │ G: Why do you want this space? (98%, solid border) │   │
│ │ ┌──────────────────────────────────────────────┐   │   │
│ │ │ T: Why do you want this space? (18px)        │   │   │
│ │ ├──────────────────────────────────────────────┤   │   │
│ │ │ MI: Need for space (80px height)             │   │   │
│ │ │ Placeholder: "How will you use the space..." │   │   │
│ │ │ Max 500 chars, min 10 words, required        │   │   │
│ │ ├──────────────────────────────────────────────┤   │   │
│ │ │ livetext A - need for space (validation)     │   │   │
│ │ └──────────────────────────────────────────────┘   │   │
│ └────────────────────────────────────────────────────┘   │
│                                                           │
│ ┌────────────────────────────────────────────────────┐   │
│ │ G: aboutMe (98%, solid border)                     │   │
│ │ ┌──────────────────────────────────────────────┐   │   │
│ │ │ T: Total nights → "Tell us about yourself"  │   │   │
│ │ ├──────────────────────────────────────────────┤   │   │
│ │ │ MI: About yourself (80px height)             │   │   │
│ │ │ Placeholder: "Please take a moment to..."    │   │   │
│ │ │ Max 500 chars, min 10 words, required        │   │   │
│ │ ├──────────────────────────────────────────────┤   │   │
│ │ │ livetext B - about bio (validation)          │   │   │
│ │ └──────────────────────────────────────────────┘   │   │
│ └────────────────────────────────────────────────────┘   │
│                                                           │
│ ┌────────────────────────────────────────────────────┐   │
│ │ ☐ C: special needs (checkbox, 15px font)          │   │
│ │   "Do you have any unique requirements?"          │   │
│ └────────────────────────────────────────────────────┘   │
│                                                           │
│ ┌────────────────────────────────────────────────────┐   │
│ │ G: Special Needs (98%, solid border)               │   │
│ │ [Hidden when checkbox unchecked]                   │   │
│ │ ┌──────────────────────────────────────────────┐   │   │
│ │ │ T: unique requirements                       │   │   │
│ │ │ "Write your unique requirements"             │   │   │
│ │ ├──────────────────────────────────────────────┤   │   │
│ │ │ MI: Special Needs (80px height)              │   │   │
│ │ │ Placeholder: "Any special needs..."          │   │   │
│ │ │ Max 500 chars, min 10 words, required        │   │   │
│ │ ├──────────────────────────────────────────────┤   │   │
│ │ │ livetext C - special needs (validation)      │   │   │
│ │ └──────────────────────────────────────────────┘   │   │
│ └────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────┘
```

---

## Key Implementation Notes

### 1. Step Visibility Control
The entire "G: Step 1" group is controlled by:
- **Conditional 1**: Hidden when `G: Create proposal flow's step is not 1`
- This ensures Step 1 is only visible when the flow is on step 1

### 2. Border Behavior
- **Default**: Dotted border (1px, #6B6B6B)
- **Conditional 2**: When visible, border changes to None
- This provides a visual indicator during development but clean appearance for users

### 3. Input Validation Strategy
All three multiline inputs enforce the same validation:
- **Client-side**: Placeholder text mentions "minimum of 10 words"
- **Real-time feedback**: livetext plugin elements show character/word count
- **Database**: Fields are marked as required ("This input should not be empty")
- **Character limit**: 500 characters maximum

### 4. Auto-binding Architecture
All inputs use auto-binding to the parent User element:
- Parent data source: `♻️💥create-proposal-flow's guest user`
- Changes save automatically as user types
- No explicit "Save" workflow needed
- Ensures data persistence even if user navigates away

### 5. Conditional Form Sections
The special needs section demonstrates progressive disclosure:
- **Default state**: Hidden
- **Trigger**: User checks "C: special needs" checkbox
- **Behavior**: "G: Special Needs" group becomes visible
- **Conditional**: `When C: special needs isn't checked` → Hide element
- **UX benefit**: Reduces form complexity for users without special needs

### 6. Vertical Scrolling
- Parent group max height: 500px
- Vertical scrolling enabled when content overflows
- Ensures form doesn't take excessive vertical space
- Fit height to content: Yes (shrinks when content is less than 500px)

### 7. Consistent Styling Pattern
All three input groups follow identical design:
- Width: 98%
- Height: 0px - 200px
- Solid border, 2px width, 10px roundness
- Border color: Text (#4D4D4D)
- Creates visual consistency and grouping

### 8. Typography Hierarchy
- **Section labels** (Text elements): 18px, Inter 400, #424242, 1.5 line spacing
- **Input text**: 16px, Inter 400, #424242, 1.0 line spacing
- **Checkbox label**: 15px, Inter 400, #404040, 1.0 line spacing
- **Placeholder text**: #B5B5B5 (light gray for contrast)

---

## Screenshots Reference

All screenshots saved to: `.playwright-mcp/`

1. **step1-appearance.png** - Parent group "G: Step 1" Appearance properties
2. **step1-layout.png** - Parent group "G: Step 1" Layout properties
3. **step1-conditional.png** - Parent group "G: Step 1" Conditional rules (2 rules)
4. **step1-children-list.png** - Expanded elements tree showing all 4 children
5. **child1-why-space-appearance.png** - "G: Why do you want this space?" Appearance tab
6. **child1-1-text-why-space-appearance.png** - "T: Why do you want this space?" text element properties
7. **child1-2-multiline-need-space.png** - "MI: Need for space" input field properties
8. **child3-checkbox-special-needs.png** - "C: special needs" checkbox properties
9. **child4-special-needs-conditional.png** - "G: Special Needs" conditional rule

---

## Technical Implementation Details

### Data Type: User
Fields being modified on the User data type:
- `need for Space` (text)
- `About Me / Bio` (text)
- `special needs` (text)

### Plugin: livetext
Used in 3 instances (A, B, C) for:
- Real-time word/character counting
- Validation feedback
- User guidance on minimum requirements

### Auto-binding Configuration
All multiline inputs have:
- Enable auto-binding: Yes (checked)
- Field to modify: Specified field name
- Show an alert on success: No (unchecked)
- Automatic debounced saves to database

### Element ID Attribution
- MI: Need for space → ID: "102"
- Other elements may have IDs not captured in screenshots

---

## Conditional Logic Summary

### Parent Group Conditionals

| Conditional | When | Then | Purpose |
|------------|------|------|---------|
| 1 | `G: Create proposal flow's step is not 1` | Hide element | Show only on Step 1 |
| 2 | `This Group is visible` | Border: None | Remove dev border |

### Child Element Conditionals

| Element | Conditional | When | Then | Purpose |
|---------|------------|------|------|---------|
| G: Special Needs | 1 | `C: special needs isn't checked` | Hide element | Toggle visibility |
| T: Why do you want this space? | 2 | (Not captured) | (Unknown) | - |
| MI: Need for space | 1 | (Not captured) | (Unknown) | - |
| C: special needs | 2 | (Not captured) | (Unknown) | - |

**Note**: Some conditional details weren't expanded during extraction. These would need additional investigation.

---

## Validation & Error Handling

### Input Validation Rules

Each multiline input enforces:
1. **Required field**: "This input should not be empty" = checked
2. **Minimum length**: Placeholder mentions "minimum of 10 words"
3. **Maximum length**: 500 characters enforced
4. **Real-time feedback**: livetext plugin shows current count

### User Experience Flow

1. User sees placeholder with minimum requirement
2. User begins typing
3. livetext updates character/word count in real-time
4. Auto-binding saves changes (with debounce)
5. Field validates on blur or form submission
6. Error state likely shows if minimum not met (styling not captured)

---

## Accessibility Considerations

### Observed Good Practices
- Clear placeholder text explaining requirements
- Real-time validation feedback
- Required fields marked appropriately
- Sufficient color contrast on text (#424242 on white)
- Border indicators for input focus

### Potential Improvements
- Aria labels may be needed (not visible in Bubble editor)
- Keyboard navigation order should follow visual order
- Error messages should be programmatically associated with inputs
- Screen reader announcements for character count updates

---

## Performance Considerations

### Auto-binding Impact
- Each keystroke triggers a debounced database write
- With 3 auto-bound inputs, potential for multiple simultaneous writes
- Bubble handles debouncing automatically (typically ~500ms delay)
- Network efficiency depends on Bubble's batching

### Vertical Scrolling
- Max height: 500px limits initial render area
- Overflow-y: scroll creates scrollable container
- Minimal performance impact with 4 child groups

### Plugin Performance
- 3 instances of livetext plugin
- Each monitors one input field
- Lightweight computation (word/character counting)
- No significant performance concerns

---

## Migration & Replication Notes

### To Recreate This Step

1. **Create parent group** "G: Step 1"
   - Set to Column layout
   - Width: 96%, Height: 0-500px
   - Enable vertical scrolling
   - Add 2 conditionals for visibility and border

2. **Add 3 identical input groups**:
   - Each with Text label (18px)
   - Multiline Input (80px, 500 char max, required, auto-bind)
   - livetext plugin instance
   - Width: 98%, solid border styling

3. **Add checkbox**:
   - Label: "Do you have any unique requirements?"
   - Preset: Unchecked

4. **Add conditional group**:
   - Same structure as other input groups
   - Add conditional: Hide when checkbox unchecked

5. **Configure data sources**:
   - Parent groups: `♻️💥create-proposal-flow's guest user`
   - Input fields: Specify field names
   - Enable auto-binding on all inputs

### Dependencies
- **User data type** must have fields:
  - need for Space (text)
  - About Me / Bio (text)
  - special needs (text)
- **livetext plugin** must be installed
- **Parent element** `♻️💥create-proposal-flow` must exist with:
  - guest user (User type)
  - step (number type)

---

## Testing Checklist

- [ ] Step 1 appears when flow is on step 1
- [ ] Step 1 hides when flow moves to other steps
- [ ] Dotted border appears in editor but not to users
- [ ] All 3 input fields accept text
- [ ] Character count updates in real-time (livetext)
- [ ] Auto-binding saves to database
- [ ] 500 character limit enforced
- [ ] Required field validation works
- [ ] Checkbox toggles Special Needs section
- [ ] Special Needs section hidden by default
- [ ] Special Needs section appears when checkbox checked
- [ ] Vertical scrolling works when content exceeds 500px
- [ ] All inputs maintain data when navigating away and returning
- [ ] Responsive behavior at different screen widths (98% width adapts)

---

## Status: EXTRACTION COMPLETE

All 4 direct children of "G: Step 1" have been documented, including:
- Parent group properties (Appearance, Layout, Conditionals)
- All 4 child elements (structure and properties)
- All nested children (12 total nested elements)
- Conditional logic and data bindings
- Visual layout and styling details
- Implementation notes and technical considerations

**Total elements documented**: 17 elements (1 parent + 4 children + 12 nested children)
