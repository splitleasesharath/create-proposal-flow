# ChatGPT Integration Workflows

This document details the 3 ChatGPT integration workflows extracted from the create-proposal-flow page in Bubble.io.

**Source URL**: https://bubble.io/page?id=upgradefromstr&tab=Workflow&name=%E2%99%BB%EF%B8%8F%F0%9F%92%A5create-proposal-flow&version=live&type=custom

**Category**: Send Message to ChatGPT

---

## Workflow 1: MI: About yourself value changed

### Trigger
- **Event Type**: Element Event
- **Event**: "MI: About yourself's value is changed"
- **Element**: MI: About yourself (MultilineInput)
- **Condition**: Only when Click

### Step 1: OpenAI ChatGPT - Send Message To ChatGPT

**Action**: OpenAI ChatGPT - Send Message To ChatGPT(parameters)

**Parameters**:
- **(body) Prompt**:
  - Type: Arbitrary text (formatted as JSON-safe)
  - Structure: `Desintermediation data's prompt` + `This MultilineInput's value`
  - Note: Uses the "Desintermediation data" option from the "Prompts" option set

- **(body) Token**:
  - `gpt-4o(now gpt 4.1)'s Max Completion Tokens`

- **(body) Model**:
  - `gpt-4o(now gpt 4.1)'s Model Name`

- **Condition**: Only when Click

### Step 2: Make changes to User

**Action**: Make changes to User...

**Parameters**:
- **Thing to change**: `♻️💥create-proposal-flow's guest user`
- **Field Update**:
  - **About Me / Bio** = `Result of step 1 (OpenAI ChatGPT - ...)'s body choices:first item's message content`

**Purpose**: Stores the ChatGPT-generated response in the user's "About Me / Bio" field.

**Screenshots**:
- C:\Users\Split Lease\My Drive (splitleaseteam@gmail.com)\!Agent Context and Tools\SL16\components\create-proposal-popup\.playwright-mcp\workflow-1-about-yourself-overview.png
- C:\Users\Split Lease\My Drive (splitleaseteam@gmail.com)\!Agent Context and Tools\SL16\components\create-proposal-popup\.playwright-mcp\workflow-1-chatgpt-action-overview.png
- C:\Users\Split Lease\My Drive (splitleaseteam@gmail.com)\!Agent Context and Tools\SL16\components\create-proposal-popup\.playwright-mcp\workflow-1-complete-details.png
- C:\Users\Split Lease\My Drive (splitleaseteam@gmail.com)\!Agent Context and Tools\SL16\components\create-proposal-popup\.playwright-mcp\workflow-1-step2-response-handling.png

---

## Workflow 2: MI: Need for space value changed

### Trigger
- **Event Type**: Element Event
- **Event**: "MI: Need for space's value is changed"
- **Element**: MI: Need for space (MultilineInput)
- **Condition**: Only when Click

### Step 1: OpenAI ChatGPT - Send Message To ChatGPT

**Action**: OpenAI ChatGPT - Send Message To ChatGPT(parameters)

**Parameters**:
- **(body) Prompt**:
  - Type: Arbitrary text (formatted as JSON-safe)
  - Structure: `Desintermediation data's prompt` + `"` + `This MultilineInput's value` + `"`
  - Note: Uses the "Desintermediation data" option from the "Prompts" option set

- **(body) Token**:
  - `gpt-4o(now gpt 4.1)'s Max Completion Tokens`

- **(body) Model**:
  - `gpt-4o(now gpt 4.1)'s Model Name`

- **Condition**: Only when Click

### Step 2: Make changes to User

**Action**: Make changes to User...

**Parameters**:
- **Thing to change**: `♻️💥create-proposal-flow's guest user`
- **Field Update**:
  - **need for Space** = `Result of step 1 (OpenAI ChatGPT - ...)'s body choices:first item's message content`

**Purpose**: Stores the ChatGPT-generated response in the user's "need for Space" field.

**Screenshots**:
- C:\Users\Split Lease\My Drive (splitleaseteam@gmail.com)\!Agent Context and Tools\SL16\components\create-proposal-popup\.playwright-mcp\workflow-2-overview.png
- C:\Users\Split Lease\My Drive (splitleaseteam@gmail.com)\!Agent Context and Tools\SL16\components\create-proposal-popup\.playwright-mcp\workflow-2-chatgpt-action.png
- C:\Users\Split Lease\My Drive (splitleaseteam@gmail.com)\!Agent Context and Tools\SL16\components\create-proposal-popup\.playwright-mcp\workflow-2-prompt-details.png
- C:\Users\Split Lease\My Drive (splitleaseteam@gmail.com)\!Agent Context and Tools\SL16\components\create-proposal-popup\.playwright-mcp\workflow-2-step2-response-handling.png

---

## Workflow 3: MI: Special Needs value changed

### Trigger
- **Event Type**: Element Event
- **Event**: "MI: Special Needs's value is changed"
- **Element**: MI: Special Needs (MultilineInput)
- **Condition**: Only when Click

### Step 1: OpenAI ChatGPT - Send Message To ChatGPT

**Action**: OpenAI ChatGPT - Send Message To ChatGPT(parameters)

**Parameters**:
- **(body) Prompt**:
  - Type: Arbitrary text (formatted as JSON-safe)
  - Structure: `Desintermediation data's prompt` + `This MultilineInput's value`
  - Note: Uses the "Desintermediation data" option from the "Prompts" option set

- **(body) Token**:
  - `gpt-4o(now gpt 4.1)'s Max Completion Tokens`

- **(body) Model**:
  - `gpt-4o(now gpt 4.1)'s Model Name`

- **Condition**: Only when Click

### Step 2: Make changes to User

**Action**: Make changes to User...

**Parameters**:
- **Thing to change**: `♻️💥create-proposal-flow's guest user`
- **Field Update**:
  - **special needs** = `Result of step 1 (OpenAI ChatGPT - ...)'s body choices:first item's message content`

**Purpose**: Stores the ChatGPT-generated response in the user's "special needs" field.

**Screenshots**:
- C:\Users\Split Lease\My Drive (splitleaseteam@gmail.com)\!Agent Context and Tools\SL16\components\create-proposal-popup\.playwright-mcp\workflow-3-overview.png
- C:\Users\Split Lease\My Drive (splitleaseteam@gmail.com)\!Agent Context and Tools\SL16\components\create-proposal-popup\.playwright-mcp\workflow-3-chatgpt-action.png
- C:\Users\Split Lease\My Drive (splitleaseteam@gmail.com)\!Agent Context and Tools\SL16\components\create-proposal-popup\.playwright-mcp\workflow-3-step2-response-handling.png

---

## Common Pattern Analysis

All three workflows follow the same structure:

1. **Trigger**: When a specific MultilineInput field value changes
2. **Step 1**: Send the user's input to ChatGPT using the OpenAI API
   - Uses a prompt template from "Desintermediation data" option set
   - Combines the template with the user's input
   - Uses GPT-4o model
   - Formats the request as JSON-safe
3. **Step 2**: Store the AI-generated response back to the user record
   - Saves to corresponding field on the guest user object
   - Extracts the message content from the first choice in the response

### API Configuration Details

- **Model**: gpt-4o (referenced as "gpt 4.1" in the UI)
- **Token Limit**: Uses a configurable "Max Completion Tokens" setting
- **Response Handling**: Accesses the response via `body.choices[0].message.content`
- **Prompt Template**: Stored in a "Prompts" option set with "Desintermediation data" option

### User Fields Updated

1. **About Me / Bio** - Populated by Workflow 1
2. **need for Space** - Populated by Workflow 2
3. **special needs** - Populated by Workflow 3

These fields appear to be AI-enhanced versions of the user's raw input from Step 1 of the proposal creation flow.
