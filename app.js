//app.js
App({
  baseUrl: 'http://localhost:8080',
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    this.login()
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      //this.login()
    }
  },
  login:function(){
    var that=this
    wx.login({
      success(res) {
        wx.request({
          url:that.baseUrl + '/',
          method: "POST",
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          data: {
            userCode: res.code
          },
          success(res) {
            //console.log(res.data.result)
            if(res.data.result==1){
              that.globalData.sessionKey = res.data.sessionKey
            }
            else if(res.data.result==2){
              that.globalData.sessionKey = res.data.sessionKey
              //实现注册界面
            }else if(res.data.result==-1){
              console.log(res.message)
            }
          }
        })
        wx.getUserInfo({
          success: function (res) {
            that.globalData.userInfo = res.userInfo
            typeof cb == "function" && cb(that.globalData.userInfo)
          }
        })
      }
    })
  },
  globalData: {
    userInfo: null,
    sessionKey: ""
  }
})