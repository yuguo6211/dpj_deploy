#! /usr/bin/env node
'use strict'

var program = require('commander')
var Underscore = require('underscore')
var fs = require('fs')
var ali = require('./alisdk.js')
var Helper = require('./helper.js')


program
  .version(require('../package.json').version)
  .usage('[options] [project nam]')
  .parse(process.argv)

var results = Underscore.isEmpty(program.args) ? [] : program.args[0].split(',')

function getAllFilesArr (arr) {
  var filesArr = []
  var stat = fs.statSync(str)
  if (stat && stat.isDirectory()) {
    results.push(file)
    results = results.concat(walkDirectory(file))
  }
}

console.log(program.args[0])
console.log('==', Helper.walk(program.args[0]))
console.log('==', Helper.walkDirectory(program.args[0], 1))



/**
 * 运行所有的上传文件数组
 * 主函数
 * @param {array} arr 待上传的文件数组
 */
function runAliSdk (arr) {
  if (Underscore.isEmpty(arr)) {
    console.log('没有数据要上传呢')
    return
  }
  ali.alisdk(results)
}

// runAliSdk(results)
