# BSD.overlay

This is a helper library for [BSD Online](https://app.bsd.education) content creators to easily add UI widgets as overlays to interactive steps. 

For example:
```javascript
$BSD.overlay.button({
  position: { top: '20px', right: '20px' },
  icon: 'arrow-left',
  onClick: () => console.log('clicked 1'),
});
```
will create a button that is permanently fixed at the specified position, using the 'arrow-left' font-awesome icon.

The goals of this library are:
* ease of use - it's available by default in all interactive steps; no need to modify your HTML to include any dependencies
* simplicity - to speed up content creation
* consistency - to provide a level of consistency across content
* **not** flexibility - it's not supposed to be a general purpose toolkit

This library is supposed to make it easier to define UI controls as an overlay above the primary content of the interactive step. The overlay controls are not supposed to be the primary content so they should not be highly configurable, attempting to solve all possible use cases.

All controls in this library can have their properties modified after construction e.g.
```javascript
const b = $BSD.overlay.button({
  position: { top: '20px', right: '20px' },
  text: 'click me',
  onClick: () => b.text = 'thank you',
});
```

All controls have a `delete()` function which will immediately remove the control from the DOM. If the control is a container which was used for creating other controls then all the child controls will also be removed.

## More documentation

Please visit [here](https://app.bsd.education/resources/modules/bsd-overlay/0.1.6/docs/index.html) for the full documentation.