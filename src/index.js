import { applyProps } from './props';
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
  w.innerHTML += `<span class="fa fa-${icon}"></span>`;
  w.classes.push(styles.icon);
}

function text(w, text) {
  w.innerHTML += `<span>${text}</span>`;
  w.classes.push(styles.withLabel);
}

function position(w, position) {
  let s = '';
  for (let p in position) {
    s += `${p}: ${position[p]}; `;
  }
  w.styles.push(s || 'top: 0px');
}

function style(w, style) {
  if (supportedStyles[style]) {
    w.classes.push(styles.styled);
    w.classes.push(supportedStyles[style]);
  } else {
    console.error(`Unknown style '${style}'.`);
  }
}

function size(w, size) {
  if (supportedSizes[size]) {
    w.classes.push(supportedSizes[size]);
  } else {
    console.error(`Unknown size '${size}'.`);
  }
}

function onClick(w, onClick) {
  w.addEventListener('click', onClick, false);
}

function layout(w, layout, props) {
  if (layout === 'row' || layout === 'column') {
    w.styles.push(`flex-direction: ${layout}`);
  } else {
    console.error(`Unknown layout '${layout}'.`);
  }
  
}

// -----------------------------------------------------------
// Widgets
// -----------------------------------------------------------

class Widget {
  constructor(type, props, propMap) {
    this.element = createWidget(type, props);
    this.originalClassName = this.element.className;
    this.props = props;
    this.propMap = propMap;
    this.applyProps(this.props);
  }

  applyProps(props) {
    const proxy = {
      innerHTML: '',
      styles: [],
      classes: [this.originalClassName],
      events: [],
      addEventListener: () => {}
    };
    applyProps(proxy, props, this.propMap);
    this.element.innerHTML = proxy.innerHTML;
    this.element.className = proxy.classes.join(' ');
    this.element.style = proxy.styles.join(';');
    for (let event of proxy.events) {
      this.element.addEventListener(event.type, event.handler, event.useCapture);
    }
  }

  updateProp(propName, value) {
    Object.assign(this.props, {[propName]: value});
    this.applyProps(this.props);
  }
};

/**
 * Creates a button widget with the specified properties.
 * 
 * @param {Object} props
 * @return 
 */
class Button extends Widget {
  constructor(props) {
    super(
      'button',
      props,
      { icon, text, position, style, size, onClick }
    );
  }

  set icon(v) {
    this.updateProp('icon', v);
  }

  set text(v) {
    this.updateProp('text', v);
  }

  set position(v) {
    this.updateProp('position', v);
  }

  set style(v) {
    this.updateProp('style', v);
  }

  set size(v) {
    this.updateProp('size', v);
  }

  set onClick(v) {
    this.updateProp('onClick', v);
  }
}

class Panel extends Widget {
  constructor(props) {
    super(
      'panel',
      props,
      { layout, position }
    );
  }

  set layout(v) {
    this.updateProp('layout', v);
  }

  set position(v) {
    this.updateProp('position', v);
  }

  button(buttonProps) {
    const b = new Button(buttonProps);
    this.element.appendChild(b.element);
    return b;
  }
}

(function (win) {
  win.$BSD = {
    button: (props) => new Button(props),
    panel: (props) => new Panel(props),
  };
})(window)