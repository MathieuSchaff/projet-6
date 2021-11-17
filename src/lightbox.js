export const lightboxFunction = () => {
  const images = [...document.querySelectorAll('.img-card')]
  const images1 = [...document.querySelectorAll('img.img-card, source')]
  // const video = document.querySelector('video');
  // video.addEventListener('click', (e) => {
  //   e.preventDefault();
  // });
  const gallery = images1.map((image) => {
    return `${image.src}`
  })
  images.forEach((image) => {
    image.addEventListener('click', (e) => {
      let dom = document.createElement('div')
      dom.classList.add('lightbox')
      dom.setAttribute('role', 'dialog')
      dom.setAttribute('ariaLabel', 'image agrandie')
      dom.setAttribute('title', 'image agrandie')
      if (image.nodeName == 'IMG') {
        dom.innerHTML = `
        <button class="lightbox__close" aria-label="fermer" tabindex="1"><span class="sr-only"> Fermer </span></button>
          <button class="lightbox__next"  aria-label="suivant" tabindex="1" ><span class="sr-only"> Suivant </span></button>
          <button class="lightbox__prev" aria-label="précédent" tabindex="1"><span class="sr-only"> Précédent </span></button>
  
          <div class="lightbox__container">
           <img src="${image.src}" alt="${image.alt}"  class="lightboxImg" tabindex="1">
          </div>
        `
      } else {
       
        dom.innerHTML = `
          <button class="lightbox__close" aria-label="fermer" tabindex="1"><span class="sr-only"> Fermer </span></button>
          <button class="lightbox__next"  aria-label="suivant" tabindex="1"><span class="sr-only"> Suivant </span></button>
          <button class="lightbox__prev" aria-label="précédent" tabindex="1"><span class="sr-only"> Précédent </span></button>
  
          <div class="lightbox__container" >
          <video class="lightboxImg"  tabindex="1" autoplay loop  controls>
          <source src="${image.currentSrc}" type="video/mp4" alt="${image.alt}">
  
          </video>
          </div>
        `
      }

      function closeLightbox(element) {
        dom.classList.add('fadeOut')
        window.setTimeout(() => {
          dom.remove()
          dom = null
        }, 500)
      }
      function next() {
        e.preventDefault()
        // RECUPERE LE MEDIA DANS LA LIGHTBOX ACTUELLEMENT
        let mediaInlightbox = dom.querySelector('img, video')
        if (mediaInlightbox.currentSrc.endsWith('mp4')) {
          mediaInlightbox = mediaInlightbox.querySelector('source')
        }
        let i = gallery.findIndex((urlMedia) => urlMedia === mediaInlightbox.src)
        i = i + 1
        if (i >= gallery.length) {
          i = 0
        }
        if (gallery[i].endsWith('mp4')) {
          dom.querySelector('.lightbox__container').innerHTML = `
          <video class="lightboxImg"   tabindex="1" autoplay loop  controls>
          <source src="${gallery[i]}" type="video/mp4" alt="Image agrandie">
  
          </video>
          `
        } else {
          dom.querySelector('.lightbox__container').innerHTML = `
          <img src="${gallery[i]}" class="lightboxImg"   tabindex="1" alt="Image agrandie">
          `
        }
      }
      function prev() {
        e.preventDefault()
        // RECUPERE LE MEDIA DANS LA LIGHTBOX ACTUELLEMENT
        let mediaInlightbox = dom.querySelector('img, video')
        if (mediaInlightbox.currentSrc.endsWith('mp4')) {
          mediaInlightbox = mediaInlightbox.querySelector('source')
        }
        let i = gallery.findIndex((urlMedia) => urlMedia === mediaInlightbox.src)
        i = i - 1
        if (i < 0) {
          i = gallery.length - 1
        }
        if (gallery[i].endsWith('mp4')) {
          dom.querySelector('.lightbox__container').innerHTML = `
          <video class="lightboxImg"  tabindex="1"  autoplay loop  controls>
          <source src="${gallery[i]}" type="video/mp4" alt="${image.alt}">
  
          </video>
          `
        } else {
          dom.querySelector('.lightbox__container').innerHTML = `
          <img src="${gallery[i]}"  tabindex="1" class="lightboxImg" alt="${image.alt}">
          `
        }
      }

      dom.querySelector('.lightbox__close').addEventListener('click', closeLightbox)
      dom.querySelector('.lightbox__prev').addEventListener('click', prev)
      dom.querySelector('.lightbox__next').addEventListener('click', next)
      window.addEventListener('keydown', function (e) {
        if (dom !== null && e.key === 'Escape') {
          closeLightbox()
        }
        if (dom !== null && e.key === 'ArrowLeft') {
          prev()
        }
        if (dom !== null && e.key === 'ArrowRight') {
          next()
        }
      })
      document.body.appendChild(dom)
      document.querySelector('.lightbox__close').focus()
    })
  })
}
