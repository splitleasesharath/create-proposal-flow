# Create Proposal Popup - Component Documentation

**Status:** ✅ Exploration Complete
**Date Explored:** 2025-11-11
**URL:** https://app.split.lease/view-split-lease/1701098422128x952084668440117200

A comprehensive documentation of the "Create Proposal" popup/modal from the Split Lease platform, including all UI elements, user flows, and technical details.

## Quick Summary

This is a **2-step modal wizard** (not 5 steps) that allows guests to submit rental proposals to property hosts. The actual implementation from the live site includes:

- ✅ 2-step form flow (Create → Confirm)
- ✅ Conditional fields based on user selections
- ✅ Inline editing capability on confirmation screen
- ✅ Dynamic pricing calculations
- ✅ Date picker with validation
- ✅ Multi-field text validation (minimum 10 words)
- ✅ Full pricing breakdown with fees
- ✅ Built on Bubble.io framework

## Documentation Files

- **DOCUMENTATION.md** - Complete technical documentation (70+ pages)
- **README.md** - This file (quick reference)
- **Screenshots/** - Visual documentation (7 screenshots in `.playwright-mcp/`)

## Actual Implementation Structure

### Step 1: Create Proposal (Information Gathering)

**Purpose:** Collect guest information and requirements

**Fields:**
1. **Why do you want this space?** (Textarea, ID: 102)
   - Placeholder: "How will you use the space? (minimum of 10 words)"
   - Required, minimum 10 words

2. **Tell us about yourself** (Textarea, ID: 103)
   - Placeholder: "Please take a moment to share some details about yourself..."
   - Required, minimum 10 words

3. **Do you have any unique requirements?** (Checkbox, ID: 1762858213215x33720)
   - Unchecked by default
   - When checked, reveals additional field:

4. **Write your unique requirements** (Textarea, ID: 104, Conditional)
   - Placeholder: "Any special needs, personal preference or specific requirements..."
   - Only visible when checkbox is checked
   - Required when visible, minimum 10 words

**Action:** "Next" button (ID: button2) → Proceeds to Step 2

### Step 2: Confirm Proposal (Review & Submit)

**Purpose:** Review all details, pricing, and submit

**Booking Summary (Read-only with edit links):**
- Approx Move-in: "Mon, Nov 24, 2025" (editable)
- Check-in: "Monday" (editable)
- Check-out: "Thursday" (editable)
- Reservation span: "13" weeks (editable)

**Pricing Breakdown:**
- Price per night: $440.72
- Number of reserved nights: x 39
- Total price for reservation: $17,188.25
- Price per 4 weeks: $5,288.69
- Refundable Damage Deposit: + $900.00
- Maintenance Fee / 4 wks: + $200.00
- **Price for 1st 4 weeks (bold):** $6,388.69

**Actions:**
- "Go back" button (ID: button1) → Returns to Step 1
- "Submit Proposal" button → Submits the proposal

### Step 2a: Adjust Proposal (Edit Mode)

**Purpose:** Modify dates and duration

**Accessible via:** Clicking "edit" links on Step 2

**Fields:**
1. **Approx Move-in** (Date picker)
   - Calendar widget with month navigation
   - Displays: "11/24/25" format
   - Past dates disabled

2. **Move-in Range** (Text input)
   - Optional flexibility window

3. **Reservation Length** (Dropdown)
   - Options: 6 weeks through 26 weeks
   - Special option: "Other (wks)"

**Actions:**
- "Go back" → Cancel changes
- "Yes, Continue" → Save and return to Step 2

## Installation

```bash
# Navigate to the component directory
cd create-proposal-popup

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Usage

### Basic Usage

```tsx
import { CreateProposalPopup } from './components/CreateProposalPopup';
import { User, Listing } from './types';

const MyApp = () => {
  const listing: Listing = {
    id: 'listing-123',
    title: 'Beautiful Apartment',
    minimumNights: 3,
    maximumNights: 90,
    // ... other listing properties
  };

  const guestUser: User = {
    id: 'user-123',
    email: 'guest@example.com',
    name: 'John Doe',
    // ... other user properties
  };

  const handleProposalSubmit = (proposal) => {
    console.log('Proposal submitted:', proposal);
    // Send to backend, update state, etc.
  };

  return (
    <CreateProposalPopup
      listing={listing}
      guestUser={guestUser}
      isOpen={true}
      onClose={() => console.log('Popup closed')}
      onProposalSubmit={handleProposalSubmit}
    />
  );
};
```

### Props

```typescript
interface CreateProposalPopupProps {
  // Required props
  listing: Listing;              // The listing being proposed for
  guestUser: User;               // The guest creating the proposal

  // Optional props
  isOpen?: boolean;              // Control popup visibility (default: true)
  onClose?: () => void;          // Callback when popup is closed
  onProposalSubmit?: (proposal: Proposal) => void;  // Callback on submission
  onNavigateToRentalApp?: (proposalId: string) => void;
  onNavigateToDashboard?: (proposalId?: string) => void;

  // Initial state
  initialStep?: number;          // Starting step (default: 1)

  // Feature flags
  enableChatGPT?: boolean;       // Enable ChatGPT integration (default: false)
  showLiveAlerts?: boolean;      // Show toast notifications (default: true)
}
```

## Project Structure

```
create-proposal-popup/
├── src/
│   ├── components/
│   │   ├── CreateProposalPopup.tsx     # Main component
│   │   ├── CreateProposalPopup.css     # Main styles
│   │   └── steps/
│   │       ├── Step1MoveInDate.tsx     # Step 1 component
│   │       ├── Step2PersonalInfo.tsx   # Step 2 component
│   │       ├── Step3ReservationSpan.tsx # Step 3 component
│   │       ├── Step4ScheduleSelection.tsx # Step 4 component
│   │       ├── Step5Review.tsx         # Step 5 component
│   │       └── StepStyles.css          # Shared step styles
│   ├── types/
│   │   └── index.ts                    # TypeScript definitions
│   ├── utils/
│   │   ├── dateHelpers.ts              # Date manipulation utilities
│   │   ├── validators.ts               # Form validation functions
│   │   ├── priceCalculations.ts        # Pricing logic
│   │   └── toastHelper.ts              # Toast notification helpers
│   ├── PreviewApp.tsx                  # Preview/demo application
│   ├── PreviewApp.css                  # Preview app styles
│   ├── main.tsx                        # Entry point
│   └── index.css                       # Global styles
├── index.html                          # HTML template
├── package.json                        # Dependencies
├── tsconfig.json                       # TypeScript config
├── vite.config.ts                      # Vite config
└── README.md                           # This file
```

## Development

### Running the Preview App

The component includes an isolated preview app for testing:

```bash
npm run dev
```

This will start the Vite dev server on port 8000 and open your browser to the preview page.

### Testing the Component

1. The preview app provides mock data for a guest user and listing
2. Click "Open Create Proposal Popup" to test the full flow
3. Fill in each step and observe the validation
4. Submit the proposal to see the result

### Customization

#### Custom Styles

You can override the default styles by:
1. Modifying the CSS files directly
2. Using CSS modules
3. Applying custom className props

#### Custom Validation

Add custom validation rules in `src/utils/validators.ts`:

```typescript
export const validateCustomRule = (value: string): boolean => {
  // Your custom validation logic
  return true;
};
```

#### Custom Pricing

Modify pricing calculations in `src/utils/priceCalculations.ts`:

```typescript
export const calculateCustomPrice = (listing: Listing, nights: number): number => {
  // Your custom pricing logic
  return 0;
};
```

## State Management

The component manages state using React hooks:

```typescript
interface CreateProposalState {
  step: number;                      // Current step (1-5)
  moveInDateSelected: Date | null;   // Selected move-in date
  checkInDay: Date | null;           // Check-in date
  checkOutDay: Date | null;          // Check-out date
  reservationSpanWeeks: number;      // Reservation span
  nightsSelected: number;            // Calculated nights
  daysSelected: number;              // Calculated days
  aboutYourself: string;             // Personal info
  needForSpace: string;              // Housing needs
  specialNeeds: string;              // Special requirements
  // ... other state fields
}
```

## Validation Rules

### Step 1
- Move-in date must be selected
- Date cannot be in the past

### Step 2
- "About Yourself" minimum 10 characters
- "Need for Space" minimum 10 characters
- "Special Needs" is optional

### Step 3
- Reservation span must be at least 1 week
- Cannot exceed 52 weeks (1 year)

### Step 4
- Check-in and check-out dates must be selected
- Check-out must be after check-in
- Nights must meet listing minimum/maximum requirements
- Total nights cannot exceed available nights

### Step 5
- All previous steps must be valid
- Final review before submission

## Pricing Calculation

The component calculates pricing based on:
1. Number of nights selected
2. Listing's nightly rates (3, 4, 5, 7 nights)
3. Host rate, weekly rate, or monthly rate
4. Damage deposit (if applicable)

```typescript
const pricing = {
  nightlyRate: 120,
  totalReservation: 840,  // 7 nights × $120
  damageDeposit: 500,
  totalDue: 1340
};
```

## Toast Notifications

The component uses react-toastify for user feedback:

```typescript
// Error notification
showAlert({
  title: 'Validation Error',
  content: 'Please fill all required fields',
  alertType: 'error',
  showOnLive: true
});

// Success notification
showAlert({
  title: 'Proposal Submitted!',
  content: 'Your proposal has been sent to the property owner',
  alertType: 'success',
  showOnLive: true
});
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This component was converted from Bubble.io and maintains feature parity with the original implementation while adding:
- Type safety with TypeScript
- Improved performance with React
- Better developer experience
- Easier customization and extension

## License

MIT

## Credits

- **Original Bubble Implementation**: create-proposal-flow reusable element
- **Conversion**: Generated with Claude Code
- **Framework**: React 18 + TypeScript + Vite
- **Team**: Split Lease Development Team

## Troubleshooting

### Component not rendering?
- Check that `isOpen` prop is true
- Verify listing and guestUser props are provided
- Check browser console for errors

### Validation not working?
- Ensure all required fields are filled
- Check date formats are correct
- Verify listing constraints (min/max nights)

### Styles not applied?
- Import CSS files in correct order
- Check for CSS conflicts with parent application
- Verify Vite build is including styles

## Preview URL

When running locally:
- Development: http://localhost:8000
- Preview: http://localhost:8000 (after `npm run preview`)

## Future Enhancements

- [ ] Add internationalization (i18n)
- [ ] Add accessibility improvements (ARIA labels)
- [ ] Add unit tests with Jest
- [ ] Add E2E tests with Playwright
- [ ] Add animation library (framer-motion)
- [ ] Add form persistence (localStorage)
- [ ] Add PDF export of proposal
- [ ] Add email preview before submission

---

**Built with ❤️ by the Split Lease Team**
