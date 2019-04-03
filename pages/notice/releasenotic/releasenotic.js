// pages/notice/releasenotic/releasenotic.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recordId: "",
    sid: "",
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

  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    var that = this
    this.setData({
      sid: options.sid
    })
    // this.releaseAnnouncement()

  },


  releaseAnnouncement: function(){
    var that= this
    wx.request({
      url: app.baseUrl + '/schedule/releaseAnnouncement?sid'+ this.data.sid,
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "sessionKey": app.globalData.sessionKey
      },
      data: {
        sid: this.data.sid,
        title: this.data.title,
        content: this.data.content,
      },
      success(res) {
        
        console.log(that.data)
        if (res.data.result == 1) {
          console.log("发布成功")
          wx.showToast({
            title: res.data.message,
            icon: 'success',
            duration: 2000
          })
          wx.navigateBack({
            delta: 1,
          })
        }
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