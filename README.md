
# react-native-alerted
[![package version](https://img.shields.io/npm/v/react-native-alerted.svg?style=flat-square)](https://npmjs.org/package/react-native-alerted)
[![package downloads](https://img.shields.io/npm/dm/react-native-alerted.svg?style=flat-square)](https://npmjs.org/package/react-native-alerted)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/react-native-alerted.svg?style=flat-square)](https://npmjs.org/package/react-native-alerted)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Niceish wrapper around React Native Alert API

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install react-native-alerted
$ # OR
$ yarn add react-native-alerted
```

## Usage

```js
import alert from 'react-native-alerted' // eslint-disable-line

const isCancelable = false

alert('Oops!', 'Something broke', {
  'No problem': () => console.log('whatever'),
  Cancel: () => console.log('Sh*t hit the fan'),
}, isCancelable)

alert('Yay!', 'You can now delete this app')

```

## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature 
4. Submit a pull request

## License

MIT
    