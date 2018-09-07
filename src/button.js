import fa from 'fontawesome';
import { createWidget } from './widget';
import styles from './style.css';

const supportedStyles = ['primary', 'success', 'danger'];

export function button(props) {
  const { position, id, icon, style, text, size, tooltips, onClick } = props;

  const w = createWidget('button', { id });

  if (icon) {
    if (fa[icon]) {
      w.innerHTML += '<span class="fa">' + fa[icon] + '</span>';
      w.className += ' ' + styles.icon;
    } else {
      console.error(`Unknown icon '${icon}'.`);
    }
  }
  if (text) {
    w.innerHTML += text;
    w.className += ' ' + styles.withLabel;
  }
  if (position) {
    let s = '';
    for (let p in position) {
      s += `${p}: ${position[p]};`;
    }
    //  top: ${position.top}; right: 30px;'
    w.style = s;
  }
  if (style && supportedStyles.indexOf(style) >= 0) {
    w.className += ' ' + styles.styled + ' ' + styles[style];
  }
  if (onClick) {
    w.addEventListener('click', onClick, false);
  }

  function applyProps(props) {

  }

  return w;
  // return {
  // };
}