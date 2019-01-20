// pages/publishdetails/plan/plan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  getplantime:function(e){
    this.data.getplantime = e.detail.value;
  },
  getplanplace:function(e){
    this.data.getplanplace=e.detail.value;
  },
  getplandetails:function(e){
    console.log(e.detail.value)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var pages = getCurrentPages() //  获取页面栈   
    console.log(pages)
    var prevPage = pages[pages.length - 2]    // 上一个页面  
    prevPage.setData({
      // 给上一个页面变量赋值   
      isRouteMy: '2'
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
    if (this.data.isRouteMy == '2') {
      wx.switchTab({
        url: '../../pages/publish/publish',
        success: function (e) {
          var page = getCurrentPages().pop();
          if (page == undefined || page == null) return; page.onLoad();
        }
      })

    }

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