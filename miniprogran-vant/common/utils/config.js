module.exports = {
  Name:'项目名称',
  Company:'公司名称',
  Version:'版本号',
  Auther:'[Bulu]-[wechar:bulu2012]-[email:sunbin711@126.com]',
  Debug:true,// 是否开启调试输出
  AppId:'',
  PlusKey:[
    {'GD_KEY':''},// 高德地图AK
    {'BD_KEY':''},// 百度地图AK
    {'TX_KEY':''}// 腾讯地图AK
  ],
  /**
   * 请求全局参数
   */
  HttpParams:{
    api:'', // 请求接口域名
    testApi:'',// 请求测试接口域名
    privateKey:'',// 请求加密时用到的加密字符串
  },
  /**
   * 接口地址
   */
  HttpUrls:{ 
    '':''
  },
  /**
   * 本地存储对于的KEY
   */
  StorageKeys:{
    'userToken':'USER-TOKEN'
  }
}