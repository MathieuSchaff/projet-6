async function updateLikes() {
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
  document.querySelectorAll('.heart').forEach((element) => {
    element.addEventListener('click', () => {
      console.log(totalLikes.textContent);
      let numberTotalLikes = new Number(totalLikes.textContent) + 1;
      console.log(numberTotalLikes);
      // document.querySelector('.likes').textContent = `${numberTotalLikes}`;
      document.querySelector('.totalLikes--number').textContent = `${numberTotalLikes}`;
    });
  });
}
