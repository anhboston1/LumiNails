
    const revealTargets = document.querySelectorAll('.hero, .section-block, .contact-section, .footer, .signature-band');

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

    const menuToggle = document.querySelector('.nav-menu-toggle');
    const navigation = document.querySelector('#primary-navigation');
    const dropdowns = Array.from(document.querySelectorAll('.nav-dropdown'));

    const closeDropdowns = (except = null) => {
      dropdowns.forEach((dropdown) => {
        if (dropdown === except) return;
        dropdown.classList.remove('is-open');
        dropdown.querySelector('.nav-dropdown-toggle')?.setAttribute('aria-expanded', 'false');
      });
    };

    dropdowns.forEach((dropdown) => {
      const toggle = dropdown.querySelector('.nav-dropdown-toggle');
      toggle?.addEventListener('click', () => {
        const willOpen = !dropdown.classList.contains('is-open');
        closeDropdowns(dropdown);
        dropdown.classList.toggle('is-open', willOpen);
        toggle.setAttribute('aria-expanded', String(willOpen));
      });
    });

    menuToggle?.addEventListener('click', () => {
      const willOpen = !navigation.classList.contains('is-open');
      navigation.classList.toggle('is-open', willOpen);
      menuToggle.setAttribute('aria-expanded', String(willOpen));
      if (!willOpen) closeDropdowns();
    });

    navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      navigation.classList.remove('is-open');
      menuToggle?.setAttribute('aria-expanded', 'false');
      closeDropdowns();
    }));

    document.addEventListener('click', (event) => {
      if (!event.target.closest('.nav-dropdown')) closeDropdowns();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      closeDropdowns();
      navigation?.classList.remove('is-open');
      menuToggle?.setAttribute('aria-expanded', 'false');
      menuToggle?.focus();
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth <= 980) return;
      navigation?.classList.remove('is-open');
      menuToggle?.setAttribute('aria-expanded', 'false');
    });
  
