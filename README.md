# yuguo_alisdk
yuguo_alisdk is created to upload files from local project to Ali cloud cdn.
You can directly input folder name or file name, use commas

## start
Install dependencies,run: 
```bash
npm install yuguo_alisdk --save (-g)
```


Then use: 
```bash
alisdk folderName,localFileName,localFileName,....
```

## set conf

you should create a folder named `conf` on the process path,and then create a file named `bucket.json` in the `conf` folder
the `bucket,json` example:

```bash
{
  "bucketName":"<Your region>",
  "region": "参数是指您申请OSS服务时的区域，例如【oss-cn-hangzhou】",
  "accessKeyId": "<Your AccessKeyId>",
  "accessKeySecret": "<Your AccessKeySecret>"
}
```

## example 
```bash
alisdk public/1.gif,upload
```
```bash

开始上传啦~
upload/a.js  上传成功！
upload/test1/test11.js  上传成功！
upload/test1/test12.js  上传成功！
upload/test2/test21.js  上传成功！
upload/test2/test22.js  上传成功！
public/1.gif  上传成功！
文件都上传成功了！棒棒哒~(*^﹏^*)
一共耗时：3.325秒

```
