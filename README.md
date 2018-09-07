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
will create a button that is permanently fixed at the specied position, using the 'left-arrow' font-awesome icon.

The goals of this library are:
* ease of use - to speed up content creation
* consistency - to provide a level of consistency across content
* **not** flexibility - it's not supposed to be a general purpose toolkit

## Icons

This library uses [FontAwesome](https://fontawesome.com) for all icons.