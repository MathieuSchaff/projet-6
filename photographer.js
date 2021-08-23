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

const hash = window.location.hash;

const createPhotographerPage = () => {
  const profilTagged = photographers.filter((t) => t.tags.includes(hash));
};
