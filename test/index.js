'use strict'

const tman = require('tman')
const assert = require('assert')
const pipeErrors = require('../index.js')
const stream = require('stream')
const through = require('through2')

function fakeReadStream (options) {
  const readStream = new stream.Readable(options)
  readStream._read = function () {}
  return readStream
}

tman.suite('pipe-errors', function () {
  tman.it('pipeErrors(stream1, stream2, stream3)', function (done) {
    const stream1 = fakeReadStream()
    const stream2 = through()
    const stream3 = through()
    stream1.pipe(stream2).pipe(stream3)
    pipeErrors(stream1, stream2, stream3)
    stream3.on('error', function (err) {
      assert.strictEqual(err.message, 'test pipe-errors')
      done()
    })
    stream1.emit('error', new Error('test pipe-errors'))
  })

  tman.it('pipeErrors([stream1, stream2, stream3])', function (done) {
    const stream1 = fakeReadStream()
    const stream2 = through()
    const stream3 = through()
    stream1.pipe(stream2).pipe(stream3)
    pipeErrors([stream1, stream2, stream3])
    stream3.on('error', function (err) {
      assert.strictEqual(err.message, 'test pipe-errors')
      done()
    })
    stream1.emit('error', new Error('test pipe-errors'))
  })

  tman.it('pipeErrors composite', function (done) {
    const stream1 = fakeReadStream()
    const stream2 = through()
    const stream3 = through()
    stream1.pipe(stream2).pipe(stream3)
    pipeErrors(stream1, stream2)
    pipeErrors(stream2, stream3)
    stream3.on('error', function (err) {
      assert.strictEqual(err.message, 'test pipe-errors')
      done()
    })
    stream1.emit('error', new Error('test pipe-errors'))
  })
})
