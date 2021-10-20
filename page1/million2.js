createPage1(sortArrayPhotographer())
  .then((res) => {
    page = createElement(res);
    document.querySelector('.mainContent').appendChild(page);
  })
  .then(() => {
    const links = document.querySelectorAll('button.nav--button');
    links.forEach((link) => {
      link.addEventListener('click', () => {
        updateParams(link.value);
      });
    });
  });
