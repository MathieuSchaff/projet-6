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
let loaded = 0;
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

const buttonsArr = Array.from(document.querySelectorAll('.nav--button'));
buttonsArr.forEach((btn) =>
  btn.addEventListener('click', () => {
    if (btn.classList.contains('buttonClicked')) {
      document.getElementById('articles').innerHTML = '';

      btn.classList.remove('buttonClicked');
      loaded -= 1;
      photographersDisplay(sortedPhotographer());
    } else {
      document.getElementById('articles').innerHTML = '';
      btn.classList.add('buttonClicked');

      loaded += 1;
      photographersDisplay(sortedPhotographer());
    }
  })
);

const sortedPhotographer = async () => {
  let { photographers } = await getRequest();
  if (loaded == 0) {
    return photographers;
  } else {
    photographers.map((x) => (x.count = 0));

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

    return photographers;
  }
};

const photographersDisplay = async (request) => {
  let photographers = await request;
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
photographersDisplay(sortedPhotographer());
