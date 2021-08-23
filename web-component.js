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

class UserCard extends HTMLElement {
  constructor(name, city, country, tags, tagline, price, portrait, id) {
    super();
    this.name = name;
    this.city = city;
    this.country = country;
    this.tags = tags;
    this.tagline = tagline;
    this.price = price;
    this.portrait = portrait;
    this.id = id;
    this.count = 0;
  }
  connectedCallback() {
    this.innerHTML = `
    
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
    this.querySelector('a').setAttribute('href', `photographer-page.html#` + this.name);
    this.querySelector('img').src =
      './FishEyePhotos/Sample Photos/Photographers ID Photos/' + this.portrait;
    this.querySelector('img').alt = `Portrait du photographe ` + this.name;
    this.querySelector('h2').textContent = this.name;
    this.querySelector('.main__location').textContent = this.city + ', ' + this.country;
    this.querySelector('.main__philosophy').textContent = this.tagline;
    this.querySelector('.tarif').textContent = this.price;
    this.setAttribute('id', this.id);
    let akakou = this.querySelector('.tags');
    for (let i = 0; i < this.tags.length; i++) {
      let tag = document.createElement('button');
      tag.setAttribute('type', 'button');
      tag.classList.add('nav--button');
      tag.innerHTML = `#${this.tags[i]} <span class="sr-only">Tag</span>`;

      akakou.appendChild(tag);
    }
  }
}
window.customElements.define('user-card', UserCard);

class Photographer {
  constructor(name, city, country, tags, tagline, price, portrait, id) {
    this.name = name;
    this.city = city;
    this.country = country;
    this.tags = tags;
    this.tagline = tagline;
    this.price = price;
    this.portrait = portrait;
    this.id = id;
    this.count = 0;
    // this.tag = 'user-card2';
    // this.props = {
    //   id: id,
    // };
    // this.children = [
    //   (this.name = name),
    //   (this.city = city),
    //   (this.country = country),
    //   (this.tags = tags),
    //   (this.tagline = tagline),
    //   (this.price = price),
    //   (this.portrait = portrait),
    //   (this.count = 0),
    // ];
  }
  createCard() {
    const articlesContainer = document.getElementById('articles');
    articlesContainer.appendChild(
      new UserCard(
        this.name,
        this.city,
        this.country,
        this.tags,
        this.tagline,
        this.price,
        this.portrait,
        this.id
      )
    );
  }
}

const createPhotographers = async () => {
  let photographers = await getPhotographer();
  photographers.forEach((element) => {
    arrayPhotographers.push(
      new Photographer(
        element.name,
        element.city,
        element.country,
        element.tags,
        element.tagline,
        element.price,
        element.portrait,
        element.id
      )
    );
  });
  return arrayPhotographers;
};
createPhotographers().then(function (res) {
  console.log(res);
  res.forEach((el) => {
    el.createCard();
  });
});

//
//        TEST DE CLASSE CREATEPAGE
//
// class CreatePage {
//   constructor() {
//     this.loc = window.location;
//   }
//   async GetData() {
//     let reponse = await fetch(myRequest);
//     let data = await reponse.json();
//     return data;
//   }
//   async getPhotographers() {
//     let { photographers } = await this.GetData();
//     return photographers;
//   }
//   async getMedia() {
//     let { media } = await this.GetData();
//     return media;
//   }
//   async createPage1() {
//     let photographers = await this.getPhotographers();
//     photographers.forEach((element) => {
//       arrayPhotographers.push(
//         new Photographer(
//           element.name,
//           element.city,
//           element.country,
//           element.tags,
//           element.tagline,
//           element.price,
//           element.portrait,
//           element.id
//         )
//       );
//     });
//   }
// }

// // TEST VIRTUAL DOM
// class UserCard2 extends HTMLElement {
//   constructor() {
//     super();
//   }
// }
// window.customElements.define('user-card2', UserCard2);

// const createElement = (vnode) => {
//   if (typeof vnode === 'string') {
//     return document.createTextNode(vnode);
//   }

//   const el = document.createElement(vnode.tag);

//   if (vnode.props) {
//     Object.entries(vnode.props).forEach(([nameValue, value]) => {
//       el.setAttribute(nameValue, value);
//     });
//   }

//   if (vnode.children) {
//     vnode.children.forEach((child) => {
//       // if(nameValue == 'name'){

//       // }
//       el.appendChild(createElement(child));
//     });
//   }

//   return el;
// };

// class City extends HTMLElement {}
// class Country extends HTMLElement {}
// class Name extends HTMLElement {}
// class Portrait extends HTMLElement {}
// class Price extends HTMLElement {}
// class Tagline extends HTMLElement {}
// class Tag extends HTMLElement {}
// class City extends HTMLElement {}
// window.customElements.define('city', City);
// window.customElements.define('country', Country);
// window.customElements.define('name', Name);
// window.customElements.define('price', Price);
// window.customElements.define('tagline', Tagline);
// window.customElements.define('user-card', Tag);
// window.customElements.define('user-card', City);

// const el = (tag, props, children) => ({
//   tag,
//   props,
//   children,
// });
// arrayPhotographers.forEach((el) => {
//   createElement(
//     el(el.tag, el.props, [
//       el.name,
//       el.city,
//       el.country,
//       el.tags,
//       el.tagline,
//       el.price,
//       el.portrait,
//       el.id,
//     ])
//   );
// });

// createElement(el('div', { id: 'app' }, ['Hello World']));
// Is the same as: <div id="app">Hello World</div>
