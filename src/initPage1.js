import { page } from './getData.js';

import { createElement } from './millionseparated.js';
import { sortArrayPhotographer } from './sortedPhtgphers.js';
import { updateParams } from './updateParams.js';
import { createPage1 } from './cardPhotographers.js';
import { createRedirect, createHeaderPage1 } from './header.js';

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
  let pageVnode = await createPage1(sortArrayPhotographer(params));
  let page = createElement(pageVnode);
  wrapper.insertAdjacentElement('beforeEnd', page);
  const links = document.querySelectorAll('button.nav--button');
  // for (const [key, value] of params.entries()) {
  //   for (let i = 0; i < links.length; i++) {
  //     if (links[i].value == key) {
  //       // console.log(`${links} + key = ${key}`);
  //       links[i].classList.add('focused');
  //     }
  //   }
  // }
  const linksNav = document.querySelectorAll('nav button.nav--button');
  let paramsArray = [];
  for (var key of params.keys()) {
    paramsArray.push(key);
  }
  for (let i = 0; i < linksNav.length; i++) {
    if (paramsArray.includes(linksNav[i].value)) {
      linksNav[i].classList.add('focused');
    }
  }
  console.log(paramsArray);
  links.forEach((link) => {
    link.addEventListener('click', () => {
      updateParams(link.value);
    });
  });
}
