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
      href: `http://127.0.0.1:5500/index.html?id=${link}`,
    },
    undefined
  );
  return vnode;
}
function buttonPage1(button) {
  const vnode = m(
    'button',
    {
      className: 'nav--button tagTri',
      type: 'button',
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
      let btns = photographer.tags.map((x) => buttonPage1(x));
      return m('article', { className: 'main' }, [
        m(
          'a',
          {
            href: `http://127.0.0.1:5500/index.html?id=${photographer.id}`,
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
