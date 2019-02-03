// pages/publishdetails/plan/plan.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    target: "",
    meet_place: "",
    recruit_start_time: "",
    recruit_end_time: "",
    execute_time: "",
    end_time: "",
    title: "",
    content:"",
    partookNum: ""
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
createSchedule:function(){
  wx.request({
    url: app.baseUrl +"/schedule/createSchedule",
    method: "POST",
    header: {
      "Content-Type": "application/x-www-form-urlencoded",
      "sessionKey": app.globalData.sessionKey
    },
    data: {
      target:this.data.target,
      meet_place: this.data.meet_place,
      recruit_start_time: this.data.recruit_start_time,
      recruit_end_time: this.data.recruit_end_time,
      execute_time: this.data.execute_time,
      end_time: this.data.end_time,
      title: this.data.title,
      content: this.data.content,
      partookNum: this.data.partookNum
    },
    success(res){
      console.log(res)
      if (res.data.result == 1) {
        console.log("发布成功")
        wx.showToast({
          title: res.data.message,
          icon: 'success',
          duration: 2000
        })
        setTimeout(function () {
          wx.navigateBack({
            delta:2
          })
        }, 2000)
      }
    }
  })
},
setTitle:function(event){
  this.setData({
    title:event.detail.value
  })
},
  setExe_time:function(event){
    this.setData({
      execute_time:event.detail.value
    })
  },
  setTarget:function(event){
    this.setData({
      target:event.detail.value
    })
  },
  setNum:function(event){
    this.setData({
      partookNum:event.detail.value
    })
  },
  setMeet_place:function(event){
    this.setData({
      meet_place:event.detail.value
    })
  },
  setStart_time:function(event){
    this.setData({
      recruit_start_time:event.detail.value
    })
  },
  setReEnd_time:function(event){
    this.setData({
      recruit_end_time:event.detail.value
    })
  },
  setDetails:function(event){
    this.setData({
      content:event.detail.value
    })
  },
  setEnd_time:function(event){
    this.setData({
      end_time:event.detail.value
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