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

async function getRequest() {
  let reponse = await fetch(myRequest);
  let data = await reponse.json();
  return data;
}
const mediaImage = [];
const mediaVideo = [];
let loaded = 0;
let btns = [];
let p;
async function getPhotographer() {
  let { photographers } = await getRequest();
  loaded = 1;
  p = Array.from(photographers);
  return photographers;
}

const parentChild = document.getElementById('articles');
async function createPhotographer() {
  let photographers;
  if (!loaded) {
    photographers = await getPhotographer();
  } else {
    photographers = await getSortedPhotographer();
  }

  console.log(photographers);
  photographers.forEach((element) => {
    console.log(element);
    let articlePhotographer = document.createElement('article');
    articlePhotographer.classList.add('main');
    articlePhotographer.innerHTML = `
    <a href="#" class="main__link">
      <img src="./FishEyePhotos/Sample Photos/Photographers ID Photos/${element.portrait}" alt="La moche" class="main__photo">
      <h2 class="main__name">${element.name}</h2>
    </a>
    <p class="main__paragraph">
      <p class="main__location">${element.city}, ${element.country}</p>
      <p class="main__philosophy">${element.tagline}</p>
      <p class="main__tarif"> <span class="tarif">${element.price}</span>€/ jour</p>
    </p>`;
    parentChild.appendChild(articlePhotographer);
    let tagsDiv = document.createElement('div');
    tagsDiv.classList.add('tags');
    for (let i = 0; i < element.tags.length; i++) {
      let tag = document.createElement('button');
      tag.setAttribute('type', 'button');
      tag.innerHTML = `#${element.tags[i]}`;
      btns.push(tag);
      tagsDiv.appendChild(tag);
    }
    articlePhotographer.appendChild(tagsDiv);
  });
}

const buttons = document.querySelectorAll('button');
const buttonsArr = Array.from(buttons);
buttonsArr.forEach((e) =>
  e.addEventListener('click', () => {
    if (e.classList.contains('buttonClicked')) {
      e.classList.remove('buttonClicked');
    } else {
      e.classList.add('buttonClicked');
      // p.photographers.sort(getSortedPhotographer(e.id));
    }
    console.log(e.id);
  })
);
createPhotographer();
// async function getSortedPhotographer(motFiltrant) {
//   let photographers = await getPhotographer();
//   for (let i = 0; i < photographers.length; i++) {
//     if (photographers[i].tags.includes(motFiltrant)) {
//       return 1;
//     } else {
//       return 0;
//     }
//   }
// }
// function compare(list, motFiltrant) {
//   for (let i = 0; i < photographers.length; i++) {
//     if (list.photographers.tags.includes(motFiltrant)) {
//       return 1;
//     } else {
//       return 0;
//     }
//   }
// }
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
