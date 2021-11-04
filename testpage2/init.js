let page;

createCard()
  .then((res) => {
    document.querySelector('.photographer').insertAdjacentElement('afterbegin', createElement(res));
  })
  .then(() => {
    formulaire();
  });

displayImage2()
  .then((res) => {
    page = createElement(res);
    document.querySelector('.mainContent').insertAdjacentElement('afterEnd', page);
    lightboxFunction();
  })
  .then(async () => updateLikes());

// .then(async () => {
//   lightboxFunction();
// });
