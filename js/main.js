(function () {
  // ---------- Copy email (works without any libraries) ----------
  var copyBtn = document.getElementById('copy-email');
  var copyStatus = document.getElementById('copy-status');
  var email = 'geetikaa174@gmail.com';
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      function done() { copyStatus.textContent = 'Copied ' + email; }
      function fallback() {
        var t = document.createElement('textarea');
        t.value = email; t.setAttribute('readonly', ''); t.style.position = 'absolute'; t.style.left = '-9999px';
        document.body.appendChild(t); t.select();
        try { document.execCommand('copy'); done(); } catch (e) { copyStatus.textContent = 'Copy blocked by the browser. The email is ' + email; }
        document.body.removeChild(t);
      }
      if (navigator.clipboard && window.isSecureContext) { navigator.clipboard.writeText(email).then(done, fallback); } else { fallback(); }
    });
  }

  // ---------- Motion ----------
  if (!window.gsap || !window.ScrollTrigger) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  gsap.registerPlugin(ScrollTrigger);

  if (window.Lenis) {
    var lenis = new Lenis({ lerp: 0.12 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
    // in-page links glide instead of jumping
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var target = document.querySelector(a.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        lenis.scrollTo(target, { offset: -70 });
        target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true });
      });
    });
  }

  // The one orchestrated moment: the ransom letters land one by one
  gsap.from('.rl', { y: -60, opacity: 0, rotation: function (i) { return i % 2 ? 14 : -14; }, duration: .7, ease: 'back.out(1.8)', stagger: .07, delay: .15 });
  gsap.from('.collage > *', { opacity: 0, x: function (i) { return i % 2 ? 80 : 40; }, duration: .9, ease: 'power3.out', stagger: .06, delay: .6 });

  // Section titles slide in from the side as each folder arrives
  gsap.utils.toArray('.divider').forEach(function (d, i) {
    var dir = i % 2 ? -1 : 1;
    gsap.from(d.querySelector('.slide-title'), { xPercent: 18 * dir, ease: 'none',
      scrollTrigger: { trigger: d, start: 'top bottom', end: 'top 25%', scrub: .6 } });
    gsap.from(d.querySelector('.tab'), { x: 120 * dir, ease: 'none',
      scrollTrigger: { trigger: d, start: 'top bottom', end: 'top 40%', scrub: .6 } });
  });

  // Each section's content moves in sideways, the opposite way to its title
  gsap.utils.toArray('.slide').forEach(function (s, i) {
    var dir = i % 2 ? 1 : -1;
    gsap.from(s, { x: 90 * dir, ease: 'none',
      scrollTrigger: { trigger: s, start: 'top bottom', end: 'top 45%', scrub: .6 } });
  });
})();
