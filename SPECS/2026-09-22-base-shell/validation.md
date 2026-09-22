# Validation: Base Shell (2026-09-22)

This feature is validated **manually + with `curl`** — no test framework
(decision in `requirements.md`, and the roadmap defers git/GitHub to Stage 6, so
no merge happens here).

## When is this done?

All of the checks below pass. "Done" means a human can look at the page and the
files and confirm they match the mini-spec in `build-lab/MISSION.md` (Section 5)
with no drift.

## How to validate

### 1. Serve the site

Bind to `0.0.0.0` on port `3000` (see `build-lab/AGENTS.md`). Use the
`serve-website` skill, or run:

```
python3 -m http.server 3000 --bind 0.0.0.0 --directory build-lab
```

### 2. curl checks

| Check | Command | Passes when |
| :--- | :--- | :--- |
| Page loads | `curl -o /dev/null -s -w "%{http_code}" http://localhost:3000/index.html` | prints `200` |
| CSS loads | `curl -o /dev/null -s -w "%{http_code}" http://localhost:3000/style.css` | prints `200` |
| Font links present | `curl -s http://localhost:3000/index.html` | output contains the three Google Fonts `<link>` tags from the mini-spec |
| All colour tokens present | `curl -s http://localhost:3000/style.css` | output contains every `--color-*` token from the mini-spec |
| Public URL reachable | `curl -s -o /dev/null -w "%{http_code}" https://${CODIO_HOSTNAME}-3000.codio.io/` | prints `200` (run the serve-website skill for the exact URL) |

### 3. Manual browser checklist

Open the public URL and confirm:

- [ ] Page background is warm white (`#FFF8F5`).
- [ ] Body text is near-black ink (`#1E1B2E`), not browser-default black.
- [ ] Headings use **Space Grotesk** (DevTools → Fonts / Rendered Fonts).
- [ ] Body text uses **DM Sans**; numbers/labels use **JetBrains Mono** if any are shown.
- [ ] The page still looks like a clean, unstyled-but-sane skeleton (no broken
      layout from the base rules).

### 4. File audit (grep)

Run this against the two changed files — it must find **no** raw hex colours or
font names outside `:root`:

```
rg -n '(#[0-9a-fA-F]{6}|"Space Grotesk"|"DM Sans"|"JetBrains Mono")' build-lab/index.html | grep -v fonts.googleapis.com
rg -n -A40 ':root' build-lab/style.css | rg -c '--color-'   # expect: 9
```

## Surfacing drift / updating the specs

If a check fails or the implementation differs from the spec:

1. Fix the smaller deviation (the file) first.
2. If the mini-spec or this feature spec is what is wrong, surface the difference
   to the founder, get approval, then update `MISSION.md` (Section 5) and/or these
   spec files so they match reality.
3. Never silently diverge: the mini-spec is the source of truth for fonts,
   variables, and tokens.

## Definition of "can be merged"

Since we are not using git for this step, replace "merge" with:

> The verified files (`index.html`, `style.css`) match the mini-spec, all checks
> above pass, and the spec documents in this folder match the final implementation.