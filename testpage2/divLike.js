// Creation du compteur de like
async function divLike() {
  const vnode = m('div', { className: 'likesContainer' }, [
    m('div', { className: 'totalLikes' }, [
      m('p', { className: 'totalLikes--number' }, undefined),
      m('p', { className: 'totalLikes--heart' }, [
        m('img', { src: './images/heart.svg' }, undefined),
      ]),
    ]),
    m('div', { className: 'salaire' }, [m('p', { className: 'salaire--journalier' }, undefined)]),
  ]);
  return vnode;
}
