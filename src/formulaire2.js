import { m } from './millionseparated.js'

export function createFormDataDiv(label, input) {
  const vnode = m(
    'div',
    {
      className: 'formData',
    },
    [label, input]
  )
  return vnode
}
export function createLabel(type, texte) {
  const vnode = m(
    'label',
    {
      for: `${type}`,
    },
    [`${texte}`]
  )
  return vnode
}
export function createInputForm(type, id, ariaLabel, secclass) {
  const vnode = m(
    'input',
    {
      className: `text-control ${secclass}`,
      type: `${type}`,
      id: `${id}`,
      name: `${id}`,
      ariaLabel: `${ariaLabel}`,
      required: 'true',
    },
    undefined
  )
  return vnode
}
export function createInputTextArea(type, id, ariaLabel, secclass) {
  const vnode = m(
    'textarea',
    {
      className: `text-control ${secclass}`,
      // type: `${type}`,
      id: `${id}`,
      ariaLabel: `${ariaLabel}`,
      required: 'true',
    },
    undefined
  )
  return vnode
}
export function submitForm() {
  const vnode = m(
    'input',
    {
      className: 'submit',
      value: 'Envoyer',
      ariaLabel: 'send',
      type: 'submit',
    },
    undefined
  )
  return vnode
}
export function createForm() {
  const vnode = m(
    'form',
    {
      id: 'form',
      role: 'form',
      name: 'fisheye',
    },
    [
      createFormDataDiv(createLabel('first', 'Prénom'), createInputForm('text', 'first', 'prénom')),
      createFormDataDiv(
        createLabel('last', 'Nom'),
        createInputForm('text', 'last', 'nom de famille')
      ),
      createFormDataDiv(createLabel('email', 'E-mail'), createInputForm('email', 'email', 'email')),
      createFormDataDiv(
        createLabel('comment', 'Votre message'),
        createInputTextArea('textarea', 'comment', 'commentaire', 'comment')
      ),
      submitForm(),
    ]
  )
  return vnode
}
export function headerModalWrapper() {
  const vnode = m(
    'header',
    {
      id: 'form-header',
    },
    [
      m('h1', { id: 'contact__title' }, [
        'Contactez moi',
        m('span', { className: 'contact-name' }, ['Mimi Keel']),
      ]),

      m(
        'a',
        { href: '', id: 'closeButton', className: 'close', ariaLabel: 'Fermer le formulaire' },
        [m('img', { src: 'logo/Vector (2).svg', alt: 'cross' }, undefined)]
      ),
    ]
  )
  return vnode
}
export function modalWrapper() {
  const vnode = m(
    'div',
    {
      className: 'modal--wrapper',
    },
    [headerModalWrapper(), createForm()]
  )
  return vnode
}
export function formWrapper() {
  const vnode = m(
    'aside',
    {
      className: 'contact-modal',
      // role: 'dialog',
      // ariaModal: 'false',
      ariaHidden: 'true',
      ariaLabelledby: 'contact__title',
      style: 'display: none',
    },
    [modalWrapper()]
  )
  return vnode
}
