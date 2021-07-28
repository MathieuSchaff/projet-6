// buttonTri1.addEventListener('click', choosePage);

// active descend = id de l'option
// mettre aria selected true
// ajouter du style au focus
// <select> class ( on dirait le button); multiple name='listbox'
// option selected value

// button:
// aria-expanded="true" Set by the JavaScript when the listbox is displayed.
// Otherwise, is not present.
const button = document.getElementById('sort_button');
const ul = document.getElementById('tri');
const tri = document.querySelectorAll('.tri');
window.addEventListener('keydown', (e) => {
  console.log(e);
});
function openMenu() {
  ul.classList.remove('displayNone');
  button.setAttribute('aria-expanded', true);
  // ul.setAttribute('aria-activedescendant', button.);
  ul.setAttribute('tabindex', 1);
  for (let i = 0; i < tri.length; i++) {
    tri[i].setAttribute('tabindex', 0);
  }
}
function closeMenu() {
  ul.classList.add('displayNone');
  button.setAttribute('aria-expanded', false);
  ul.setAttribute('tabindex', -1);
  for (let i = 0; i < tri.length; i++) {
    tri[i].setAttribute('tabindex', -1);
  }
}
button.addEventListener('click', () => {
  if (ul.classList.contains('displayNone')) {
    openMenu();
  } else {
    closeMenu();
  }
});
button.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown' && ul.classList.contains('displayNone')) {
    openMenu();
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown' && !ul.classList.contains('displayNone')){
    
  }
}
// let focus = document.hasFocus();
// console.log(focus);
//
// $(document).keydown(
//   function(e)
//   {
//       if (e.keyCode == 39) {
//           $(".tri:focus").next().focus();

//       }
//       if (e.keyCode == 37) {
//           $(".tri:focus").prev().focus();

//       }
//   }
// );
// button.addEventListener('keypress', (e) => {
// console.log(e.key)});
{
  /* <i class="fas fa-chevron-up" ></i><i class="fas fa-chevron-down"></i> */
}

// if (!(key === 'Enter')) {
//   return false;
//   }
//   if (ul.classList.contains('displayNone')) {
//     openMenu();
//   } else {
//     closeMenu();
//   }
// });
//     event,
//     function (e) {
//       if (!(e.key === 'Enter')) {
//         console.log('not good');
//         return false;
//       }
//       if (ul.classList.contains('displayNone')) {
//        openMenu();
//         }
//       } else {
//         closeMenu();
//       }
//     },
//     false
//   );
// });

// function addMultipleEventListener(element, events, handler) {
//   events.forEach(e => element.addEventListener(e, handler))
// }
// ul :

// // tabindex="-1"
// Makes the listbox focusable.
// The JavaScript sets focus on the listbox when it is displayed.

// aria-activedescendant="ID REF"
// Set by the JavaScript when it displays and sets focus on the listbox; otherwise is not present.
// Refers to the option in the listbox that is visually indicated as having keyboard focus.
// When navigation keys, such as Down Arrow, are pressed, the JavaScript changes the value.
// Enables assistive technologies to know which element the application regards as focused while DOM focus remains on the ul element.
// For more information about this focus management technique, see Using aria-activedescendant to Manage Focus
// aria.Listbox.prototype.focusItem = function (element) {
//   this.defocusItem(document.getElementById(this.activeDescendant));
//   if (!this.multiselectable) {
//     element.setAttribute('aria-selected', 'true');
// aria.Utils.addClass(element, 'focused');
// this.listboxNode.setAttribute('aria-activedescendant', element.id);
// this.activeDescendant = element.id;
//