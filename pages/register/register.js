// pages/register/register.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickname: "昵称",
    // sex: ['男','女'],
    // index:1,
    sex: ['男', '女'],
    index: 0,
    college: "学校",
    major: "专业",
    entrance_time: "2017-06-01",
    describe: ""
  },
  // setSex:function(e){
  //   this.setData({
  //     index: e.detail.value
  //   })
  // },
  setSex: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  setEntrance_time: function (e) {
    this.setData({
      entrance_time: e.detail.value
    })
  },
  backtomsg: function () {
    wx.redirectTo({
      url: '../usercenter/usercenter',
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    //初始化的时候要将data里的数据设置好，尤其是uid；然后wxml文件里的内容要和data绑定
    {

    }

  },
  register: function () {
    var that = this
    // console.log(this.data.uid)
    wx.login({
      success(res) {
        wx.request({
          url: app.baseUrl + '/register',
          method: "POST",
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          data: {
            userCode: res.code,
            "nickname": that.data.nickname,
            "sex": that.data.sex[that.data.index],
            "college": that.data.college,
            "major": that.data.major,
            "entrance_time": that.data.entrance_time,
            "describe": that.data.describe,
            "sessionKey": that.data.sessionKey
          },
          success(res) {
            console.log(res)
            wx.navigateBack({
              delta: 1,
            })
          }
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
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})