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

const displayImage = async (buttonValue) => {
  // Les données du photographer choisit
  let photographer = await pickPhotographer();
  // les medias correspondant au photographer choisit
  let mediasorted = await sortimages(buttonValue);

  document.querySelector('.sectioncontainer').innerHTML = mediasorted
    .map((mediasDuPhotographe) => {
      if (Object.keys(mediasDuPhotographe).includes('image')) {
        return `
              <figure>
                        
                          <img
                            src="./FishEyePhotos/Sample Photos/${
                              photographer.name
                            }/${mediasDuPhotographe.image.replace('.jpg', '')}_resultat.jpg"
                            class="img-card"
                            alt="${mediasDuPhotographe.altTextMedia}"
                          />
                        
                        <figcaption>
                          <p class="textfig">${mediasDuPhotographe.title}</p>
                          <div class="heart">${
                            mediasDuPhotographe.likes
                          } <i class="fas fa-heart"></i></div>
                          </figure>
                  `;
      } else {
        return `
                <figure>
                  
                      <video class="img-card" muted  controls>
                      <source src="./FishEyePhotos/Sample Photos/${photographer.name}/${mediasDuPhotographe.video}" type="video/mp4" alt="${mediasDuPhotographe.altTextMedia}">

                    </video>
      
                      <figcaption>
           <p class="textfig">${mediasDuPhotographe.title}</p>
                        <div class="heart">${mediasDuPhotographe.likes}<i class="fas fa-heart"></i> </div>
                        </figure>
                `;
      }
    })
    .join('');
};
displayImage().then(async () => {
  const images = [...document.querySelectorAll('.img-card')];
  const images1 = [...document.querySelectorAll('img.img-card, source')];
  const gallery = images1.map((image) => {
    return `${image.src}`;
    // if (image.nodeName == 'IMG') {
    //   return `${image.src}`;
    // }
    // if (image.nodeName == 'VIDEO') {
    //   return `${image.currentSrc}`;
    // }
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
        let aka = dom.querySelector('img, video');
        console.log(aka);
        let i = gallery.findIndex((image) => image === aka.src);
        i = i + 1;
        if (i >= gallery.length) {
          i = 0;
        }
        console.log(i);
        dom.querySelector('.lightbox__container').innerHTML = `
        <img src="${gallery[i]}" alt="${image.alt}">
        `;

        console.log(i + 1);
      }
      function prev() {
        e.preventDefault();
        let aka = dom.querySelector('img' || 'video');
        let i = gallery.findIndex((image) => image === aka.src);
        i = i - 1;
        if (i < 0) {
          i = gallery.length - 1;
        }
        console.log(i);
        dom.querySelector('.lightbox__container').innerHTML = `
        <img src="${gallery[i]}" alt="${image.alt}">
        `;

        console.log(i + 1);
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
      // const img = document.createElement('img');
      // img.src = image.src;
      // while (lightbox.firstChild) {
      //   lightbox.removeChild(lightbox.firstChild);
      // }
      // lightbox.appendChild(img);
    });
  });
  // const lightbox = document.createElement('div');
  // lightbox.id = 'lightbox';
  // document.body.appendChild(lightbox);
  // const images = document.querySelectorAll('img');
  // lightbox.addEventListener('click', (e) => {
  //   if (e.target !== e.currentTarget) {
  //     return;
  //   }
  //   lightbox.classList.remove('active');
  // });
});
