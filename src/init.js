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
