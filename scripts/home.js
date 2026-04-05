(function () {
  'use strict';

  /**
   *
   * @param {MouseEvent} event
   * @param {HTMLButtonElement} btn
   */
  window.toggleWishlist = function (event, btn) {
    event.preventDefault();  
    event.stopPropagation();  

    const isSaved = btn.classList.toggle('saved');

    btn.setAttribute(
      'aria-label',
      isSaved ? 'Remove from wishlist' : 'Save to wishlist'
    );

    btn.style.transform = 'scale(1.35)';
    setTimeout(() => {
      btn.style.transform = '';
    }, 200);

    const card = btn.closest('.property-card');
    if (card) {
      const title = card.querySelector('.card-title');
      if (title) {
        const key = 'wishlist_' + encodeURIComponent(title.textContent.trim());
        if (isSaved) {
          localStorage.setItem(key, '1');
        } else {
          localStorage.removeItem(key);
        }
      }
    }
  };

  function restoreWishlistStates() {
    document.querySelectorAll('.heart-btn').forEach((btn) => {
      const card = btn.closest('.property-card');
      if (!card) return;

      const title = card.querySelector('.card-title');
      if (!title) return;

      const key = 'wishlist_' + encodeURIComponent(title.textContent.trim());
      if (localStorage.getItem(key)) {
        btn.classList.add('saved');
        btn.setAttribute('aria-label', 'Remove from wishlist');
      }
    });
  }

  restoreWishlistStates();


  const searchFields = document.querySelectorAll('.search-field');
  const searchFieldsContainer = document.getElementById('searchFields');

  searchFields.forEach((field) => {
    field.addEventListener('mouseenter', () => {
      if (searchFieldsContainer) {
        searchFieldsContainer.classList.add('field-hover');
      }
    });

    field.addEventListener('mouseleave', () => {
      if (searchFieldsContainer) {
        searchFieldsContainer.classList.remove('field-hover');
      }
    });

    const input = field.querySelector('input');
    if (input) {
      input.addEventListener('focus', () => {
        searchFields.forEach((f) => f.classList.remove('active'));
        field.classList.add('active');
        if (searchFieldsContainer) {
          searchFieldsContainer.classList.add('field-active');
        }
      });
    }
  });

  document.addEventListener('click', (e) => {
    if (!searchFieldsContainer || !searchFieldsContainer.contains(e.target)) {
      searchFields.forEach((f) => f.classList.remove('active'));
      if (searchFieldsContainer) {
        searchFieldsContainer.classList.remove('field-active', 'field-hover');
      }
    }
  });

  const GALLERY_IMAGES = {
    bedroom: './assets/images/imgi_1_photo.jpg',
    kitchen: './assets/images/imgi_2_photo.jpg',
    bathroom: './assets/images/imgi_3_photo.jpg',
    view: './assets/images/imgi_4_photo.jpg',
  };

  function initCardGallery() {
    const cards = document.querySelectorAll('.property-card');

    cards.forEach((card) => {
      const wrap = card.querySelector('.card-image-wrap');
      const img = card.querySelector('.card-image');
      if (!wrap || !img) return;

      const originalSrc = img.src;
      const extraImages = Object.values(GALLERY_IMAGES);
      const allImages = [originalSrc, ...extraImages.slice(0, 4)];
      let currentIndex = 0;

      const dotsContainer = document.createElement('div');
      dotsContainer.className = 'card-dots';
      dotsContainer.setAttribute('aria-hidden', 'true');

      allImages.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.className = 'card-dot' + (i === 0 ? ' active' : '');
        dotsContainer.appendChild(dot);
      });

      wrap.appendChild(dotsContainer);

      const prevZone = document.createElement('button');
      prevZone.className = 'card-nav card-nav--prev';
      prevZone.setAttribute('aria-label', 'Previous image');
      prevZone.innerHTML = `<svg viewBox="0 0 32 32" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 26L10 16L20 6" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

      const nextZone = document.createElement('button');
      nextZone.className = 'card-nav card-nav--next';
      nextZone.setAttribute('aria-label', 'Next image');
      nextZone.innerHTML = `<svg viewBox="0 0 32 32" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 6l10 10-10 10" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

      wrap.appendChild(prevZone);
      wrap.appendChild(nextZone);

      function goToSlide(index) {
        currentIndex = (index + allImages.length) % allImages.length;
        img.src = allImages[currentIndex];
        dotsContainer.querySelectorAll('.card-dot').forEach((d, i) => {
          d.classList.toggle('active', i === currentIndex);
        });
      }

      prevZone.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        goToSlide(currentIndex - 1);
      });

      nextZone.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        goToSlide(currentIndex + 1);
      });
    });
  }

  initCardGallery();



  const galleryStyles = `
    .card-dots {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 4px;
      z-index: 5;
      opacity: 0;
      transition: opacity 0.2s ease;
      pointer-events: none;
    }
    .card-image-wrap:hover .card-dots { opacity: 1; }

    .card-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: rgba(255,255,255,0.6);
      transition: background 0.2s ease, transform 0.2s ease;
    }
    .card-dot.active {
      background: #fff;
      transform: scale(1.2);
    }

    .card-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: rgba(255,255,255,0.9);
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 6;
      opacity: 0;
      transition: opacity 0.2s ease, transform 0.2s ease, background 0.15s ease;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    }
    .card-nav:hover { background: #fff; transform: translateY(-50%) scale(1.08); }
    .card-nav svg path { stroke: #222; }
    .card-nav--prev { left: 10px; }
    .card-nav--next { right: 10px; }
    .card-image-wrap:hover .card-nav { opacity: 1; }

    /* Active search field highlight */
    #searchFields .search-field.active {
      background: var(--bg-color);
      box-shadow: 0 0 0 3px rgba(255, 56, 92, 0.15);
      border-radius: var(--radius-xl);
    }
  `;

  const styleEl = document.createElement('style');
  styleEl.textContent = galleryStyles;
  document.head.appendChild(styleEl);


  const entranceStyles = `
    .property-card {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .property-card.visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;

  const entranceStyleEl = document.createElement('style');
  entranceStyleEl.textContent = entranceStyles;
  document.head.appendChild(entranceStyleEl);

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.property-card').forEach((card, i) => {
      card.style.transitionDelay = Math.min(i * 0.06, 0.5) + 's';
      observer.observe(card);
    });
  } else {
    document.querySelectorAll('.property-card').forEach((c) => c.classList.add('visible'));
  }

})();
