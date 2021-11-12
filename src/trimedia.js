import { page } from './src/getData.js';

import { patch } from './src/millionseparated.js';

import { activateSortButton } from './src/trimedia.js';
import { displayImage2 } from './src/createMedias.js';

import { lightboxFunction } from './src/lightbox.js';

export const activateSortButton = async () => {
  const button = document.getElementById('sort_button');
  let indexTri = 0;
  let ul = null;
  let tri = [];
  let triLi = [];

  const openMenu = function (e) {
    // si ul est déjà ouverte, pas besoin de l'ouvrir
    if (ul !== null) {
      return;
    }
    // UL n'est plus nul.
    ul = document.getElementById('tri');
    button.setAttribute('aria-expanded', true);
    // TRILI ET TRI  = même chose / TEST
    triLi = Array.from(document.querySelectorAll('li.choose'));
    // VA FOCUS SUR LE PREMIER ELEMENT = > LE BOUTON
    triLi[0].focus();
    triLi[0].classList.add('focused');
    triLi[0].setAttribute('aria-selected', true);
    //UL ETAIT DISPLAY : NONE => va donc montrer la liste
    ul.style.display = null;
    ul.querySelector('.chevronRotate').classList.add('activateRotate');
    // va permettre que lorsqu'on clique sur le le block élément , UL ne se ferme pas ( c'est un détail)
    let orderWrapper = document.getElementById('Order-wrapper');
    orderWrapper.addEventListener('click', stopPropagationClose);
    // ariaselected = true sur le choisit / focus
    // ariaactivedescendant sur ul qui doit etre l'id du focus / choisit
    triLi.forEach((el) =>
      el.addEventListener('click', function () {
        // ul.setAttribute('aria-activedescendant', el.id);
        el.setAttribute('aria-selected', true);
        button.value = el.innerText.trim();
        button.querySelector('span').innerText = el.innerText.trim();
        console.log('cliqué sur les LI pour et ça a close');
        closeMenu();
      })
    );
    // document.addEventListener('click', () => {
    //   console.log('cliqué sur le document pour et ça a close');
    //   closeMenu();
    // });
    // button.addEventListener('click', () => {
    //   console.log('cliqué sur le bouton pour et ça a close');
    //   closeMenu();
    // });
    document.addEventListener('click', closeMenu);
    // button.addEventListener('click', closeMenu);
  };

  async function closeMenu() {
    if (ul == null) {
      return;
    }
    button.removeEventListener('click', closeMenu);
    let orderWrapper = document.getElementById('Order-wrapper');
    orderWrapper.removeEventListener('click', stopPropagationClose);
    document.removeEventListener('click', closeMenu);
    button.setAttribute('aria-expanded', false);
    ul.style.display = 'none';
    button.focus();

    triLi[indexTri].classList.remove('focused');
    ul.querySelector('.chevronRotate').classList.remove('activateRotate');

    page = document.querySelector('.sectioncontainer');
    let newVnode = await displayImage2(button.value);
    console.log(newVnode);
    patch(page, newVnode);
    lightboxFunction();
    // displayImage2(button.value);
    ul = null;
  }

  button.addEventListener('click', () => {
    console.log('bouton openmenu');
    openMenu();
  });

  const focusMenu = function (e) {
    e.preventDefault();
    triLi[0].classList.remove('focused');
    triLi[indexTri].setAttribute('aria-selected', false);
    triLi[indexTri].classList.remove('focused');
    console.log(indexTri);
    // tri[indexTri].style.border = 'none';
    if (e.shiftKey === true || e.key === 'ArrowUp') {
      indexTri--;
    } else {
      indexTri++;
    }

    if (indexTri >= triLi.length) {
      indexTri = 0;
    }
    if (indexTri < 0) {
      indexTri = triLi.length - 1;
    }
    console.log(indexTri);
    console.log(triLi[indexTri]);
    triLi[indexTri].focus();
    triLi[indexTri].setAttribute('aria-selected', true);
    button.setAttribute('value', triLi[indexTri].innerText.trim());
    button.querySelector('span').innerText = triLi[indexTri].innerText.trim();
    ul.setAttribute('aria-activedescendant', triLi[indexTri].id);

    triLi[indexTri].classList.add('focused');
  };

  const stopPropagationClose = function (e) {
    console.log('arrête de te propager');
    e.stopPropagation();
  };

  window.addEventListener('keydown', function (e) {
    if (e.key === 'Tab' && ul !== null) {
      console.log('tab close');
      closeMenu();
    }
    if (e.key === 'Escape' || e.key === 'Esc') {
      console.log('escape');
      closeMenu();
    }
    if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && ul !== null) {
      focusMenu(e);
    }
  });
  window.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && ul !== null) {
      closeMenu();
    }
  });
  button.addEventListener('keydown', function (e) {
    if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && ul == null) {
      openMenu(e);
    }
  });
};
