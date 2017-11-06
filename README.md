# electron-react-redux-boilerplate
Electron boilerplate with react and redux pre-configured

# NPM CLI App
This boilerplate can be installed via npm. Skip to [manual](#install) if you want to clone app from repo yourself.

```shell
  yarn global add electron-react-redux-boilerplate

  (or)

  npm i -g electron-react-redux-boilerplate
```

- Create Project and install dependencies

```shell
  electron-react-redux-boilerplate <project-name>

  cd <project-name>

  npm install (or) yarn install
```

# What is pre-configured
- Webpack
- Basic Redux boilerplate
- React Dev Tools
- Redux Dev Tools
- Persistence storage with [electron-settings][1]. Can be disabled easily if not needed. Check comments in the reducer file in `renderer/reducers/index.js`

# Install

- Install `Electron`

```shell 
  yarn global add electron
```

- Clone this repository

```shell
  git clone https://github.com/saisandeepvaddi/electron-react-redux-boilerplate.git
```

- CD to the cloned directory and install dependencies.

```shell
  cd electron-react-redux-boilerplate
  yarn install
```

- Have two terminals opened. One for Webpack build. Another for Electron

```shell
  terminal_1> yarn webpack:dev
  terminal_2> yarn start
```

- **React and Redux developer tools** are included. They will be automatically installed on application run. Redux Dev Tools will be attached to store upon running webpack. Make sure to remove or comment out following line in [main/app.js](main/app.js) in production so that you don't install dev tools extensions in production.

```javascript
  // Line 29
  installDevToolsExtensions();
```


- Devtron is included. Run the following in application's console if you need it.

```javascript
  require('devtron').install()
```


# License

[MIT](https://github.com/saisandeepvaddi/electron-react-redux-boilerplate/blob/master/LICENSE) - Sai Sandeep Vaddi



[1]: https://www.npmjs.com/package/electron-settings
[npm]: https://www.npmjs.com/package/electron-react-redux-boilerplate
