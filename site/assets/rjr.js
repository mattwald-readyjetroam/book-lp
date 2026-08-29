/* =====================================================================
   Ready Jet Roam — shared site behaviour
   1. Mobile nav toggle
   2. GA4 conversion tracking (Brief, Phase 4)

   Measurement approach: any link or form carrying a data-evt attribute
   fires a GA4 event automatically. No per-page wiring — you just tag the
   markup. Add your GA4 Measurement ID in the <head> of each page (or the
   shared header) and these events start flowing.

       <a data-evt="affiliate_click" data-evt-label="world-nomads"
          data-evt-page="choosing-travel-insurance" href="...">

   Tracked out of the box:
     affiliate_click   — outbound affiliate links, labelled by partner
     shop_click        — outbound clicks to shop.readyjetroam.com (sales proxy)
     newsletter_signup — newsletter form submissions
     guide_download    — free packing guide / checklist downloads
   ===================================================================== */
(function () {
  // ---- 1. mobile nav ----
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // ---- 2. GA4 events ----
  function track(name, params) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, params || {});
    } else {
      // No GA4 configured yet — log so the wiring is visible during dev.
      (window.dataLayer = window.dataLayer || []).push([name, params]);
      if (window.console) console.debug('[rjr:event]', name, params);
    }
  }

  // Auto-tag outbound shop links as the sales proxy, even without data-evt.
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[data-evt], a[href]');
    if (!a) return;

    var evt = a.getAttribute('data-evt');
    var href = a.getAttribute('href') || '';
    var params = {
      label: a.getAttribute('data-evt-label') || undefined,
      source_page: a.getAttribute('data-evt-page') || document.body.dataset.page || undefined,
      link_url: href
    };

    if (evt) {
      track(evt, params);
    } else if (/shop\.readyjetroam\.com/.test(href)) {
      track('shop_click', params);
    }
  });

  // Newsletter + download forms
  document.querySelectorAll('form[data-evt]').forEach(function (f) {
    f.addEventListener('submit', function () {
      track(f.getAttribute('data-evt'), {
        source_page: f.getAttribute('data-evt-page') || document.body.dataset.page || undefined
      });
    });
  });
})();
