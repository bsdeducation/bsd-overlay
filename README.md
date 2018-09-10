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

This library is supposed to make it easier to define UI controls as an overlay above the primary content of the interactive step. The overlay controls are not supposed to be the primary content so they are not intended to be 

The design for the UI controls currently includes plans for:
* buttons `[DONE]`
* a platform-linked refresh button
* container to assist with layout `[DONE]`
* slider
* progress bar
* timers
* meters
* forms including text fields and combo boxes
* modal dialogs
* multi-page overlay 
* success page

## Concepts

All controls in this library can have their properties modified after construction e.g.
```javascript
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

## Development

Content creators are welcome (and encouraged!) to extend this library to support additional controls. Please fork/clone the repo, develop your changes and make a pull request. 

You can test out your own changes on BSD Online by using `yarn run dev`. This runs `yarn run watch` (which uses rollup in watch mode to automatically rebuild the library) and `yarn run host` which exposes your local `dist` directory to the world. Look in the console output for something like 
```HTML
<script type="text/javascript" src="https://bsd-overlay-myname.serveo.net/dist/index.js">
</script>
```
and paste that into the HTML file for the interactive step you're working on. This will let you test out your local changes on BSD Online without having to publish anything, or risk breaking any existing content.

When you have finished making changes to BSD.overlay, make a pull request. The repository owner will be responsible for merging PRs, publishing to npm and deploying the new release to BSD Online. This can be independent of the development team's release process.

## Design

Here are some designs for possible extensions to this module:

![](design_1.png)
![](design_2.png)
![](design_3.png)
![](design_4.png)
![](design_5.png)
![](design_6.png)
