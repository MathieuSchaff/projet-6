const createElement = (vnode) => {
  if (typeof vnode === 'string') {
    return document.createTextNode(vnode); // Catch if vnode is just text
  }

  const el = document.createElement(vnode.tag);
  if (vnode.props) {
    Object.entries(vnode.props).forEach(([name, value]) => {
      el[name] = value;
    });
  }
  if (vnode.children) {
    vnode.children.forEach((child) => {
      el.appendChild(createElement(child));
    });
  }
  return el;
};
const m = (tag, props, children) => ({
  tag,
  props,
  children,
});
const patch = (el, newVNode, oldVNode) => {
  if (!newVNode && newVNode !== '') return el.remove();
  if (typeof oldVNode === 'string' || typeof newVNode === 'string') {
    if (oldVNode !== newVNode) return el.replaceWith(createElement(newVNode));
  } else {
    //
    if (oldVNode?.tag !== newVNode.tag) {
      return el.replaceWith(createElement(newVNode));
    }

    if (oldVNode) {
      for (const propName in oldVNode.props) {
        if (oldVNode.props[propName] === newVNode.props[propName])
          return el.replaceWith(createElement(newVNode));
      }

      for (let i = el.childNodes.length - 1; i >= 0; i--) {
        patch(el.childNodes[i], newVNode.children[i], oldVNode.children[i]);
      }
    }
  }
};
// const patch = (el, newVNode, prevVNode, workStack = [], commit) => {
//   if (!newVNode) {
//     workStack.push(() => el.remove());
//   } else {
//     const oldVNode = prevVNode ?? el[OLD_VNODE_FIELD];
//     const hasString = typeof oldVNode === 'string' || typeof newVNode === 'string';
//     if (hasString && oldVNode !== newVNode) {
//       workStack.push(() => el.replaceWith(createElement(newVNode)));
//     } else if (!hasString) {
//       if ((!oldVNode?.key && !newVNode?.key) || oldVNode?.key !== newVNode?.key) {
//         if (oldVNode?.tag !== newVNode?.tag || el instanceof Text) {
//           workStack.push(() => el.replaceWith(createElement(newVNode)));
//         } else {
//           patchProps(el, oldVNode?.props || {}, newVNode.props || {}, workStack);
//           // Flags allow for greater optimizability by reducing condition branches.
//           // Generally, you should use a compiler to generate these flags, but
//           // hand-writing them is also possible
//           switch (newVNode.flag) {
//             case VFlags.NO_CHILDREN:
//               workStack.push(() => (el.textContent = ''));
//               break;
//             case VFlags.ONLY_TEXT_CHILDREN:
//               // Joining is faster than setting textContent to an array
//               workStack.push(() => (el.textContent = newVNode.children.join('')));
//               break;
//             default:
//               patchChildren(
//                 el,
//                 oldVNode?.children || [],
//                 newVNode.children,
//                 newVNode.flag === VFlags.ONLY_KEYED_CHILDREN,
//                 // We need to pass delta here because this function does not have
//                 // a reference to the actual vnode.
//                 newVNode.delta,
//                 workStack
//               );
//               break;
//           }
//         }
//       }
//     }
//   }
//   flushWorkStack(workStack, commit);
//   if (!prevVNode) el[OLD_VNODE_FIELD] = newVNode;
// };
