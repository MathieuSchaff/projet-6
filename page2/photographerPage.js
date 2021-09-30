let myInit = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
  mode: 'cors',
  cache: 'default',
};
let myRequest = new Request('data.json', myInit);
let hash = window.location.hash;

/**
 * RECUPERE TOUTE LA DONNEE
 **/

const getRequest = async () => {
  let reponse = await fetch(myRequest);
  let data = await reponse.json();
  return data;
};

/**
 * RECUPERE LES PHOTOGRAPHES
 **/

const getPhotographer = async () => {
  let { photographers } = await getRequest();
  return photographers;
};

/**
 * RECUPERE TOUTE LES MEDIAS
 **/

const getMedia = async () => {
  let { media } = await getRequest();
  return media;
};

/**
 * RECUPERE TOUTE LE PHOTOGRAPHE CLIQUE GRACE AU HASH
 **/
async function pickPhotographer() {
  let photographers = await getPhotographer();
  for (let i = 0; i < photographers.length; i++) {
    if (photographers[i].id == hash.slice(1)) {
      return photographers[i];
    }
  }
}

/**
 * RECUPERE LES MEDIAS DU PHOTOGRAPHE
 **/

async function sortMedia() {
  let photographerMedia = await getMedia();
  let mediaSorted = [];
  photographerMedia.forEach((med) => {
    if (med.photographerId == hash.slice(1)) {
      mediaSorted.push(med);
    }
  });
  return mediaSorted;
}

const createPhotographerPage = async () => {
  /**
   * CREE LA CARD DU PHOTOGRAPHE SUR SA PAGE
   **/
  const articleContainer = document.querySelector('.photographer');
  let photographer = await pickPhotographer();
  let articlePhotographer = document.createElement('article');
  articlePhotographer.classList.add('photographer-header');
  articlePhotographer.innerHTML = `
  
  <div class="photographer-main">
    <div class="photographer-profile">
      <h1 class="photographer-profile--name">${photographer.name}</h1>
      <p class="photographer-profile--location">${photographer.city}, ${photographer.country}</p>
      <p class="photographer-profile--philosophy">${photographer.tagline}</p>
    </div>
    <button class="contact-me">Contactez-moi</button>
  </div>
  <div class="img">
    <img
      src="./FishEyePhotos/Sample Photos/Photographers ID Photos/${photographer.portrait}"
      alt="Photo portrait du photographe"
      class="photographer-profile--photo"
    />
  </div>
`;
  articleContainer.appendChild(articlePhotographer);

  let tagsDiv = document.createElement('div');
  tagsDiv.classList.add('containerTags');
  for (let i = 0; i < photographer.tags.length; i++) {
    let btns = [];
    let tag = document.createElement('button');
    tag.setAttribute('type', 'button');
    tag.classList.add('nav--button', 'button--photographer');
    tag.innerHTML = `#${photographer.tags[i]} <span class="sr-only">Tag</span>`;
    btns.push(tag);
    tagsDiv.appendChild(tag);
  }
  document.querySelector('.photographer-profile').appendChild(tagsDiv);

  /**
   * PERMET AU FORMULAIRE DE SORTIR DE TERRE
   */

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

  /**
   * CREER LA DIV DE TRI DES MEDIAS
   */

  let divSort = document.createElement('div');
  divSort.classList.add('sort');
  divSort.innerHTML = `
  <span id="Order_by"> Trier par </span>
      <div id="Order-wrapper">
        <button
          role="button"
          aria-haspopup="listbox"
          aria-labelledby="Order_by sort_button"
          id="sort_button"
          aria-expanded="false"
          class="choose"
          value="Popularité"
        >
          <span id="sortBy">Popularité</span> <i class="fas fa-chevron-up"></i
          ><i class="fas fa-chevron-down"></i>
        </button>

        <ul id="tri" aria-labelledby="Order_by" role="listbox" tabindex="-1" style="display: none">
        
          <li id="pop" class="choose" role="option">Popularité</li>
          <li role="separator" tabindex="-1" class="dropdown-divider"></li>
          <li id="date" role="option" class="choose">Date</li>
          <li role="separator" tabindex="-1" class="dropdown-divider"></li>
          <li id="titre" class="choose" role="option">Titre</li>
        </ul>
      </div>
  `;
  articleContainer.appendChild(divSort);

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
    console.log(triLi);
    // VA FOCUS SUR LE PREMIER ELEMENT = > LE BOUTON
    triLi[0].focus();
    triLi[0].classList.add('focused');
    triLi[0].setAttribute('aria-selected', true);
    //UL ETAIT DISPLAY : NONE => va donc montrer la liste
    ul.style.display = null;
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
    console.log('ouvert');
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
    ul = null;
    displayImage(button.value);
    console.log('fermé');
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
    // if (e.key === 'Enter' && ul !== null) {
    //   console.log('test');
    //   closeMenu();
    // }
    console.log(e);

    if (e.key === 'Tab' && ul !== null) {
      closeMenu();
    }
    if (e.key === 'Escape' || e.key === 'Esc') {
      closeMenu();
    }
    if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && ul !== null) {
      focusMenu(e);
    }
  });
  window.addEventListener('keyup', function (e) {
    if (e.key === 'Enter' && ul !== null) {
      closeMenu();
    }
  });
  button.addEventListener('keydown', function (e) {
    if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && ul == null) {
      openMenu(e);
    }
  });
};
createPhotographerPage();
