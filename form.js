const closeButton = document.getElementById('closeButton');
const contactModal = document.querySelector('.contact-modal');
const contactMe = document.querySelector('.contact-me');
contactMe.addEventListener('click', () => {
  contactModal.style.display = 'fixed';
});
closeButton.addEventListener('click', () => {
  contactModal.style.display = 'none';
});
