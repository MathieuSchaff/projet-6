// FONCTION DU FORMULAIRE
const formulaire = async () => {
  let photographer = await pickPhotographer();
  let name = document.querySelector('.contact-name');
  name.innerHTML = `${photographer.name}`;
  const closeButton = document.getElementById('closeButton');
  let modal = null;
  const contactMe = document.querySelector('.contact-me');
  const focusable = 'button, a, input, textarea';
  let focusables = [];
  const openModal = function (e) {
    e.preventDefault();
    modal = document.querySelector('.contact-modal');
    focusables = Array.from(modal.querySelectorAll(focusable));
    focusables[0].focus();
    console.log(modal.querySelectorAll(focusable));
    console.log(focusables);
    modal.style.display = null;
    modal.removeAttribute('aria-hidden');
    modal.setAttribute('aria-modal', true);
    closeButton.addEventListener('click', closeModal);
    modal.addEventListener('click', closeModal);
    let wrapper = document.querySelector('.modal--wrapper');
    wrapper.addEventListener('click', stopPropagation);
    console.log(document.querySelector('.contact-me').style.zIndex);
    document.querySelector('.contact-me').style.zIndex = '-1';
    console.log(document.querySelector('.Order-wrapper'));
    document.querySelector(' #Order-wrapper').style.zIndex = '0';
  };

  const closeModal = function (e) {
    e.preventDefault();
    window.setTimeout(function () {
      modal.style.display = 'none';
    }, 300);
    modal.setAttribute('aria-hidden', true);
    modal.removeAttribute('aria-modal');
    closeButton.removeEventListener('click', closeModal);
    modal.removeEventListener('click', closeModal);
    let wrapper = document.querySelector('.modal--wrapper');
    wrapper.removeEventListener('click', stopPropagation);
    document.querySelector('.contact-me').style.zIndex = '1';
    document.querySelector(' #Order-wrapper').style.zIndex = '20';
    contactMe.focus();
    modal == null;
  };

  contactMe.addEventListener('click', openModal);

  const focusModal = function (e) {
    e.preventDefault();

    let index = focusables.findIndex((f) => f === modal.querySelector(':focus'));
    if (e.shiftKey === true || e.key === 'ArrowUp') {
      index--;
    } else {
      index++;
    }

    if (index >= focusables.length) {
      index = 0;
    }
    if (index < 0) {
      index = focusables.length - 1;
    }
    focusables[index].focus();
  };

  const stopPropagation = function (e) {
    e.stopPropagation();
  };
  window.addEventListener('keydown', function (e) {
    if ((e.key === 'Escape' || e.key === 'Esc') && modal !== null) {
      console.log('close modal');
      closeModal(e);
    }
    if ((e.key === 'Tab' || e.key === 'ArrowDown' || e.key === 'ArrowUp') && modal !== null) {
      focusModal(e);
    }
  });
};
