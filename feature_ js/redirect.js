const redirect = document.querySelector('.redirect');
window.addEventListener('scroll', () => {
  let scrolled = window.scrollY;
  if (scrolled > 0) {
    redirect.style.display = 'flex';
    redirect.setAttribute('tabindex', 1);
    redirect.setAttribute('aria-expanded', 'true');
  } else {
    redirect.style.display = 'none';
    redirect.setAttribute('tabindex', -1);
    redirect.setAttribute('aria-expanded', 'false');
  }
});
