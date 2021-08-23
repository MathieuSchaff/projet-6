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
// let loaded = 0;
let arrayPhotographers = [];
// let array3;
// recupère données
const getRequest = async () => {
  let reponse = await fetch(myRequest);
  let data = await reponse.json();
  return data;
};
// return une array photographer
const getPhotographer = async () => {
  let { photographers } = await getRequest();
  // loaded = 1;
  arrayPhotographers = Array.from(photographers);
  return photographers;
};
getPhotographer();
// class Photographer {
//   constructor(name, id, city, country, tags, tagline, price, portrait) {
//     this.name = name;
//     this.id = id;
//     this.city = city;
//     this.country = country;
//     this.tags = tags;
//     this.tagline = tagline;
//     this.price = price;
//     this.portait = portrait;
//     this.count = Number;
//   }
//   createCard() {
//     let userCard = document.createElement('user-card');
//     document.getElementById('articles').appendChild(userCard);
//   }
// }

class UserCard extends HTMLElement {
  constructor(name, city, country, tags, tagline, price, portrait, id) {
    super();

    this.name = name;
    this.id = id;
    this.city = city;
    this.country = country;
    this.tags = tags;
    this.tagline = tagline;
    this.price = price;
    this.portrait = portrait;
    this.count = 0;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
    <style> 
    user-card {
      width: 300px;
      height: 450px;
      background: #fff;
      object-fit: cover;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .main {
      width: 300px;
      height: 450px;
      background: #fff;
      object-fit: cover;
      display: flex;
      flex-direction: column;
      align-items: center;
      &__photo {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        object-fit: cover;
      }
      &__link {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
      }
      &__name {
        line-height: 46px;
        font-weight: 400;
        font-size: 36px;
        text-align: center;
        color: #d3573c;
      }
      &__location {
        font-size: 13px;
        color: #901c1c;
        line-height: 16px;
        font-weight: 400;
        margin-bottom: 5px;
        &::first-letter {
          text-transform: uppercase;
        }
      }
      &__philosophy {
        font-size: 10px;
        line-height: 13px;
        margin-bottom: 5px;
        color: #000000;
      }
      &__tarif {
        color: #757575;
        font-family: DM Sans;
        font-size: 9px;
        font-style: normal;
        font-weight: 400;
        line-height: 12px;
        letter-spacing: 0em;
        text-align: center;
      }
    }
    .tags {
      // margin-top: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      button {
        margin-top: 10px;
      }
    }
</style>     
        <a href="#" class="main__link">
          <img alt="Photo portrait du photographe" class="main__photo">
          <h2 class="main__name"></h2>
        </a>
        <p class="main__paragraph">
          <p class="main__location"></p>
          <p class="main__philosophy"></p>
          <p class="main__tarif"> <span class="tarif"></span>€/ jour</p>
        </p>
        <div class="tags"> </div>`;
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.shadowRoot.querySelector('a').setAttribute('href', `photographer-page.html#` + this.name);
    this.shadowRoot.querySelector('img').src =
      './FishEyePhotos/Sample Photos/Photographers ID Photos/' + this.portrait;
    this.shadowRoot.querySelector('img').alt = `Portrait du photographe ` + this.name;
    this.shadowRoot.querySelector('h2').textContent = this.name;
    this.shadowRoot.querySelector('.main__location').textContent = this.city + ', ' + this.country;
    this.shadowRoot.querySelector('.main__philosophy').textContent = this.tagline;
    this.shadowRoot.querySelector('.tarif').textContent = this.price;
    this.shadowRoot.setAttribute('id', this.id);
    let akakou = this.shadowRoot.querySelector('.tags');
    for (let i = 0; i < this.tags.length; i++) {
      let tag = document.createElement('button');
      tag.setAttribute('type', 'button');
      tag.classList.add('nav--button');
      tag.innerHTML = `#${this.tags[i]} <span class="sr-only">Tag</span>`;

      akakou.appendChild(tag);
    }
  }
  static get observedAttributes() {
    return ['id', 'class'];
  }
  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'id') {
      this.id = newVal;
    }
  }
}
window.customElements.define('user-card', UserCard);

// // const newP = new Photographer();
// arrayPhotographers.forEach((el) => {
//   document
//     .getElementById('articles')
//     .appendChild(
//       new UserCard(el.name, el.id, el.city, el.country, el.tags, el.tagline, el.price, el.portrait)
//     );
// });

//
//    ANCIENNE METHODE
//
// const createPhotographer = async (method) => {
//   loaded = 1;
//   const articlesContainer = document.getElementById('articles');
//   let photographers = await method;
//   photographers.forEach((element) => {
//     let articlePhotographer = document.createElement('article');
//     articlePhotographer.classList.add('main');
//     articlePhotographer.innerHTML = `
//     <a href="#" class="main__link">
//       <img src="./FishEyePhotos/Sample Photos/Photographers ID Photos/${element.portrait}" alt="Photo portrait du photographe" class="main__photo">
//       <h2 class="main__name">${element.name}</h2>
//     </a>
//     <p class="main__paragraph">
//       <p class="main__location">${element.city}, ${element.country}</p>
//       <p class="main__philosophy">${element.tagline}</p>
//       <p class="main__tarif"> <span class="tarif">${element.price}</span>€/ jour</p>
//     </p>`;
//     articlesContainer.appendChild(articlePhotographer);
//     let tagsDiv = document.createElement('div');
//     tagsDiv.classList.add('tags');
//     for (let i = 0; i < element.tags.length; i++) {
//       let btns = [];
//       let tag = document.createElement('button');
//       tag.setAttribute('type', 'button');
//       tag.classList.add('nav--button');
//       tag.innerHTML = `#${element.tags[i]} <span class="sr-only">Tag</span>`;
//       btns.push(tag);
//       tagsDiv.appendChild(tag);
//     }
//     articlePhotographer.appendChild(tagsDiv);
//   });
// };
// createPhotographer(getPhotographer());
// const buttons = document.querySelectorAll('.nav--button');
// const buttonsArr = Array.from(buttons);
// buttonsArr.forEach((e) =>
//   e.addEventListener('click', () => {
//     if (e.classList.contains('buttonClicked')) {
//       document.getElementById('articles').innerHTML = '';

//       console.log(sortedPhotographer());
//       e.classList.remove('buttonClicked');
//       // createPhotographer(sortedPhotographer());
//     } else {
//       document.getElementById('articles').innerHTML = '';
//       e.classList.add('buttonClicked');
//       console.log(sortedPhotographer());
//       createPhotographer(sortedPhotographer());
//     }
//   })
// );
