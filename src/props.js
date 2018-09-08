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
    innerHTML: '',
    styles: [],
    classes: originalClasses,
    events,
    addEventListener: (type, handler, useCapture) => {
      events.push({type, handler, useCapture});
    }
  };
  _applyProps(proxy, props, propMap);
  element.innerHTML = proxy.innerHTML;
  element.className = proxy.classes.join(' ');
  element.style = proxy.styles.join(';');
  for (let event of proxy.events) {
    element.addEventListener(event.type, event.handler, event.useCapture);
  }
}

export function attachProps(obj, propMap) {
  for (let prop in propMap) {
    Object.defineProperty(obj, prop, {
      key: prop,
      set: (value) => propMap[prop](obj, value)
    });
  }
  return obj;
}