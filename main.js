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

//  CREATION DE PAGE

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
//       const m = (tag, props, children) => ({
//         tag,
//         props,
//         children,
//       });

//       const el = createElement(m(element));
//       document.querySelector('#articles').appendChild(el);
//     });
//   }
// }
const createElement = (vnode) => {
  if (typeof vnode === 'string') {
    return document.createTextNode(vnode); // Catch if vnode is just text
  }
  const el = document.createElement(vnode.tag);
  if (vnode.props) {
    Object.entries(vnode.props).forEach(([name, value]) => {
      el[name] = value;
    });
  }
  if (vnode.children) {
    vnode.children.forEach((child) => {
      el.appendChild(createElement(child));
    });
  }
  return el;
};
const m = (tag, props, children) => ({
  tag,
  props,
  children,
});
function createName() {
  const vnode = m('h2', { class: 'main__name' }, [`${element.name}`]);
  return vnode;
}
function createCity() {
  const vnode = m('p', { class: 'main__location' }, [`${element.city}, ${element.country}`]);
  return vnode;
}

function createTagline() {
  const vnode = m('p', { class: 'main__philosophy' }, [`${element.tagline}`]);
  return vnode;
}
function createPrice() {
  const vnode = m('p', { class: 'main__tarif' }, [`${element.price}`]);
  return vnode;
}
function createTags() {
  const vnode = m('button', { class: 'nav--button', type: 'button', onclick: 'sortPhotographer' }, [
    `${element.name}`,
  ]);
  return vnode;
}
function createPortrait() {
  const vnode = m(
    'img',
    {
      class: 'main__photo',
      src: `./FishEyePhotos/Sample Photos/Photographers ID Photos/${element.portrait}`,
    },
    undefined
  );
  return vnode;
}
const createPage2 = async () => {
  let photographers = await getPhotographer();
  photographers.forEach((element) => {
    let arrayElement = Array.from(element);
    const elem = document.createElement('div');
    arrayElement.forEach((elementObject) => {
      let vnode;
      function objet() {
        if (elementObject === element.portrait) {
          vnode = m(createPortrait);
          return createElement(vnode);
        }
        if (elementObject === element.tags) {
          vnode = m(createPortrait);
          return createElement(vnode);
        }
        if (elementObject === element.tagline) {
          vnode = m(createPortrait);
          return createElement(vnode);
        }
        if (elementObject === element.price) {
          vnode = m(createPortrait);
          return createElement(vnode);
        }
        if (elementObject === element.name) {
          vnode = m(createPortrait);
          return createElement(vnode);
        }
        if (elementObject === element.city) {
          vnode = m(createPortrait);
          return createElement(vnode);
        }
        if (elementObject === element.portrait) {
          vnode = m(createPortrait);
          return createElement(vnode);
        }
      }

      elem.appendChild(objet);
    });

    document.querySelector('#articles').appendChild(elem);
  });
};
createPage2();
