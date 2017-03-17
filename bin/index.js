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
  if (Underscore.isEmpty(arr)) {
    console.log('忘了添加要上传的文件呢~(*^﹏^*) ')
    return
  }
  var filesArr = []
  arr.forEach(function (item) {
    try {
      var stat = fs.statSync(item)
      if (stat && stat.isFile()) {
        filesArr.push(item)
      } else {
        filesArr = Underscore.extend(filesArr, Helper.walk(item))
      }
    } catch (err) {
      console.log(item + '文件都不在呢，就不上传了哦~(*^﹏^*) ')
    }
  })
  ali.alisdk(filesArr)
}

getAllFilesArr(results)
