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

  return vnode;
}
