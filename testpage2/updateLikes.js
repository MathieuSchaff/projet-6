async function updateLikes() {
  let photographer = await pickPhotographer();
  let media = await sortMedia();
  let likes = media.map((x) => {
    return (x = x.likes);
  });
  const sumLikes = likes.reduce((sum, currentvalue) => {
    return (sum += currentvalue);
  }, 0);

  document.querySelector('.totalLikes--number').innerHTML = `${sumLikes}`;
  document.querySelector('.salaire--journalier').innerHTML = `${photographer.price}€ / jour`;
}
