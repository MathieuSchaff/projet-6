import {
  m,
  patch,
  createElement,
  /* or any other exports you want to access */
} from 'million';
import { m, className, style } from 'million';
import { m, createElement, VFlags } from 'million';
import { m, patch } from 'million';
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
const mediaImage = [];
const mediaVideo = [];
let arrayPhotographers = [];
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
  const vnode = m('h2', { className: className({ main__name: true }) }, [name]);
  return vnode;
}
function createCity(city, country) {
  const vnode = m('p', { className: className({ main__location: true }) }, [city, country]);
  return vnode;
}

function createTagline(tagline) {
  const vnode = m('p', { className: className({ main__philosophy: true }) }, [tagline]);
  return vnode;
}
function createPrice(price) {
  const vnode = m('p', { className: className({ main__tarif: true }) }, [`${price} €`]);
  return vnode;
}
function createTags() {
  const vnode = m(
    'button',
    {
      className: className({ navbutton: true }),
      type: 'button',
      onclick: 'sortPhotographer',
    },
    [`${element.name}`]
  );
  return vnode;
}
function createPortrait(portrait) {
  const vnode = m(
    'img',
    {
      className: className({ main__photo: true }),
      src: `./FishEyePhotos/Sample Photos/Photographers ID Photos/${portrait}`,
    },
    undefined
  );
  return vnode;
}
const createPage2 = async () => {
  let photographers = await getPhotographer();
  let page = createElement(
    m(
      'main',
      { id: 'main' },
      photographers.map((photographer) => {
        return m('article', undefined, [
          createName(photographer.name),
          createCity(photographer.city, photographer.country),
          createTagline(photographer.tagline),
          createPrice(photographer.name),
          createPortrait(photographer.portrait),
        ]);
      })
    )
  );
  document.getElementById('articles').appendChild(page);
};

createPage2();
