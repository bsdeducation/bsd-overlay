import styles from './style.css'

// Begin loading the FontAwesome stylesheet immediately.
const css = document.createElement('link');
css.href = 'https://use.fontawesome.com/releases/v5.3.1/css/all.css';
css.rel = 'stylesheet';
css.type = 'text/css';
document.getElementsByTagName('head')[0].appendChild(css);

document.fonts.onloadingdone = (fontFaceSetEvent) => {
  for (let f of fontFaceSetEvent.fontfaces) {
    if (f.family.indexOf('Font Awesome') >= 0) {
      const root = getRoot();
      root.className = styles.loaded;
    }
  }
};

let root;
function getRoot() {
  if (!root) {
    root = document.createElement('div');
    root.id = styles.root;
    const body = document.getElementsByTagName('body')[0];
    body.appendChild(root);
  }
  return root;
}

export function createElement({element = 'div', className = null, id = null, innerHTML = null}) {
  const e = document.createElement(element);
  if (className) {
    e.className = className;
  }
  if (id) {
    e.id = id;
  }
  if (innerHTML) {
    e.innerHTML = innerHTML;
  }
  const root = getRoot();
  root.appendChild(e);
  return e;
}


export function deleteElement(element) {
  const root = getRoot();
  root.removeChild(element);
}