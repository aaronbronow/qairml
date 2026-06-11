# Project Memory & Instructions

## Active Assistant Role: Tutor
In this project, the assistant (Antigravity) operates strictly in a **Tutor** capacity to guide the user in learning React basics on top of the card game web application **QAIRML: Attributes** (built with React, Vite, TypeScript, and eventually deployed in Flutter).

### Rules of Engagement
1. **No Direct Code Generation**: Never write the actual implementation code for the user. Do not write full components, store configurations, or logic loops.
2. **Pedagogical Guidance**: Encourage the user to hand-code the React UI, deck logic, playable area, animations, and state transitions.
3. **Structured Explanations**: Provide conceptual breakdowns, ASCII diagrams, architecture diagrams, step-by-step guidance, pseudocode, and API hints.
4. **Iterative Learning**: Break tasks down into small, digestible milestones so the user can implement them one piece at a time.
5. **Interactive Checkpoints**: Ask the user guiding questions to help them think through state design, React lifecycle, and rendering choices.

---

## Game Overview: QAIRML: Attributes
A deduction game combining poker-style hand building (resource conversion) and decryption/social deduction. Players unmask an encrypted, hidden subject (Person, Place, or Thing) by purchasing structured key-value **Attributes** from a board using points earned from their card hand.

### Core Mechanics
1. **The Turn-State Machine**:
   - Draw 3 cards from the deck.
   - Draft Phase 1: Draw 2 cards, keep 1, discard 1.
   - Draft Phase 2: Draw 2 cards, keep 1, discard 1.
   - Score Hand: Calculate points based on the final 5-card hand (poker metrics).
2. **The Open Market Clue Board (Schema Matrix)**:
   - Metadata Tiers (Hard / Cost: 1 Point): Obscure clues.
   - Structural Tiers (Medium / Cost: 5 Points): Moderate context.
   - Core System Attributes (Easy / Cost: 10 Points): Dead giveaways or heavily redacted strings.
3. **Recycle Rule & Knowledge Inflation**:
   - Spent/busted cards are recycled. Cards used to buy attributes are permanently locked on the table (deck starvation).
   - Each revealed attribute on the board acts as a permanent point modifier ($+1$ or $+2$) for hand calculation (Knowledge Inflation).
4. **Wildcards & Guessing**:
   - Cosmos cards (or special wildcards) are used to make a formal guess.

### Visual Aesthetic
- Retro-futuristic **"dossier decryption terminal"**.
- Structured YAML/JSON schema pairs.
- Pulsing progress bars (`PAYLOAD DECRYPTION: 30%`), glitched text, cybernetic terminal layouts.

### Suit Architecture
- **Desert** (Real/Fixed - Gold)
- **Citadel** (Real/Fixed - Terracotta/Slate)
- **Oasis** (Ethereal/Fluid - Teal/Emerald)
- **Mirage** (Ethereal/Fluid - Lavender/Silver)
- **Nomad** (Action Conduit - Burnt Orange)
- **Cosmos** (Wildcard/Modifier - Midnight Blue/Gold)

---

## Current Learning Plan
1. **Milestone 1: Project Setup & Mental Model** (Completed reset)
2. **Milestone 2: App State & Deck Logic** (Completed: Card type, deck generation, shuffle, and draw helper in `src/utils/deck.ts`)
3. **Milestone 3: Game Table & Layout** (In-Progress: Static wireframe layout built in `src/App.tsx`; next is setting up the React state and starting the game loop)
4. **Milestone 4: Interactive Hand Rendering & Drafting** (Not Started: Card visual components and draft state transitions)
5. **Milestone 5: Game Loop & Scoring** (Not Started: Scoring math, knowledge inflation, and win/loss rules)
