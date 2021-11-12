import { getRequest } from './src/getData.js';

// Retour une array avec les photographer trié en fonction s'ils ont les tag
export async function sortArrayPhotographer(paramsATester) {
  //récupère tous les photographes
  let { photographers } = await getRequest();
  let params;
  if (paramsATester == null || paramsATester.toLocaleString() == '') {
    return photographers;
  } else {
    // récupère les params passés en url
    //nouvelle array si jamais il y a des URL / sinon inutiles
    let sortDisplayPhotographer = [];
    let uniqUsers = [];
    params = paramsATester;
    // pour chaqué clé, va boucler sur tous les photographer.
    // Si le photographer à la clé, alors ça push le photographer dans l'array
    // PB DE DOUBLONS
    const linksnav = document.querySelectorAll('nav button');
    for (const [key, value] of params.entries()) {
      for (let i = 0; i < linksnav.length; i++) {
        if (linksnav[i].value == key) {
          linksnav[i].classList.add('focused');
        }
      }
      for (let i = 0; i < photographers.length; i++) {
        if (photographers[i].tags.includes(key)) {
          sortDisplayPhotographer.push(photographers[i]);
        }
      }
    }
    uniqUsers = [
      ...sortDisplayPhotographer.reduce((map, obj) => map.set(obj.id, obj), new Map()).values(),
    ];
    return uniqUsers;
  }
}
