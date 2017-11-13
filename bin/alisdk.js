'use strict'

var OSS = require('ali-oss').Wrapper
var Underscore = require('underscore')
var colors = require('colors')
var buctetInfo = require(process.cwd() + '/config/bucket.json')

/**
 * 上传文件到阿里云（SDK）
 * Javascript Nodejs
 * @param {object} obj 客户端基础配置
 * @param {array} arr 待上传文件数组
 */
function uploadFlie (obj, arr) {
  /**
   * 客户端基础配置（OSS服务时的区域region、accessKeyId、accessKeySecret）
   */
  var client = new OSS({
    region: obj.region,
    accessKeyId: obj.accessKeyId,
    accessKeySecret: obj.accessKeySecret
  })

  var startTime = Date.now()
  console.log('开始上传啦~'.green)
  AsynPromise(client, obj, arr).then(function () {
    console.log('文件都上传成功了！棒棒哒~(*^﹏^*) ')
    console.log(('一共耗时：' + endTime(startTime) + '秒').green)
  })
}

/**
 * 异步的promise上传文件
 * 将文件数组用promise串联
 * @param {object} obj 客户端数据
 * @param {array} arr 待传文件数组
 * @return result 返回当前promise对象
 */
function AsynPromise (client, obj, arr) {
  var result = Promise.resolve()
  arr.forEach(function (item) {
    result = result.then(function () {
      return SiglePromise(client, obj, item)
    })
  })
  return result
}


/**
 * 调用单个的promise对象
 * 将数组串联
 * @param {object} obj 客户端数据
 * @param {string} str 待传文件字符串（含路径）
 * @return null
 */
function SiglePromise (client, obj, str) {
  return new Promise(function (resolve, reject) {
    try {
      client.useBucket(obj.bucketName)
      client.put(obj.projectName + '/' + str, str).then(function (data) {
        console.log(str + '  上传成功！')
        resolve()
      })
    } catch (err) {
      console.log(str + '  上传失败了~真讨厌呢！╭( T □ T )╮')
      resolve()
    }
  })
}


/**
 * 利用阿里云skd上传文件到cdn
 * 调度函数
 * @param {array} arr 待上传文件数组
 */
function alisdk (arr) {
  var obj = buctetInfo
  if (Underscore.isEmpty(obj)) {
    console.log('缺少客户端配置数据')
    return
  }
  uploadFlie(obj, arr)
}

/**
 * 计算结束时间
 * 显示上传整个文件耗时
 * @param {time} start 开始时间
 * @returns 时间段
 */
function endTime (start) {
  return (Date.now() - start) / 1000 
}

/**
 * 暴露接口alisdk
 */
module.exports = {
  alisdk: alisdk
}
