# pixiv-auth-got [![Build Status](https://travis-ci.org/akameco/pixiv-auth-got.svg?branch=master)](https://travis-ci.org/akameco/pixiv-auth-got)

> pixiv auth got


## Install

```
$ npm install --save pixiv-auth-got
```


## Usage

```js
const PixivAuthGot = require('pixiv-auth-got');

const pixivAuthGot = new PixivAuthGot('your usename', 'your password');

pixivAuthGot.got('https://app-api.pixiv.net/v1/illust/ranking', {mode: 'day'}).then(res => {
	console.log(JSON.stringify(res.body, null, 2));
});
```


## API

### PixivAuthGot(username, password)

#### username
Type: `string`

#### password
Type: `string`

### pixivAuthgot.got(endpoint, [options])

Same as [got](https://github.com/sindresorhus/got).

#### endpoint
Type: `string`

pixiv endpoint.

## License

MIT © [akameco](http://akameco.github.io)
