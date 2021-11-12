export let myInit = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
  mode: 'cors',
  cache: 'default',
};
export let myRequest = new Request('data.json', myInit);
export let page;
// recupère données
export const getRequest = async () => {
  let reponse = await fetch(myRequest);
  let data = await reponse.json();
  return data;
};
// return une array photographer
export const getPhotographer = async () => {
  let { photographers } = await getRequest();
  return photographers;
};
/**
 * RECUPERE TOUTE LES MEDIAS
 **/

export const getMedia = async () => {
  let { media } = await getRequest();
  return media;
};

/**
 * RECUPERE TOUTE LE PHOTOGRAPHE CLIQUE GRACE AUX PARAMS
 **/
export async function pickPhotographer() {
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

export async function sortMedia() {
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
