const closeButton = document.getElementById('closeButton');
let modal = null;
const contactMe = document.querySelector('.contact-me');
contactMe.addEventListener('click', () => {
  contactModal.style.display = 'fixed';
});
closeButton.addEventListener('click', () => {
  contactModal.style.display = 'none';
});
const openModal = function (e) {
  e.preventDefault();
  modal = document.querySelector('.contact-modal');
  modal.style.display = null;
  modal.removeAttribute('aria-hidden');
  modal.setAttribute('aria-modal', true);
  closeButton.addEventListener('click', closeModal);
  modal.addEventListener('click', stopPropagation);
};
const closeModal = function (e) {
  e.preventDefault();
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', true);
  modal.removeAttribute('aria-modal');
  closeButton.removeEventListener('click', closeModal);
  modal.removeEventListener('click', stopPropagation);
  modal == null;
};
contactMe.addEventListener('click', openModal);
const stopPropagation = function(e){
  e.stopPropagation();
}
window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' || e.key === 'Esc') {
    closeModal(e);
  }
  if (e.key === 'Tab ' && ) {

  }
});
