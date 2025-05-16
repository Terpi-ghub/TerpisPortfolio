document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.opacity = 1;
  }, 50);

  const links = document.querySelectorAll('a[href]');
  links.forEach(link => {
    if (link.hostname === location.hostname && !link.href.includes('#')) {
      link.addEventListener('click', e => {
        e.preventDefault();
        const href = link.getAttribute('href');
        document.body.style.opacity = 0;
        setTimeout(() => window.location.href = href, 400);
      });
    }
  });
});
