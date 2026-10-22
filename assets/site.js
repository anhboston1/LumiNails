
    const revealTargets = document.querySelectorAll('.hero, .section-block, .contact-section, .footer, .signature-band');

    document.querySelectorAll('.navbar').forEach((navbar) => {
      const navigation = navbar.querySelector('.nav-links');
      if (!navigation) return;
      const toggle = document.createElement('button');
      toggle.className = 'nav-toggle';
      toggle.type = 'button';
      toggle.setAttribute('aria-label', 'Open navigation menu');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '☰';
      navbar.insertBefore(toggle, navbar.querySelector('.btn'));
      toggle.addEventListener('click', () => {
        const open = navigation.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
        toggle.textContent = open ? '×' : '☰';
      });
    });

    if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

      revealTargets.forEach((el) => {
        el.classList.add('reveal-block');
        revealObserver.observe(el);
      });
    } else {
      revealTargets.forEach((el) => el.classList.add('is-visible'));
    }

    const galleryItems = [...document.querySelectorAll('[data-gallery-item]')];
    const lightbox = document.querySelector('.gallery-lightbox');
    if (galleryItems.length && lightbox) {
      const lightboxImage = lightbox.querySelector('img');
      let currentPhoto = 0;
      const showPhoto = (index) => {
        currentPhoto = (index + galleryItems.length) % galleryItems.length;
        const source = galleryItems[currentPhoto].querySelector('img');
        lightboxImage.src = source.src;
        lightboxImage.alt = source.alt;
      };
      galleryItems.forEach((item, index) => item.addEventListener('click', () => { showPhoto(index); lightbox.showModal(); }));
      lightbox.querySelector('.previous').addEventListener('click', () => showPhoto(currentPhoto - 1));
      lightbox.querySelector('.next').addEventListener('click', () => showPhoto(currentPhoto + 1));
      lightbox.querySelector('.gallery-lightbox-close').addEventListener('click', () => lightbox.close());
      lightbox.addEventListener('click', (event) => { if (event.target === lightbox) lightbox.close(); });
      document.addEventListener('keydown', (event) => {
        if (!lightbox.open) return;
        if (event.key === 'ArrowLeft') showPhoto(currentPhoto - 1);
        if (event.key === 'ArrowRight') showPhoto(currentPhoto + 1);
      });
    }
  
