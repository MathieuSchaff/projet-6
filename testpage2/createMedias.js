function createFigure(child1, child2) {
  const vnode = m('figure', undefined, [child1, child2]);
  return vnode;
}
function createImagePhotographer(name, image, altText) {
  const vnode = m(
    'img',
    {
      src: `./FishEyePhotos/Sample Photos/${name}/${image.replace('.jpg', '')}_resultat.jpg`,
      className: 'img-card',
      alt: `${altText}`,
    },
    undefined
  );
  return vnode;
}
function createVideo(child) {
  const vnode = m(
    'video',
    {
      className: 'img-card',
      muted: true,
      controls: true,
    },
    [child]
  );
  return vnode;
}
function createSource(name, video, alt) {
  const vnode = m(
    'source',
    {
      src: `./FishEyePhotos/Sample Photos/${name}/${video}`,
      className: 'img-card',
      type: 'video/mp4',
      alt: `${alt}`,
    },
    undefined
  );
  return vnode;
}
function createFigcaption(child1, child2) {
  const vnode = m('figcaption', undefined, [child1, child2]);
  return vnode;
}
function createFigcaptionText(child) {
  const vnode = m('p', { className: 'textfig' }, [child]);
  return vnode;
}
function createFigcaptionLike(child1) {
  const vnode = m('div', { className: 'heart' }, [
    m('div', { className: 'likes' }, [`${child1}`]),
    m('i', { className: 'fas fa-heart' }),
  ]);
  return vnode;
}
const displayImage2 = async (buttonValue) => {
  let photographer = await pickPhotographer();
  let mediasorted = await sortimages(buttonValue);
  const vnode = m(
    'section',
    { className: 'sectioncontainer' },
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
        );
      } else {
        return createFigure(
          createVideo(
            createSource(
              photographer.name,
              mediasDuPhotographe.video,
              mediasDuPhotographe.altTextMedia
            )
          ),
          createFigcaption(
            createFigcaptionText(mediasDuPhotographe.title),
            createFigcaptionLike(mediasDuPhotographe.likes)
          )
        );
      }
    })
  );
  return vnode;
};
