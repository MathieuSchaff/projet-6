// UPDATE LES PARAMS ET URL = > recharge page
let oldvNode;
let newVnode;
const updateParams = async (linkValue) => {
  console.log('rentré update');
  let params = new URLSearchParams(window.location.search);
  let params2 = new URLSearchParams(window.location.search);
  if (params.has(linkValue)) {
    params.delete(linkValue);
  } else if (linkValue !== null) {
    params.append(linkValue, true);
  }
  // params.forEach(function (value, key) {
  //   const linksnav = document.querySelectorAll('nav button');
  //   for (let i = 0; i < linksnav.length; i++) {
  //     if (linksnav[i].value == value) {
  //       console.log(linksnav[i]);
  //     }
  //   }
  // });
  // const linksnav = document.querySelectorAll('nav button');
  // for (let key of params.keys()) {
  //   for (let i = 0; i < linksnav.length; i++) {
  //     if (linksnav[i].value == key) {
  //       linksnav[i].classList.toggle('buttonClicked');
  //     }
  //   }
  // }
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
