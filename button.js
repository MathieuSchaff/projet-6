// buttonTri1.addEventListener('click', choosePage);

// active descend = id de l'option
// mettre aria selected true
// ajouter du style au focus
// <select> class ( on dirait le button); multiple name='listbox'
// option selected value

// button:
// aria-expanded="true" Set by the JavaScript when the listbox is displayed.
// Otherwise, is not present.
let separator = document.createElement('li');
separator.setAttribute('role', 'separator');
separator.setAttribute('tabindex', -1);
separator.classList.add('dropdown-divider');
let separator2 = separator.cloneNode(false);
const button = document.getElementById('sort_button');
let ul = null;
let tri = [];
let sortable = [];
const openMenu = function (e) {
  ul = document.getElementById('tri');
  button.setAttribute('aria-expanded', true);
  ul.style.display = null;
  tri = Array.from(document.querySelectorAll('.tri, #sort_button'));
  let triDisplay = Array.from(document.querySelectorAll('.tri'));
  for (let i = 0; i < tri.length; i++) {
    if (button.value === triDisplay[i].innerText) {
      triDisplay[i].style.display = 'none';
    }
  }
  tri[1].focus();
  tri[1].setAttribute('aria-selected', true);
  tri[1].before(separator);
  tri[1].after(separator2);
  ul.setAttribute('aria-activedescendant', tri[1].id);
};

const closeMenu = function (e) {
  button.setAttribute('aria-expanded', false);
  ul.style.display = 'none';
  ul.setAttribute('tabindex', -1);
  button.focus();
  ul = null;
};

button.addEventListener('click', () => {
  openMenu();
});

const focusMenu = function (e) {
  let orderWrapper = document.getElementById('Order-wrapper');
  let indexTri = tri.findIndex((f) => f === orderWrapper.querySelector(':focus'));
  if (e.shiftKey === true || e.key === 'ArrowUp') {
    indexTri--;
  } else {
    indexTri++;
  }

  if (indexTri >= triDisplay.length) {
    indexTri = 0;
  }
  if (indexTri < 0) {
    indexTri = triDisplay.length - 1;
  }
  triDisplay[indexTri].focus();
};
window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' || e.key === 'Esc') {
    closeMenu(e);
  }
});
button.addEventListener('keydown', function (e) {
  if (e.key === 'Tab' || e.key === 'ArrowDown') {
    // focusMenu(e);
    openMenu(e);
  }
});
// au clique sur un bouton quand ul !== null , ça doit close modal et renvoyer dans button.value la bonne ref, ainsi que dans span la bonne valeur. Displayle bloc selectionné
