// pages/followpeople/followme/followme.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    userListInfo: [{
      // icon: '../../dist/images/iconfont-dingdan.png',
      nickname: '关注我的人1_ID',
      follow_time:'关注时间',
      isunread: false,
      unreadNum: 2
    }, {
      // icon: '../../dist/images/iconfont-card.png',
      nickname: '关注我的人2_ID',
        follow_time: '关注时间',
      isunread: false,
      unreadNum: 2
    }, {
      // icon: '../../dist/images/iconfont-icontuan.png',
      nickname: '关注我的人3_ID',
        follow_time: '关注时间',
      // 是否有红点
      isunread: false,
      unreadNum: 1
    }, {
      // icon: '../../dist/images/iconfont-shouhuodizhi.png',
        nickname: '关注我的人4_ID',
        follow_time: '关注时间',
    }, {
      // icon: '../../dist/images/iconfont-kefu.png',
        nickname: '关注我的人5_ID',
        follow_time: '关注时间',
    }, {
      // icon: '../../dist/images/iconfont-help.png',
        nickname: '关注我的人6_ID',
        follow_time: '关注时间',
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