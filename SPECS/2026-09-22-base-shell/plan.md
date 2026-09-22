# Plan: Base Shell (2026-09-22)

Numbered task groups. Do them in order. Each group has a small "done when" line.
Run the checks in **Task Group 4** before declaring this feature complete.

Limits we honour: no frameworks, no npm, no hardcoded hex codes outside `:root`,
and no extra fonts beyond the mini-spec. Reference the mini-spec in
`build-lab/MISSION.md` (Section 5) at every step.

---

## Task Group 1 — Load the fonts in `index.html`

Small, reviewable HTML change.

- [ ] Open the `<head>` of `build-lab/index.html`.
- [ ] Add the two `preconnect` `<link>` tags for `fonts.googleapis.com` and
      `fonts.gstatic.com`.
- [ ] Add the single stylesheet `<link>` for `DM Sans` (400;500), `JetBrains Mono`
      (500), and `Space Grotesk` (700) — copy the URL from the mini-spec verbatim.
- [ ] Confirm the page still has no more than these: one `style.css` stylesheet
      link and the three font-related links.

**Done when:** the font links match the mini-spec exactly and the file is still
valid HTML (tags closed, `charset` + `viewport` intact).

---

## Task Group 2 — Lock the design tokens in `style.css`

The `:root` block is the contract. No `!important`, no duplicate variables.

- [ ] Read the `:root` block in `build-lab/style.css`.
- [ ] Check every variable from the mini-spec is present: the three `--font-*`,
      `--space-1` to `--space-6`, the four `--radius-*`.
- [ ] Check every token value matches the mini-spec tables exactly (hex codes,
      sizes) — bump/repair any that differ.
- [ ] Keep the `--color-*` names the same as the current file; only values may
      change if the mini-spec says so.

**Done when:** looping through the mini-spec colour table and the `:root` block
side by side shows a 1-to-1 match with no extras and no missing tokens.

---

## Task Group 3 — Wire tokens into base element rules

Use the tokens on the base elements only. Component styling comes in later steps.

- [ ] `body`: `font-family: var(--font-body)`, `background-color: var(--color-background)`,
      `color: var(--color-text)`, `line-height: 1.6` (already present — keep it).
- [ ] Headings (`h1`–`h3`): `font-family: var(--font-heading)`.
- [ ] Add a simple `.container` rule (e.g. `max-width: 1080px; margin: 0 auto; padding: 0 var(--space-4);`) so the page content lines up with the existing `body` markup in `index.html`.
- [ ] If the existing `index.html` uses any raw values that a token should replace
      (e.g. a hardcoded font stack or colour), swap them for the variable.

**Done when:** a search of `build-lab/index.html` and `build-lab/style.css` shows
no hardcoded font names or hex colours outside the `:root` block.

---

## Task Group 4 — Serve and verify (required checks)

Per `build-lab/AGENTS.md`: bind to `0.0.0.0`, use port `3000`, and verify the
public URL before announcing.

- [ ] Check `style.css` and `index.html` are valid by serving the site
      (use the `serve-website` skill, or run a static server on port `3000`
      bound to `0.0.0.0`).
- [ ] `curl` the page and confirm `index.html` serves with a `200` status.
- [ ] `curl` the page CSS and confirm `style.css` serves with a `200` status and
      contains every `--color-*` token.
- [ ] Visit the public URL in a browser: the page background is warm white, the
      text is near-black ink, and headings render in Space Grotesk (check DevTools
      → Fonts if unsure).
- [ ] Run the manual checklist in `validation.md` and mark items off.

**Done when:** Task Group 4 and all of `validation.md` pass.

---

## Notes

- No linting or unit-test tooling exists in this project; verification is the
  `curl` + manual checklist above. If that ever changes, add those checks here.
- This feature touches only `index.html` and `style.css`. Do not modify
  `script.js` as part of the base shell.