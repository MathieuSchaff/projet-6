import { createPageDuPhotographe } from './init.js';
import { createPagePhotographers } from './initPage1.js';

export const router = () => {
  // CREE PAGE DES PHOTOGRAPHES SANS TAG
  if (window.location.search === '') {
    createPagePhotographers();
    // CREE PAGE DES PHOTOGRAPHES AVEC TAG
  } else if (window.location.search.endsWith('true')) {
    createPagePhotographers();
    // CREE PAGE DU PHOTOGRAPHE AVEC L'ID
  } else if (window.location.search.startsWith('?id')) {
    createPageDuPhotographe();
  } else {
    console.log('erreur route');
  }
};
