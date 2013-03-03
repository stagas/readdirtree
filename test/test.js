
/**
 * Test.
 */

var assert = require('assert')

var readdirtree = require('../')

var list

list = readdirtree(__dirname+'/fixtures')
assert(3===list.length)

list = readdirtree(__dirname+'/fixtures', function (el) {
  return 1===el.length
})
assert(2===list.length)
