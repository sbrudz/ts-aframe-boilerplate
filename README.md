# A-Frame Boilerplate with TypeScript

Boilerplate for creating WebVR scenes with [A-Frame](https://aframe.io) using TypeScript.

[![Hello World](./preview.png)](https://sbrudz.github.io/ts-aframe-boilerplate/)

## Getting Started

You can __[fork this repo](https://github.com/sbrudz/ts-aframe-boilerplate/fork)__ to get started, if you'd like to maintain a Git workflow.

After you have __[forked this repo](https://github.com/sbrudz/ts-aframe-boilerplate/fork)__, clone a copy of your fork locally and you'll be have your scene ready in these few steps:

    git clone https://github.com/sbrudz/ts-aframe-boilerplate.git
    cd ts-aframe-boilerplate && rm -rf .git && npm install
    npm start

> :iphone: **Mobile pro tip:** Upon starting the development server, the URL will be logged to the console. Load that URL from a browser on your mobile device. (If your mobile phone and computer are not on the same LAN, consider using [ngrok](https://ngrok.com/) for local development and testing. [Browsersync](https://www.browsersync.io/) is also worth a gander.)

<hr>

## Developing your scene

The A-Frame best practices recommend putting your application logic in component. This boilerplate sets you up to do that.
The `src/index.ts` file is your entrypoint to add application logic.  There's currently an example component in there. You
can either modify what's in there or add more components as separate source files and import those into the index.ts file.

To make changes to the HTML, edit the `src/index.html` file.  When you start the dev server or publish your project, webpack
uses this file as a template and adds the generated bundle of code to the header.  The generated files all end up in the
`dist` folder.

Note that because the bundle.js file is appended to the header, your DOM won't be ready at the time the file loads so you
won't be able to write code that finds HTML elements in the body of your document.  Instead, you should wrap your code within
an A-Frame component (in the init or update methods).  This code will then be run at the correct point in the A-Frame lifecycle.

To reduce the generated bundle size, the A-Frame library is marked as an external library in webpack, which means that webpack will not
bundle it and instead is expecting A-Frame to be included on the page already.  The index.html file is loading it from the
aframe.io site.  If you want to decouple yourself from depending on an external CDN like this, you can change this behavior by
editing `webpack.config.js` to remove A-Frame from the externals section and putting `import 'aframe';` at the top of `src/index.ts`.
After that is done, you'll no longer need to include A-Frame via a script tag in index.html.

## Publishing your scene

If you don't already know, GitHub offers free and awesome publishing of static sites through __[GitHub Pages](https://pages.github.com/)__.

To publish your scene to your personal GitHub Pages:

    npm run deploy

And, it'll now be live at __http://`your_username`.github.io/__ :)

<hr>

To know which GitHub repo to deploy to, the `deploy` script first looks at the optional [`repository` key](https://docs.npmjs.com/files/package.json#repository) in the [`package.json` file](package.json) (see [npm docs](https://docs.npmjs.com/files/package.json#repository) for sample usage). If the `repository` key is missing, the script falls back to using the local git repo's remote origin URL (you can run the local command `git remote -v` to see all your remotes; also, you may refer to the [GitHub docs](https://help.github.com/articles/about-remote-repositories/) for more information).

<hr>

## Still need Help?

### Installation

First make sure you have Node installed.

On Mac OS X, it's recommended to use [Homebrew](http://brew.sh/) to install Node + [npm](https://www.npmjs.com):

    brew install node

To install the Node dependencies:

    npm install


### Local Development

To serve the site from a simple Node development server:

    npm start

Then launch the site from your favourite browser:

[__http://localhost:3000/__](http://localhost:3000/)


## License

This program is free software and is distributed under an [MIT License](LICENSE).
