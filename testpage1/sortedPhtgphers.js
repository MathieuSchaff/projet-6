// // Retour une array avec les photographer trié en fonction s'ils ont les tag
// async function sortArrayPhotographer(paramsATester) {
//   //récupère tous les photographes
//   let { photographers } = await getRequest();
//   let params;
//   if (paramsATester == null || paramsATester.toLocaleString() == '') {
//     console.log('rentré dans premier if');
//     params = new URLSearchParams(window.location.search);
//     console.log(params.toLocaleString());
//   } else {
//     console.log('rentré dans premier else if');
//     params = paramsATester;
//     console.log(params.toLocaleString());
//   }
//   // récupère les params passés en url
//   //nouvelle array si jamais il y a des URL / sinon inutiles
//   let sortDisplayPhotographer = [];
//   let uniqUsers = [];
//   if (params == null || params.toLocaleString() == '') {
//     console.log('rentré dans deuxieme if');
//     return photographers;
//   } else {
//     console.log('rentré dans deuxieme else if');
//     // pour chaqué clé, va boucler sur tous les photographer.
//     // Si le photographer à la clé, alors ça push le photographer dans l'array
//     // PB DE DOUBLONS
//     for (const [key, value] of params.entries()) {
//       for (let i = 0; i < photographers.length; i++) {
//         if (photographers[i].tags.includes(key)) {
//           sortDisplayPhotographer.push(photographers[i]);
//         }
//       }
//     }
//     uniqUsers = [
//       ...sortDisplayPhotographer.reduce((map, obj) => map.set(obj.id, obj), new Map()).values(),
//     ];
//     return uniqUsers;
//   }
// }
// Retour une array avec les photographer trié en fonction s'ils ont les tag
async function sortArrayPhotographer(paramsATester) {
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
    for (const [key, value] of params.entries()) {
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
