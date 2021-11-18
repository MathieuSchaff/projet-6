import { m } from './millionseparated.js'

export function createName(name) {
  const vnode = m('h2', { className: 'main__name' }, [name])
  return vnode
}
export function createCity(city, country) {
  const vnode = m('p', { className: 'main__location' }, [`${city}, ${country}`])
  return vnode
}

export function createTagline(tagline) {
  const vnode = m('p', { className: 'main__philosophy' }, [tagline])
  return vnode
}
export function createPrice(price) {
  const vnode = m('p', { className: 'main__tarif' }, [`${price} € / jour`])
  return vnode
}
export function createTags() {
  const vnode = m(
    'button',
    {
      className: 'navbutton',
      type: 'button',
      onclick: 'sortPhotographer',
    },
    [`${element.name}`]
  )

  return vnode
}
export function createPortrait(portrait, name) {
  const vnode = m(
    'img',
    {
      className: 'main__photo',
      src: `./FishEyePhotos/Sample Photos/Photographers ID Photos/${portrait}`,
      alt: `Portrait du photographe ${name}`,
    },
    undefined
  )
  return vnode
}
export function createLink(link) {
  const vnode = m(
    'a',
    {
      className: 'main__link',
      href: `?id=${link}`,
    },
    undefined
  )
  return vnode
}
export function buttonPage1(button) {
  const vnode = m(
    'a',
    {
      className: 'nav--button tagTri',
      type: 'button',
      value: `${button}`,
      href: `?${button}=true`
    },
    [`#${button}`]
  )
  return vnode
}
export function createButtons(btns) {
  const vnode = m(
    'div',
    {
      className: 'tags',
    },
    btns
  )
  return vnode
}

export async function createPage1(request) {
  let photographers = await request
  let vnode = m(
    'main',
    { id: 'articles' },
    photographers.map((photographer) => {
      let btns = photographer.tags.map((x) => buttonPage1(x))
      return m('article', { className: 'main' }, [
        m(
          'a',
          {
            href: `?id=${photographer.id}`,
            className: 'main__link',
          },
          [createPortrait(photographer.portrait, photographer.name), createName(photographer.name)]
        ),
        m('p', { className: 'main__paragraph' }, [
          createCity(photographer.city, photographer.country),
          createTagline(photographer.tagline),
          createPrice(photographer.price),
          createButtons(btns),
        ]),
      ])
    })
  )
  return vnode
}
