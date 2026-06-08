# Lumi Nails Customer Kiosk PWA

This package turns your uploaded kiosk HTML into an installable Progressive Web App.

## Files
- `index.html` — your kiosk app with PWA tags added
- `manifest.webmanifest` — app name, icon, theme color, standalone mode
- `sw.js` — service worker for basic offline/app-shell caching
- `icons/` — generated Lumi app icons

## How to use on iPad
1. Upload this folder to your website hosting, for example `https://luminailspa.com/kiosk/`.
2. Open the URL in Safari on the iPad.
3. Tap Share → Add to Home Screen.
4. Open from the Home Screen for full-screen kiosk-style use.

Note: Supabase check-in features still need internet access. The PWA shell can load offline, but live customer/check-in data requires connection.
