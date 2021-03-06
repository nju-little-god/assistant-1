// pages/notice/noticdetail/noticdetail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recordId: "",
    announcementList:{
    announcement_title: "公告主题",
    release_time: "发布时间",
    announcement_content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod consequat."
    }
    

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      recordId: options.recordId
    })
    this.getAnnouncement()

  },
  getAnnouncement: function () {
    var that = this
    wx.request({
      url: app.baseUrl + '/schedule/getAnnouncement?recordId=' + this.data.recordId,
      method: "GET",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "sessionKey": app.globalData.sessionKey
      },
      data: {
      },
      success(res) {
        let dataList = res.data.data;
        dataList.forEach((announcementList) => {
          announcementList.release_time = announcementList.release_time.substring(0, 10); //要截取字段的字符串
        })
        that.setData({
          announcementList: res.data.data
        })
        console.log(that.data)
      
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