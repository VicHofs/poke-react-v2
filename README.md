# Poké React v2

<div display="flex" align="center">
	<img src="https://github.com/VicHofs/poke-react-v2/blob/main/gh_assets/overview.gif" />
</div>
<p align="center">
  <a href="https://www.linkedin.com/in/victor-hofstetter/">
    <img alt="Made by VicHofs and hv90" src="https://img.shields.io/badge/made%20by-VicHofs | hv90-%2304D361">
  </a>

  <a href="https://github.com/VicHofs/poke-react-v2/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/VicHofs/poke-react-v2">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>
<p align="center">

## Why PWAs (Progressive Web Apps)?

_Progressive Web Apps_ offer all the capabilities of a standard web app all the while providing a native-like experience by means of local installation, offline-first user experience, and mobile responsiveness.

## 📝 Project

A PokéDex-like React app

[Click Here][website] to check it out!

<img alt="PokéApi" src="https://pokeapi.co/static/pokeapi_256.888baca4.png">

_All data is pulled from the PokéApi API._

Use the search bar to look up a Pokémon—through its name or Pokédex ID No.—and get its sprite, PokéDex ID, type(s) and description.

There is support for multiple languages—spanning across different games—in Pokémon descriptions.

Dark mode toggles automatically depending on the user's system preferences, but can be manually set to a preferred state that will persist.

## 🗃 Technologies

This project was developed with the following technologies:

- [TypeScript][typescript]
- [ReactJS][reactjs]
- [Prettier][prettier]
- [Visual Studio Code][vs]
- [PokéApi][pokeapi]
- [Docker][docker]
- [ExpressJS][express]
- [WebpackJS][webpack]
- [BabelJS][babel]

## 📋 Layout

### Desktop & mobile
The app's layout is responsive and made for desktop, tablet, and mobile.
Pokémon cards resulting from searches include the Pokémon's main sprite, Pokédex ID No., name, type(s) and description, and a dropdown menu for selecting the description version.
<img src="https://github.com/VicHofs/poke-react-v2/blob/main/gh_assets/overview.png" height="350px"/>
<img src="https://github.com/VicHofs/poke-react-v2/blob/main/gh_assets/app.png" height="350px"/>

### Components
Hovering over type icons will show a pop-up with the respective type label.
<img src="https://github.com/VicHofs/poke-react-v2/blob/main/gh_assets/types.gif" height="250px"/>

Cards can be saved by clicking the _save button_ on the right, and saved cards can be removed by clicking the _remove button_.
<img src="https://github.com/VicHofs/poke-react-v2/blob/main/gh_assets/saving.gif" height="350px" />

Dark mode can be toggled on or off by clicking the theme button.
<img src="https://github.com/VicHofs/poke-react-v2/blob/main/gh_assets/theme.gif" height="350px" />

## 📜 License

This project is under the MIT license. See the [LICENSE](https://github.com/VicHofs/poke-react-v2/LICENSE) for details.

Made with ❤ by Victor B. Hofstetter and Hugo Almeida at Hicom IT Brazil.

[typescript]: https://www.typescriptlang.org/
[reactjs]: https://reactjs.org
[yarn]: https://yarnpkg.com/
[vs]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[pokeapi]: https://pokeapi.co/
[express]: https://expressjs.com/
[insomnia]: https://insomnia.rest
[docker]: https://www.docker.com/
[website]: https://vichofs.github.io/poke-react-v2/
[webpack]: https://webpack.js.org/
[babel]: https://babeljs.io/
