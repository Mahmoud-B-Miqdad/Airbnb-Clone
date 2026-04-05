(function () {
  'use strict';

  const mainHeader  = document.getElementById('mainHeader');
  const categoryBar = document.getElementById('categoryBar');
  const THRESHOLD   = 80;
  let lastY    = window.scrollY;
  let ticking  = false;

  function updateHeader() {
    if (!mainHeader) { ticking = false; return; }

    if (lastY > THRESHOLD) {
      mainHeader.classList.add('scrolled');
    } else {
      mainHeader.classList.remove('scrolled');
    }

    if (categoryBar) {
      categoryBar.style.top = mainHeader.offsetHeight + 'px';
    }
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    lastY = window.scrollY;
    if (!ticking) { requestAnimationFrame(updateHeader); ticking = true; }
  }, { passive: true });

  window.addEventListener('resize', updateHeader, { passive: true });
  updateHeader(); 

  const THEME_KEY = 'airbnb_theme';

  function applyTheme(theme) {
    document.body.classList.toggle('dark', theme === 'dark');
    localStorage.setItem(THEME_KEY, theme);
  }

  const saved = localStorage.getItem(THEME_KEY);
  if (saved) {
    applyTheme(saved);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
  }

  ['themeToggle', 'themeToggleCompact'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', () => {
        applyTheme(document.body.classList.contains('dark') ? 'light' : 'dark');
      });
    }
  });

  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem(THEME_KEY)) applyTheme(e.matches ? 'dark' : 'light');
    });
  }


  const dropdowns = [
    { btn: 'profileBtn',        menu: 'dropdownMenu'        },
    { btn: 'profileBtnCompact', menu: 'dropdownMenuCompact' }
  ];

  dropdowns.forEach(({ btn: btnId, menu: menuId }) => {
    const btn  = document.getElementById(btnId);
    const menu = document.getElementById(menuId);
    if (!btn || !menu) return;

    btn.addEventListener('click', e => {
      e.stopPropagation();
      const open = menu.classList.contains('open');
      dropdowns.forEach(({ menu: m }) => {
        const el = document.getElementById(m);
        if (el) { el.classList.remove('open'); el.setAttribute('aria-hidden', 'true'); }
      });
      dropdowns.forEach(({ btn: b }) => {
        const el = document.getElementById(b);
        if (el) el.setAttribute('aria-expanded', 'false');
      });
      if (!open) {
        menu.classList.add('open');
        menu.setAttribute('aria-hidden', 'false');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  document.addEventListener('click', () => {
    dropdowns.forEach(({ btn: b, menu: m }) => {
      const menu = document.getElementById(m);
      const btn  = document.getElementById(b);
      if (menu) { menu.classList.remove('open'); menu.setAttribute('aria-hidden', 'true'); }
      if (btn)  { btn.setAttribute('aria-expanded', 'false'); }
    });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      dropdowns.forEach(({ btn: b, menu: m }) => {
        const menu = document.getElementById(m);
        const btn  = document.getElementById(b);
        if (menu) { menu.classList.remove('open'); menu.setAttribute('aria-hidden', 'true'); }
        if (btn)  { btn.setAttribute('aria-expanded', 'false'); }
      });
    }
  });

  const navTabs = document.querySelectorAll('.nav-tab');
  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      navTabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
    });
  });

  const catItems = document.querySelectorAll('.category-item');
  catItems.forEach(item => {
    item.addEventListener('click', () => {
      catItems.forEach(c => c.classList.remove('active'));
      item.classList.add('active');
    });
  });


  document.querySelectorAll('.card-image-wrap').forEach(wrap => {
    const img = wrap.querySelector('.card-image');
    if (!img) return;
    const markLoaded = () => wrap.classList.add('loaded');
    if (img.complete && img.naturalHeight !== 0) { markLoaded(); }
    else { img.addEventListener('load', markLoaded); img.addEventListener('error', markLoaded); }
  });

})();
