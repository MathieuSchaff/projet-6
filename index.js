import {
  myInit,
  myRequest,
  page,
  getRequest,
  getPhotographer,
  getMedia,
  pickPhotographer,
  sortMedia,
} from './src/getData.js';

import { createElement, m, patch } from './src/millionseparated.js';
import { sortArrayPhotographer } from './src/sortedPhtgphers.js';
import { oldvNode, newVnode, updateParams } from './src/updateParams.js';
import {
  createName,
  createCity,
  createTagline,
  createPrice,
  createTags,
  createPortrait,
  createLink,
  buttonPage1,
  createButtons,
  createPage1,
} from './src/cardPhotographers.js';
import {
  createRedirect,
  createIndex,
  createImgHeader,
  createNavButtons,
  createNav,
  createTitle,
  createHeaderPage1,
  createHeaderPage2,
} from './src/header.js';

import {
  ordreWrapperButton,
  spanSort,
  buttonSort,
  ulSort,
  createSortButton,
} from './src/buttonSort.js';
import {
  createArticleHeader,
  photographerMain,
  photographerProfile,
  photographerName,
  photographerLocation,
  photographerPhilosophy,
  photographerButton,
  photographerDivImg,
  photographerImage,
  createButton,
  createButtons2,
  buttonForm,
  createCard,
} from './src/createCard.js';
import { divLike } from './src/divLike.js';
import { formulaire } from './src/formulaire.js';
import {
  createFormDataDiv,
  createLabel,
  createInputForm,
  submitForm,
  createForm,
  headerModalWrapper,
  modalWrapper,
  formWrapper,
} from './src/formulaire2.js';
import { updateLikes } from './src/updateLikes.js';
import { sortimages } from './src/sortimages.js';
import { activateSortButton } from './src/trimedia.js';
import {
  createFigure,
  createImagePhotographer,
  createVideo,
  createSource,
  createFigcaption,
  createFigcaptionText,
  createFigcaptionLike,
  displayImage2,
} from './src/createMedias.js';
import { createPageDuPhotographe } from './src/init.js';
import { lightboxFunction } from './src/lightbox.js';
import { createPagePhotographers } from './src/initPage1.js';
import { router } from './src/router';
router();
