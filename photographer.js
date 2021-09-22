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
let arrayPhotographers = [];
// recupère données
const getRequest = async () => {
  let reponse = await fetch(myRequest);
  let data = await reponse.json();
  return data;
};
// return une array photographer
const getPhotographer = async () => {
  let { photographers } = await getRequest();
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
    <a href="http://127.0.0.1:5500/photographer.html#${element.id}" class="main__link">
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
      createPhotographer(sortedPhotographer());
    } else {
      document.getElementById('articles').innerHTML = '';
      e.classList.add('buttonClicked');
      console.log(sortedPhotographer());
      createPhotographer(sortedPhotographer());
    }
  })
);
