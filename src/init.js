import { page } from './getData.js'
import { createElement } from './millionseparated.js'
import { createHeaderPage2 } from './header.js'
import { createSortButton } from './buttonSort.js'
import { createCard } from './createCard.js'
import { divLike } from './divLike.js'
import { formulaire } from './formulaire.js'
import { formWrapper } from './formulaire2.js'
import { updateLikes } from './updateLikes.js'
import { activateSortButton } from './trimedia.js'
import { displayImage2 } from './createMedias.js'
import { lightboxFunction } from './lightbox.js'

export async function createPageDuPhotographe() {
  document.querySelector('.wrapper').innerHTML = ''
  createHeaderPage2().then((res) => {
    let header = createElement(res)
    document.querySelector('.wrapper').insertAdjacentElement('afterbegin', header)
  })
  createCard()
    .then((res) => {
      let cardPhotographerPage = createElement(res)
      document.querySelector('.wrapper').insertAdjacentElement('beforeend', cardPhotographerPage)
    })
    .then(() => {
      let formulaireWrapper = createElement(formWrapper())
      document.querySelector('.wrapper').appendChild(formulaireWrapper)
    })
    .then(() => {
      formulaire()
    })
    .then(() => {
      createSortButton()
        .then((res) => {
          let boutonDeTri = createElement(res)
          document.querySelector('.wrapper').insertAdjacentElement('beforeend', boutonDeTri)
        })
        .then(() => {
          activateSortButton()
        })
    })
    .then(() => {
      displayImage2().then((res) => {
        let page = createElement(res)
        document.querySelector('.wrapper').insertAdjacentElement('beforeEnd', page)
        lightboxFunction()
      })
    })
    .then(() => {
      divLike()
        .then((res) => {
          let divlike = createElement(res)
          document.querySelector('.wrapper').insertAdjacentElement('beforeEnd', divlike)
        })
        .then(() => {
          updateLikes()
        })
    })
}
