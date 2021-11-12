// UPDATE LES PARAMS ET URL = > recharge page
import { page } from './src/getData.js';

import { patch } from './src/millionseparated.js';
import { sortArrayPhotographer } from './src/sortedPhtgphers.js';
import { oldvNode, newVnode, updateParams } from './src/updateParams.js';
import { createPage1 } from './src/cardPhotographers.js';

import { createPage1 } from './src/cardPhotographers.js';
export let oldvNode;
export let newVnode;
export const updateParams = async (linkValue) => {
  let params = new URLSearchParams(window.location.search);
  let params2 = new URLSearchParams(window.location.search);
  if (params.has(linkValue)) {
    params.delete(linkValue);
  } else if (linkValue !== null) {
    params.append(linkValue, true);
  }
  oldvNode = await createPage1(sortArrayPhotographer(params2));
  newVnode = await createPage1(sortArrayPhotographer(params));
  let paramsToString = params.toLocaleString();
  history.pushState({}, null, `?${paramsToString}`);
  page = document.getElementById('articles');
  patch(page, newVnode, oldvNode);
  const linksTags = document.querySelectorAll('.tagTri');
  linksTags.forEach((tags) => {
    tags.addEventListener('click', () => {
      updateParams(tags.value);
    });
  });
};
