import { m } from './millionseparated.js'

export function ordreWrapperButton(button1, ul) {
  const vnode = m(
    'div',
    {
      id: 'Order-wrapper',
    },
    [button1, ul]
  )
  return vnode
}
export function spanSort() {
  const vnode = m(
    'span',
    {
      id: 'Order_by',
    },
    ['Trier par']
  )
  return vnode
}
export function buttonSort() {
  const vnode = m(
    'button',
    {
      id: 'sort_button',
      role: 'button',
      ariaHasPopup: 'listbox',
      'aria-labelledby': 'Order_by sort_button',
      ariaExpanded: 'false',
      className: 'choose',
      value: 'popularité',
    },
    [
      m('span', { className: 'sortBy' }, [`Popularité`]),
      m('i', { className: 'chevron fas fa-chevron-up', ariaHidden: 'true' }, undefined),
    ]
  )
  return vnode
}
export function ulSort() {
  const vnode = m(
    'ul',
    {
      id: 'tri',
      role: 'listbox',
      ariaLabelledby: 'Order_by',
      tabIndex: '-1',
      style: 'display: none',
    },
    [
      m('li', { id: 'pop', className: 'choose', role: 'option' }, [`Popularité`]),
      m('li', { className: 'chevronRotate' }, [
        m('i', { className: 'chevron fas fa-chevron-up', ariaHidden: 'true' }, undefined),
      ]),
      m('li', { className: 'dropdown-divider', role: 'separator', tabIndex: '-1' }, undefined),
      m('li', { id: 'titre', className: 'choose', role: 'option' }, [`Titre`]),
      m('li', { className: 'dropdown-divider', role: 'separator', tabIndex: '-1' }, undefined),
      m('li', { id: 'date', className: 'choose', role: 'option' }, [`Date`]),
    ]
  )
  return vnode
}
export async function createSortButton() {
  const vnode = m(
    'div',
    {
      className: 'sort',
    },
    [spanSort(), ordreWrapperButton(buttonSort(), ulSort())]
  )
  return vnode
}
