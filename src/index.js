import overlay from './overlay';

// For BSD Online:
if (typeof $BSD !== 'undefined') {
  $BSD.overlay = overlay;
}

// For examples:
if (!window.$BSD) {
  window.$BSD = {};
}
window.$BSD.overlay = overlay;
