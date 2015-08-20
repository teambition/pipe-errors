pipe-errors
====
Handle errors on piping streams and pipe error to the end.

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]

## Install

Install with [npm](https://npmjs.org/package/pipe-errors)

```
npm install pipe-errors
```


## Usage

```js
var pipeErrors = require('pipe-errors')
stream1.pipe(stream2).pipe(stream3)
pipeErrors(stream1, stream2, stream3)
// equal to `pipeErrors([stream1, stream2, stream3])`
```
Composite:
```js
var pipeErrors = require('pipe-errors')
stream1.pipe(stream2)
pipeErrors(stream1, stream2)
//... some other

stream2.pipe(stream3)
pipeErrors(stream2, stream3)
// equal to `pipeErrors(stream1, stream2, stream3)`
```

## API

```js
var pipeErrors = require('pipe-errors')
```

### pipeErrors(stream1, stream2, ..., streamN)
### pipeErrors([stream1, stream2, ..., streamN])
return the last stream(streamN). When one stream emit a error, the error will be piped to next, and next until the last.

## License

MIT © [Teambition](http://teambition.com)

[npm-url]: https://npmjs.org/package/pipe-errors
[npm-image]: http://img.shields.io/npm/v/pipe-errors.svg

[travis-url]: https://travis-ci.org/teambition/pipe-errors
[travis-image]: http://img.shields.io/travis/teambition/pipe-errors.svg
