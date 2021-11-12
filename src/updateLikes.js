import { pickPhotographer, sortMedia } from './src/getData.js';

export async function updateLikes() {
  let photographer = await pickPhotographer();
  let media = await sortMedia();
  let likes = media.map((x) => {
    return (x = x.likes);
  });
  const sumLikes = likes.reduce((sum, currentvalue) => {
    return (sum += currentvalue);
  }, 0);

  let totalLikes = document.querySelector('.totalLikes--number');
  totalLikes.innerHTML = `${sumLikes}`;
  document.querySelector('.salaire--journalier').innerHTML = `${photographer.price}€ / jour`;
  let allHeart = document.querySelectorAll('.heart');
  console.log(allHeart);
  allHeart.forEach((element) => {
    element.addEventListener('click', () => {
      console.log();
      console.log(typeof Number(totalLikes.textContent));
      totalLikes.textContent = `${Number(totalLikes.textContent) + 1}`;
      element.firstElementChild.textContent = `${
        Number(element.firstElementChild.textContent) + 1
      }`;
    });
  });
}
