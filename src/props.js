import styles from './style.css';

const supportedStyles = {
  primary: styles.primary,
  success: styles.success,
  danger: styles.danger,
  default: '',
};
const supportedSizes = {
  default: '',
  large: styles.large
};

export function icon(element, icon) {
  element.innerHTML += `<span class="fa fa-${icon}"></span>`;
  element.classes.push(styles.icon);
}

export function id(element, id) {
  element.id = id;
}

export function text(element, text) {
  element.innerHTML += `<span>${text}</span>`;
  element.classes.push(styles.withLabel);
}

export function position(element, position) {
  let s = '';
  for (let p in position) {
    s += `${p}: ${position[p]}; `;
  }
  element.styles.push(s || 'top: 0px');
}

export function style(element, style) {
  if (supportedStyles[style]) {
    element.classes.push(styles.styled);
    element.classes.push(supportedStyles[style]);
  } else {
    console.error(`Unknown style '${style}'.`);
  }
}

export function size(element, size) {
  if (supportedSizes[size]) {
    element.classes.push(supportedSizes[size]);
  } else {
    console.error(`Unknown size '${size}'.`);
  }
}

export function onClick(element, onClick) {
  element.addEventListener('click', onClick, false);
}

export function layout(element, layout) {
  if (layout === 'row' || layout === 'column') {
    element.styles.push(`flex-direction: ${layout}`);
  } else {
    console.error(`Unknown layout '${layout}'.`);
  }
}
