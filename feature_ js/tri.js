// quand je clique sur un bouton, si le bouton correspond a un tag alors cela incrémente le count de 1 sur l'article en question
// doit return la nouvelle array crée à passer en
const sortedPhotographer = async () => {
  let { photographers } = await getRequest();
  photographers.map((x) => (x.count = 0));

  // pour tous les boutons coché, j'ajoute 1 a count
  for (let i = 0; i < buttonsArr.length; i++) {
    for (let i = 0; i < photographers.length; i++) {
      // console.log(document.querySelector('.buttonClicked').id);
      if (photographers[i].tags.includes(document.querySelector('.buttonClicked').id)) {
        photographers[i].count += 1;
      } else if (
        !photographers[i].tags.includes(document.querySelector('.buttonClicked').id) &&
        photographers[i].count > 0
      ) {
        photographers[i].count -= 1;
      } else {
        photographers[i].count = 0;
      }
    }
  }

  photographers.sort((a, b) => {
    return b.count - a.count;
  });

  return photographers;
};
