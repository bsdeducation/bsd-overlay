import { applyProps } from './props';
import { createElement, deleteElement } from './element';
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

function icon(element, icon) {
  element.innerHTML += `<span class="fa fa-${icon}"></span>`;
  element.classes.push(styles.icon);
}

function id(element, id) {
  element.id = id;
}

function text(element, text) {
  element.innerHTML += `<span>${text}</span>`;
  element.classes.push(styles.withLabel);
}

function position(element, position) {
  let s = '';
  for (let p in position) {
    s += `${p}: ${position[p]}; `;
  }
  element.styles.push(s || 'top: 0px');
}

function style(element, style) {
  if (supportedStyles[style]) {
    element.classes.push(styles.styled);
    element.classes.push(supportedStyles[style]);
  } else {
    console.error(`Unknown style '${style}'.`);
  }
}

function size(element, size) {
  if (supportedSizes[size]) {
    element.classes.push(supportedSizes[size]);
  } else {
    console.error(`Unknown size '${size}'.`);
  }
}

function onClick(element, onClick) {
  element.addEventListener('click', onClick, false);
}

function layout(element, layout) {
  if (layout === 'row' || layout === 'column') {
    element.styles.push(`flex-direction: ${layout}`);
  } else {
    console.error(`Unknown layout '${layout}'.`);
  }
}

// -----------------------------------------------------------
// Widgets
// -----------------------------------------------------------

class Widget {
  constructor(type, props, propMap) {
    this.props = props || {};
    const id = this.props.id;
    const className = styles[type];
    this.element = createElement({element: 'div', id, className});
    this.originalClassName = this.element.className;
    this.propMap = propMap;
    this.applyProps(this.props);
  }

  applyProps(props) {
    if (!this.element) {
      return;
    }
    applyProps(this.element, props, this.propMap, [this.originalClassName]);
  }

  updateProp(propName, value) {
    Object.assign(this.props, {[propName]: value});
    this.applyProps(this.props);
  }

  addChild(w) {
    w.parent = this;
    this.element.appendChild(w.element);
  }

  delete() {
    if (this.element) {
      if (this.parent) {
        this.parent.element.removeChild(this.element);
        this.parent = null;
      } else {
        deleteElement(this.element);
      }
      this.element = null;
    }
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
      { icon, id, text, position, style, size, onClick }
    );
  }

  set icon(v) {
    this.updateProp('icon', v);
  }

  set id(v) {
    this.updateProp('id', v);
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
    this.addChild(b);
    return b;
  }
}

(function (win) {
  win.$BSD = {
    button: (props) => new Button(props),
    panel: (props) => new Panel(props),
  };
})(window)