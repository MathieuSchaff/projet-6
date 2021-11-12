import { page } from './src/getData.js';

import { createElement } from './src/millionseparated.js';

import { createHeaderPage2 } from './src/header.js';

import { createSortButton } from './src/buttonSort.js';
import { createCard } from './src/createCard.js';
import { divLike } from './src/divLike.js';
import { formulaire } from './src/formulaire.js';
import { formWrapper } from './src/formulaire2.js';
import { updateLikes } from './src/updateLikes.js';
import { activateSortButton } from './src/trimedia.js';
import { displayImage2 } from './src/createMedias.js';
import { createPageDuPhotographe } from './src/init.js';
import { lightboxFunction } from './src/lightbox.js';

export async function createPageDuPhotographe() {
  document.querySelector('.wrapper').innerHTML = '';
  createHeaderPage2().then((res) => {
    let header = createElement(res);
    document.querySelector('.wrapper').insertAdjacentElement('afterbegin', header);
  });
  createCard()
    .then((res) => {
      console.log('jetnre dabord ans le card');
      let cardPhotographerPage = createElement(res);
      document.querySelector('.wrapper').insertAdjacentElement('beforeend', cardPhotographerPage);
    })
    .then(() => {
      let formulaireWrapper = createElement(formWrapper());
      document.querySelector('.wrapper').appendChild(formulaireWrapper);
    })
    .then(() => {
      formulaire();
    })
    .then(() => {
      createSortButton()
        .then((res) => {
          let boutonDeTri = createElement(res);
          document.querySelector('.wrapper').insertAdjacentElement('beforeend', boutonDeTri);
        })
        .then(() => {
          activateSortButton();
        });
    })
    .then(() => {
      displayImage2().then((res) => {
        console.log(res);
        page = createElement(res);
        document.querySelector('.wrapper').insertAdjacentElement('beforeEnd', page);
        lightboxFunction();
      });
    })
    .then(() => {
      divLike()
        .then((res) => {
          let divlike = createElement(res);
          document.querySelector('.wrapper').insertAdjacentElement('beforeEnd', divlike);
        })
        .then(() => {
          updateLikes();
        });
    });
}
