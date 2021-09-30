let separator = document.createElement('li');
separator.setAttribute('role', 'separator');
separator.setAttribute('tabindex', -1);
separator.classList.add('dropdown-divider');
let separator2 = separator.cloneNode(false);
const button = document.getElementById('sort_button');
let indexTri = 0;
let ul = null;
let tri = [];
let triLi = [];
let sortable = '.choose';
const openMenu = function (e) {
  debugger;

  if (ul !== null) {
    return;
  }
  ul = document.getElementById('tri');
  button.setAttribute('aria-expanded', true);
  triLi = Array.from(document.querySelectorAll('.tri'));
  tri = Array.from(document.querySelectorAll('.tri, #sort_button'));

  tri[0].focus();
  // tri[2].insertAdjacentElement('beforebegin', separator);
  // tri[2].insertAdjacentElement('afterend', separator2);
  ul.style.display = null;
  let orderWrapper = document.getElementById('Order-wrapper');
  orderWrapper.addEventListener('click', stopPropagationClose);
  for (let i = 0; i < triLi.length; i++) {
    if (button.value === triLi[i].innerText.trim()) {
      triLi[i].style.display = 'none';
      triLi[i].setAttribute('tabindex', -1);
    } else {
      triLi[i].style.display = null;
      triLi[i].removeAttribute('tabindex');
    }
  }

  triLi.forEach((el) =>
    el.addEventListener('click', function () {
      button.value = el.innerText.trim();
      button.querySelector('span').innerText = el.innerText.trim();
      closeMenu();
    })
  );
  document.addEventListener('click', closeMenu);
  button.addEventListener('click', closeMenu);
};

const closeMenu = function () {
  // debugger;
  if (ul == null) {
    return;
  }

  button.removeEventListener('click', closeMenu);
  let orderWrapper = document.getElementById('Order-wrapper');
  orderWrapper.removeEventListener('click', stopPropagationClose);
  document.removeEventListener('click', closeMenu);
  button.setAttribute('aria-expanded', false);
  separator.remove();
  separator2.remove();
  triLi = [];
  tri = [];
  ul.style.display = 'none';
  button.focus();

  ul = null;
};

button.addEventListener('click', () => {
  openMenu();
});

const focusMenu = function (e) {
  e.preventDefault();

  console.log(indexTri);
  // tri[indexTri].style.border = 'none';
  if (e.shiftKey === true || e.key === 'ArrowUp') {
    indexTri--;
  } else {
    indexTri++;
  }

  if (indexTri >= tri.length) {
    indexTri = 0;
  }
  if (indexTri < 0) {
    indexTri = tri.length - 1;
  }
  console.log(indexTri);
  console.log(tri[indexTri]);

  //si tri[indexTri] a le même texte que le button alors ça passe directement au next
  if (tri[indexTri].hasAttribute('tabindex')) {
    focusMenu(e);
  } else {
    ul.setAttribute('aria-activedescendant', tri[indexTri].id);
    tri[indexTri].focus();

    tri[indexTri].style.borderColor = 'black';
  }
};
const stopPropagationClose = function (e) {
  e.stopPropagation();
};
window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' || e.key === 'Esc') {
    closeMenu();
  }
  if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && ul !== null) {
    focusMenu(e);
  }
});
button.addEventListener('keydown', function (e) {
  if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && ul == null) {
    openMenu(e);
  }
});
