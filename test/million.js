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
let loaded = 0;
// recupère données
const getRequest = async () => {
  let reponse = await fetch(myRequest);
  let data = await reponse.json();
  return data;
};
// return une array photographer
const getPhotographer = async () => {
  let { photographers } = await getRequest();
  return photographers;
};

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
function createName(name) {
  const vnode = m('h2', { className: 'main__name' }, [name]);
  return vnode;
}
function createCity(city, country) {
  const vnode = m('p', { className: 'main__location' }, [`${city}, ${country}`]);
  return vnode;
}

function createTagline(tagline) {
  const vnode = m('p', { className: 'main__philosophy' }, [tagline]);
  return vnode;
}
function createPrice(price) {
  const vnode = m('p', { className: 'main__tarif' }, [`${price} €`]);
  return vnode;
}
function createTags() {
  const vnode = m(
    'button',
    {
      className: 'navbutton',
      type: 'button',
      onclick: 'sortPhotographer',
    },
    [`${element.name}`]
  );

  return vnode;
}
function createPortrait(portrait, name) {
  const vnode = m(
    'img',
    {
      className: 'main__photo',
      src: `./FishEyePhotos/Sample Photos/Photographers ID Photos/${portrait}`,
      alt: `Portrait du photographe ${name}`,
    },
    undefined
  );
  return vnode;
}
function createLink(link, portrait, name) {
  const vnode = m(
    'a',
    {
      className: 'main__link',
      href: `http://127.0.0.1:5500/photographer.html#${link}`,
    },
    undefined
  );
  return vnode;
}
function createButton(button) {
  const vnode = m(
    'a',
    {
      className: 'nav--button',
      type: 'button',
      href: `http://127.0.0.1:5500/index.html#${button}`,
    },
    [`#${button}`]
  );
  return vnode;
}
function createButtons(btns) {
  const vnode = m(
    'div',
    {
      className: 'tags',
    },
    btns
  );
  return vnode;
}
let phototo;
const createPage2 = async (request) => {
  let photographers = await request;
  let page = createElement(
    m(
      'main',
      { id: 'articles' },
      photographers.map((photographer) => {
        let btns = photographer.tags.map((x) => createButton(x));
        return m('article', { className: 'main' }, [
          m(
            'a',
            {
              href: `http://127.0.0.1:5500/photographer.html#${photographer.id}`,
              className: 'main__link',
            },
            [
              createPortrait(photographer.portrait, photographer.name),
              createName(photographer.name),
            ]
          ),
          m('p', { className: 'main__paragraph' }, [
            createCity(photographer.city, photographer.country),
            createTagline(photographer.tagline),
            createPrice(photographer.price),
            createButtons(btns),
          ]),
        ]);
      })
    )
  );

  document.querySelector('.mainContent').appendChild(page);
};

// const sortedPhotographer = async () => {
//   let { photographers } = await getRequest();
//   if (loaded == 0) {
//     return photographers;
//   } else {
//     photographers.map((x) => (x.count = 0));

//     // pour tous les boutons coché, j'ajoute 1 a count

//     for (let i = 0; i < buttonsArr.length; i++) {
//       for (let i = 0; i < photographers.length; i++) {
//         // console.log(document.querySelector('.buttonClicked').id);
//         if (photographers[i].tags.includes(document.querySelector('.buttonClicked').id)) {
//           photographers[i].count += 1;
//         } else if (
//           !photographers[i].tags.includes(document.querySelector('.buttonClicked').id) &&
//           photographers[i].count > 0
//         ) {
//           photographers[i].count -= 1;
//         } else {
//           photographers[i].count = 0;
//         }
//       }
//     }

//     photographers.sort((a, b) => {
//       return b.count - a.count;
//     });

//     return photographers;
//   }
// };
// const buttonsArr = Array.from(document.querySelectorAll('.nav--button'));

// buttonsArr.forEach((btn) =>
//   btn.addEventListener('click', () => {
//     document.getElementById('articles').remove();
//     if (btn.classList.contains('buttonClicked')) {
//       btn.classList.remove('buttonClicked');
//       loaded -= 1;
//       createPage2(sortedPhotographer());
//     } else {
//       btn.classList.add('buttonClicked');

//       loaded += 1;
//       createPage2(sortedPhotographer());
//     }
//   })
// );
const sortDisplayPhotographer = async () => {
  let { photographers } = await getRequest();
  if (!window.location.hash) {
    return photographers;
  }
  let gethash = window.location.hash.replace('#', '');
  console.log(gethash);
  console.log(photographers);
  let sortDisplayPhotographer = [];

  for (let i = 0; i < photographers.length; i++) {
    if (photographers[i].tags.includes(gethash)) {
      sortDisplayPhotographer.push(photographers[i]);
    }
  }
  console.log(sortDisplayPhotographer);
  return sortDisplayPhotographer;
};
sortDisplayPhotographer();

const hashHandler = () => {
  let hash = window.location.hash;
  console.log(hash);
  if (document.getElementById('articles')) {
    document.getElementById('articles').remove();
  }
  createPage2(sortDisplayPhotographer());
};
window.addEventListener('hashchange', hashHandler);
// createPage2(sortedPhotographer());
createPage2(sortDisplayPhotographer());
