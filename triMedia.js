// let myInit = {
//   method: 'GET',
//   headers: {
//     Accept: 'application/json',
//     'Content-type': 'application/json',
//   },
//   mode: 'cors',
//   cache: 'default',
// };
// let myRequest = new Request('data.json', myInit);
// let hash = window.location.hash;

// /**
//  * RECUPERE TOUTE LA DONNEE
//  **/

// const getRequest = async () => {
//   let reponse = await fetch(myRequest);
//   let data = await reponse.json();
//   return data;
// };

// /**
//  * RECUPERE LES PHOTOGRAPHES
//  **/

// const getPhotographer = async () => {
//   let { photographers } = await getRequest();
//   return photographers;
// };

// /**
//  * RECUPERE TOUTE LES MEDIAS
//  **/

// const getMedia = async () => {
//   let { media } = await getRequest();
//   return media;
// };

// /**
//  * RECUPERE TOUTE LE PHOTOGRAPHE CLIQUE GRACE AU HASH
//  **/
// async function pickPhotographer() {
//   let photographers = await getPhotographer();
//   for (let i = 0; i < photographers.length; i++) {
//     if (photographers[i].id == hash.slice(1)) {
//       return photographers[i];
//     }
//   }
// }

// /**
//  * RECUPERE LES MEDIAS DU PHOTOGRAPHE
//  **/

// async function sortMedia() {
//   let photographerMedia = await getMedia();
//   let mediaSorted = [];
//   photographerMedia.forEach((med) => {
//     if (med.photographerId == hash.slice(1)) {
//       mediaSorted.push(med);
//     }
//   });
//   return mediaSorted;
// }
