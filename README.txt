ETERNAL HAPPINESS NOTES - OFFLINE FIRST APP

What this is:
- A static PWA note-taking app.
- The convention program is already built in.
- Notes are saved directly on each device using IndexedDB.
- Each device keeps its own notes.
- Internet is needed for the first load/install only.
- After that, the app can reopen offline from the installed icon.

Files:
- index.html
- styles.css
- app.js
- service-worker.js
- manifest.webmanifest
- icons folder

How to test locally:
1. Open this folder in VS Code.
2. Use a simple local server. Examples:
   - VS Code Live Server extension, or
   - python -m http.server 5173
3. Open the shown local address in a browser.
4. Do not test offline mode by double-clicking index.html. Service workers need http/https.

How to deploy:
- Upload the whole folder to GitHub and deploy with Vercel, Netlify, or GitHub Pages.
- The site must be served over HTTPS for offline install support on phones.

Phone/tablet use:
1. Open the deployed app link while online.
2. Add to home screen / install app.
3. Open it once from the icon while online.
4. Turn internet off and reopen from the icon to confirm offline loading.
5. Notes save locally on that device.

Backup:
- Use the Backup tab to export a JSON backup file.
- Use Copy All Notes for a quick text copy.
- Use Print / Save PDF from the Review tab.


V2 artwork update:
- Program artwork is included as local app assets.
- Home, day-start, review, and backup screens now use art banners.
- Friday/Saturday/Sunday day screens include an end-of-day review note box.
- Service worker cache was updated to include the artwork assets for offline use.

V4 change:
- The repeated Eternal Happiness theme banner was removed from the top of every screen.
- The main Eternal Happiness banner now appears once on the Home screen only.
- Day tabs still use their own day artwork banners.

V4 change: taller artwork banners and top-positioned artwork so faces/top detail are less cropped.


V6: Updated app icons with 2026 Convention Notes text over program artwork.


V8: Home/Review banners enlarged and centered to show more of the program cover text.

V8 update: phone-first banner framing. Home and Review artwork now use matching aspect ratios so the program text is not cut off on phones/tablets.


V9 changes:
- Custom home banner made from the supplied artwork plus the supplied program text block.
- Custom review banner uses the supplied Saved Notes artwork image directly.
- Backup uses an art-only banner so it does not repeat the home text.
- Home and Review banners are displayed as prepared images instead of forced background crops.


V10: Home and Review banners now use prepared images directly with no extra app text overlay.
