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
  history.pushState({}, null, `?${paramsToString}`)
  let page = document.getElementById('articles')
  patch(page, newVnode)

  const links = document.querySelectorAll('button.nav--button')

  // for (let i = 0; i < links.length; i++) {
  //   for (const [key, value] of params.entries()) {
  //     if (links[i].value == key) {
  //       links[i].classList.add('focused')
  //     } else if (links[i].classList.contains('focused') && !(links[i].value == key)) {
  //       links[i].classList.remove('focused')
  //     }
  //   }
  // }

  // const linksNav = document.querySelectorAll('nav button.nav--button')
  // let paramsArray = []
  // for (var key of params.keys()) {
  //   paramsArray.push(key)
  // }
  // for (let i = 0; i < linksNav.length; i++) {
  //   if (linksNav[i].classList.contains('focused')) {
  //     linksNav[i].classList.remove('focused')
  //   }
  // }
  // for (let i = 0; i < linksNav.length; i++) {
  //   if (paramsArray.includes(linksNav[i].value)) {
  //     linksNav[i].classList.add('focused')
  //   }
  // }

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      updateParams(link.value)
    })
  })
}
