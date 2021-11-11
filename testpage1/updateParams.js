// UPDATE LES PARAMS ET URL = > recharge page
let oldvNode;
let newVnode;
const updateParams = async (linkValue) => {
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
  console.log(params.toLocaleString());
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
