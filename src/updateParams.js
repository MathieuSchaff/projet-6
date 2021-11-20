// UPDATE LES PARAMS ET URL = > recharge page
import { page } from './getData.js'
import { patch } from './millionseparated.js'
import { sortArrayPhotographer } from './sortedPhtgphers.js'
import { createPage1 } from './cardPhotographers.js'

export let oldvNode
export let newVnode
export const updateParams = async (linkValue) => {
  let params = new URLSearchParams(window.location.search)
  let params2 = new URLSearchParams(window.location.search)
  if (params.has(linkValue)) {
    params.delete(linkValue)
  } else if (linkValue !== null) {
    params.append(linkValue, true)
  }
  // oldvNode = await createPage1(sortArrayPhotographer(params2))
  newVnode = await createPage1(sortArrayPhotographer(params))
  let paramsToString = params.toLocaleString()
  if (window.location.pathname !== `?${paramsToString}`) {
    window.history.pushState(null,null,`?${paramsToString}`);
}
  let page = document.getElementById('articles')
  patch(page, newVnode)
  const links = document.querySelectorAll('button.nav--button')
  let paramsArray = []
  for (var key of params.keys()) {
    paramsArray.push(key)
  }
  console.log(paramsArray)
  for (let i = 0; i < links.length; i++) {
    if (links[i].classList.contains('focused')) {
      links[i].classList.remove('focused')
    }
  }
  for (let i = 0; i < links.length; i++) {
    if (paramsArray.includes(links[i].value)) {
      links[i].classList.add('focused')
    }
  }
  links.forEach((link) => {
    if(link.getAttribute('data-event') !== 'true'){
      link.setAttribute('data-event', true)
      link.addEventListener('click', (e) => {
        e.preventDefault()
        updateParams(link.value)
      })
    }
  })
}
