import { m } from './millionseparated.js'

export async function createRedirect() {
  const vnode = m(
    'a',
    {
      href: '#',
      alt: 'redirect to main content',
      className: 'redirect',
      ariaModal: 'true',
      ariaLabel: 'modal is loaded',
      role: 'dialog',
      ariaHidden: 'true',
      ariaExpanded: 'false',
    },
    ['Passer au contenu']
  )
  return vnode
}

export function createIndex(img) {
  const vnode = m('a', { className: 'header__logo', href: 'index.html' }, [img])
  return vnode
}
export function createImgHeader() {
  const vnode = m('img', {
    src: './logo/logo.svg',
    alt: "Fisheye page d'acceuil",
    role: 'img',
    tabindex: '0',
  })
  return vnode
}

export function createNavButtons(value) {
  let capitalize = value[0].toUpperCase() + value.slice(1)
  const vnode = m(
    'button',
    {
      id: `${value}`,
      className: 'nav--button',
      type: 'button',
      tabindex: '0',
      role: 'menuitem',
      value: `${value}`,
    },
    [`#${capitalize}`]
  )
  return vnode
}
export function createNav() {
  const vnode = m(
    'nav',
    {
      className: 'header__nav',
      ariaLabel: 'trier par catégorie',
      tabindex: '0',
      role: 'navigation',
    },
    [
      createNavButtons('portrait'),
      createNavButtons('art'),
      createNavButtons('fashion'),
      createNavButtons('architecture'),
      createNavButtons('travel'),
      createNavButtons('sport'),
      createNavButtons('animals'),
      createNavButtons('events'),
    ]
  )
  return vnode
}
export function createTitle() {
  const vnode = m(
    'h1',
    {
      className: 'header__title',
      tabindex: '0',
    },
    ['Nos photographes']
  )
  return vnode
}
export async function createHeaderPage1() {
  const vnode = m(
    'header',
    {
      className: 'header',
    },
    [createIndex(createImgHeader()), createNav(), createTitle()]
  )
  return vnode
}
export async function createHeaderPage2() {
  const vnode = m('header', { role: 'banner' }, [createIndex(createImgHeader())])
  return vnode
}
