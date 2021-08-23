// quand je clique sur un bouton, si le bouton correspond a un tag alors cela incrémente le count de 1 sur l'article en question
// doit return la nouvelle array crée à passer en
const sortedPhotographer = async () => {
  let { photographers } = await getRequest();
  photographers.map((x) => (x.count = 0));

  // photographers.map((x) => ({
  //   x.count = 0;
  //   if(x.tags.includes(e.id)){
  //     x.count += 1;
  //   }else {
  //     x.count = 0;
  //   }

  // }))
  // photographers.forEach((el) => {
  //   if (el.tags.includes(e.id)) {
  //     el.count = 0;
  //     if (el.tags.includes(e.id)) {
  //       el.count += 1;
  //     } else {
  //       el.count = 0;
  //     }
  //   }
  // });
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
  return console.log(photographers);
  // return photographers;
};
// getTaggedPhotographers(tag) {

//     return data.photographers.filter(photographer => photographer.tags.includes(tag));
// }
// function getSortedPhotographer() {
//   for (let i = 0; i < arrayPhotographers.length; i++) {
//     if (arrayPhotographers[i].tags.includes('portrait')) {
//       return 1;
//     } else {
//       return 0;
//     }
//   }
// }
// arrayPhotographers.sort(function getSortedPhotographer() {
//   for (let i = 0; i < arrayPhotographers.length; i++) {
//     if (arrayPhotographers[i].tags.includes('portrait')) {
//       return console.log(arrayPhotographers[i] + arrayPhotographers[i].tags.includes('portrait'));
//     } else {
//       return console.log(arrayPhotographers[i] + arrayPhotographers[i].tags.includes('portrait'));
//     }
//   }
// });

// p.sort();
// const search = function (list, search) {
//   // if (
//   return list.filter((el) => el.tags.includes(search));
// ) {
//   return 1;
// } else {
//   return 0;
// }
// };
// search(p, 'portrait');
// const sorted = p.sort((a, b) => {
//   if (a.tags.includes('portrait')) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(sorted);
// const comparator = (a, b) => {
//   return a.name.length - b.name.length;
// };
// console.log(p.sort(comparator));
// function sort() {
//   p.map((x) => {
//     if (x.tags.includes('portrait')) {
//       x.push('count');
//     }
//   });
// }

// for (let i = 0; i < arrayPhotographers.length; i++) {
//   console.log(arrayPhotographers[i].tags);
// }

// let count = 'count';
// function sort() {
//   arrayPhotographers.forEach((element) => {
//     if (element.tags.includes(buttonId)) {
//       count += 1;
//     }
//   });
// }
