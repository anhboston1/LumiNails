export const menuToggle = '<button class="nav-menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation"><span class="nav-menu-icon" aria-hidden="true">☰</span><span>Menu</span></button>';

const dropdown = (label, links, active=false) => `<div class="nav-dropdown${active?' is-current':''}"><button class="nav-dropdown-toggle" type="button" aria-expanded="false"><span>${label}</span><span class="nav-caret" aria-hidden="true">▾</span></button><div class="nav-submenu">${links.map(([href,text])=>`<a href="${href}">${text}</a>`).join('')}</div></div>`;

export function navigation(current='') {
  return `<nav id="primary-navigation" class="nav-links" aria-label="Main navigation">
    ${dropdown('Services',[
      ['manicure.html','Manicure'],
      ['gel-manicure.html','Gel Manicure'],
      ['builder-gel.html','Builder / Hybrid Gel'],
      ['gel-x-extensions.html','Gel-X Extensions'],
      ['dip-powder.html','Dip Powder'],
      ['pedicure.html','Pedicures'],
      ['services.html','View All Services']
    ],current==='services')}
    ${dropdown('Why Lumi',[
      ['about.html','About Lumi Nails'],
      ['why-lumi.html','Why Choose Lumi'],
      ['index.html#guarantee','Our Guarantee']
    ],current==='why')}
    <a class="nav-top-link${current==='guides'?' is-current':''}" href="guides.html"${current==='guides'?' aria-current="page"':''}>Guides</a>
    ${dropdown('Areas',[
      ['nail-salon-plaistow-nh.html','Plaistow, NH'],
      ['nail-salon-near-haverhill-ma.html','Haverhill, MA'],
      ['nail-salon-near-atkinson-nh.html','Atkinson, NH'],
      ['nail-salon-near-hampstead-nh.html','Hampstead, NH'],
      ['nail-salon-near-kingston-nh.html','Kingston, NH'],
      ['nail-salon-near-newton-nh.html','Newton, NH'],
      ['local-areas.html','View All Areas']
    ],current==='areas')}
    ${dropdown('Visit',[
      ['index.html#gallery','Gallery'],
      ['index.html#hours','Hours'],
      ['contact.html','Contact & Directions'],
      ['tel:+16034411250','Call (603) 441-1250']
    ],current==='visit')}
  </nav>`;
}
