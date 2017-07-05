# electron-react-boilerplate
Electron boilerplate with react and redux pre-configured

# What is pre-configured
- Webpack
- Basic Redux boilerplate
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

- Devtron is included. Run the following in application's DevTools console

```javascript
  require('devtron').install()
```


# License

[MIT](https://github.com/saisandeepvaddi/electron-react-redux-boilerplate/blob/master/LICENSE) 



[1]: https://www.npmjs.com/package/electron-settings