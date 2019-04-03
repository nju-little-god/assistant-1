// pages/participants/participants.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sid: "",
    userInfo: {},
    userListInfo: [{
      icon: '../../dist/images/iconfont-dingdan.png',
      nickname: '参与人1_ID',
      isunread: false,
      partook_time: 2
    }, {
      icon: '../../dist/images/iconfont-card.png',
      nickname: '参与人2_ID',
      isunread: false,
      partook_time: 2
    }, {
      icon: '../../dist/images/iconfont-icontuan.png',
      nickname: '参与人3_ID',
      // 是否有红点
      isunread: false,
      partook_time: 1
    },]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      sid: options.sid
    })
    var that = this
    //调用应用实例的方法获取全局数据
    this.getSchedulePartookList()
    //   app.getUserInfo(function (userInfo) {
    //     //更新数据
    //     that.setData({
    //       userInfo: userInfo
    //     })
    //   })
  },
  getSchedulePartookList: function () {
    var that = this
    wx.request({
      url: app.baseUrl + '/schedule/getSchedulePartookList?sid=' + this.data.sid,
      method: "GET",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "sessionKey": app.globalData.sessionKey
      },
      data: {
      },
      success(res) {
        let dataList = res.data.data;
        dataList.forEach((user) => {
          user[4] = user[4].substring(0, 10); //要截取字段的字符串
        })
        that.setData({
          userListInfo: res.data.data
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