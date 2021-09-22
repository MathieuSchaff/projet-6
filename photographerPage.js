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
      console.log(photographers[i]);
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
  console.log(mediaSorted);
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
      <h1 class="main__name">${photographer.name}</h1>
      <p class="main__location">${photographer.city}, ${photographer.country}</p>
      <p class="main__philosophy">${photographer.tagline}</p>
    </div>
    <button class="contact-me">Contactez-moi</button>
  </div>
  <div class="img">
    <img
      src="./FishEyePhotos/Sample Photos/Photographers ID Photos/${photographer.portrait}"
      alt="Photo portrait du photographe"
      class="main__photo"
    />
  </div>
`;
  articleContainer.appendChild(articlePhotographer);

  let tagsDiv = document.createElement('div');
  //   tagsDiv.classList.add('tags');
  for (let i = 0; i < photographer.tags.length; i++) {
    let btns = [];
    let tag = document.createElement('button');
    tag.setAttribute('type', 'button');
    tag.classList.add('nav--button');
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
    if (e.key === 'Escape' || e.key === 'Esc') {
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

        <ul id="tri" aria-labelledby="Order_by" role="listbox" style="display: none">
          <li id="pop" class="tri choose" role="option">Popularité</li>

          <li id="date" role="option" class="tri choose">Date</li>

          <li id="titre" class="tri choose" role="option">Titre</li>
        </ul>
      </div>
  `;
  articleContainer.appendChild(divSort);
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
    tri[indexTri].style.border = 'none';
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

      tri[indexTri].style.border = '1px solid black';
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

  /**
   * CREER LES IMAGES
   */

  let imageContainer = document.querySelector('.sectioncontainer');
  let mediaSorted = await sortMedia();
  mediaSorted.forEach((med) => {
    let cont = document.createElement('figure');
    cont.classList.add('photo-card');
    if (Object.keys(med).includes('image')) {
      cont.innerHTML = `

            <a href="./FishEyePhotos/Sample Photos/${photographer.name}/${med.image}" class="  ">
              <img
                src="./FishEyePhotos/Sample Photos/${photographer.name}/${med.image}"
                class="img-card"
                alt=""
              />
            </a>
            <figcaption>
              <p class="textfig">${med.title}</p>
              <div class="heart">${med.likes} <i class="fas fa-heart"></i></div>
      `;
    } else {
      cont.innerHTML = `

          <a href="./FishEyePhotos/Sample Photos/${photographer.name}/${med.video}" class="  ">
          <video class="img-card" muted  controls>
          <source src="./FishEyePhotos/Sample Photos/${photographer.name}/${med.video}" type="video/mp4">

        </video>
          </a>
          <figcaption>
            <p class="textfig">${med.title}</p>
            <div class="heart">${med.likes}<i class="fas fa-heart"></i> </div>
    `;
    }

    console.log(`./FishEyePhotos/Sample Photos/${photographer.name}/${med.image}`);
    imageContainer.appendChild(cont);
  });
  links = Array.from(document.querySelectorAll('a[href$=".jpg"]'));
  links.forEach((link) =>
    link.addEventListener('click', (e) => {
      e.preventDefault();
      new lightBox(e.currentTarget.getAttribute('href'));
    })
  );
};

class lightBox {
  constructor(url) {
    this.element = this.buildDOM(url);
    this.loadImage(url);
    document.body.appendChild(this.element);
  }
  loadImage(url) {
    const image = new Image();
    image.src = url;
    const container = this.element.querySelector('.lightbox__container');
    container.appendChild(image);
  }
  buildDOM(url) {
    const dom = document.createElement('div');
    dom.classList.add('lightbox');
    dom.innerHTML = `
    <button class="lightbox__close">Fermer</button>
      <button class="lightbox__next">Suivant</button>
      <button class="lightbox__prev">Précédent</button>

      <div class="lightbox__container">

      </div>
    `;
    return dom;
  }
}
createPhotographerPage();
