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
  console.log(mediasorted);
  return mediasorted;
};

const displayImage = async (buttonValue) => {
  let photographer = await pickPhotographer();
  let mediasorted = await sortimages(buttonValue);

  document.querySelector('.sectioncontainer').innerHTML = mediasorted
    .map((mediasDuPhotographe) => {
      if (Object.keys(mediasDuPhotographe).includes('image')) {
        return `
              <figure>
                        <a href="./FishEyePhotos/Sample Photos/${photographer.name}/${
          mediasDuPhotographe.image
        }" class="  ">
                          <img
                            src="./FishEyePhotos/Sample Photos/${
                              photographer.name
                            }/${mediasDuPhotographe.image.replace('.jpg', '')}_resultat.jpg"
                            class="img-card"
                            alt="${mediasDuPhotographe.altTextMedia}"
                          />
                        </a>
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
                  <a href="./FishEyePhotos/Sample Photos/${photographer.name}/${mediasDuPhotographe.video}" class="  ">
                      <video class="img-card" muted  controls>
                      <source src="./FishEyePhotos/Sample Photos/${photographer.name}/${mediasDuPhotographe.video}" type="video/mp4" alt="${mediasDuPhotographe.altTextMedia}">

                    </video>
       </a>
                      <figcaption>
           <p class="textfig">${mediasDuPhotographe.title}</p>
                        <div class="heart">${mediasDuPhotographe.likes}<i class="fas fa-heart"></i> </div>
                        </figure>
                `;
      }
    })
    .join('');
};
displayImage();

//   class lightBox {
//     constructor(url) {
//       this.element = this.buildDOM(url);
//       this.loadImage(url);
//       document.body.appendChild(this.element);
//     }
//     loadImage(url) {
//       const image = new Image();
//       image.src = url;
//       const container = this.element.querySelector('.lightbox__container');
//       container.appendChild(image);
//     }
//     buildDOM(url) {
//       const dom = document.createElement('div');
//       dom.classList.add('lightbox');
//       dom.innerHTML = `
//       <button class="lightbox__close">Fermer</button>
//         <button class="lightbox__next">Suivant</button>
//         <button class="lightbox__prev">Précédent</button>

//         <div class="lightbox__container">

//         </div>
//       `;
//       return dom;
//     }
// function that return an object without using the keyword 'new'

function createImage(image) {
  return {
    image,
    lightbox() {},
  };
}

// function createImage(media) {
//   let imageContainer = document.querySelector('.sectioncontainer');
//   let mediaSorted = await sortMedia();
//   mediaSorted.forEach((med) => {
//     let cont = document.createElement('figure');
//     cont.classList.add('photo-card');

//     imageContainer.appendChild(cont);
//   });
// }
// class photographerCard {
//   constructor(photographer) {
//     this.name = photographer.name;
//     this.id = photographer.id;
//     this.photographerId = photographer.photographerId;
//     this.city = photographer.city;
//     this.country = photographer.country;
//     this.tags = photographer.tags;
//     this.tagline = photographer.tagline;
//     this.pricePhotographer = photographer.price;
//     this.portrait = photographer.portrait;
//   }

//   createCard() {
//     document.querySelector('.photographer').innerHTML = `
//     <div class="photographer-main">
//     <div class="photographer-profile">
//       <h1 class="photographer-profile--name">${photographer.name}</h1>
//       <p class="photographer-profile--location">${photographer.city}, ${photographer.country}</p>
//       <p class="photographer-profile--philosophy">${photographer.tagline}</p>
//     </div>
//     <button class="contact-me">Contactez-moi</button>
//   </div>
//   <div class="img">
//     <img
//       src="./FishEyePhotos/Sample Photos/Photographers ID Photos/${photographer.portrait}"
//       alt="Photo portrait du photographe"
//       class="photographer-profile--photo"
//     />
//   </div>
//       `;
//     //   articleContainer.appendChild(articlePhotographer);

//     //   let tagsDiv = document.createElement('div');

//     //   for (let i = 0; i < photographer.tags.length; i++) {
//     //     let btns = [];
//     //     let tag = document.createElement('button');
//     //     tag.setAttribute('type', 'button');
//     //     tag.classList.add('nav--button');
//     //     tag.innerHTML = `#${photographer.tags[i]} <span class="sr-only">Tag</span>`;
//     //     btns.push(tag);
//     //     tagsDiv.appendChild(tag);
//     //   }
//     //   document.querySelector('.photographer-profile').appendChild(tagsDiv);
//   }
// }
// class Page {
//   constructor(id){
// this.id = id;
//   }
//   recuperephotographe(){

// }
// class ImageMedia {
//   constructor(photographer, media) {
//     this.name = photographer.name;
//     this.image = media.image;
//     this.tagsImage = media.tags;
//     this.likes = media.likes;
//     this.date = media.date;
//     this.priceMedia = media.price;
//   }

//   createMedias() {
//     if (Object.keys(mediasDuPhotographe).includes('image')) {
//       return `
//               <figure>
//                         <a href="./FishEyePhotos/Sample Photos/${photographer.name}/${mediasDuPhotographe.image}" class="  ">
//                           <img
//                             src="./FishEyePhotos/Sample Photos/${photographer.name}/${mediasDuPhotographe.image}"
//                             class="img-card"
//                             alt=""
//                           />
//                         </a>
//                         <figcaption>
//                           <p class="textfig">${mediasDuPhotographe.title}</p>
//                           <div class="heart">${mediasDuPhotographe.likes} <i class="fas fa-heart"></i></div>
//                           </figure>
//                   `;
//     } else {
//       return `
//         <figure>
//                       <a href="./FishEyePhotos/Sample Photos/${photographer.name}/${mediasDuPhotographe.video}" class="  ">
//                       <video class="img-card" muted  controls>
//                       <source src="./FishEyePhotos/Sample Photos/${photographer.name}/${mediasDuPhotographe.video}" type="video/mp4">

//                     </video>
//                       </a>
//                       <figcaption>
//                         <p class="textfig">${mediasDuPhotographe.title}</p>
//                         <div class="heart">${mediasDuPhotographe.likes}<i class="fas fa-heart"></i> </div>
//                         </figure>
//                 `;
//     }
//   }
//   buildImage() {
//     document.querySelector('.sectioncontainer').innerHTML = this.createMedias();
//   }
//   lightbox(){

//   }
// }
// let photographerTest = pickPhotographer();
// let test = sortMedia();

// sortMedia().then(mediaSorted =>
//   mediaSorted.forEach((el) => {
//   let imageTest = new ImageMedia(photographerTest, el);
//   console.log(imageTest);
//   return imageTest.buildImage();)
// });
