[![Contributors][contributors-shield]](https://github.com/raylway/shopackify/graphs/contributors)
[![Forks][forks-shield]](https://github.com/raylway/shopackify/network/members)
[![Stargazers][stars-shield]](https://github.com/raylway/shopackify/stargazers)
[![Issues][issues-shield]](https://github.com/raylway/shopackify/issues)
[![MIT License][license-shield]](https://github.com/raylway/shopackify/blob/master/LICENSE.txt)
[![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/zacariecarr/)


<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://imgur.com/iY7E4cN.png" alt="Shopackify" width="400">
  </a>

  <h3 align="center">Shopackify</h3>

  <p align="center">
    A fully modular build tool to plug and play with Shopify theme development.
    <br />
    <a href="https://github.com/raylway/shopackify/issues">Report Bug</a>
    ·
    <a href="https://github.com/raylway/shopackify/issues">Request Feature</a>
  </p>
</p>


<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

## About The Project

Shopackify is a fully modular build tool for theme development on the Shopify platform. 
This tool aims to fill the void where there are no ready to go & fully featured tooling out there that isn't deprecated or has a lot of setup to do first.

Use either SASS or PostCSS when using our recommended settings.

Shopackify also includes it's own live reload - based on a Web Socket implementation, so we know exactly when to refresh the browser.

Shopackify aims to provide you with the strongest tooling to build high-level, production ready, backwards browser compatible code - so you don't need to worry about using Promises on that enterprise client, because IE doesn't support them. 

### Built With
Shopackify is build with Pure NodeJS sprinkled with a little bit of Commander and cross-spawn to handle different computer environments and nothing else - no tasks runners; nothing else.
* [NodeJS](https://nodejs.org/en/)
* [Commander](https://tj.github.io/commander.js/)
* [Cross-Spawn](https://github.com/moxystudio/node-cross-spawn)


## Getting Started

Shopackify is easy to get started with, although it depends on Themekit - why reinvent the wheel?

### Prerequisites

* **Shopify ThemeKit**
Make sure you have Shopifys Themekit installed, follow these directions:
https://shopify.dev/tools/theme-kit

* **npm**
  ```sh
  npm install npm@latest -g
  ```


### Installation

1. Super easy, install the @shopackify/shopackify package in your dev environment and away you go.
2.  ```sh
    npm install @shopackify/shopackify
    ```

## Usage

### Caveats
* We rely on both `./shop/dist` & `./shop/src` folders for this to work, ThemeKit watches the `./shop/dist` folder for changes.
* We expect you to follow our folder structure listed below.
### What to expect
Using the recommended config `npx shopackify init -r` or `npx shopackify init --recommended`
It will layout the directory structure that Shopackify uses.

**PLEASE NOTE: WE DO NOT SUPPORT LIQUID IN SASS/CSS AND OR JS FILES, THESE WILL NOT BE COMPILED AND WILL THROW ERRORS**
**SHOPIFY HAS DISCONTINUED SUPPORT FOR THESE FILES, PLEASE STORE ALL NEEDED LIQUID VARS IN A SNIPPET FOR CSS VARS OR JSON OBJECT**

* All **VENDOR** - files need to be placed into the vendor folder, this will not be minified/transpiled or polyfilled
  - Outputs as vendor.min.js

* All **JS** - files should be placed in the modules folder, or if you want to use your own js structure that's fine as well
  These need to be imported in the top level .js file for webpack to access
  ``` javascript
  app.js

  import './modules/my-module';
  ```
  - Outputs as theme.min.js

* All **SCSS/CSS** - files should be placed in the styles folder, you should probably split these up into whatever folder structure
  you like if you haven't done so already and imported into a `style.scss` file or `styles.css` file.
  This master file should be imported in our top level .js file.
  ```javascript
  app.js

  import '../styles/main.scss';
  import './modules/my-js-module';
  ```
  - Outputs as theme.min.css
### Directory Structure
Make sure your directory structure follows this if you're not starting from scratch:
A few notes, you can use whatever structure you like for `./shop/src/dev/js/modules` rename or nest more folders.
as long as you're importing them into a top-level .js file

This is the same for the styles directory, as long as they're imported into a top-level file then imported
into the top-level .js file.

```
  |-- shop
      |-- dist
          |-- assets
          |-- config
          |-- layout
          |-- locales
          |-- sections
          |-- snippets
          |-- templates
              |-- customers
      |-- src
          |-- config
          |-- dev
              |-- fonts
              |-- images
              |-- js
                  |-- vendor
                  |-- modules
                  |-- app.js
              |-- styles
                  |-- structure
                  |-- styles.css/scss
          |-- layout
          |-- locales
          |-- sections
          |-- snippets
          |-- templates
              |-- customers
```

**Shopackify Build**
`npx shopackify build` - Will build the dist folder based on your src folder, this is useful if you don't like storing your dist
folder in your repo, or your current working directory is just src. 

**Shopackify Download**
`npx shopackify download` - Will download the currently defined theme in your `config.yml` file. See [here](https://shopify.dev/tools/theme-kit/configuration-reference) for more information about `config.yml` 

**Shopackify Init**
`npx shopackify init` - Will initialize the project directory with the right directory structure.
It takes in an option flag `-r` or `--recommended` this is the default, which sets up all the config files for you and `-s` or `--standard` which provides the config files, but they're not populated.

**Shopackify Convert**
`npx shopackify convert` - Will convert the currently downloaded theme to a working directory, you should usually run this command after directory initialization. Everything gets shuffled into the dev directory, with respective folder naming.

**Shopackify Watch**
`npx shopackify watch` - Will start watching our `src` directory with custom watchers, but makes Themekit watch our `dist` directory. Any changes in the `src` directory will be reflected/compiled in the respective place in `dist`.
We will also write a script to `./layout/theme.liquid` which contains a live-reload script at the bottom before `</body>`. Feel free to delete
this if you don't want live reload, or you don't want it in your live production build.

## Roadmap

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Zacarie Carr - [LinkedIn](https://www.linkedin.com/in/zacariecarr) - zacariealancarr@gmail.com

Project Link: [Shopackify](https://github.com/raylway/shopackify)
NPM Link: [Shopackify](https://www.npmjs.com/package/@shopackify/shopackify)

## Acknowledgements
* [Shopify](https://www.shopify.com/)
* [Themekit](https://shopify.dev/tools/theme-kit)
* [Webpack](https://webpack.js.org/)
* [Webpack-Cli](https://github.com/webpack/webpack-cli/tree/master/packages/webpack-cli)
* [Fast-Glob](https://github.com/mrmlnc/fast-glob#readme)
* [Fs-Extra](https://github.com/jprichardson/node-fs-extra)
* [Ora](https://github.com/sindresorhus/ora#readme)
* [Chokidar](https://github.com/paulmillr/chokidar)
* [WS](https://github.com/websockets/ws)
* [Babel](https://babeljs.io/)
* [Sass](https://sass-lang.com/)
* [Postcss](https://postcss.org/)
* [Best README Template](https://github.com/othneildrew/Best-README-Template)



[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[product-screenshot]: images/screenshot.png

