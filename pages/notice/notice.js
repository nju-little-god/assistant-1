// pages/notice/notice.js
const app=getApp()
Page({
  

  /**
   * 页面的初始数据
   */
  data: {
    sid: "",
    userInfo: {},
    announcementList: [{
      // icon: '../../dist/images/iconfont-dingdan.png',
      recordId:"",
      announcement_title: '公告title1',
      release_time:'发布时间',
      isunread: false,
      unreadNum: 2
    }, {
      // icon: '../../dist/images/iconfont-card.png',
      title: '公告title2',
      release_time: '发布时间',
      isunread: false,
      unreadNum: 2
    }, {
      // icon: '../../dist/images/iconfont-icontuan.png',
      title: '公告title3',
      release_time: '发布时间',
      // 是否有红点
      isunread: false,
      unreadNum: 1
    },]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    this.setData({
      sid: options.sid
    })
    console.log(that.data.sid)
    
    this.getAnnouncementList()
    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function (userInfo) {
    //   //更新数据
    //   that.setData({
    //     userInfo: userInfo
    //   })
    // })
  },

  getAnnouncementList :function(){
    var that = this
    wx.request({
      url: app.baseUrl + '/schedule/getAnnouncementList?sid='+ this.data.sid,
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