export function applyProps(w, props, propMap) {
  // Put the props in the order defined in propMap, not the order in the props object.
  const propOrder = Object.keys(propMap);
  const propsIter = Object.keys(props).sort(
    (a, b) => propOrder.indexOf(a) - propOrder.indexOf(b)
  );
  for (let prop of propsIter) {
    if (props[prop]) {
      if (propMap[prop] != null) {
        propMap[prop](w, props[prop]);
      } else {
        console.error(`Unsupported prop '${prop}'`);
      }
    }
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