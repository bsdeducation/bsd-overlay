## Overview

In order to contribute to the BSD Overlay module you'll need a [GitHub](https://github.com) account. At a high level, the process for contributing to this module is:
1. Fork the [GitHub repository](https://github.com/bsdeducation/bsd-overlay).
1. Make your changes on a local version of the module.
1. Test your changes on [BSD Online](https://app.bsd.education) using the `yarn run dev` command. See below.
1. Make a Pull Request back to the original [bsd-overlay](https://github.com/bsdeducation/bsd-overlay) repository.

The repository owner will be responsible for merging PRs, publishing the new release to BSD Online. This is independent of the development team's release process.

## Prerequisites

You'll need these tools installed on your machine:

* [git](https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/)
* [yarn](https://yarnpkg.com/en/docs/install)

## Local development

After forking the repository, clone it to your machine: 
```sh
git clone https://github.com/<your GitHub username>/bsd-overlay.git
```

Within your 'bsd-overlay' directory run `yarn` to install all dependencies.

---
> The main scripts in package.json to be aware of are:
> * `clean` - remove the auto-generated directories
> * `build` - create the `dist` directory
> * `watch` - like `build` except that it will continue to auto-build whenever the code is changed and saved
> * `example` - open the example in a browser
> * `doc` - build the module docs
> * `doc:open` - open the docs generated locally within a browser
> * `host` - shares your local `dist` directory publically, so that you can test your changes directly on BSD Online
> * `dev` - runs `watch` and `host`
> * `pub` - publish the built module and docs to BSD Online (this requires configuration which is not included in this repository)
---

You can test out your own changes on BSD Online by using `yarn run dev`. This runs `yarn run watch` (which uses rollup in watch mode to automatically rebuild the library) and `yarn run host` which exposes your local `dist` directory to the world using [serveo](https://serveo.net/). Look in the console output for something like 
```HTML
<script type="text/javascript" src="https://bsd-overlay-YOUR_NAME.serveo.net/dist/index.js">
</script>
```
and paste that into the HTML file for the interactive step you're working on. This will let you test out your local changes on BSD Online without having to publish anything or risk breaking any existing content.

## Guidelines for contributions

Please follow these guidelines if you'd like to have your changes merged into the official module:

* thoroughly document new properties or new widgets
* take care about adding new dependencies - this should remain a very lean module (currently less than 9 KB uncompressed, less than 4 KB compressed) (FontAwesome is about 80 KB)
* follow the design philosophy: ease of use, simplicity and consistency
* do not add copyrighted code to this module

Remember, this is not a general purpose UI component toolkit like [bootstrap](https://getbootstrap.com/). It's indended for auxiliary UI components, not the primary focus of the step.

## Publishing

In order to publish to BSD Online, you'll need the [AWS command line tools](https://docs.aws.amazon.com/cli/latest/userguide/installing.html). Once installed, run `aws configure` and enter the user id and secret access key. If you are a BSD Education staff member then ask a colleague.

After that, you can easily publish this module to BSD Online with `yarn publish`. You will be asked to enter a new version number. Once the publishing process is complete, the new version and the docs will be available within BSD Online's resources, for example [here](https://app.bsd.education/resources/modules/bsd-overlay/0.1.9/docs/index.html).

## To-do

* include FontAwesome as a direct dependency so that we don't depend on an external CDN
* add animation/effect on button clicks
* support tooltips on buttons
* improve error checking to ensure required props are present
* support container anchor options as an alternative to 'position' i.e. we could simply specify any of these as the 'anchor' property: top, top-left, top-right, left, right, bottom, bottom-left, bottom-right
* support custom className on widgets
* support hide/show behaviour - globally? by widget?
* improve the docs: put GLOBAL above CLASSES; add search, add tutorials to navigation
* in Widget.js, applyProps should compare props on the old/new proxies before applying the diff to the DOM
* put some unit tests in place
* add more widgets, of course :)