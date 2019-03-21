// pages/firstpage/firstpage.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scheduleList:[{
      sid: 1,
      uid: 1,
      nickname: "William",
      title: "计划标题",
      target: "计划目的地",
      execute_time: "出发时间",
      status: "当前状态",
      describe: "简介",
      likeNum: "点赞数量",
      commentNum: "评论数量"
    },
      {
        sid: 1,
        uid: 1,
        nickname: "William",
        title: "计划标题",
        target: "计划目的地",
        execute_time: "出发时间",
        status: "当前状态",
        describe: "简介",
        likeNum: "点赞数量",
        commentNum: "评论数量"
      }],
    
  },

  planDetails: function () {
    wx.navigateTo({
      url: '../details/details',
    })
  },
  getScheduleList:function(){
    var that=this
    //console.log("asdhilwnakd"+app.globalData.sessionKey)
    wx.request({
      url: app.baseUrl+'/schedule/getAllSchedule',
      method:"GET",
      header:{
        "Content-Type": "application/x-www-form-urlencoded",
        //"sessionKey": app.globalData.sessionKey
      },
      data:{
      },
      success(res){
        that.setData({
          scheduleList:res.data.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getScheduleList()
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