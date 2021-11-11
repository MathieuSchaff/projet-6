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
let page;
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
/**
 * RECUPERE TOUTE LES MEDIAS
 **/

const getMedia = async () => {
  let { media } = await getRequest();
  return media;
};

/**
 * RECUPERE TOUTE LE PHOTOGRAPHE CLIQUE GRACE AU HASH
 **/
async function pickPhotographer() {
  let photographers = await getPhotographer();
  let searchParams = new URLSearchParams(window.location.search);
  for (let i = 0; i < photographers.length; i++) {
    if (photographers[i].id == searchParams.get('id')) {
      return photographers[i];
    }
  }
}

/**
 * RECUPERE LES MEDIAS DU PHOTOGRAPHE
 **/

async function sortMedia() {
  let photographerMedia = await getMedia();
  let searchParams = new URLSearchParams(window.location.search);
  let mediaSorted = [];
  photographerMedia.forEach((med) => {
    if (med.photographerId == searchParams.get('id')) {
      mediaSorted.push(med);
    }
  });
  return mediaSorted;
}
