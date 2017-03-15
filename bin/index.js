#! /usr/bin/env node

var program = require('commander')
var ali = require('./alisdk.js')
var Underscore = require('underscore')

program
  .version(require('../package.json').version)
  .usage('[options] [project nam]')
  .parse(process.argv)

var results = Underscore.isEmpty(program.args) ? [] : program.args[0].split(',')

function runAliSdk (arr) {
  if (Underscore.isEmpty(arr)) {
    console.log('没有数据要上传呢')
    return
  }
  ali.alisdk(results)
}

runAliSdk(results)
