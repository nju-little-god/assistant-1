// pages/participants/participants.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    userListInfo: [{
      icon: '../../dist/images/iconfont-dingdan.png',
      text: '参与人1_ID',
      isunread: false,
      unreadNum: 2
    }, {
      icon: '../../dist/images/iconfont-card.png',
      text: '参与人2_ID',
      isunread: false,
      unreadNum: 2
    }, {
      icon: '../../dist/images/iconfont-icontuan.png',
      text: '参与人3_ID',
      // 是否有红点
      isunread: false,
      unreadNum: 1
    }, {
      icon: '../../dist/images/iconfont-shouhuodizhi.png',
      text: '参与人4_ID'
    }, {
      icon: '../../dist/images/iconfont-kefu.png',
      text: '参与人5_ID'
    }, {
      icon: '../../dist/images/iconfont-help.png',
      text: '参与人6_ID'
    }]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
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