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
  console.log(photographers);
  return photographers;
};

getPhotographer();
const photographersDisplay = async () => {
  let photographers = await getPhotographer();
  document.getElementById('articles').innerHTML = photographers
    .map((photographer) => {
      let btns = photographer.tags
        .map(
          (x) =>
            `<button class="nav--button" type="button"> ${x} <span class="sr-only">Tag</span> </button>`
        )
        .join('');

      console.log(btns);
      return `
        <article class="main"
          <a href="http://127.0.0.1:5500/photographer.html#${photographer.id}" class="main__link">
            <img src="./FishEyePhotos/Sample Photos/Photographers ID Photos/${photographer.portrait}" alt="Photo portrait du photographe" class="main__photo">
            <h2 class="main__name">${photographer.name}</h2>
          </a>
          <p class="main__paragraph">
            <p class="main__location">${photographer.city}, ${photographer.country}</p>
            <p class="main__philosophy">${photographer.tagline}</p>
            <p class="main__tarif"> <span class="tarif">${photographer.price}</span>€/ jour</p>
          </p>
          <div class="tags"> ${btns} </div>
        </article>
        `;
    })
    .join('');
};
photographersDisplay();
