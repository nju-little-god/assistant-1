// pages/notice/releasenotic/releasenotic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "公告标题",
    content: "公告内容",

  },
  SetTitle: function (e) {
    this.setData({
      title: e.detail.value
    })
  },
  SetContent: function (e) {
    this.setData({
      content: e.detail.value
    })
  },

  releaseAnnouncement: function(){
    wx.request({
      url: app.baseUrl + '/schedule/releaseAnnouncement',
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "sessionKey": "登录时获取的sessionKey"
      },
      data: {
        sid: 1,
        title: this.data.title,
        content: this.data.content,
      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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