// ========== All init on load ==========
window.addEventListener('load', () => {
  // Hide loader
  const loader = document.querySelector('.loader');
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 800);

  // Magnify lens on hero heading
  const wrapper = document.querySelector('.hero-heading-wrapper');
  const magnified = document.querySelector('.hero-heading-magnified');
  const lensBorder = document.querySelector('.hero-lens-border');
  if (wrapper && magnified && lensBorder) {
    const scale = 1.2;
    const radius = 120;

    wrapper.addEventListener('mousemove', (e) => {
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      magnified.style.clipPath = 'circle(' + radius + 'px at ' + (x / scale) + 'px ' + (y / scale) + 'px)';
      lensBorder.style.left = x + 'px';
      lensBorder.style.top = y + 'px';
    });

    wrapper.addEventListener('mouseleave', () => {
      magnified.style.clipPath = 'circle(0px at 0px 0px)';
    });
  }

  // Hero intro, subtitle, CTA fade in
  const heroIntro = document.querySelector('.hero-intro');
  const heroSubtitle = document.querySelector('.hero-subtitle');
  const heroCta = document.querySelector('.hero-cta');

  if (heroIntro) {
    setTimeout(() => heroIntro.classList.add('visible'), 600);
  }
  if (heroSubtitle) {
    setTimeout(() => heroSubtitle.classList.add('visible'), 2200);
  }
  if (heroCta) {
    setTimeout(() => heroCta.classList.add('visible'), 2500);
  }
});

// ========== Mobile Menu ==========
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });
}

// ========== Scroll Reveal ==========
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// ========== Live Clock ==========
function updateClock() {
  const clock = document.querySelector('.clock');
  if (!clock) return;
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  clock.textContent = `${hours}:${minutes} ${ampm}`;
}

updateClock();
setInterval(updateClock, 1000);

// ========== Smooth scroll for anchor links ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ========== Nav background on scroll ==========
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(0, 0, 0, 0.95)';
  } else {
    nav.style.background = 'rgba(0, 0, 0, 0.85)';
  }
});
