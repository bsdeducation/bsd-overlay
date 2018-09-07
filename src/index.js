import fa from 'fontawesome';
import { applyProps, attachProps } from './props';
import { createWidget } from './widget';
import styles from './style.css';

// -----------------------------------------------------------
// Prop handlers
// -----------------------------------------------------------

const supportedStyles = {
  primary: styles.primary,
  success: styles.success,
  danger: styles.danger,
};
const supportedSizes = {
  default: '',
  large: styles.large
};

function icon(w, icon) {
  if (fa[icon]) {
    w.innerHTML += '<span class="fa">' + fa[icon] + '</span>';
    w.className += ' ' + styles.icon;
  } else {
    console.error(`Unknown icon '${icon}'.`);
  }
}

function text(w, text) {
  w.innerHTML += text;
  w.className += ' ' + styles.withLabel;
}

function position(w, position) {
  let s = '';
  for (let p in position) {
    s += `${p}: ${position[p]}; `;
  }
  w.style = s || 'top: 0px;';
}

function style(w, style) {
  if (supportedStyles[style]) {
    w.className += ' ' + styles.styled + ' ' + supportedStyles[style];
  } else {
    console.error(`Unknown style '${style}'.`);
  }
}

function size(w, size) {
  if (supportedSizes[size]) {
    w.className += ' ' + supportedSizes[size];
  } else {
    console.error(`Unknown size '${size}'.`);
  }
}

function onClick(w, onClick) {
  w.addEventListener('click', onClick, false);
}

function layout(w, layout, props) {
  if (layout === 'row') {
    if (props && props.position && props.position.right) {
      layout = 'row-reverse';
    }
  } else if (layout === 'column') {
    if (props && props.position && props.position.bottom) {
      layout = 'column-reverse';
    }
  } else {
    console.error(`Unknown layout '${layout}'.`);
    return;
  }
  w.style = `flex-direction: ${layout};`;
  console.log('layout: ', layout);
}

// -----------------------------------------------------------
// Helpers
// -----------------------------------------------------------

function addButtonToPanel(buttonProps, panel) {
  const {icon, text, style} = buttonProps;
  const b = button({icon, text, style});
  console.log('b: ', b);
  panel.appendChild(b.element);
  return b;
}

// -----------------------------------------------------------
// Public widgets
// -----------------------------------------------------------

function button(props) {
  const buttonProps = {
    icon, text, position, style, size, onClick
  };

  const w = createWidget('button', props);
  applyProps(w, props, buttonProps);

  const b = Object.assign({element: w}, props);
  return b;//attachProps(b, buttonProps);
}

function panel(props) {
  const panelProps = {
    position, layout
  };
  const w = createWidget('panel', props);
  applyProps(w, props, panelProps);
  return {
    button: (buttonProps) => addButtonToPanel(buttonProps, w)
  };
}

(function (win) {
  win.$BSD = {
    button,
    panel,
  };
})(window)