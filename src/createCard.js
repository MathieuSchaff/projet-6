import { m } from './millionseparated.js';
import { pickPhotographer } from './getData.js';
export function createArticleHeader(child) {
  const vnode = m(
    'article',
    {
      className: 'photographer-header',
    },
    child
  );
  return vnode;
}
export function photographerMain(child1, child2) {
  const vnode = m(
    'div',
    {
      className: 'photographer-main',
    },
    [child1, child2]
  );
  return vnode;
}
export function photographerProfile(child1, child2, child3, child4) {
  const vnode = m(
    'div',
    {
      className: 'photographer-profile',
    },
    [child1, child2, child3, child4]
  );
  return vnode;
}
export function photographerName(child) {
  const vnode = m(
    'h1',
    {
      className: 'photographer-profile--name',
    },
    [child]
  );
  return vnode;
}
export function photographerLocation(child1, child2) {
  const vnode = m(
    'h2',
    {
      className: 'photographer-profile--location',
    },
    [` ${child1}, ${child2}`]
  );
  return vnode;
}
export function photographerPhilosophy(child) {
  const vnode = m(
    'p',
    {
      className: 'photographer-profile--philosophy',
    },
    [child]
  );
  return vnode;
}
export function photographerButton(child) {
  const vnode = m(
    'button',
    {
      className: 'contact-me',
    },
    child
  );
  return vnode;
}
export function photographerDivImg(child) {
  const vnode = m(
    'div',
    {
      className: 'img',
    },
    [child]
  );
  return vnode;
}
export function photographerImage(portrait) {
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
export function createButton(button) {
  const vnode = m(
    'a',
    {
      className: 'nav--button button--photographer',
      href: `index.html?${button}=true`,
      value: `${button}`,
    },
    [`#${button}`, m('span', { className: 'sr-only' }, [`#${button}`])]
  );
  return vnode;
}
export function createButtons2(btns) {
  const vnode = m(
    'div',
    {
      className: 'containerTags',
    },
    btns
  );
  return vnode;
}
export function buttonForm() {
  const vnode = m(
    'button',
    {
      className: 'contact-me',
    },
    ['Contactez-moi']
  );
  return vnode;
}
export async function createCard() {
  let photographer = await pickPhotographer();
  let btns = photographer.tags.map((x) => createButton(x));
  const vnode = m('section', { className: 'photographer-header', role: 'region' }, [
    photographerMain(
      photographerProfile(
        photographerName(photographer.name),
        photographerLocation(photographer.city, photographer.country),
        photographerPhilosophy(photographer.tagline),
        createButtons2(btns)
      ),
      buttonForm()
    ),
    photographerDivImg(photographerImage(photographer.portrait)),
  ]);

  return vnode;
}
