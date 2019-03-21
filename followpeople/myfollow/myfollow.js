// pages/followpeople/myfollow/myfollow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    follow_list:[{
      uid: "uid",
      nickname: "用户昵称",
      follow_time: "关注时间",
    },{
        // icon: '../../dist/images/iconfont-dingdan.png',
        nickname: '我关注的人1_ID',
        follow_time: "关注时间",
        isunread: false,
        unreadNum: 2
      }, {
        // icon: '../../dist/images/iconfont-card.png',
        nickname: '我关注的人2_ID',
        follow_time: "关注时间",
        isunread: false,
        unreadNum: 2
      }, {
        // icon: '../../dist/images/iconfont-icontuan.png',
        nickname: '我关注的人3_ID',
        follow_time: "关注时间",
        // 是否有红点
        isunread: false,
        unreadNum: 1
      }, {
        // icon: '../../dist/images/iconfont-shouhuodizhi.png',
        nickname: '我关注的人4_ID',
        follow_time: "关注时间",
      }, {
        // icon: '../../dist/images/iconfont-kefu.png',
        nickname: '我关注的人5_ID',
        follow_time: "关注时间",
      }, {
        // icon: '../../dist/images/iconfont-help.png',
        nickname: '我关注的人6_ID',
        follow_time: "关注时间",
      }
    ],
    userInfo: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    // this.getFollowList()
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })

  },

  getFollowList: function () {
    wx.request({
      url: app.baseUrl + '/user/getFollowList',
      method: "GET",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "sessionKey": "登录时获取的sessionKey"
      },

      data: {
      },
      success(res) {
        that.setData({
          follow_list: res.data.data
        })
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