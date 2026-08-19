LUMI NAILS — VOLUME 1 WEBSITE

DEPLOYMENT
Upload every file and the complete assets folder to the public root of
luminailspa.com. Keep the folder structure exactly as provided.

Required public files:
- index.html
- about.html
- why-lumi.html
- contact.html
- services.html
- manicure.html
- gel-manicure.html
- builder-gel.html
- gel-x-extensions.html
- dip-powder.html
- nail-art.html
- pedicure.html
- spa-pedicure.html
- dazzle-dry.html
- local-areas.html
- nail-salon-plaistow-nh.html
- nail-salon-near-haverhill-ma.html
- nail-salon-near-atkinson-nh.html
- nail-salon-near-hampstead-nh.html
- nail-salon-near-kingston-nh.html
- nail-salon-near-newton-nh.html
- guides.html
- builder-gel-vs-dip-powder.html
- gel-x-vs-acrylic.html
- gel-x-vs-builder-gel.html
- how-long-does-gel-x-last.html
- which-pedicure-should-i-choose.html
- how-often-should-you-get-a-pedicure.html
- what-is-builder-gel.html
- what-is-dazzle-dry.html
- nail-care-tips.html
- robots.txt
- sitemap.xml
- assets/styles.css
- assets/site.js
- assets/lumi-nails-logo.jpg

IMPORTANT
Do not upload only index.html. The shared design, scripts and logo are now in
the assets folder. All files must be deployed together.

AFTER DEPLOYMENT
1. Open https://luminailspa.com/ and test the navigation.
2. Test About, Why Lumi and Contact on desktop and mobile.
3. Test Call, Directions and Book Now buttons.
4. Submit https://luminailspa.com/sitemap.xml in Google Search Console.

MAINTENANCE
Service pages are generated from tools/generate-service-pages.mjs. Edit the
service data in that file and run it with Node.js to rebuild the service hub
and all service pages consistently.

Local landing pages are generated from tools/generate-local-pages.mjs. Edit
the place data in that file and run it with Node.js to rebuild the local pages.

Educational guides are generated from tools/generate-guides.mjs. Edit the
guide data in that file and run it with Node.js to rebuild the Guides hub and
all educational articles.

The shared desktop and mobile menu is defined in tools/navigation.mjs. After
editing it, run `node tools/update-navigation.mjs` to update every HTML page.
Dropdown and mobile-menu behavior is in assets/site.js, with presentation in
assets/styles.css.

BUSINESS DETAILS USED
Lumi Nails
37 Plaistow Rd, Unit #1, Plaistow, NH 03865
(603) 441-1250
contact@luminailspa.com
Monday–Saturday: 9:00 AM–7:00 PM
Sunday: Closed
Booking: https://www.vagaro.com/luminailspa
