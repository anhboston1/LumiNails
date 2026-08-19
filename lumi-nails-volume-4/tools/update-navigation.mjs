import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { navigation, menuToggle } from './navigation.mjs';

const root=resolve(new URL('..',import.meta.url).pathname);
for(const file of readdirSync(root).filter(x=>x.endsWith('.html'))){
  const path=resolve(root,file);
  let html=readFileSync(path,'utf8');
  const current=file==='guides.html'||['builder-gel-vs-dip-powder.html','gel-x-vs-acrylic.html','gel-x-vs-builder-gel.html','how-long-does-gel-x-last.html','which-pedicure-should-i-choose.html','how-often-should-you-get-a-pedicure.html','what-is-builder-gel.html','what-is-dazzle-dry.html','nail-care-tips.html'].includes(file)?'guides':file==='local-areas.html'||file.startsWith('nail-salon-')?'areas':file==='contact.html'?'visit':file==='about.html'||file==='why-lumi.html'?'why':file==='services.html'||['manicure.html','gel-manicure.html','builder-gel.html','gel-x-extensions.html','dip-powder.html','nail-art.html','pedicure.html','spa-pedicure.html','dazzle-dry.html'].includes(file)?'services':'';
  html=html.replace(/<nav(?: id="primary-navigation")? class="nav-links"[^>]*>.*?<\/nav>/s,navigation(current));
  if(!html.includes('class="nav-menu-toggle"')){
    html=html.replace(/(<\/a>\s*)(<nav id="primary-navigation")/s,`$1${menuToggle}$2`);
  }
  writeFileSync(path,html);
}
