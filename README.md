[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

# typescript-boilerplate
Boilerplate for [TypeScript][typescript] language.

Current boilerplate includes:

+ [TypeScript][typescript]
+ [Webpack 2][webpack]
+ [TSLint][tslint] 5.1
+ [Jest][jest] unit testing and code coverage
+ [base NPM scripts](#npm-scripts)
+ simple TypeScript example to show GitHub repositories (via [GitHub API][githubapi]) on html page
+ [Axios][axios] for make XMLHttpRequests to [GitHub API][githubapi]
+ [mustache.js][mustache] for rendering templates
+ [spectre.css][spectrecss] for styling content on page

## Quick start

Prerequisites: [Node.js][nodejs] (>=6.9.0), npm version 3+ and [Git][git].

```sh
git clone https://github.com/ilyaztsv/typescript-boilerplate.git
cd typescript-boilerplate
npm i # or yarn
npm run build
# open dist/index.html file
```

## NPM scripts

+ `build` - Transpile TypeScript, preps the app for deployment. Optimizes and minifies all files, piping them to the `dist` folder.
+ `dev` - Starts the development server running on `http://localhost:8080`.
+ `clean` - Deletes the `dist` and `coverage` folders.
+ `lint` - Lint source files and tests.
+ `test` - Tests the application with the unit tests specified in the `src/__tests__/*` files throughout the application.
+ `test:watch` - Watches changes to your application and re-runs tests whenever a file changes.

## License

MIT License. See the [LICENSE.md][license] file.

[github-watch-badge]: https://img.shields.io/github/watchers/ilyaztsv/typescript-boilerplate.svg?style=social
[github-watch]: https://github.com/ilyaztsv/typescript-boilerplate/watchers
[github-star-badge]: https://img.shields.io/github/stars/ilyaztsv/typescript-boilerplate.svg?style=social
[github-star]: https://github.com/ilyaztsv/typescript-boilerplate/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Try%20this%20simple%20TypeScript%20boilerplate!%20https://github.com/ilyaztsv/typescript-boilerplate
[twitter-badge]: https://img.shields.io/twitter/url/https/ilyaztsv/typescript-boilerplate.svg?style=social
[typescript]: https://www.typescriptlang.org/
[webpack]: https://webpack.js.org/
[tslint]: https://palantir.github.io/tslint/
[jest]: https://facebook.github.io/jest/
[githubapi]: https://developer.github.com/v3/
[axios]: https://github.com/mzabriskie/axios
[mustache]: https://github.com/janl/mustache.js/
[spectrecss]: https://picturepan2.github.io/spectre/
[nodejs]: https://nodejs.org/en/
[git]: https://git-scm.com/
[license]: https://github.com/ilyaztsv/typescript-boilerplate/blob/master/LICENSE.md