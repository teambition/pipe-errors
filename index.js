'use strict'
/*
 * pipe-errors
 * https://github.com/teambition/pipe-errors
 *
 * Copyright (c) 2015 Yan Qing
 * Licensed under the MIT license.
 */

const EventEmitter = require('events').EventEmitter
const slice = Array.prototype.slice

module.exports = function pipeErrors (streams) {
  streams = slice.call(arguments.length > 1 ? arguments : streams)
  if (!streams.length) throw new Error('Stream required')
  for (let i = 0, l = streams.length - 1; i < l; i++) {
    validateEventEmitter(streams[i]).on('error', handleError(streams[i + 1]))
  }
  return validateEventEmitter(streams[streams.length - 1])
}

function validateEventEmitter (stream) {
  if (!(stream instanceof EventEmitter)) throw new Error(String(stream) + ' is not a eventEmitter')
  return stream
}

function handleError (stream) {
  return function (err) {
    stream.emit('error', err)
  }
}
