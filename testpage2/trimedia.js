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
      closeMenu();
    })
  );
  document.addEventListener('click', closeMenu);
  button.addEventListener('click', closeMenu);
};

const closeMenu = function () {
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

  // patch(page, displayImage2(button.value));
  // displayImage2(button.value);
  ul = null;
  return button.value;
};

button.addEventListener('click', () => {
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
  e.stopPropagation();
};

window.addEventListener('keydown', function (e) {
  console.log(e);

  if (e.key === 'Tab' && ul !== null) {
    closeMenu();
  }
  if (e.key === 'Escape' || e.key === 'Esc') {
    closeMenu();
    // .then((res) => {
    //   displayImage2(res).then((res) => {
    //     patch(page, res);
    //   });
    // });
  }
  if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && ul !== null) {
    focusMenu(e);
  }
});
window.addEventListener('keyup', function (e) {
  if (e.key === 'Enter' && ul !== null) {
    closeMenu();
    // .then((res) => {
    //   displayImage2(res).then((res) => {
    //     patch(page, res);
    //   });
    // });
  }
});
button.addEventListener('keydown', function (e) {
  if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && ul == null) {
    openMenu(e);
  }
});
