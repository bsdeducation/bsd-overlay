import fa from 'fontawesome';
import { createElement, createWidget } from './widget';
import styles from './style.css'

export function button(props) {
  const { position, id, icon, style, text, size, tooltips, onClick } = props;

  const w = createWidget('button', { id });

  if (icon) {
    w.innerHTML += '<span class="fa">' + fa[icon] + '</span>';
    // w.appendChild(
    //   createElement({ element: 'span', className: styles.fa, innerHTML: fa[icon] })
    // );
    w.className += ' ' + styles.icon;
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
  if (onClick) {
    w.addEventListener('click', onClick, false);
  }

  function applyProps(props) {

  }

  return w;
  // return {
  // };
}