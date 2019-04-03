// pages/thisuser/thisuser.js
var util = require('../../utils/util.js')
const app = getApp()
Page({

  data: {
    uid: "",
    userInfo: {

    },
    IfFollow: "关注用户",
    // uid: "uid",
    nickname: "用户昵称",
    follow_time: "关注时间",
    //未关注是0，已关注是1
    iffollowed: 0
    // userInfo: {


    // },
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: ''
    })
  },

  onLoad: function (options) {
    this.setData({
      uid: options.uid
    })
    var that = this
    that.getMyInfo()
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
    that.isFollowed()
  },
  tofollow: function () {
    this.setData({
      iffollowed: 1
    })
  },

  nofollow: function () {
    this.setData({
      iffollowed: 0
    })
    // this.setData({
    //   IfFollow:"关注用户"
    // })
  },


  //关注用户
  followUser: function () {
    this.setData({
      iffollowed: 1
    })
    wx.request({
      url: app.baseUrl + '/user/followUser',
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "sessionKey": app.globalData.sessionKey
      },
      data: {
        followed_uid: this.data.uid
      },
      success(res) {
        console.log(res)
        if (res.data.result == 1) {
          console.log("关注成功！")
          wx.showToast({
            title: res.data.message,
            icon: 'success',
            duration: 2000
          })
          // setTimeout(function () {
          //   wx.navigateBack({
          //     delta: 2
          //   })
          // }, 2000)
        }
      }
    })
    // this.setData({
    //   IfFollow:"取消关注"
    // })
  },
  //取消关注用户
  disfollowUser: function () {
    this.setData({
      iffollowed: 0
    })
    wx.request({
      url: app.baseUrl + "/user/disfollowUser",
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "sessionKey": app.globalData.sessionKey
      },
      data: {
        followed_uid: this.data.uid
      },
      success(res) {
        console.log(res)
        if (res.data.result == 1) {
          console.log("取消关注成功！")
          wx.showToast({
            title: res.data.message,
            icon: 'success',
            duration: 2000
          })
          setTimeout(function () {
            wx.navigateBack({
              delta: 2
            })
          }, 2000)
        }
      }
    })
    // this.setData({
    //   IfFollow:"关注用户"
    // })
  },

  isFollowed:function(){
    var that = this   
    wx.request({
      url: app.baseUrl + '/user/isFollowed?uid=1',
      method: "GET",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "sessionKey": app.globalData.sessionKey
      },
      data: {
      },
      success(res){
        console.log(res.data)
        if (res.data.data==true)
        that.setData({
          iffollowed: 1
        })
        else
        that.setData({
          iffollowed:0
        })
      }
      
    })
  },

  getMyInfo: function () {
    //console.log(ap)
    var that = this
    wx.request({
      url: app.baseUrl + '/getUser?uid=' + this.data.uid,
      method: "GET",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "sessionKey": app.globalData.sessionKey
      },
      success(res) {
        console.log(res)
        that.setData({
          userInfo: res.data.data
        })
      }
    })
  },



}) 