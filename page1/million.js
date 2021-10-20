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
function createLink(link) {
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
    'button',
    {
      className: 'nav--button',
      type: 'button',
      // href: `http://127.0.0.1:5500/index.html#${button}`,
      value: `${button}`,
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

async function createPage1(request) {
  let photographers = await request;
  let vnode = m(
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
            onclick: 'mafonction(this)',
          },
          [createPortrait(photographer.portrait, photographer.name), createName(photographer.name)]
        ),
        m('p', { className: 'main__paragraph' }, [
          createCity(photographer.city, photographer.country),
          createTagline(photographer.tagline),
          createPrice(photographer.price),
          createButtons(btns),
        ]),
      ]);
    })
  );
  return vnode;
}

// const patch = (el, newVNode, oldVNode) => {
//   if (!newVNode && newVNode !== '') return el.remove();
//   if (typeof oldVNode === 'string' || typeof newVNode === 'string') {
//     if (oldVNode !== newVNode) return el.replaceWith(createElement(newVNode));
//   } else {
//     if (oldVNode?.tag !== newVNode.tag) {
//       return el.replaceWith(createElement(newVNode));
//     }

//     if (oldVNode) {
//       for (const propName in oldVNode.props) {
//         if (oldVNode.props[propName] === newVNode.props[propName])
//           return el.replaceWith(createElement(newVNode));
//       }

//       for (let i = el.childNodes.length - 1; i >= 0; i--) {
//         patch(el.childNodes[i], newVNode.children[i], oldVNode.children[i]);
//       }
//     }
//   }
// };

// Retour une array avec les photographer trié en fonction s'ils ont les tag
async function sortArrayPhotographer(paramsATester) {
  //récupère tous les photographes
  let { photographers } = await getRequest();
  let params;
  if (paramsATester == null || paramsATester.toLocaleString() == '') {
    params = new URLSearchParams(window.location.search);
  } else {
    params = paramsATester;
  }
  // récupère les params passés en url
  //nouvelle array si jamais il y a des URL / sinon inutiles
  let sortDisplayPhotographer = [];
  let uniqUsers = [];
  if (params == null || params.toLocaleString() == '') {
    return photographers;
  } else {
    // pour chaqué clé, va boucler sur tous les photographer.
    // Si le photographer à la clé, alors ça push le photographer dans l'array
    // PB DE DOUBLONS
    for (const [key, value] of params.entries()) {
      for (let i = 0; i < photographers.length; i++) {
        if (photographers[i].tags.includes(key)) {
          sortDisplayPhotographer.push(photographers[i]);
        }
      }
    }
    uniqUsers = [
      ...sortDisplayPhotographer.reduce((map, obj) => map.set(obj.id, obj), new Map()).values(),
    ];
    return uniqUsers;
  }
}
// UPDATE LES PARAMS ET URL = > recharge page
const updateParams = async (linkValue) => {
  let params = new URLSearchParams(window.location.search);
  let params2 = new URLSearchParams(window.location.search);
  if (params.has(linkValue)) {
    params.delete(linkValue);
  } else if (linkValue !== null) {
    params.append(linkValue, true);
  }
  let oldvNode = await createPage1(sortArrayPhotographer(params2));
  let newVnode = await createPage1(sortArrayPhotographer(params));
  console.log(oldvNode);
  console.log(newVnode);
  console.log(page);
  patch(page, newVnode);
  let paramsToString = params.toString();
  history.pushState({}, null, `?${paramsToString}`);
};

// const oldV = m('div', { id: 'app' }, ['Hello World']);
// const newV = m('div', { id: 'app' }, ['Goodbye World']);
// const elV = createElement(oldV);
// // <div id="app">Hello World</div>
// console.log(oldV);
// console.log(newV);
// console.log(elV);
// document.querySelector('.mainContent').appendChild(elV);
// // patch(elV);
// console.log(elV);
