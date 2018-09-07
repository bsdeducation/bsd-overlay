import fa from 'fontawesome';
import { applyProps, attachProps } from './props';
import { createWidget } from './widget';
import styles from './style.css';

const supportedStyles = {
  primary: styles.primary,
  success: styles.success,
  danger: styles.danger,
};
const supportedSizes = {
  default: '',
  large: styles.large
};

const buttonProps = {
  icon: (w, icon) => {
    if (fa[icon]) {
      w.innerHTML += '<span class="fa">' + fa[icon] + '</span>';
      w.className += ' ' + styles.icon;
    } else {
      console.error(`Unknown icon '${icon}'.`);
    }
  },
  text: (w, text) => {
    w.innerHTML += text;
    w.className += ' ' + styles.withLabel;
  },
  position: (w, position) => {
    let s = '';
    for (let p in position) {
      s += `${p}: ${position[p]};`;
    }
    w.style = s;
  },
  style: (w, style) => {
    if (supportedStyles[style]) {
      w.className += ' ' + styles.styled + ' ' + supportedStyles[style];
    } else {
      console.error(`Unknown style '${style}'.`);
    }
  },
  size: (w, size) => {
    if (supportedSizes[size]) {
      w.className += ' ' + supportedSizes[size];
    } else {
      console.error(`Unknown size '${size}'.`);
    }
  },
  onClick: (w, onClick) => {
    w.addEventListener('click', onClick, false);
  }
}

export function button(props) {
  const { id } = props;
  const w = createWidget('button', { id });
  applyProps(w, props, buttonProps);
  return attachProps(props, buttonProps);
}