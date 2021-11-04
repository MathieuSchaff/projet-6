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
let searchParams = new URLSearchParams(window.location.search);

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
    if (photographers[i].id == searchParams.get('id')) {
      return photographers[i];
    } else {
      window.location = 'http://127.0.0.1:5500/index.html';
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
    if (med.photographerId == searchParams.get('id')) {
      mediaSorted.push(med);
    }
  });
  return mediaSorted;
}
const createElement = (vnode) => {
  if (typeof vnode === 'string') {
    return document.createTextNode(vnode); // Catch if vnode is just text
  }
  const el = document.createElement(vnode.tag);
  if (vnode.props) {
    Object.entries(vnode.props).forEach(([name, value]) => {
      el[name] = value;
    });
  }

  if (vnode.children) {
    vnode.children.forEach((child) => {
      el.appendChild(createElement(child));
    });
  }
  return el;
};
const m = (tag, props, children) => ({
  tag,
  props,
  children,
});

function createArticleHeader(child) {
  const vnode = m(
    'article',
    {
      className: 'photographer-header',
    },
    child
  );
  return vnode;
}
function photographerMain(child1, child2) {
  const vnode = m(
    'div',
    {
      className: 'photographer-main',
    },
    [child1, child2]
  );
  return vnode;
}
function photographerProfile(child1, child2, child3, child4) {
  const vnode = m(
    'div',
    {
      className: 'photographer-profile',
    },
    [child1, child2, child3, child4]
  );
  return vnode;
}
function photographerName(child) {
  const vnode = m(
    'h1',
    {
      className: 'photographer-profile--name',
    },
    [child]
  );
  return vnode;
}
function photographerLocation(child1, child2) {
  const vnode = m(
    'p',
    {
      className: 'photographer-profile--location',
    },
    [` ${child1}, ${child2}`]
  );
  return vnode;
}
function photographerPhilosophy(child) {
  const vnode = m(
    'p',
    {
      className: 'photographer-profile--philosophy',
    },
    [child]
  );
  return vnode;
}
function photographerButton(child) {
  const vnode = m(
    'button',
    {
      className: 'contact-me',
    },
    child
  );
  return vnode;
}
function photographerDivImg(child) {
  const vnode = m(
    'div',
    {
      className: 'img',
    },
    [child]
  );
  return vnode;
}
function photographerImage(portrait) {
  const vnode = m(
    'img',
    {
      className: 'photographer-profile--photo',
      alt: 'Photo portrait du photographe',
      src: `./FishEyePhotos/Sample Photos/Photographers ID Photos/${portrait}`,
    },
    undefined
  );
  return vnode;
}
function createButton(button) {
  const vnode = m(
    'button',
    {
      className: 'nav--button button--photographer',
      type: 'button',
      value: `${button}`,
    },
    [`#${button}`, m('span', { className: 'sr-only' }, ['tag'])]
  );
  return vnode;
}
function createButtons(btns) {
  const vnode = m(
    'div',
    {
      className: 'containerTags',
    },
    btns
  );
  return vnode;
}
function buttonForm() {
  const vnode = m(
    'button',
    {
      className: 'contact-me',
    },
    ['Contactez-moi']
  );
  return vnode;
}
async function createCard() {
  let photographer = await pickPhotographer();
  let btns = photographer.tags.map((x) => createButton(x));
  const vnode = m('article', { className: 'photographer-header' }, [
    photographerMain(
      photographerProfile(
        photographerName(photographer.name),
        photographerLocation(photographer.city, photographer.country),
        photographerPhilosophy(photographer.tagline),
        createButtons(btns)
      ),
      buttonForm()
    ),
    photographerDivImg(photographerImage(photographer.portrait)),
  ]);
  console.log(vnode);
  return vnode;
}

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

// INITIALISATION DE LA CARD DU PHOTOGRAPHE
createCard()
  .then((res) => {
    document.querySelector('.photographer').insertAdjacentElement('afterbegin', createElement(res));
  })
  .then(() => {
    formulaire();
  });
