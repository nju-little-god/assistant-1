// pages/details/details.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */

  data: {
    biao_src:'../../image/biao.png',
    isTakePart: 0,
    isCollection:0,
    sid: 1,
    schedule:{
      nickname: '路人甲',
      title: '总统府一日游',
      start_time: "发布时间",
      status: "出游状态",
      target: '目的地',
      meet_place: "出发地点",
      recruit_start_time: "报名开始时间",
      recruit_end_time: "报名截止时间",
      execute_time: "集合时间",
      end_time: "结束时间",
      content: "出游计划描述",
      uid: "发起人id",
      partookNum: "参与人数",
      announcementNum: "公告数量"
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      sid:options.sid
    })
    this.getScheduleList()
  },

  getScheduleList: function () {
    var that = this
    wx.request({
      url: app.baseUrl + "/getSchedule?sid=" + this.data.sid,
      method: "GET",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "sessionKey": app.globalData.sessionKey
      },
      data: {
      },
      success(res) {
        console.log(res)
        that.setData({
          schedule: res.data.data
        })
      }
    })
  },
  collectSchedule:function(){
    this.setData({
      isCollection:1
    })
    wx.request({
      url: app.baseUrl + '/schedule/collectSchedule?sid=1',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "sessionKey": "登录时获取的sessionKey"
      },
      data: {
      },
      success(res){
        console.log(res)
        if(res.data.message==1){
          console.log('收藏出游计划成功')
          wx.showToast({
            title: res.data.message,
            icon:'success',
            duration:2000
          })
          setTimeout(function () {
            wx.navigateBack({

            })
          }, 2000)
        }
      }
    })

  },
  discollectSchedule:function(){
    this.setData({
      isCollection:0
    })
    wx.request({
      url: app.baseUrl + '/schedule/discollectSchedule?sid=1',
      method: "GET",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "sessionKey": "登录时获取的sessionKey"
      },
      data: {
      },
      success(res){
        console.log(res)
        if(res.data.message==1){
          console.log("取消收藏计划成功")
          wx.showToast({
            title: res.data.message,
            duration: 2000
          })
          setTimeout(function () {
            wx.navigateBack({

            })
          }, 2000)
        }
      }
    })

  },
  quitSchedule:function(){
    this.setData({
      isTakePart:0
    })
    wx.request({
      url: app.baseUrl + "/schedule/quitSchedule?sid=1",
      method: "",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "sessionKey": "登录时获取的sessionKey"
      },
      data: {
      },
      success(res){
        console.log(res)
        if(res.data.message==1){
          console.log("您已退出")
          wx.showToast({
            title: res.data.message,
            icon:'success',
            duration:2000
          })
          setTimeout(function () {
            wx.navigateBack({

            })
          }, 2000)
        }

      }
    })

  },
  partakeSchedule: function () {
    this.setData({
      isTakePart:1
    })
    wx.request({
      url: app.baseUrl + "/schedule/partakeSchedule?sid=" + this.data.sid,
      method: "GET",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "sessionKey": app.globalData.sessionKey
      },
      data: {
      },
      success(res){
        console.log(res)
        if(res.data.result==1){
          console.log("加入成功")
          wx.showToast({
            title: res.data.message,
            icon: 'success',
            duration: 2000
          })
          setTimeout(function(){
            wx.navigateBack({
              
            })
          },2000)
        }
      }
    })
  },
})


