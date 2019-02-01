// pages/userdetails/traplanbyme/traplanbyme.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    plandata:{},
    planTime:'2019年1月20日',
    planPlace:'南京总统府',
    num:'3',
    gathherPlace:'珠江路地铁站1号口'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    var that = this
    that.getMyOwningScheduleList()
    app.getPlanData(function(planData){
      that.setData({
        planData:planData
      })
    })

  },
  getMyOwningScheduleList:function(){
    wx.request({
      url: "/schedule/getMyOwningScheduleList",
      method: "GET",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "sessionKey": app.globalData.sessionKey
      },
      success(res) {
        console.log(res)
      }
    })

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