/* eslint-disable no-console */
const rimraf = require('rimraf')
const { readdirSync } = require('fs')
const { resolve: res } = require('path')

module.exports = async function() {
  return new Promise(resolve => {
    const paths = readdirSync(res('./test'), 'utf-8')
    const dottt = paths.filter(path => /^.tt/.test(path))

    for (const path of dottt) {
      rimraf(res(`./test/${path}`), e => e && console.log('rimraf', e))
    }

    resolve()
  })
}
