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
	var filesArr = [];
	arr.forEach(function (item) {
		var stat = fs.statSync(item)
	  if (stat && stat.isFile()) {
	    filesArr.push(item)
	  } else {
	  	filesArr = Underscore.extend(filesArr,Helper.walk(item))
	  }
	})

	var newarr = Underscore.map(filesArr, function (item) {
		var arr = item.split('/')
		var len = arr.length;
		return (arr[len-2] + '/' + arr[len-1])
	})
	runAliSdk(newarr)
}

getAllFilesArr(results)



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
  ali.alisdk(arr)
}

// runAliSdk(results)
