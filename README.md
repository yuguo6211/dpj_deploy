# yuguo_alisdk
yuguo_alisdk is created to upload files from local project to alicload cdn.

## start
Install dependencies,run: 
```bash
npm install yuguo_alisdk -g --save
```


Then use: 
```bash
ali localfile,localfile,....
```

## set conf

you should create a dir named `conf` on the process path,and then create a file named `bucket.json` in the `conf` dir
the `bucket,json` example:

```bash
{
  "bucketName":"<Your region>",
  "region": "参数是指您申请OSS服务时的区域，例如【oss-cn-hangzhou】",
  "accessKeyId": "<Your AccessKeyId>",
  "accessKeySecret": "<Your AccessKeySecret>"
}
```