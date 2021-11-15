import { m } from './millionseparated.js'

// Creation du compteur de like
export async function divLike() {
  const vnode = m('aside', { className: 'likesContainer', role: 'complimentary' }, [
    m('div', { className: 'totalLikes' }, [
      m('p', { className: 'totalLikes--number' }, undefined),
      m('p', { className: 'totalLikes--heart' }, [
        m('img', { src: './images/heart.svg', role: 'img', alt: 'coeur' }, undefined),
      ]),
    ]),
    m('div', { className: 'salaire' }, [m('p', { className: 'salaire--journalier' }, undefined)]),
  ])
  return vnode
}
