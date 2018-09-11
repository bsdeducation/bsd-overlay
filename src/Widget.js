import { createElement, deleteElement } from './element';
import styles from './style.css';

function _applyProps(element, props, propMap) {
  // Put the props in the order defined in propMap, not the order in the props object.
  const propOrder = Object.keys(propMap);
  const propsIter = Object.keys(props).sort(
    (a, b) => propOrder.indexOf(a) - propOrder.indexOf(b)
  );
  for (let prop of propsIter) {
    if (props[prop]) {
      if (propMap[prop] != null) {
        propMap[prop](element, props[prop]);
      } else {
        console.error(`Unsupported prop '${prop}'`);
      }
    }
  }
}

export function applyProps(element, props, propMap, originalClasses) {
  const events = [];
  const proxy = {
    id: null,
    innerHTML: '',
    styles: [],
    classes: originalClasses,
    events,
    addEventListener: (type, handler, useCapture) => {
      events.push({type, handler, useCapture});
    }
  };
  _applyProps(proxy, props, propMap);
  if (proxy.id) element.id = proxy.id;
  if (proxy.innerHTML) element.innerHTML = proxy.innerHTML;
  if (proxy.classes) element.className = proxy.classes.join(' ');
  if (proxy.styles) element.style = proxy.styles.join(';');

  // TODO: remove the previous events, or figure out diffs
  for (let event of proxy.events) {
    element.addEventListener(event.type, event.handler, event.useCapture);
  }
}


/**
 * The base widget class for all widgets in this library.
 */
class Widget {
  constructor(type, props, propMap) {
    this.props = props || {};
    const id = this.props.id;
    const className = styles[type];
    this.element = createElement({ element: 'div', id, className });
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
    Object.assign(this.props, { [propName]: value });
    this.applyProps(this.props);
  }

  addChild(w) {
    w.parent = this;
    this.element.appendChild(w.element);
  }

  /**
   * Delete the widget and any child widgets.
   */
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

export default Widget;