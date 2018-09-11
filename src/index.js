import overlay from './overlay';

// For BSD Online:
if ($BSD) {
  $BSD.overlay = overlay;
}

// For examples:
if (!window.$BSD) {
  window.$BSD = {};
}
window.$BSD.overlay = overlay;
