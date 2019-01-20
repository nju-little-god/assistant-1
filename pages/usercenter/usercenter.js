//logs.js
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    userInfo: {},
    sex:'男',
    age:'22',
    school:'南京大学',
    major:'软件工程',
    startTime:'2018年'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: ''
    })
  },
  editMsg:function(){
    wx.navigateTo({
      url: '../editmsg/editmsg',
    })

  },  
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})