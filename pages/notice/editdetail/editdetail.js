// pages/notice/editdetail/editdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isfouce:true,
    title: "公告主题",
    release_time: "发布时间",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod consequat."

  },
   /*
    * 点击切换
    **/ isfouce: function () { this.setData({ isfouce: false }) }, /*
    * 失焦事件
    **/ textarea: function (e) { this.setData({ isfouce: true, content: e.detaul.dataset.value }) } ,


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