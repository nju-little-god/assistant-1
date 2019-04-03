// pages/editmsg/editmsg.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sexType: ['男', '女'],
    sex: "",
    uid: "",
    nickname: "",
    college: "",
    major: "",
    sex: "",
    index: 0,
    describe: "",
    entrance_time: "",
  },
  backtomsg: function () {
    wx.redirectTo({
      url: '../usercenter/usercenter',
    })

  },
  setIndex: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  setEntrance_time: function (e) {
    this.setData({
      entrance_time: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    var that = this
    that.getMyInfo()
    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function (userInfo) {
    //   //更新数据
    //   that.setData({
    //     userInfo.nickname: userInfo.nickname,

    //   })
    // })
    //初始化的时候要将data里的数据设置好，尤其是uid；然后wxml文件里的内容要和data绑定
    {

    }

  },
  //获取当前用户信息
  getMyInfo: function () {
    //console.log(app.globalData)
    var that = this
    wx.request({
      url: app.baseUrl + '/getMyInfo',
      method: "GET",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "sessionKey": app.globalData.sessionKey
      },
      success(res) {
        console.log(res)
        if (res.data.data.sex == "男") {
          that.setData({
            nickname: res.data.data.nickname,
            uid: res.data.data.uid,
            college: res.data.data.college,
            sexType: ['男', '女'],
            sex: res.data.data.sex,
            index: 0,
            major: res.data.data.major,
            describe: res.data.data.describe,
            entrance_time: res.data.data.entrance_time,
          })
        }
        else {
          that.setData({
            nickname: res.data.data.nickname,
            uid: res.data.data.uid,
            college: res.data.data.college,
            sexType: ['男', '女'],
            sex: res.data.data.sex,
            index: 1,
            major: res.data.data.major,
            describe: res.data.data.describe,
            entrance_time: res.data.data.entrance_time,

          })
        }
      }
    })
  },
  //更新信息
  updateUserInfo: function () {
    console.log(this.data.index)
    console.log(this.data.sexType)
    var that = this
    wx.request({
      url: app.baseUrl + "/user/updateUserInfo",
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "sessionKey": app.globalData.sessionKey
      },
      data: {
        "uid": that.data.uid,
        "sex": that.data.sexType[that.data.index],
        "nickname": that.data.nickname,
        "college": that.data.college,
        "major": that.data.major,
        "describe": that.data.describe,
        "entrance_time": that.data.entrance_time
      },
      success(res) {
        console.log(res)
        if (res.data.result == 1) {
          console.log("修改成功")
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
        wx.navigateBack({
          delta: 1,
        })
      }
    })
  },
  setCollege: function (event) {
    this.setData({ college: event.detail.value })
  },
  setNickname: function (event) {
    this.setData({ nickname: event.detail.value })
  },
  setSex: function (event) {
    this.setData({ sexType: ['男', '女'] })
  },
  setIndex: function (event) {
    this.setData({ index: event.detail.value })
  },
  setMajor: function (event) {
    this.setData({ major: event.detail.value })
  },
  setEntrance_time: function (event) {
    this.setData({ entrance_time: event.detail.value })
  },
  setDescribe: function (event) {
    this.setData({ describe: event.detail.value })
  }
})