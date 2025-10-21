## Sporcle Quiz Helper – Major World Civilizations (Chrome MV3)

This extension is specifically for the Sporcle quiz [Major World Civilizations of History](https://www.sporcle.com/games/Andrew-Kim229/civilizations-throughout-history-2). It reveals the correct answer and a short Wikipedia summary after you submit a guess. 

- **Platform**: Chrome Extension (Manifest V3)

### Why
Clickable quizzes on Sporcle don’t show the correct answers after you fail, which makes it hard to learn. This extension adds immediate, low-friction feedback so you can improve and explore more via Wikipedia.

### What it does
- **Shows a small overlay card** in the top-right with:
  - **The correct civilization name** for the image you missed
  - **A short introductory summary** from Wikipedia
  - **A link** to the full Wikipedia article
- **Also shows the card at quiz end** (helpful if you didn’t miss, or missed late).
- **Lightweight, zero tracking**, and **quiz-specific** (only runs on the quiz above).

### Installation (Chrome)
1. Download or clone this repository.
2. Open Chrome and navigate to `chrome://extensions`.
3. Toggle on "Developer mode" (top-right).
4. Click "Load unpacked" and select this project folder.
5. You're done! Go to the quiz page and play: https://www.sporcle.com/games/Andrew-Kim229/civilizations-throughout-history-2

Notes:
- The extension is only active on that quiz URL (and subpaths). See `manifest.json` → `content_scripts.matches`.
- No additional build steps required.

### How it works
- **Detects misses**: watches for `.answer.decoy` (Sporcle marks wrong picks as decoys).
- **Freezes the question image** just before submission (pointer/Enter) to avoid swaps racing the answer lookup.
- **Resolves the correct answer**:
  - Uses a curated `civilizations` map (image URL → civilization name), with filename-based fallback and tolerant character matching.
  - Learns new mappings during a session by scraping the results screen (alt/title/nearby labels) and caching in-memory.
- **Fetches context** from Wikipedia REST summary. Overrides and slug-guessing are handled via the `WIKI` map and a robust slug builder.
- **Displays a non-intrusive overlay** in the top-right; it auto-hides on your next submission.
- **End-of-quiz**: when the question image disappears or a replay link appears, it shows the answer for the last seen image.

Key selectors & behavior (from `content.js`):
- Question image: `#currQuestionImage img, #currQuestionImageWrapper img`
- Miss detection: MutationObserver for `.answer.decoy`
- End detection: image visibility and `#replay-link`
- UI node: `#sporcle-helper-card` (styled by `styles.css`)

### Permissions & Privacy
- **Host permissions**:
  - `https://www.sporcle.com/*` (run only on the quiz page)
  - `https://en.wikipedia.org/*` (fetch summaries)
- Content script runs at `document_idle` for the specific quiz URL.
- No analytics, no storage, no background worker; only fetches Wikipedia summaries.

See `manifest.json` for exact configuration.

### Customization
- **Support a different quiz**:
  - Update `manifest.json` → `content_scripts[0].matches` to target the new quiz URL.
  - If the quiz uses different image containers, adjust `QUESTION_IMG_SELECTORS` in `content.js`.
- **Improve mappings**:
  - Add image URL → civilization entries in the `civilizations` map in `content.js`.
  - Add/adjust Wikipedia slug overrides in the `WIKI` map for better summaries.
- **Logging**: set `DEBUG` to `false` in `content.js` to silence console logs.

### Known limitations
- If Sporcle changes markup, class names, or image CDN filenames, automatic resolution may fail; the script attempts to learn from the results screen, but not all cases are guaranteed.
- Wikipedia summaries may be missing for some slugs; the link still opens the full article.
- The overlay may briefly cover parts of the UI; it hides on your next click/submit.
- Designed for the single quiz above; update `manifest.json` to enable other pages.

### Project structure
- `manifest.json`: MV3 config and URL scoping
- `content.js`: Observers, mapping/learning, Wikipedia fetch, overlay logic
- `styles.css`: Overlay card styling

### Attribution
- Not affiliated with Sporcle or Wikipedia.
- For personal/educational use. Quiz by Andrew-Kim229.

### License
No explicit license provided. If you plan to publish or reuse, add a license file appropriate for your needs.


