# BSD.overlay

This is a helper library for content creators to easily add simple UI widgets as overlays to interactive steps. 

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
* ease of use - to speed up content creation
* consistency - to provide a level of consistency across content
* **not** flexibility - it's not supposed to be a general purpose toolkit

This library is supposed to make it easier to define UI widgets as an overlay above the primary content of the interactive step. The overlay widgets are not supposed to be the primary content so they 

The design for the UI controls is [here](https://zpl.io/bzn7Ly8) , and the design currently includes plans for:
* buttons, including a platform-linked refresh button
* containers to assist with layout 
* sliders
* progress bars
* timers
* meters
* forms including text fields and combo boxes
* modal dialogs
* multi-page overlay 
* success page

## Concepts

All controls in this library can have their properties modified after construction e.g. ```javascript
const b = $BSD.overlay.button({
  position: { top: '20px', right: '20px' },
  text: 'click me',
  onClick: () => b.text = 'thank you',
});
```

All controls have a `delete()` function which will immediately remove the control from the DOM. If the control is a container which was used for creating other controls then all the child controls will also be removed.

## Dependencies

This library uses [FontAwesome](https://fontawesome.com) for all icons. Currently using version 5.3.1. Icons from other sources are not supported.

This library has no other run-time dependencies.