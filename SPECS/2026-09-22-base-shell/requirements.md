# Feature Spec: Base Shell (2026-09-22)

## What is this feature?

The **base shell** is the foundation of the `build-lab/` website. It is the bottom
layer everything else sits on: the fonts the page loads, the CSS design tokens
(colour and type variables) defined once at the top of `style.css`, and the base
element styles (body, headings, containers) that use them.

This feature exists so that every later component (hero, navbar, feature cards,
footer) reads only from the shared tokens — never hardcoded hex codes or ad-hoc
fonts.

## Context

- The project constitution lives in `SPECS/MISSION.md`, `ROADMAP.md`, `TECH.md`.
- This feature is **Stage 5, Step 1** of the roadmap: *"Base shell + CSS design
  tokens in `build-lab/index.html` and `build-lab/style.css`."*
- The exact contract for this step is the **mini-spec** in `build-lab/MISSION.md`
  (Section 5). That mini-spec is the source of truth for fonts, variables, and
  tokens — this file only points at it and scopes the work.
- Current state:
  - `build-lab/index.html` — exists, has page content, but the `<head>` does not
    load the Google Fonts yet.
  - `build-lab/style.css` — has a `:root` token block and a base reset, but the
    token values must be checked against the mini-spec.
  - `build-lab/script.js` — not part of the base shell step.
- Project decisions already made (see `MISSION.md` Decision Log):
  - Brand palette is **"Coral Punch"**.
  - Typography: **Space Grotesk** (headings), **DM Sans** (body), **JetBrains Mono** (data).
  - v1 is a static HTML/CSS/JS site — no frameworks, no npm packages.

## Scope

### In scope

1. Load the three Google Fonts in `index.html` (`<head>`), exactly as the mini-spec lists.
2. Confirm `style.css :root` defines every token from the mini-spec with the exact values.
3. Add the base element rules (`body`, headings, containers) using only the tokens.
4. A basic `container` sizing rule so later components align (per `index.html` usage).

### Out of scope

- Navbar, hero, feature sections, footer content (later roadmap steps).
- The decision-calculator logic and its styling.
- `script.js` interactions/animations.
- Any CSS framework, build tool, or npm package.
- Automated test framework (per decision below).

## Decisions

| Decision | Choice | Why |
| :--- | :--- | :--- |
| Git work | **No branch** for this step | Not a git repo yet; roadmap defers git to Stage 6. |
| Validation style | **Manual + `curl` only**, no automated tests | Static HTML/CSS shell; TECH.md bans npm packages, and a Python test harness is overkill for a token checklist. |
| Token source of truth | Mini-spec in `MISSION.md` Section 5 | Prevents drift between planning doc and code. |
| Backward compatibility | N/A | No prior version of the shell exists; nothing to preserve. |

## Contracts

The authoritative contract is the mini-spec in `build-lab/MISSION.md`, Section 5.
In short it requires:

- **Fonts** (Google Fonts `<link>` tags in `<head>`): Space Grotesk 700,
  DM Sans 400/500, JetBrains Mono 500.
- **CSS variables** in `:root`: `--font-heading`, `--font-body`, `--font-mono`,
  `--space-1`..`--space-6`, `--radius-sm/md/lg/pill`.
- **Colour tokens**: `--color-background`, `--color-surface`, `--color-primary`,
  `--color-primary-dark`, `--color-secondary`, `--color-accent`,
  `--color-inverted`, `--color-text`, `--color-text-muted`.

Every value must match the table in the mini-spec exactly.

## Simple > clever

No regexes, no parsers, no abstractions. The shell is three plain rules in CSS
plus two `<link>` tags in HTML. If a reader cannot follow it in 30 seconds, the
spec has failed and should be simplified.