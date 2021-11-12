export async function createPagePhotographers() {
  let wrapper = document.querySelector('.wrapper');
  wrapper.innerHTML = '';
  createHeaderPage1().then((res) => {
    let header = createElement(res);
    wrapper.appendChild(header);
  });
  createRedirect().then((res) => {
    let buttonRedirect = createElement(res);
    document.body.insertAdjacentElement('afterbegin', buttonRedirect);
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
  });
  let params = new URLSearchParams(window.location.search);
  pageVnode = await createPage1(sortArrayPhotographer(params));
  page = createElement(pageVnode);
  wrapper.insertAdjacentElement('beforeEnd', page);
  const links = document.querySelectorAll('button.nav--button');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      updateParams(link.value);
    });
  });
}
