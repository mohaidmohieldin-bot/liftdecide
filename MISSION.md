# Founder Notebook

Welcome to your Founder Notebook. This is the single source of truth for your startup project. As founder and lead decision-maker, use this file to define your concept, guide OpenCode, and track every important decision.

---

## 0. Founder Decision

*Official direction — approved by the founder. This is the single source of truth.*

**Our startup, in one sentence:**
> We help **intermediate lifters** who struggle with **not knowing when to push, hold, or deload their training** by providing **a metrics-first training-decision engine that reads their logged lifts and tells them exactly what to do next**, helping them **trust their plan and stop wasting weeks guessing.**

**Full problem statement:**
Intermediate lifters stall and can't tell if it's fatigue, form breakdown, or a real plateau. Their apps log what they did but never say what to do next — so they guess, waste weeks, and program-hop instead of trusting a plan.

**Verdict: SOLID — proceed to validation.** Validation happens through a deliberately small v1: a static HTML/CSS/JS decision calculator (no database) that doubles as both the product probe and the interview artifact. ~20 interviews with other intermediate lifters are still planned; the calculator is what we show them.

### Evaluation Against the 5 Tests

| Criterion | Assessment | Verdict |
| :--- | :--- | :--- |
| **User** | Clear and narrow: intermediate lifters who know *what* to do but not *when* to change it. Bonus: the founder **is the user**, so motivation is personal. | Strong |
| **Problem** | Real and lived — the founder hit the exact "stall or deload?" wall. High frequency (every stall) with a real-but-slow cost (wasted weeks). | Strong |
| **Value** | Real gap: existing apps **log** progress but never **decide**. Differentiation comes from making the reasoning legible so users trust the call — not from AI magic. | Strong |
| **Feasibility** | Buildable solo. Start with hand-written rules from proven autoregulation protocols + plain inputs (sets/reps/weight/RPE). No camera/AI needed for v1. Weakest link: RPE is subjective — validate it early. | Strong |
| **Clarity** | The one-liner is specific and honest. Caveat: "decision engine" vs "log app" must be clear in 3 seconds on a landing page. | Good |

---

## 1. Vision & Problem Discovery

*The foundation: Knowledge → Problem → Solution → Value → Product*

- **Domain / Industry:** Fitness / strength training (self-coached lifters)
- **Target Audience (Who is this for?):** Intermediate lifters (past beginner, no coach) who train on their own
- **The Core Problem (What pain point are you solving?):** When a lift stalls, they don't know whether to push through, deload, or switch — guessing wastes weeks and makes them hop programs
- **Proposed Solution:** A metrics-first training-decision engine that reads logged lifts (sets/reps/weight/RPE) and makes one coach-like call: train on, hold, deload, or flag — with a legible reason
- **Value Proposition (Why choose this over existing alternatives?):** Existing apps tell you what you *did*; this tells you what to *do next* — and explains why, so you trust the plan instead of guessing 

---

## 2. Brand Identity & Design System

*Define the visual and emotional tone before generating code or copy.*

- **Company / Product Name:** LiftDecide
- **Tagline:** *Logged it. Now what?*
- **Brand Personality / Tone of Voice:** Bold, Playful, Friendly — we say the hard thing clearly (bold), with warmth and a bit of humor (playful + friendly). Plain-English decisions, no jargon.

### Color Palette — "Coral Punch" (Option 1)

| Role | Hex | Usage |
| :--- | :--- | :--- |
| Primary | `#FF5A3C` (coral) | Buttons, links, key highlights |
| Primary dark | `#E84335` | Primary hover / active states |
| Secondary | `#FFB03A` (amber) | Accent fills, highlights, secondary CTA on dark |
| Accent | `#7C4DFF` (violet) | Details, small accents, focus rings |
| Background | `#FFF8F5` (warm white) | Page background |
| Surface / Card | `#FFFFFF` | Cards, panels, inputs |
| Inverted background | `#1E1B2E` (deep ink) | Footer, dark sections, badges on dark |
| Text (Primary / Muted) | `#1E1B2E` / `#6B6577` | Headings & body / secondary text |

### Typography

| Role | Font | Weight / Style |
| :--- | :--- | :--- |
| Heading | **Space Grotesk** (bold, modern, slightly playful) | 700, tight `-0.5%` letter-spacing, `~1.1` line-height |
| Body | **DM Sans** (clean, warm, friendly) | 400/500, `1.6` line-height |
| Label / Data | **JetBrains Mono** (metrics feel) | 500, used for numbers, stats, and small labels |

Type scale: Display 56 · H1 40 · H2 32 · H3 24 · Body 16 · Small 14 · Caption 12.

### Button Styles

| Variant | Style |
| :--- | :--- |
| **Primary** | Coral `#FF5A3C` fill, ink bold text, pill shape, `14px 28px` padding. Hover: darkens to `#E84335` and lifts `-3px` with a soft shadow. Active: pressed back down. *(Ink text approved 2026-09-22 for WCAG AA contrast ~5.4:1.)* |
| **Secondary** | 2px solid `#1E1B2E`, transparent fill, ink text. Hover: fills with 5% ink tint. |
| **Ghost / Text** | Transparent, violet `#7C4DFF` text. Hover: soft violet 10% tint. |
| **Shared rules** | Pill radius `999px`, no uppercase, `600` weight, `200ms` ease transition, `3px` amber focus ring for keyboard users. Playful punch: hover keeps a tiny "lift" so buttons feel bouncy, not flat. |

### Border Radius Rules

| Token | Radius | Used for |
| :--- | :--- | :--- |
| `--radius-sm` | `8px` | Small chips, tags, thumbnails |
| `--radius-md` | `12px` | Inputs, cards, form fields |
| `--radius-lg` | `16px` | Large cards, modals, panels |
| `--radius-pill` | `999px` | Buttons, badges, pill labels |

Rule of thumb: the friendlier the element, the rounder it goes — buttons are pills, cards are soft squares, and inputs sit in between. 

---

## 3. Website Structure & Page Architecture

*Outline the narrative flow and layout of the public-facing website.*

- **Primary Goal / Conversion Action (e.g., Waitlist signup, Free trial, Contact demo):** 
- **Page Sections:**
  1. **Hero Section:** Headline, Subheadline, Primary CTA, Hero visual/mockup
  2. **Social Proof / Credibility:** 
  3. **Feature Highlights / Value Drivers:** 
  4. **How It Works / Product Demo:** 
  5. **Pricing / Tiers (Optional):** 
  6. **FAQ / Objection Handling:** 
  7. **Footer / Secondary CTAs:** 

---

## Page Architecture

*Landing page narrative flow: Hero → Problem → Solution → Features → Social Proof → CTA. Approved 2026-09-22.*

### 1. Hero

- **Headline:** *Logged it. Now what?*
- **Subheadline:** "LiftDecide reads your last few sets and tells you exactly what to do next — train on, hold, deload, or flag — with a plain-English reason you can trust."
- **Primary CTA:** "Get my first call" · **Secondary CTA:** "How it works"

### 2. Problem

- **Headline:** *Your log tells you what you did. Not what to do next.*
- When a lift stalls, you can't tell fatigue from a real plateau, so you guess — and waste weeks.
- Existing apps stay silent after the last rep. Silence leads to program-hopping.

### 3. Solution

- **Headline:** *The coach call you've been missing — on one screen.*
- One call per lift: **train on, hold, deload, or flag**, with the reason shown so it's a decision you understand, not a black box.
- Logic from proven autoregulation protocols, not AI magic — that's why you can trust it.

### 4. Features

- **Headline:** *Everything you need to decide. Nothing you don't.*
- Just weight + reps (3 "did you hit your target?" checks) — a 30-second session, no RPE guesswork.
- A simple, repeatable rule: miss a lift twice → deload. No jargon, no mystery.
- Every call shows the reasoning behind it, so you learn the rule instead of following blindly.

### 5. Social Proof

- **Headline:** *Built by an intermediate lifter who hit the same wall.*
- "I wasted weeks guessing — this is the fix I wanted myself."
- Placeholder for early validation: a line for the ~20 interviews once quotes land, plus v1 calculator usage.

### 6. CTA

- **Headline:** *Your next call in under 30 seconds.*
- Try the decision calculator now — no account, no logbook to import.
- **Primary CTA:** "Get my first decision" · **Secondary CTA:** "See the reasoning"

---

## 4. Decision Log

*Follow the cycle: Think → Ask → Evaluate → Decide → Build*

| Date | Topic / Area | Options Considered | Final Decision & Rationale | Status |
| :--- | :--- | :--- | :--- | :--- |
| 2026-09-22 | Startup direction | Form-analysis app, new programming app, metrics-driven decision engine | **Metrics-driven decision engine** — matches a lived problem, buildable solo, starts with logic not camera/AI | Done |
| 2026-09-22 | v1 scope / validation | Full app with accounts + database; 20 interviews first; static calculator without DB | **Static HTML/CSS/JS calculator, no database, no accounts.** Cheapest honest probe: does the decision earn trust, and do people return? The calculator is the interview artifact. | Done |
| 2026-09-22 | v1 inputs | RPE + weight + reps; weight only; weight + reps | **Weight + reps, no RPE.** RPE is the weakest link (subjective), and more inputs mean more misremembered data. | Done |
| 2026-09-22 | Stall rule | 1 miss = deload; 2 misses = deload; 3 misses = deload | **2 misses = deload.** Clear, easy to explain, avoids over-reacting to one bad day. | Done |
| 2026-09-22 | Critique refinements | Full 9-field form; minimal 4-field form | **Proposed — awaiting founder decision:** one weight field + 3 "hit target reps?" answers, plus a 1-session status check so visit #1 is not empty. | Proposed |
| 2026-09-22 | Brand design system | 3 palettes for "Bold, Playful, Friendly" | **"Coral Punch"** (`#FF5A3C` coral primary) — bold and warm, good contrast on both light and ink backgrounds. Typography: Space Grotesk headings, DM Sans body, JetBrains Mono for data. Buttons pill-radius, cards `12px`. | Done |
| 2026-09-22 | Button contrast | White text on coral; ink text on coral | **Ink text on coral primary buttons.** White on `#FF5A3C` is ~2.98:1 (fails WCAG AA); ink is ~5.4:1 (passes) and still reads bold + playful. | Done |
| | | | | |
| | | | | |

---

## 5. Notes & Prompts for OpenCode

*Use this section to draft prompt briefs, review feedback, and keep track of pending tasks.*

- [x] Define core problem statement and audience
- [ ] Validate problem via the v1 calculator + ~20 intermediate-lifter interviews
- [ ] Decide: 9-field form vs minimal 4-field form (single weight field + 3 reps-hit questions)
- [ ] Decide: add a 1-session "status check" so first-time visitors get value on visit #1
- [x] Select color palette and typography
- [ ] Draft website copy for hero section
- [ ] Build the base shell (Stage 5, Step 1) — exactly per the mini-spec below
- [ ] Build responsive hero and navigation components
- [ ] Implement feature showcase sections
- [ ] Add interactive elements and conversion forms
- [ ] Final visual polish and responsive testing

---
---

### Mini-spec: Base Shell (Stage 5, Step 1)

*This note is the exact contract for the base shell. When building `index.html` +
`style.css`, use precisely these fonts, variables, and tokens — no hardcoded hex
codes, no extra fonts. Every later component reads only these tokens.*

**1. Fonts** — Google Fonts, linked in the `<head>` of `index.html`:

```
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=JetBrains+Mono:wght@500&family=Space+Grotesk:wght@700&display=swap" rel="stylesheet" />
```

| Role | Font | Weight |
| :--- | :--- | :--- |
| Heading | Space Grotesk | 700 |
| Body | DM Sans | 400 / 500 |
| Label / Data | JetBrains Mono | 500 |

**2. CSS variables** — the full `:root` block that must live in `style.css`:

```css
:root {
  --font-heading: 'Space Grotesk', system-ui, sans-serif;
  --font-body:    'DM Sans', system-ui, sans-serif;
  --font-mono:    'JetBrains Mono', ui-monospace, monospace;

  --space-1:  4px;
  --space-2:  8px;
  --space-3: 16px;
  --space-4: 24px;
  --space-5: 32px;
  --space-6: 48px;

  --radius-sm:   8px;
  --radius-md:  12px;
  --radius-lg:  16px;
  --radius-pill: 999px;
}
```

**3. Color tokens** (the "Coral Punch" palette — every token, no exceptions):

| Token | Value | Role |
| :--- | :--- | :--- |
| `--color-background` | `#FFF8F5` | Page background (warm white) |
| `--color-surface` | `#FFFFFF` | Cards, panels, inputs |
| `--color-primary` | `#FF5A3C` | Buttons, links, key highlights (coral) |
| `--color-primary-dark` | `#E84335` | Primary hover / active |
| `--color-secondary` | `#FFB03A` | Accent fills, highlights (amber) |
| `--color-accent` | `#7C4DFF` | Small accents, focus rings (violet) |
| `--color-inverted` | `#1E1B2E` | Deep ink — footer, dark sections |
| `--color-text` | `#1E1B2E` | Headings & body text |
| `--color-text-muted` | `#6B6577` | Secondary text |
