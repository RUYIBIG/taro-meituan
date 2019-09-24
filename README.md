# taro-meituan
meituan

#### npm install

#### npm run dev:h5

#### npm run dev:weapp
在微信开发者工具中会报错
解决方法：
1、dist/app.json添加
{
  "pages": [
    "pages/index/index"
  ]
}