let myInit = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
  mode: 'cors',
  cache: 'default',
};
let myRequest = new Request('data.json', myInit);
const mediaImage = [];
const mediaVideo = [];
let loaded = 0;
let arrayPhotographers;
let array3;
// recupère données
const getRequest = async () => {
  let reponse = await fetch(myRequest);
  let data = await reponse.json();
  return data;
};
// return une array photographer
const getPhotographer = async () => {
  let { photographers } = await getRequest();
  loaded = 1;
  arrayPhotographers = Array.from(photographers);
  return photographers;
};

const createPhotographer = async (method) => {
  loaded = 1;
  const articlesContainer = document.getElementById('articles');
  let photographers = await method;
  photographers.forEach((element) => {
    let articlePhotographer = document.createElement('article');
    articlePhotographer.classList.add('main');
    articlePhotographer.innerHTML = `
    <a href="#" class="main__link">
      <img src="./FishEyePhotos/Sample Photos/Photographers ID Photos/${element.portrait}" alt="Photo portrait du photographe" class="main__photo">
      <h2 class="main__name">${element.name}</h2>
    </a>
    <p class="main__paragraph">
      <p class="main__location">${element.city}, ${element.country}</p>
      <p class="main__philosophy">${element.tagline}</p>
      <p class="main__tarif"> <span class="tarif">${element.price}</span>€/ jour</p>
    </p>`;
    articlesContainer.appendChild(articlePhotographer);
    let tagsDiv = document.createElement('div');
    tagsDiv.classList.add('tags');
    for (let i = 0; i < element.tags.length; i++) {
      let btns = [];
      let tag = document.createElement('button');
      tag.setAttribute('type', 'button');
      tag.classList.add('nav--button');
      tag.innerHTML = `#${element.tags[i]} <span class="sr-only">Tag</span>`;
      btns.push(tag);
      tagsDiv.appendChild(tag);
    }
    articlePhotographer.appendChild(tagsDiv);
  });
};
createPhotographer(getPhotographer());
const buttons = document.querySelectorAll('.nav--button');
const buttonsArr = Array.from(buttons);
buttonsArr.forEach((e) =>
  e.addEventListener('click', () => {
    if (e.classList.contains('buttonClicked')) {
      document.getElementById('articles').innerHTML = '';

      console.log(sortedPhotographer());
      e.classList.remove('buttonClicked');
      // createPhotographer(sortedPhotographer());
    } else {
      document.getElementById('articles').innerHTML = '';
      e.classList.add('buttonClicked');
      console.log(sortedPhotographer());
      // createPhotographer(sortedPhotographer());
    }
  })
);
// quand je clique sur un bouton, si le bouton correspond a un tag alors cela incrémente le count de 1 sur l'article en question
// doit return la nouvelle array crée à passer en
const sortedPhotographer = async () => {
  let { photographers } = await getRequest();
  photographers.map((x) => (x.count = 0));

  // photographers.map((x) => ({
  //   x.count = 0;
  //   if(x.tags.includes(e.id)){
  //     x.count += 1;
  //   }else {
  //     x.count = 0;
  //   }

  // }))
  // photographers.forEach((el) => {
  //   if (el.tags.includes(e.id)) {
  //     el.count = 0;
  //     if (el.tags.includes(e.id)) {
  //       el.count += 1;
  //     } else {
  //       el.count = 0;
  //     }
  //   }
  // });
  // pour tous les boutons coché, j'ajoute 1 a count
  for (let i = 0; i < buttonsArr.length; i++) {
    for (let i = 0; i < photographers.length; i++) {
      // console.log(document.querySelector('.buttonClicked').id);
      if (photographers[i].tags.includes(document.querySelector('.buttonClicked').id)) {
        photographers[i].count += 1;
      } else if (
        !photographers[i].tags.includes(document.querySelector('.buttonClicked').id) &&
        photographers[i].count > 0
      ) {
        photographers[i].count -= 1;
      } else {
        photographers[i].count = 0;
      }
    }
  }

  photographers.sort((a, b) => {
    return b.count - a.count;
  });
  return console.log(photographers);
  // return photographers;
};
// function getSortedPhotographer() {
//   for (let i = 0; i < arrayPhotographers.length; i++) {
//     if (arrayPhotographers[i].tags.includes('portrait')) {
//       return 1;
//     } else {
//       return 0;
//     }
//   }
// }
// arrayPhotographers.sort(function getSortedPhotographer() {
//   for (let i = 0; i < arrayPhotographers.length; i++) {
//     if (arrayPhotographers[i].tags.includes('portrait')) {
//       return console.log(arrayPhotographers[i] + arrayPhotographers[i].tags.includes('portrait'));
//     } else {
//       return console.log(arrayPhotographers[i] + arrayPhotographers[i].tags.includes('portrait'));
//     }
//   }
// });

// p.sort();
// const search = function (list, search) {
//   // if (
//   return list.filter((el) => el.tags.includes(search));
// ) {
//   return 1;
// } else {
//   return 0;
// }
// };
// search(p, 'portrait');
// const sorted = p.sort((a, b) => {
//   if (a.tags.includes('portrait')) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(sorted);
// const comparator = (a, b) => {
//   return a.name.length - b.name.length;
// };
// console.log(p.sort(comparator));
// function sort() {
//   p.map((x) => {
//     if (x.tags.includes('portrait')) {
//       x.push('count');
//     }
//   });
// }

// for (let i = 0; i < arrayPhotographers.length; i++) {
//   console.log(arrayPhotographers[i].tags);
// }

// let count = 'count';
// function sort() {
//   arrayPhotographers.forEach((element) => {
//     if (element.tags.includes(buttonId)) {
//       count += 1;
//     }
//   });
// }
