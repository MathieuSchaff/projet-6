const sortimages = async (buttonValue) => {
  let mediasorted = await sortMedia();

  switch (buttonValue) {
    case 'Date':
      mediasorted.forEach((x) => {
        let date = x.date.split('-');
        let date1 = date.join(' ');
        let date2 = new Date(date1);
        x.date = date2;
      });
      mediasorted.sort((a, b) => {
        return b.date - a.date;
      });

      break;
    case 'Popularité':
      mediasorted.sort((a, b) => {
        return b.likes - a.likes;
      });
      break;
    case 'Titre':
      mediasorted.sort(function (a, b) {
        return a.title.localeCompare(b.title);
      });
      break;
    default:
      mediasorted.sort((a, b) => {
        return b.likes - a.likes;
      });
  }
  return mediasorted;
};

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
      src: `src="./FishEyePhotos/Sample Photos/${name}/${video}`,
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
  const vnode = m('div', { className: 'heart' }, [child1, m('i', { className: 'fas fa-heart' })]);
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
  console.log(vnode);
  return vnode;
};
const lightboxFunction = () => {
  const images = [...document.querySelectorAll('.img-card')];
  const images1 = [...document.querySelectorAll('img.img-card, source')];
  const gallery = images1.map((image) => {
    return `${image.src}`;
  });
  console.log(gallery);
  console.log(images);
  images.forEach((image) => {
    image.addEventListener('click', (e) => {
      e.preventDefault();
      const dom = document.createElement('div');
      dom.classList.add('lightbox');
      if (image.nodeName == 'IMG') {
        dom.innerHTML = `
      <button class="lightbox__close">Fermer</button>
        <button class="lightbox__next">Suivant</button>
        <button class="lightbox__prev">Précédent</button>

        <div class="lightbox__container">
         <img src="${image.src}" alt="${image.alt}">
        </div>
      `;
      } else {
        image.pause();
        dom.innerHTML = `
        <button class="lightbox__close">Fermer</button>
        <button class="lightbox__next">Suivant</button>
        <button class="lightbox__prev">Précédent</button>

        <div class="lightbox__container">
        <video class="img-card" muted  controls>
        <source src="${image.currentSrc}" type="video/mp4" alt="${image.alt}">

        </video>
        </div>
      `;
      }
      function closeLightbox(element) {
        console.log('clické sur close');
        dom.classList.add('fadeOut');
        window.setTimeout(() => {
          dom.remove();
        }, 500);
        // dom.removeEventListener('click', closeLightbox);
      }
      function next() {
        e.preventDefault();
        // RECUPERE LE MEDIA DANS LA LIGHTBOX ACTUELLEMENT
        let mediaInlightbox = dom.querySelector('img, video');
        if (mediaInlightbox.currentSrc.endsWith('mp4')) {
          mediaInlightbox = mediaInlightbox.querySelector('source');
        }
        let i = gallery.findIndex((urlMedia) => urlMedia === mediaInlightbox.src);
        i = i + 1;
        if (i >= gallery.length) {
          i = 0;
        }
        if (gallery[i].endsWith('mp4')) {
          console.log('ceci est une vidéo');
          dom.querySelector('.lightbox__container').innerHTML = `
        <video class="img-card" muted  controls>
        <source src="${gallery[i]}" type="video/mp4" alt="${image.alt}">

        </video>
        `;
        } else {
          dom.querySelector('.lightbox__container').innerHTML = `
        <img src="${gallery[i]}" alt="${image.alt}">
        `;
        }
      }
      function prev() {
        e.preventDefault();
        // RECUPERE LE MEDIA DANS LA LIGHTBOX ACTUELLEMENT
        let mediaInlightbox = dom.querySelector('img, video');
        if (mediaInlightbox.currentSrc.endsWith('mp4')) {
          mediaInlightbox = mediaInlightbox.querySelector('source');
        }
        let i = gallery.findIndex((urlMedia) => urlMedia === mediaInlightbox.src);
        i = i - 1;
        if (i < 0) {
          i = gallery.length - 1;
        }
        if (gallery[i].endsWith('mp4')) {
          console.log('ceci est une vidéo');
          dom.querySelector('.lightbox__container').innerHTML = `
        <video class="img-card" muted  controls>
        <source src="${gallery[i]}" type="video/mp4" alt="${image.alt}">

        </video>
        `;
        } else {
          dom.querySelector('.lightbox__container').innerHTML = `
        <img src="${gallery[i]}" alt="${image.alt}">
        `;
        }
      }
      dom.querySelector('.lightbox__close').addEventListener('click', closeLightbox);
      dom.querySelector('.lightbox__prev').addEventListener('click', prev);
      dom.querySelector('.lightbox__next').addEventListener('click', next);
      window.addEventListener('keydown', function (e) {
        if (dom !== null && e.key === 'Escape') {
          closeLightbox();
        }
        if (dom !== null && e.key === 'ArrowLeft') {
          prev();
        }
        if (dom !== null && e.key === 'ArrowRight') {
          next();
        }
      });
      document.body.appendChild(dom);
    });
  });
};

displayImage2()
  .then((res) => {
    page = createElement(res);
    console.log(page);
    document.querySelector('.mainContent').insertAdjacentElement('afterEnd', page);
  })
  .then(async () => {
    lightboxFunction();
  });
