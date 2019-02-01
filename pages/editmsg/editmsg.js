// pages/editmsg/editmsg.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uid:"1",
    nickname:"william",
    college:"南京大学",
    major:"软件学院",
    describe:"暂无",
    entrence_time:"2018"
  },
  backtomsg:function(){
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
updateUserInfo:function(){
  console.log(this.data.uid)
  wx.request({
    url: app.baseUrl+"/user/updateUserInfo",
    method: "POST",
    header: {
      "Content-Type": "application/x-www-form-urlencoded",
      "sessionKey": app.globalData.sessionKey
    },
    data: {
      "uid": this.data.uid,
      "sex": this.data.sex,
      "nickname": this.data.nickname,
      "college": this.data.college,
      "major":this.data.major,
      "describe": this.data.describe,
      "entrance_time":this.data.entrence_time
    },
    success(res) {
      console.log(res)
    }
  })
},
setCollege:function(event){
  this.setData({college:event.detail.value})
},
setNickname:function(event){
  this.setData({nickname:event.detail.value})
},
  setSex:function(event){
    this.setData({sex:event.detail.value})
  },
  setMajor:function(event){
    this.setData({major:event.detail.value})
  },
  setEntrance_time:function(event){
    this.setData({entrance_time:event.detail.value})
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