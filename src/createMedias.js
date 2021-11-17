import { pickPhotographer } from './getData.js'

import { m } from './millionseparated.js'

import { sortimages } from './sortimages.js'

export function createFigure(child1, child2) {
  const vnode = m('figure', undefined, [child1, child2])
  return vnode
}
export function createImagePhotographer(name, image, altText) {
  const vnode = m(
    'img',
    {
      src: `./FishEyePhotos/Sample Photos/${name}/${image.replace('.jpg', '')}_resultat.jpg`,
      className: 'img-card',
      alt: `${altText}`,
      tabIndex: '0',
    },
    undefined
  )
  return vnode
}
export function createVideo(child, alt) {
  const vnode = m(
    'video',
    {
      className: 'img-card',
      muted: true,
      tabIndex: '0',
      title: `${alt}`,
    },
    [child]
  )
  return vnode
}
export function createSource(name, video, alt) {
  const vnode = m(
    'source',
    {
      src: `./FishEyePhotos/Sample Photos/${name}/${video}`,
      className: 'img-card',
      type: 'video/mp4',
      alt: `${alt}`,
    },
    undefined
  )
  return vnode
}
export function createFigcaption(child1, child2) {
  const vnode = m('figcaption', undefined, [child1, child2])
  return vnode
}
export function createFigcaptionText(child) {
  const vnode = m('p', { className: 'textfig' }, [child])
  return vnode
}
export function createFigcaptionLike(child1) {
  const vnode = m(
    'button',
    { className: 'heart', tabIndex: '0', ariaLabel: `likes }` },
    [m('div', { className: 'likes' }, [`${child1}`]), m('i', { className: 'fas fa-heart' })]
  )
  return vnode
}
export const displayImage2 = async (buttonValue) => {
  let photographer = await pickPhotographer()
  let mediasorted = await sortimages(buttonValue)
  const vnode = m(
    'main',
    { className: 'sectioncontainer', role: 'main' },
    mediasorted.map((mediasDuPhotographe) => {
      if (Object.keys(mediasDuPhotographe).includes('image')) {
        return createFigure(
          createImagePhotographer(
            photographer.name,
            mediasDuPhotographe.image,
            mediasDuPhotographe.altTextMedia
          ),
          createFigcaption(
            createFigcaptionText(mediasDuPhotographe.title),
            createFigcaptionLike(mediasDuPhotographe.likes)
          )
        )
      } else {
        return createFigure(
          createVideo(
            createSource(
              photographer.name,
              mediasDuPhotographe.video,
              mediasDuPhotographe.altTextMedia
            ),
            mediasDuPhotographe.altTextMedia
          ),
          createFigcaption(
            createFigcaptionText(mediasDuPhotographe.title),
            createFigcaptionLike(mediasDuPhotographe.likes)
          )
        )
      }
    })
  )
  return vnode
}
