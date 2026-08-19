import { writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { navigation, menuToggle } from './navigation.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const booking = 'https://www.vagaro.com/luminailspa';
const base = 'https://luminailspa.com';

const services = [
  {
    slug:'manicure', name:'Manicure', title:'Manicure in Plaistow, NH | Lumi Nails', price:'From $30',
    description:'Book a manicure at Lumi Nails in Plaistow, NH for careful nail shaping, cuticle care, hand care and a polished finish in a relaxing salon.',
    intro:'Clean, polished hands begin with careful fundamentals. Our manicure services combine nail and cuticle care with thoughtful finishing options for an everyday refresh or a more restorative experience.',
    includes:['Nail shaping and detailed cuticle care','Hand-care treatments selected for the service','Polish or finish based on your booking','A clean, spa-inspired salon experience'],
    ideal:'Guests who want regular natural-nail maintenance, a professional polish refresh or relaxing hand care.',
    choice:'Choose Quick Hand Reboot for essential upkeep, Non-Toxic Gel for longer-lasting shine, Dazzle Dry for fast drying without a UV lamp, or Ultimate Hand Therapy for deeper relaxation.',
    faq:[['How much is a manicure at Lumi Nails?','Quick Hand Reboot starts at $30. Other manicure options vary by product system and treatment level.'],['How often should I get a manicure?','Many guests schedule every two to three weeks, depending on nail growth, product wear and preferred appearance.'],['Can I book nail art with a manicure?','Yes. Add nail art when booking when available so the appointment includes enough time.']],
    related:['gel-manicure','dazzle-dry','nail-art']
  },
  {
    slug:'gel-manicure', name:'Gel Manicure', title:'Gel Manicure in Plaistow, NH | Lumi Nails', price:'From $50',
    description:'Get a glossy gel manicure in Plaistow, NH at Lumi Nails. Enjoy careful nail preparation, clean cuticle work and longer-lasting color. Book online.',
    intro:'A gel manicure is a popular choice when you want glossy color and more wear than traditional polish. Lumi focuses on careful preparation, balanced shaping and a clean-looking finish.',
    includes:['Natural-nail shaping and cuticle care','Gel color selected from the salon collection','Curing for a durable glossy finish','Finishing care for a polished appearance'],
    ideal:'Guests who prefer longer-lasting color for work, travel, events or everyday wear while keeping their natural nail length.',
    choice:'Gel is best for color on natural nails. If you want added length, consider Gel-X. If you need more structure over the natural nail, Hybrid/Builder Gel may be a better match.',
    faq:[['How long does a gel manicure last?','Wear varies, but many guests enjoy approximately two to three weeks depending on nail growth, daily activity and aftercare.'],['Is removal included?','Existing product removal may require extra time or an additional charge. Select removal when booking when available.'],['Gel manicure or Dazzle Dry?','Choose gel for longer wear and shine. Choose Dazzle Dry when fast drying without a UV lamp is the priority.']],
    related:['manicure','builder-gel','gel-x-extensions']
  },
  {
    slug:'builder-gel', name:'Builder Gel / Hybrid Gel', title:'Builder Gel in Plaistow, NH | Lumi Nails', price:'Full set from $70',
    description:'Strengthen natural nails with Builder Gel, called Hybrid Gel on the Lumi Nails menu. Visit our Plaistow, NH salon for structured, polished nails.',
    intro:'Builder Gel adds structure over the natural nail and can support strength, shape and growth. At Lumi Nails, this service is listed as Hybrid Gel on our booking menu.',
    includes:['Nail preparation and customized shaping','Structured gel application over the natural nail','Color and finish selected for your look','Refill options for ongoing maintenance'],
    ideal:'Guests whose natural nails need more structure than a standard gel manicure or who want to maintain a shaped overlay as their nails grow.',
    choice:'Builder/Hybrid Gel reinforces the natural nail. Gel-X uses full-cover soft-gel tips for added length. Dip powder provides a different strength and removal system.',
    faq:[['Is Hybrid Gel the same as Builder Gel at Lumi?','Yes. Lumi uses the name Hybrid Gel for its structured builder-gel service.'],['How often are refills needed?','Many guests return about every two to three weeks, depending on growth and condition.'],['Can Builder Gel add length?','Its main purpose is structure over the natural nail. For more noticeable added length, ask whether Gel-X is a better choice.']],
    related:['gel-x-extensions','gel-manicure','dip-powder']
  },
  {
    slug:'gel-x-extensions', name:'Gel-X Extensions', title:'Gel-X Extensions in Plaistow, NH | Lumi Nails', price:'Full set from $75',
    description:'Book Gel-X extensions in Plaistow, NH at Lumi Nails for lightweight-looking length, modern shapes and a polished finish without traditional acrylic.',
    intro:'Gel-X uses full-cover soft-gel tips to create consistent length and shape. It is Lumi’s modern option for guests who want extensions without traditional acrylic services.',
    includes:['Natural-nail preparation','Full-cover soft-gel tip sizing and application','Customized length and shape','Color finish selected for your style'],
    ideal:'Guests who want added length, a defined shape or a fresh extension set with a lighter-feeling appearance.',
    choice:'Choose Gel-X for added length. Choose Builder/Hybrid Gel when reinforcing and shaping the natural nail is the primary goal.',
    faq:[['How long does Gel-X last?','Many sets wear around three weeks, but results depend on growth, lifestyle, aftercare and appointment timing.'],['Can Gel-X be refilled?','Lumi offers Gel-X maintenance options. Book the appropriate refill or new-set service based on your current nails.'],['Does Lumi offer acrylic nails?','No. Lumi specializes in Gel-X, Hybrid Gel and dip powder instead of traditional acrylic services.']],
    related:['builder-gel','nail-art','dip-powder']
  },
  {
    slug:'dip-powder', name:'Dip Powder', title:'Dip Powder Nails in Plaistow, NH | Lumi Nails', price:'From $55',
    description:'Book dip powder nails in Plaistow, NH at Lumi Nails. Choose natural-nail dip, added tips, French or ombré options for strength and lasting color.',
    intro:'Dip powder combines color and strength in a layered system that works on natural nails or with added tips. Lumi offers classic, French and ombré variations.',
    includes:['Nail preparation and shaping','Dip powder application in your selected color','Natural-nail or added-tip options','Refined shaping and sealed finish'],
    ideal:'Guests who want durable color, added reinforcement or optional length with a solid, polished feel.',
    choice:'Natural-nail dip starts at $55. Added tips start at $65. French, ombré and removal can affect appointment time and price.',
    faq:[['How long does dip powder last?','Many guests schedule maintenance every two to three weeks, depending on growth, wear and condition.'],['Can dip powder add length?','Yes. Book the dipping-with-tips option when you want added length.'],['Dip powder or Builder Gel?','Dip uses a powder-based application and removal process. Builder Gel is a structured gel overlay. Your preferred feel and maintenance routine can guide the choice.']],
    related:['builder-gel','gel-x-extensions','nail-art']
  },
  {
    slug:'nail-art', name:'Nail Art', title:'Nail Art in Plaistow, NH | Lumi Nails', price:'Pricing varies',
    description:'Add custom nail art in Plaistow, NH at Lumi Nails, from refined accents and French finishes to seasonal designs. Add art when booking for enough time.',
    intro:'Nail art turns your manicure or enhancement service into something personal. Lumi’s style ranges from soft, refined accents to seasonal details, French finishes and statement designs.',
    includes:['Design discussion based on your inspiration','Placement and color planning','Art added to an eligible manicure or enhancement service','Finishing details for a cohesive look'],
    ideal:'Guests preparing for events, holidays or everyday self-expression, and anyone who wants a custom detail beyond a single color.',
    choice:'Design complexity, number of accent nails and products used affect time and price. Add nail art when booking and bring inspiration photos when helpful.',
    faq:[['Can I book nail art by itself?','Nail art is generally added to an eligible manicure, Gel-X, Hybrid Gel or dip service.'],['How much does nail art cost?','Pricing varies by complexity, time and number of nails. Ask for guidance when planning a detailed design.'],['Should I send an inspiration photo?','Yes. A clear reference helps the team understand the colors, detail and time your design may require.']],
    related:['manicure','gel-x-extensions','dip-powder']
  },
  {
    slug:'pedicure', name:'Pedicure', title:'Pedicure in Plaistow, NH | Lumi Nails', price:'From $49',
    description:'Book a pedicure in Plaistow, NH at Lumi Nails. Choose essential foot care or upgrade to botanical, hot-stone or Royal Ozone spa relaxation.',
    intro:'Lumi pedicures range from clean everyday maintenance to extended spa rituals. Every level begins with essential nail and cuticle care, then adds treatments and massage based on the experience you choose.',
    includes:['Foot soak and essential nail care','Cuticle care and shaping','Exfoliation and massage based on service level','Polish finish selected for your appointment'],
    ideal:'Guests seeking regular foot and nail maintenance, smoother skin, polish or a relaxing break from a busy routine.',
    choice:'Start with the $49 Lumi Essential Pedicure for upkeep. Choose Botanical, Silk Signature or Royal Ozone when you want more treatment steps and massage time.',
    faq:[['Which pedicure should I choose?','Essential is best for maintenance. Botanical balances value and relaxation. Silk Signature adds deeper hot-stone comfort, while Royal Ozone is the most elevated ritual.'],['How often should I get a pedicure?','Many guests visit every four to six weeks, though growth, footwear, polish and personal needs vary.'],['Is gel polish included?','Gel upgrades and existing gel removal may cost extra. Choose the appropriate options when booking.']],
    related:['spa-pedicure','dazzle-dry','manicure']
  },
  {
    slug:'spa-pedicure', name:'Spa Pedicure', title:'Spa Pedicure in Plaistow, NH | Lumi Nails', price:'From $79',
    description:'Relax with a spa pedicure in Plaistow, NH at Lumi Nails. Compare Botanical, Silk Signature and Royal Ozone pedicures with massage and elevated treatments.',
    intro:'A Lumi spa pedicure adds layers of relaxation beyond essential maintenance. Botanical treatments, masks, warm comforts and massage time increase as you move through the signature menu.',
    includes:['Lumi Botanical Pedicure from $79','Lumi Silk Signature Pedicure from $95','Lumi Royal Ozone Pedicure from $125','Progressively elevated treatments and massage'],
    ideal:'Guests who want more than polish and upkeep—especially those looking for unhurried relaxation, hot-stone comfort or a premium self-care experience.',
    choice:'Botanical is Lumi’s popular balance of value and indulgence. Silk Signature adds hot-stone massage and silk treatments. Royal Ozone is the most elevated option with ozone steam therapy and extended care.',
    faq:[['What is the most popular Lumi spa pedicure?','The Lumi Botanical Pedicure is a popular first choice because it balances relaxation, treatment steps and value.'],['Which pedicure includes hot stones?','The Silk Signature and Royal Ozone experiences feature elevated massage elements; review the current booking description for exact inclusions.'],['What is an ozone pedicure?','Lumi Royal Ozone is the salon’s premium pedicure and includes ozone steam therapy as part of an extended spa ritual.']],
    related:['pedicure','dazzle-dry','manicure']
  },
  {
    slug:'dazzle-dry', name:'Dazzle Dry Manicure', title:'Dazzle Dry Manicure in Plaistow, NH | Lumi Nails', price:'From $45',
    description:'Book a Dazzle Dry manicure in Plaistow, NH at Lumi Nails for fast-drying vegan polish without a UV lamp and a refined salon finish.',
    intro:'Dazzle Dry is a fast-drying polish system for guests who prefer traditional-style removal and no UV curing. It offers a polished finish while helping you return to your day sooner.',
    includes:['Natural-nail shaping and cuticle care','Dazzle Dry system application','Fast air-drying without a UV lamp','Color selected from available Dazzle Dry shades'],
    ideal:'Guests who prioritize fast drying, vegan polish, no UV lamp and simpler at-home removal than gel.',
    choice:'Choose Dazzle Dry when fast air drying is most important. Choose gel when longer wear and a cured glossy finish are your main priorities.',
    faq:[['Does Dazzle Dry use a UV lamp?','No. The system air dries and does not require UV curing.'],['How fast does Dazzle Dry dry?','The system is designed to dry quickly, though exact timing can vary with application and conditions.'],['Is Dazzle Dry the same as gel?','No. Dazzle Dry is a polish system; gel uses light curing and a different removal process.']],
    related:['manicure','gel-manicure','pedicure']
  }
];

const bySlug = Object.fromEntries(services.map(s => [s.slug,s]));
const nav = current => navigation(current);
const header = current => `<div class="promo-bar"><div class="container promo-bar-inner"><span class="promo-bar-label">🌿 WELCOME TO LUMI NAILS 🌿</span><a class="promo-bar-link" href="${booking}" target="_blank" rel="noopener noreferrer">Book Now</a></div></div><div class="site-shell"><div class="container nav-wrap"><header class="navbar"><a href="index.html" class="brand" aria-label="Lumi Nails home"><div class="brand-mark"><img class="brand-logo-img" src="assets/lumi-nails-logo.jpg" alt="Lumi Nails logo" /></div><div class="brand-copy"><div class="brand-name">Lumi Nails</div><div class="brand-tag">Luxury Nail Care</div></div></a>${menuToggle}${nav(current)}<a class="btn btn-primary" href="${booking}" target="_blank" rel="noopener noreferrer">Book Now</a></header></div>`;
const footer = () => `<footer class="footer"><div class="container footer-inner"><div class="footer-brand"><div class="brand-mark"><img class="brand-logo-img" src="assets/lumi-nails-logo.jpg" alt="Lumi Nails logo" /></div><div><div class="brand-name">Lumi Nails</div><div class="brand-tag">Feel beautiful, yet stay natural</div></div></div><div class="footer-columns"><div><h4>Location</h4><p>37 Plaistow Rd, Unit #1<br>Plaistow, NH 03865</p></div><div><h4>Contact</h4><p><a href="mailto:contact@luminailspa.com">contact@luminailspa.com</a></p><p><a href="tel:+16034411250">(603) 441-1250</a></p></div><div><h4>Hours</h4><p>Mon–Sat: 9:00 AM–7:00 PM</p><p>Sunday: Closed</p></div></div></div><div class="footer-bottom">© 2026 Lumi Nails. All rights reserved.</div></footer><div class="mobile-action-bar"><a class="mobile-action-btn call" href="tel:+16034411250">Call Salon</a><a class="mobile-action-btn book" href="${booking}" target="_blank" rel="noopener noreferrer">Book Now</a></div></div><script src="assets/site.js" defer></script>`;
const head = (title,description,slug,type='WebPage',schema={}) => `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="description" content="${description}"><meta name="robots" content="index, follow, max-image-preview:large"><meta name="theme-color" content="#fbf7f1"><link rel="canonical" href="${base}/${slug}.html"><link rel="icon" type="image/jpeg" href="assets/lumi-nails-logo.jpg"><meta property="og:type" content="website"><meta property="og:site_name" content="Lumi Nails"><meta property="og:title" content="${title}"><meta property="og:description" content="${description}"><meta property="og:url" content="${base}/${slug}.html"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="assets/styles.css"><script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@type':type,name:title,url:`${base}/${slug}.html`,provider:{'@id':`${base}/#business`},areaServed:'Plaistow, NH',...schema})}</script></head>`;

for (const s of services) {
  const related = s.related.map(slug => `<a class="related-card" href="${slug}.html"><strong>${bySlug[slug].name}</strong><span>Learn more →</span></a>`).join('');
  const faqs = s.faq.map(([q,a]) => `<details class="faq-item"><summary>${q}</summary><p>${a}</p></details>`).join('');
  const html = `${head(s.title,s.description,s.slug,'Service',{serviceType:s.name,offers:{'@type':'Offer',priceCurrency:'USD',description:s.price}})}<body><a class="skip-link" href="#main-content">Skip to main content</a>${header('services')}<div class="container breadcrumb"><a href="index.html">Home</a> / <a href="services.html">Services</a> / ${s.name}</div><main id="main-content"><section class="container page-hero"><div class="eyebrow">Lumi Nails Service</div><h1>${s.name} in Plaistow, New Hampshire</h1><p>${s.intro}</p><div class="service-price-pill">${s.price}</div><div class="hero-actions"><a class="btn btn-primary" href="${booking}" target="_blank" rel="noopener noreferrer">Book ${s.name}</a><a class="btn btn-secondary" href="services.html">All Services</a></div></section><section class="section-block section-soft"><div class="container content-grid"><article class="content-card"><h2>What to expect</h2><ul>${s.includes.map(x=>`<li>${x}</li>`).join('')}</ul></article><article class="content-card"><h2>Who it is for</h2><p>${s.ideal}</p><h3>Choosing your service</h3><p>${s.choice}</p></article></div></section><section class="section-block"><div class="container"><div class="section-heading"><div class="eyebrow">Questions</div><h2>${s.name} FAQs</h2></div><div class="faq-list">${faqs}</div></div></section><section class="section-block section-soft"><div class="container"><div class="section-heading"><div class="eyebrow">Explore More</div><h2>Related Lumi services</h2></div><div class="related-grid">${related}</div><div class="contact-card service-bottom-cta"><h2>Ready to visit Lumi Nails?</h2><p>Reserve online for the best availability, or call us if you would like help choosing the right service.</p><div class="contact-actions"><a class="btn btn-primary" href="${booking}" target="_blank" rel="noopener noreferrer">Book Online</a><a class="btn btn-secondary" href="tel:+16034411250">Call (603) 441-1250</a></div></div></div></section></main>${footer()}</body></html>`;
  writeFileSync(resolve(root,`${s.slug}.html`),html);
}

const cards = services.map(s=>`<article class="service-directory-card"><div class="service-label">${s.price}</div><h2>${s.name}</h2><p>${s.intro}</p><div class="contact-actions"><a class="btn btn-secondary" href="${s.slug}.html">Learn More</a><a class="btn btn-primary" href="${booking}" target="_blank" rel="noopener noreferrer">Book</a></div></article>`).join('');
const hubDesc='Explore Lumi Nails services in Plaistow, NH, including manicures, gel, Builder Gel, Gel-X, dip powder, nail art, pedicures and Dazzle Dry.';
const hub=`${head('Nail Services in Plaistow, NH | Lumi Nails',hubDesc,'services','CollectionPage',{about:{'@id':`${base}/#business`}})}<body><a class="skip-link" href="#main-content">Skip to main content</a>${header('services')}<div class="container breadcrumb"><a href="index.html">Home</a> / Services</div><main id="main-content"><section class="container page-hero"><div class="eyebrow">Lumi Nails Services</div><h1>Nail services in Plaistow, New Hampshire</h1><p>Compare manicures, modern enhancement systems and pedicure experiences, then choose the option that best matches your preferred look, maintenance and relaxation level.</p><div class="hero-actions"><a class="btn btn-primary" href="${booking}" target="_blank" rel="noopener noreferrer">View Live Availability</a><a class="btn btn-secondary" href="contact.html">Ask for Guidance</a></div></section><section class="section-block section-soft"><div class="container service-directory">${cards}</div></section><section class="section-block"><div class="container content-grid"><article class="content-card"><h2>Not sure what to book?</h2><p>Choose a gel manicure for longer-lasting color on natural nails, Builder/Hybrid Gel for added structure, Gel-X for extensions, or dip powder for durable color and optional tips.</p></article><article class="content-card"><h2>Choosing a pedicure</h2><p>Essential focuses on upkeep. Botanical adds popular spa comforts. Silk Signature offers deeper relaxation, and Royal Ozone is Lumi’s most elevated pedicure ritual.</p></article></div></section></main>${footer()}</body></html>`;
writeFileSync(resolve(root,'services.html'),hub);
