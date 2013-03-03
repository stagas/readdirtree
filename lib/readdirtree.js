
/*!
 *
 * readdirtree
 *
 * MIT
 *
 */

/**
 * Module dependencies.
 */

var fs = require('fs')
var path = require('path')

/**
 * Exports.
 */

module.exports = readdirtree

/**
 * Reads a dir tree.
 *
 * @param {String} dirname
 * @param {Function} filter
 * @return {Array} dirs
 */

function readdirtree (dirname, filter, arr) {
  arr = arr || []
  filter = filter || function () { return true }

  fs.readdirSync(dirname)
  .filter(filter)
  .map(function (file) { return path.join(dirname, file) })
  .forEach(function (file) {
    if (fs.statSync(file).isDirectory()) {
      arr.push(file)
      readdirtree(file, filter, arr)
    }
  })

  return arr
}
