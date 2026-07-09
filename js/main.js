// Mobile navigation toggle. That's the only JavaScript on the site.
(function () {
  var toggle = document.querySelector('.nav__toggle');
  var menu = document.querySelector('.nav__menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', function () {
    var open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // On mobile, tapping the "Services" parent should expand its submenu
  // instead of navigating away.
  var parent = document.querySelector('.has-dropdown > a');
  if (parent) {
    parent.addEventListener('click', function (e) {
      if (window.matchMedia('(max-width: 860px)').matches) {
        e.preventDefault();
        this.parentElement.classList.toggle('open');
      }
    });
  }
})();
