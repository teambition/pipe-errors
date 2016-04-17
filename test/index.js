'use strict'

var tman = require('tman')
var assert = require('assert')
var pipeErrors = require('../index.js')
var stream = require('stream')
var through = require('through2')

function fakeReadStream (options) {
  var readStream = new stream.Readable(options)
  readStream._read = function () {}
  return readStream
}

tman.suite('pipe-errors', function () {
  tman.it('pipeErrors(stream1, stream2, stream3)', function (done) {
    var stream1 = fakeReadStream()
    var stream2 = through()
    var stream3 = through()
    stream1.pipe(stream2).pipe(stream3)
    pipeErrors(stream1, stream2, stream3)
    stream3.on('error', function (err) {
      assert.strictEqual(err.message, 'test pipe-errors')
      done()
    })
    stream1.emit('error', new Error('test pipe-errors'))
  })

  tman.it('pipeErrors([stream1, stream2, stream3])', function (done) {
    var stream1 = fakeReadStream()
    var stream2 = through()
    var stream3 = through()
    stream1.pipe(stream2).pipe(stream3)
    pipeErrors([stream1, stream2, stream3])
    stream3.on('error', function (err) {
      assert.strictEqual(err.message, 'test pipe-errors')
      done()
    })
    stream1.emit('error', new Error('test pipe-errors'))
  })

  tman.it('pipeErrors composite', function (done) {
    var stream1 = fakeReadStream()
    var stream2 = through()
    var stream3 = through()
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
